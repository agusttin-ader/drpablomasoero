"use client";

import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { HeroCtas, HeroPortrait, heroSectionClass } from "./shared";

export function HeroVariant2({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "relative min-h-[520px] overflow-hidden bg-canvas" : heroSectionClass}>
      <div className={preview ? "relative min-h-[520px]" : "relative mx-auto min-h-[calc(92svh-4.5rem)] max-w-[88rem] px-5 md:px-10"}>
        <HeroPortrait
          alt={doctoralia.name}
          className={preview ? "absolute inset-0" : "absolute inset-x-5 top-4 bottom-8 rounded-[1.5rem] md:inset-x-10"}
        />
        <div className="relative z-10 flex min-h-[inherit] flex-col justify-end pb-10 pt-32 md:pb-16">
          <FadeIn>
            <p className="label">{doctoralia.clinic}</p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1 className="mt-4 max-w-2xl font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-tight text-ink">
              {doctoralia.rinoplastyService}
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-4 text-[16px] text-ink-soft">{doctoralia.addressLine}</p>
          </FadeIn>
          <FadeIn delay={0.16} className="mt-8">
            <HeroCtas primary={`${instagram.turnos} ${instagram.phoneDisplay}`} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
