"use client";

import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { HeroCtas, HeroLogoVisual, heroSectionClass } from "./shared";

export function HeroVariant9({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "bg-canvas" : heroSectionClass}>
      <div
        className={
          preview
            ? "grid min-h-[500px] md:grid-cols-2"
            : "mx-auto grid min-h-[calc(92svh-4.5rem)] max-w-[88rem] md:grid-cols-2"
        }
      >
        <div className="relative flex items-center justify-center border-b border-line bg-canvas-soft/50 md:border-b-0 md:border-r md:border-line">
          <FadeIn>
            <HeroLogoVisual className="relative flex py-12 [&_img]:h-[min(50vh,520px)]" />
          </FadeIn>
        </div>
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
          <FadeIn>
            <p className="label">Doctoralia · MP {doctoralia.license}</p>
            <h1 className="mt-5 font-serif text-[clamp(2.25rem,4vw,3.5rem)] text-ink">{doctoralia.rinoplastyService}</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              {instagram.degree}. {instagram.locations}.
            </p>
            <p className="mt-4 text-ink-soft">{doctoralia.clinic}</p>
          </FadeIn>
          <FadeIn delay={0.14} className="mt-10">
            <HeroCtas />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
