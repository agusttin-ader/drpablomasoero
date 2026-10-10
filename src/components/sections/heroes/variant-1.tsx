"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { HeroCtas, HeroLogoVisual, heroSectionClass } from "./shared";

export function HeroVariant1({ preview }: { preview?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", preview ? "0%" : "8%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, preview ? 1 : 0.94]);

  return (
    <section ref={ref} className={preview ? "relative overflow-hidden bg-canvas" : heroSectionClass}>
      <div
        className="pointer-events-none absolute inset-0 hidden items-center justify-center opacity-[0.06] md:flex"
        aria-hidden
      >
        <HeroLogoVisual className="relative flex scale-125 items-center justify-center" priority={false} />
      </div>

      <div
        className={
          preview
            ? "relative flex flex-col gap-6"
            : "relative mx-auto flex max-w-[88rem] flex-col gap-5 px-4 pb-6 pt-3 sm:gap-8 sm:px-5 sm:pb-8 sm:pt-4 md:min-h-[calc(92svh-4.5rem)] md:gap-6 md:pb-12 md:pt-8 lg:flex-row lg:items-center lg:px-10"
        }
      >
        <div className="flex flex-1 flex-col justify-center lg:max-w-xl lg:pb-12 lg:pt-8">
          <FadeIn>
            <p className="label max-w-[18rem] leading-relaxed sm:max-w-none">
              <span className="block sm:inline">{instagram.specialty}</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline">{instagram.degree}</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-3 font-hero text-[clamp(2rem,8vw,4rem)] leading-[1.02] text-ink sm:mt-4">
              {doctoralia.name}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-2 text-[15px] text-ink-soft sm:mt-3 sm:text-lg">{doctoralia.specialty} · MP {doctoralia.license}</p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="mt-4 text-[14px] leading-relaxed text-muted sm:mt-5 sm:text-[16px]">
              {instagram.locations}
            </p>
            <p className="mt-1 text-[13px] text-muted/80">{instagram.hashtags}</p>
          </FadeIn>
          <FadeIn delay={0.18} className="mt-6 sm:mt-8">
            <HeroCtas primary={instagram.turnos} />
          </FadeIn>
        </div>

        <motion.div
          style={reduce ? undefined : { y: logoY, scale: logoScale }}
          className="flex flex-none items-center justify-center py-1 sm:py-2 lg:flex-1 lg:justify-end"
        >
          <FadeIn delay={0.06} className="w-full max-w-[720px] lg:max-w-none">
            <HeroLogoVisual className="relative flex items-center justify-center lg:justify-end" />
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}
