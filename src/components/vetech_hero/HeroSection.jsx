// HeroSection — full-bleed hero for VeTech Hydraulics homepage
// Animations are CSS-only so server and client render identical HTML.
// framer-motion is intentionally removed from this component to prevent
// React 19 hydration mismatches caused by inline style differences.
import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import styles from "./HeroSection.module.css";

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
  { img: veteranOwned,       alt: "Veteran Owned" },
  { img: precisionDriven,    alt: "Precision Driven" },
  { img: builtForUptime,     alt: "Built for Uptime" },
  { img: testedBeforeReturn, alt: "Tested Before Return" },
];

const INDUSTRIES = [
  { img: construction,   alt: "Construction" },
  { img: agriculture,    alt: "Agriculture" },
  { img: oilGas,         alt: "Oil & Gas" },
  { img: fleetMunicipal, alt: "Fleet & Municipal" },
  { img: manufacturing,  alt: "Manufacturing" },
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
