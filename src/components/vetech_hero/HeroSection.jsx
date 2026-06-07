// HeroSection — full-bleed hero for VeTech Hydraulics homepage
// Structure is rendered server-side for SEO. Framer-motion animations
// are applied only after the component mounts on the client so the
// server HTML and initial client HTML are identical (no hydration mismatch).
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
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

// Animation variants — only applied after mount
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
const stagger = (delay = 0, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren } },
});

export default function HeroSection() {
  // On the server and on first client render, mounted = false.
  // Both sides produce plain divs with no motion props → identical HTML → no mismatch.
  // After hydration succeeds, mounted flips to true and animations begin.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Before mount: plain elements. After mount: motion elements with animations.
  const Wrap      = mounted ? motion.div  : "div";
  const WrapSpan  = mounted ? motion.span : "span";
  const WrapP     = mounted ? motion.p    : "p";

  return (
    <section className={styles.hero}>

      {/* Background image — Ken Burns zoom (CSS fallback until mounted) */}
      <div className={styles.bgWrap}>
        <div
          className={styles.bgMotion}
          {...(mounted ? {
            as: motion.div,
            initial: { scale: 1.08 },
            animate: { scale: 1 },
            transition: { duration: 8, ease: "easeOut" },
          } : {})}
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
        </div>
        <div className={styles.overlay} />
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className={styles.inner}>

        {/* Location badge */}
        <Wrap
          className={styles.locationBadge}
          {...(mounted ? {
            variants: fadeIn,
            initial: "hidden",
            animate: "show",
            transition: { duration: 0.6, delay: 0.1 },
          } : {})}
        >
          <span className={styles.locationDot} />
          BASED IN MAGNOLIA, TX&nbsp;•&nbsp;SERVING MONTGOMERY COUNTY &amp; NORTH HOUSTON
        </Wrap>

        {/* Content grid */}
        <div className={styles.contentGrid}>

          {/* Left column */}
          <Wrap
            className={styles.leftCol}
            {...(mounted ? {
              variants: stagger(0.2),
              initial: "hidden",
              animate: "show",
            } : {})}
          >
            <h1 className={styles.headline}>
              <WrapSpan
                className={styles.headlineWhite}
                {...(mounted ? {
                  variants: fadeUp,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                } : {})}
              >
                HYDRAULIC CYLINDER
              </WrapSpan>
              <WrapSpan
                className={styles.headlineRed}
                {...(mounted ? {
                  variants: fadeUp,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                } : {})}
              >
                REPAIR THAT KEEPS
              </WrapSpan>
              <WrapSpan
                className={styles.headlineRed}
                {...(mounted ? {
                  variants: fadeUp,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                } : {})}
              >
                YOU MOVING
              </WrapSpan>
            </h1>

            <WrapP
              className={styles.subheadline}
              {...(mounted ? {
                variants: fadeUp,
                transition: { duration: 0.55, ease: "easeOut" },
              } : {})}
            >
              Veteran-owned hydraulic cylinder repair for heavy equipment, fleets,
              and commercial operations across Montgomery, Conroe, Magnolia,
              The Woodlands, and North Houston.
            </WrapP>

            {/* Trust badges */}
            <Wrap
              className={styles.trustRow}
              {...(mounted ? { variants: stagger(0, 0.08) } : {})}
            >
              {TRUST_BADGES.map(({ img, alt }, i) => (
                <React.Fragment key={alt}>
                  <Wrap
                    className={styles.trustBadge}
                    {...(mounted ? {
                      variants: fadeUp,
                      transition: { duration: 0.45, ease: "easeOut" },
                    } : {})}
                  >
                    <Image src={img} alt={alt} width={160} height={56} className={styles.trustIcon} />
                  </Wrap>
                  {i < TRUST_BADGES.length - 1 && <div className={styles.trustDivider} />}
                </React.Fragment>
              ))}
            </Wrap>

            {/* CTA buttons */}
            <Wrap
              className={styles.ctaRow}
              {...(mounted ? {
                variants: fadeUp,
                transition: { duration: 0.5, ease: "easeOut" },
              } : {})}
            >
              <a href="tel:+19362496042" className={styles.btnCall}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                CALL NOW
              </a>
              <NextLink href="/services" className={styles.btnServices}>
                VIEW SERVICES &gt;
              </NextLink>
            </Wrap>

            <Wrap
              className={styles.hours}
              {...(mounted ? {
                variants: fadeIn,
                transition: { duration: 0.5, ease: "easeOut" },
              } : {})}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Mon–Fri: 8AM–5PM
            </Wrap>
          </Wrap>

          {/* Right column — info card */}
          <div className={styles.rightCol}>
            <Wrap
              className={styles.infoCard}
              {...(mounted ? {
                variants: slideRight,
                initial: "hidden",
                animate: "show",
                transition: { duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
              } : {})}
            >
              <span className={styles.cardLabel}>INDUSTRIAL REPAIR STANDARD</span>
              <h2 className={styles.cardHeading}>
                Built for uptime,<br />tested before return.
              </h2>
              <p className={styles.cardBody}>
                Cylinder repacking, component repair, and service support for
                equipment that cannot sit idle.
              </p>
            </Wrap>
          </div>

        </div>
      </div>

      {/* ── Bottom industry bar ───────────────────────────────── */}
      <Wrap
        className={styles.industryBar}
        {...(mounted ? {
          variants: fadeUp,
          initial: "hidden",
          animate: "show",
          transition: { duration: 0.6, delay: 1.0, ease: "easeOut" },
        } : {})}
      >
        <div className={styles.industryBarInner}>
          <div className={styles.industryTagline}>
            TRUSTED BY INDUSTRIES THAT<br />
            CAN&apos;T AFFORD <span className={styles.industryTaglineRed}>DOWNTIME</span>
          </div>
          <div className={styles.industrySep} />
          <Wrap
            className={styles.industryList}
            {...(mounted ? {
              variants: stagger(1.1, 0.07),
              initial: "hidden",
              animate: "show",
            } : {})}
          >
            {INDUSTRIES.map(({ img, alt }) => (
              <Wrap
                key={alt}
                className={styles.industryItem}
                {...(mounted ? {
                  variants: fadeUp,
                  transition: { duration: 0.4, ease: "easeOut" },
                } : {})}
              >
                <Image src={img} alt={alt} width={130} height={90} className={styles.industryIcon} />
              </Wrap>
            ))}
          </Wrap>
          <div className={styles.industrySep} />
          <div className={styles.industrySlogan}>
            BUILT STRONG.<br />
            BUILT PRECISE.<br />
            <span className={styles.industrySloganRed}>BUILT TO PERFORM.</span>
          </div>
        </div>
      </Wrap>

    </section>
  );
}
