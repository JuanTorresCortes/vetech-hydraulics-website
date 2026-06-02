// HeroSection — full-bleed hero for VeTech Hydraulics homepage
// Matches hero_example.webp: top badge, headline, trust badges, CTAs, info card, industry bottom bar.
import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

// ── Animation variants ───────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1 },
};

const slideRight = {
  hidden: { opacity: 0, x: 48 },
  show:   { opacity: 1, x: 0 },
};

// Stagger container: children animate in sequence
const stagger = (delay = 0, staggerChildren = 0.12) => ({
  hidden: {},
  show: {
    transition: { delayChildren: delay, staggerChildren },
  },
});

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

// Labels are baked into the image assets — alt text only
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
      {/* Background image — slow Ken Burns zoom */}
      <div className={styles.bgWrap}>
        <motion.div
          className={styles.bgMotion}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <Image
            src={coverImage}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.bgImg}
          />
        </motion.div>
        <div className={styles.overlay} />
      </div>

      {/* ── Main content ────────────────────────────────────── */}
      <div className={styles.inner}>

        {/* Top location badge — fades in first */}
        <motion.div
          className={styles.locationBadge}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={styles.locationDot} />
          BASED IN MAGNOLIA, TX&nbsp;•&nbsp;SERVING MONTGOMERY COUNTY &amp; NORTH HOUSTON
        </motion.div>

        {/* Content grid: left copy + right info card */}
        <div className={styles.contentGrid}>

          {/* Left column — children stagger up */}
          <motion.div
            className={styles.leftCol}
            variants={stagger(0.2)}
            initial="hidden"
            animate="show"
          >
            {/* Each headline line slides up independently */}
            <h1 className={styles.headline}>
              <motion.span
                className={styles.headlineWhite}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                HYDRAULIC CYLINDER
              </motion.span>
              <motion.span
                className={styles.headlineRed}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                REPAIR THAT KEEPS
              </motion.span>
              <motion.span
                className={styles.headlineRed}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                YOU MOVING
              </motion.span>
            </h1>

            <motion.p
              className={styles.subheadline}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              Veteran-owned hydraulic cylinder repair for heavy equipment, fleets,
              and commercial operations across Montgomery, Conroe, Magnolia,
              The Woodlands, and North Houston.
            </motion.p>

            {/* Trust badges — stagger each badge in */}
            <motion.div
              className={styles.trustRow}
              variants={stagger(0, 0.08)}
            >
              {TRUST_BADGES.map(({ img, alt }, i) => (
                <React.Fragment key={alt}>
                  <motion.div
                    className={styles.trustBadge}
                    variants={fadeUp}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <Image src={img} alt={alt} width={160} height={56} className={styles.trustIcon} />
                  </motion.div>
                  {i < TRUST_BADGES.length - 1 && <div className={styles.trustDivider} />}
                </React.Fragment>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className={styles.ctaRow}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <a href="tel:+18326260514" className={styles.btnCall}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                CALL NOW
              </a>
              <NextLink href="/services" className={styles.btnServices}>
                VIEW SERVICES &gt;
              </NextLink>
            </motion.div>

            <motion.div
              className={styles.hours}
              variants={fadeIn}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Mon–Fri: 8AM–5PM
            </motion.div>
          </motion.div>

          {/* Right column — info card slides in from the right */}
          <div className={styles.rightCol}>
            <motion.div
              className={styles.infoCard}
              variants={slideRight}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={styles.cardLabel}>INDUSTRIAL REPAIR STANDARD</span>
              <h2 className={styles.cardHeading}>
                Built for uptime,<br />tested before return.
              </h2>
              <p className={styles.cardBody}>
                Cylinder repacking, component repair, and service support for
                equipment that cannot sit idle.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Bottom industry bar — fades up after everything else */}
      <motion.div
        className={styles.industryBar}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      >
        <div className={styles.industryBarInner}>
          <div className={styles.industryTagline}>
            TRUSTED BY INDUSTRIES THAT<br />
            CAN&apos;T AFFORD <span className={styles.industryTaglineRed}>DOWNTIME</span>
          </div>

          <div className={styles.industrySep} />

          {/* Industry icons — label text is baked into each image */}
          <motion.div
            className={styles.industryList}
            variants={stagger(1.1, 0.07)}
            initial="hidden"
            animate="show"
          >
            {INDUSTRIES.map(({ img, alt }) => (
              <motion.div
                key={alt}
                className={styles.industryItem}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image src={img} alt={alt} width={130} height={90} className={styles.industryIcon} />
              </motion.div>
            ))}
          </motion.div>

          <div className={styles.industrySep} />

          <div className={styles.industrySlogan}>
            BUILT STRONG.<br />
            BUILT PRECISE.<br />
            <span className={styles.industrySloganRed}>BUILT TO PERFORM.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
