// src/pages/api/contact.js
// Server-side contact route for form submissions from src/pages/contact.js.
// Flow: accept POST only, validate required fields, send owner notification, optionally send customer auto-reply.
// Required environment variables: RESEND_API_KEY, CONTACT_FROM, and CONTACT_TO.
// Keep CONTACT_FROM on a Resend-verified domain/subdomain for deliverability.

import { Resend } from "resend";
import { BUSINESS } from "../../config/business";

const resend = new Resend(process.env.RESEND_API_KEY);

// Minimal HTML escaping protects email templates from rendering customer input as markup.
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  // Only the contact form should hit this endpoint; other methods return a clear API error.
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method Not Allowed" });
  }

  try {
    // Normalize incoming fields before validation so template strings never receive undefined values.
    const { name = "", email = "", phone = "", message = "" } = req.body || {};

    // Server-side validation mirrors the form but remains authoritative for direct API calls.
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({
          ok: false,
          message: "Please include name, email, and message.",
        });
    }

    // Load email configuration at request time so missing deployment variables produce actionable errors.
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

    // Plain text improves deliverability and keeps the owner notification readable in any mail client.
    const ownerText = [
      "New Website Contact",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    // HTML version is escaped field-by-field because it includes customer-supplied content.
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
        <p style="color:#666;font-size:12px;">Sent from ${BUSINESS.siteUrl}</p>
      </div>
    `;

    // Owner notification is the critical email; reply_to lets the business respond directly to the customer.
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: FROM, // must be on your verified domain/subdomain
      to: TO, // your real inbox
      reply_to: email, // reply in your client goes to the customer
      subject: ownerSubject,
      text: ownerText,
      html: ownerHtml,
    });

    if (ownerError) {
      // If the owner never receives the lead, treat the submission as failed so the customer can retry.
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
      BUSINESS.siteUrl,
      BUSINESS.phoneDisplay,
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
          <a href="${BUSINESS.siteUrl}" style="color:#0a66c2;text-decoration:none;">${BUSINESS.siteUrl.replace("https://", "")}</a><br/>
          ${BUSINESS.phoneDisplay}
        </p>
      </div>
    `;

    // Customer auto-reply confirms receipt; reply_to routes any follow-up back to the business inbox.
    const { error: customerError } = await resend.emails.send({
      from: FROM, // same verified sender
      to: email, // customer’s email
      reply_to: TO, // replies go back to your business inbox
      subject: customerSubject,
      text: customerText,
      html: customerHtml,
    });

    // Auto-reply failure is non-fatal because the owner notification already captured the lead.
    if (customerError) {
      console.warn(
        "Resend customer auto-reply error (non-fatal):",
        customerError
      );
    }

    // Return the owner email id for diagnostics without exposing provider internals to the UI.
    return res.status(200).json({
      ok: true,
      id: ownerData?.id || null,
      autoReply: customerError ? "failed" : "sent",
    });
  } catch (err) {
    // Unexpected errors are logged server-side while the client gets a generic failure message.
    console.error("Contact API unexpected error:", err);
    return res.status(500).json({ ok: false, message: "Server error." });
  }
}
