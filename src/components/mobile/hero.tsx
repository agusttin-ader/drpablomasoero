"use client";

import Image from "next/image";
import { MotionConfig, motion, useScroll, useTransform } from "framer-motion";
import { instagram } from "@/lib/doctor-content";
import { images, site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

const wrap = "mx-auto w-full max-w-[80rem] px-4 md:px-10";

function Rise({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <MotionConfig reducedMotion="user">
      <section id="m-inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
        >
          <div className="relative h-full w-full bg-canvas">
            <picture className="absolute inset-0 block h-full w-full">
              <source type="image/webp" srcSet={images.heroCircuit.srcSet} sizes="100vw" />
              <img
                src={images.heroCircuit.fallback}
                alt=""
                width={1920}
                height={1280}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover object-[center_38%] opacity-[0.55] saturate-[0.85] md:object-[center_42%] md:opacity-50"
                sizes="100vw"
              />
            </picture>
          </div>
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_38%,transparent_0%,color-mix(in_srgb,var(--color-canvas)_55%,transparent)_55%,var(--color-canvas)_100%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/25 via-transparent via-45% to-canvas" />

        <div className="relative flex flex-1 items-center justify-center px-10 pt-[env(safe-area-inset-top)] md:pt-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.82, rotate: -8, filter: "blur(24px)" }}
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.3, ease }}
          >
            <motion.div
              aria-hidden
              className="absolute inset-[-25%] rounded-full bg-turquoise/25 blur-3xl"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.9, 0.35], scale: [0.6, 1.1, 1] }}
              transition={{ duration: 2.6, delay: 0.5, ease }}
            />
            <Image
              src={images.logoMark}
              alt={site.nameFull}
              width={480}
              height={480}
              priority
              className="relative h-auto w-[62vw] max-w-[16rem] md:w-[min(22rem,36svh)] md:max-w-none lg:w-[min(26rem,40svh)]"
            />
          </motion.div>
        </div>

        <div
          className={`${wrap} relative pb-32 text-center md:pb-36 md:text-left lg:flex lg:items-end lg:justify-between lg:gap-12`}
        >
          <div>
            <h1 className="overflow-hidden pb-1 font-hero text-[2.6rem] leading-[1.02] text-ink md:text-[clamp(3.5rem,7vw,6.5rem)]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, delay: 0.9, ease }}
              >
                {site.name}
              </motion.span>
            </h1>
            <motion.p
              className="mt-3 text-[0.6875rem] font-medium uppercase text-muted md:text-[0.75rem]"
              initial={{ opacity: 0, letterSpacing: "1.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ duration: 1.6, delay: 1.15, ease }}
            >
              Rinoplastia
            </motion.p>
          </div>
          <div className="lg:max-w-[22rem] lg:shrink-0 lg:text-right">
            <Rise delay={1.35}>
              <p className="mx-auto mt-5 max-w-[17rem] text-[0.875rem] leading-relaxed text-ink-soft md:mx-0 md:max-w-md md:text-[1rem] lg:mt-0 lg:max-w-none">
                {instagram.specialty} · {instagram.degree}. {instagram.locations}.
              </p>
            </Rise>
          </div>
        </div>

        <motion.div
          aria-hidden
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-32 right-5 flex flex-col items-center gap-3 md:hidden"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="flex flex-col items-center gap-3">
            <span className="text-[0.5625rem] uppercase tracking-[0.4em] text-muted [writing-mode:vertical-rl]">Scroll</span>
            <span className="relative h-14 w-px overflow-hidden bg-line-strong">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-turquoise"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
