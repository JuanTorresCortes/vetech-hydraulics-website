// src/pages/api/contact.js
// Server-side API route for handling contact form submissions.
// Sends 2 emails using Resend:
//   1) Notification to site owner (you)
//   2) Auto-reply to the customer ("We received your message...")
//
// Notes:
// - This runs only on the server (safe to use API keys).
// - Keep CONTACT_FROM on your verified domain/subdomain for deliverability.

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Minimal HTML escaping (avoid injection in our email body)
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  // Only allow POST from the contact form
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method Not Allowed" });
  }

  try {
    // Extract user data; default to empty strings to avoid undefined
    const { name = "", email = "", phone = "", message = "" } = req.body || {};

    // Basic validation (same constraints you use on the client)
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({
          ok: false,
          message: "Please include name, email, and message.",
        });
    }

    // Load env (configured in .env.local)
    const FROM = process.env.CONTACT_FROM; // e.g. "Vetech Forms <forms@notifications.vetech-hydraulics.com>"
    const TO = process.env.CONTACT_TO; // your inbox
    const KEY = process.env.RESEND_API_KEY;

    if (!KEY)
      return res
        .status(500)
        .json({ ok: false, message: "Server missing RESEND_API_KEY." });
    if (!FROM)
      return res
        .status(500)
        .json({ ok: false, message: "Server missing CONTACT_FROM." });
    if (!TO)
      return res
        .status(500)
        .json({ ok: false, message: "Server missing CONTACT_TO." });

    /* ----------------------- 1) Owner notification email ----------------------- */

    const ownerSubject = "New Contact Form Submission — Vetech Hydraulics";

    // Plain text (helps inbox placement)
    const ownerText = [
      "New Website Contact",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    // HTML body
    const ownerHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px 0;font-weight:700;">New Website Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(
          /\n/g,
          "<br/>"
        )}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p style="color:#666;font-size:12px;">Sent from vetech-hydraulics.com</p>
      </div>
    `;

    // Send to your inbox; set reply_to to the customer's email so "Reply" goes to them
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: FROM, // must be on your verified domain/subdomain
      to: TO, // your real inbox
      reply_to: email, // reply in your client goes to the customer
      subject: ownerSubject,
      text: ownerText,
      html: ownerHtml,
    });

    if (ownerError) {
      // If your own notification fails, stop here and surface error
      console.error("Resend owner notification error:", ownerError);
      return res.status(500).json({
        ok: false,
        message: ownerError?.message || "Email send failed.",
      });
    }

    /* ----------------------- 2) Customer auto-reply email ---------------------- */

    // This is a courtesy confirmation to the customer.
    // NOTE: In Resend sandbox mode you may be restricted to your own email only.
    // Once your domain is verified (you did this already), sending to customers should work.

    const customerSubject = "Thanks — we received your message";
    const customerGreeting = name ? `Hi ${escapeHtml(name)},` : "Hi,";

    const customerTextLines = [
      `${customerGreeting}`,
      "",
      "Thanks for contacting Vetech Hydraulics — we received your message and will get back to you shortly.",
      "",
      "Here’s what we got:",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      "",
      "Message:",
      message,
      "",
      "— Vetech Hydraulics",
      "https://vetech-hydraulics.com",
      "(832) 901-7158",
    ];
    const customerText = customerTextLines.join("\n");

    const customerHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#111">
        <p style="margin:0 0 12px 0;">${customerGreeting}</p>
        <p style="margin:0 0 12px 0;">Thanks for contacting <strong>Vetech Hydraulics</strong> — we received your message and will get back to you shortly.</p>
        <p style="margin:16px 0 6px 0;font-weight:700;">Here’s what we got:</p>
        <ul style="margin:0 0 12px 18px;padding:0;">
          <li><strong>Name:</strong> ${escapeHtml(name)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</li>
        </ul>
        <p style="margin:6px 0;"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;margin:0 0 16px 0;">${escapeHtml(
          message
        )}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p style="margin:0;color:#555;">
          Vetech Hydraulics<br/>
          <a href="https://vetech-hydraulics.com" style="color:#0a66c2;text-decoration:none;">vetech-hydraulics.com</a><br/>
          (832) 901-7158
        </p>
      </div>
    `;

    // Send to the customer; set reply_to to YOUR inbox so their reply comes back to you
    // (You could also omit reply_to here; this just makes "Reply" go to you.)
    const { error: customerError } = await resend.emails.send({
      from: FROM, // same verified sender
      to: email, // customer’s email
      reply_to: TO, // replies go back to your business inbox
      subject: customerSubject,
      text: customerText,
      html: customerHtml,
    });

    // If auto-reply fails for some reason, we won't fail the whole request.
    // We already sent your notification; we just log this for investigation.
    if (customerError) {
      console.warn(
        "Resend customer auto-reply error (non-fatal):",
        customerError
      );
    }

    // Success response to the client (your contact page)
    return res.status(200).json({
      ok: true,
      id: ownerData?.id || null,
      autoReply: customerError ? "failed" : "sent",
    });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return res.status(500).json({ ok: false, message: "Server error." });
  }
}
