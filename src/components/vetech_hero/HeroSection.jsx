// HeroSection — full-bleed hero for VeTech Hydraulics homepage
// Animations are CSS-only so server and client render identical HTML.
// framer-motion is intentionally removed from this component to prevent
// React 19 hydration mismatches caused by inline style differences.
import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import styles from "./HeroSection.module.css";
import { BUSINESS } from "../../config/business";

import coverImage from "./cover-image.webp";
import veteranOwned from "./veteran-owned.webp";
import precisionDriven from "./precision-driven.webp";
import builtForUptime from "./built-for-uptime.webp";
import testedBeforeReturn from "./tested-before-return.webp";
import construction from "./construction.webp";
import agriculture from "./agriculture.webp";
import oilGas from "./oil-gas.webp";
import fleetMunicipal from "./fleet-municipal.webp";
import manufacturing from "./manufacturing.webp";

const TRUST_BADGES = [
  { img: veteranOwned,       alt: "Veteran-owned hydraulic cylinder repair shop — Vetech Hydraulics" },
  { img: precisionDriven,    alt: "Precision-driven hydraulic cylinder repair and rebuild service" },
  { img: builtForUptime,     alt: "Hydraulic repair built for equipment uptime and reliability" },
  { img: testedBeforeReturn, alt: "Every cylinder pressure tested before return to service" },
];

const INDUSTRIES = [
  { img: construction,   alt: "Hydraulic cylinder repair for construction equipment — excavators, loaders, skid steers" },
  { img: agriculture,    alt: "Hydraulic cylinder repair for agriculture equipment — tractors and farm machinery" },
  { img: oilGas,         alt: "Hydraulic cylinder repair for oil and gas field equipment" },
  { img: fleetMunicipal, alt: "Hydraulic cylinder repair for fleet and municipal vehicles — trash trucks and utility fleets" },
  { img: manufacturing,  alt: "Hydraulic cylinder repair for manufacturing and industrial equipment" },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* Background image — Ken Burns zoom via CSS */}
      <div className={styles.bgWrap}>
        <div className={styles.bgMotion}>
          <Image
            src={coverImage}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.bgImg}
          />
        </div>
        <div className={styles.overlay} />
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className={styles.inner}>

        <div className={`${styles.locationBadge} ${styles.animFadeIn}`}>
          <span className={styles.locationDot} />
          BASED IN MAGNOLIA, TX&nbsp;•&nbsp;SERVING MONTGOMERY COUNTY &amp; NORTH HOUSTON
        </div>

        <div className={styles.contentGrid}>

          {/* Left column */}
          <div className={styles.leftCol}>

            <h1 className={styles.headline}>
              <span className={`${styles.headlineWhite} ${styles.animFadeUp1}`}>
                HYDRAULIC CYLINDER
              </span>
              <span className={`${styles.headlineRed} ${styles.animFadeUp2}`}>
                REPAIR THAT KEEPS
              </span>
              <span className={`${styles.headlineRed} ${styles.animFadeUp3}`}>
                YOU MOVING
              </span>
            </h1>

            <p className={`${styles.subheadline} ${styles.animFadeUp4}`}>
              Veteran-owned hydraulic cylinder repair for heavy equipment, fleets,
              and commercial operations across Montgomery, Conroe, Magnolia,
              The Woodlands, and North Houston.
            </p>

            <div className={`${styles.trustRow} ${styles.animFadeUp5}`}>
              {TRUST_BADGES.map(({ img, alt }, i) => (
                <React.Fragment key={alt}>
                  <div className={styles.trustBadge}>
                    <Image src={img} alt={alt} width={160} height={56} className={styles.trustIcon} />
                  </div>
                  {i < TRUST_BADGES.length - 1 && <div className={styles.trustDivider} />}
                </React.Fragment>
              ))}
            </div>

            <div className={`${styles.ctaRow} ${styles.animFadeUp6}`}>
              <a href="tel:+19363441436" className={styles.btnCall}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                CALL NOW
              </a>
              <NextLink href="/services" className={styles.btnServices}>
                VIEW SERVICES &gt;
              </NextLink>
            </div>

            <div className={`${styles.hours} ${styles.animFadeIn}`} style={{ animationDelay: "0.8s" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Mon–Fri: 8AM–5PM
            </div>

            {/* Social media icons */}
            <div className={`${styles.socialRow} ${styles.animFadeIn}`} style={{ animationDelay: "1s" }}>
              <span className={styles.socialLabel}>Follow</span>

              <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer"
                aria-label="Visit us on Facebook"
                className={`${styles.socialIcon} ${styles["socialIcon--fb"]}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>

              <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer"
                aria-label="Visit us on Instagram"
                className={`${styles.socialIcon} ${styles["socialIcon--ig"]}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              <a href={BUSINESS.linkedinUrl} target="_blank" rel="noopener noreferrer"
                aria-label="Visit us on LinkedIn"
                className={`${styles.socialIcon} ${styles["socialIcon--li"]}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Right column — info card */}
          <div className={styles.rightCol}>
            <div className={`${styles.infoCard} ${styles.animSlideRight}`}>
              <span className={styles.cardLabel}>INDUSTRIAL REPAIR STANDARD</span>
              <h2 className={styles.cardHeading}>
                Built for uptime,<br />tested before return.
              </h2>
              <p className={styles.cardBody}>
                Cylinder repacking, component repair, and service support for
                equipment that cannot sit idle.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom industry bar ───────────────────────────────── */}
      <div className={`${styles.industryBar} ${styles.animFadeUp6}`}>
        <div className={styles.industryBarInner}>
          <div className={styles.industryTagline}>
            TRUSTED BY INDUSTRIES THAT<br />
            CAN&apos;T AFFORD <span className={styles.industryTaglineRed}>DOWNTIME</span>
          </div>
          <div className={styles.industrySep} />
          <div className={styles.industryList}>
            {INDUSTRIES.map(({ img, alt }) => (
              <div key={alt} className={styles.industryItem}>
                <Image src={img} alt={alt} width={130} height={90} className={styles.industryIcon} />
              </div>
            ))}
          </div>
          <div className={styles.industrySep} />
          <div className={styles.industrySlogan}>
            BUILT STRONG.<br />
            BUILT PRECISE.<br />
            <span className={styles.industrySloganRed}>BUILT TO PERFORM.</span>
          </div>
        </div>
      </div>

    </section>
  );
}
