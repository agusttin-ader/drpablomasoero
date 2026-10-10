"use client";

import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { HeroCtas, heroSectionClass } from "./shared";

export function HeroVariant5({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "bg-canvas px-5 py-16 md:px-10" : heroSectionClass}>
      <div
        className={
          preview
            ? "max-w-[88rem]"
            : "mx-auto flex min-h-[calc(92svh-4.5rem)] max-w-[88rem] flex-col justify-center px-5 md:px-10"
        }
      >
        <FadeIn>
          <p className="text-[clamp(3.5rem,12vw,9rem)] font-serif leading-[0.85] text-turquoise/90">
            RINOPLASTIA
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h1 className="mt-2 font-serif text-[clamp(2rem,5vw,3.5rem)] text-ink">{doctoralia.name}</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
            {instagram.degree}. {instagram.locations}. {instagram.hashtags}
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-4">
          <p className="text-[15px] text-muted">{doctoralia.clinic} — {doctoralia.addressLine}</p>
        </FadeIn>
        <FadeIn delay={0.14} className="mt-10">
          <HeroCtas primary={instagram.turnos} />
        </FadeIn>
      </div>
    </section>
  );
}
