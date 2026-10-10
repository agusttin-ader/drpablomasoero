"use client";

import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { HeroCtas, heroSectionClass } from "./shared";

export function HeroVariant3({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "bg-canvas px-5 py-16 md:px-10" : heroSectionClass}>
      <div className={preview ? "max-w-3xl" : "mx-auto flex min-h-[calc(92svh-4.5rem)] max-w-3xl flex-col justify-center px-5 md:px-10"}>
        <FadeIn>
          <p className="label">Doctoralia · Opinión de paciente</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <blockquote className="mt-8 font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.35] text-ink">
            “{doctoralia.reviewQuote}”
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.14}>
          <p className="mt-10 text-[15px] text-muted">
            {doctoralia.name} — {doctoralia.specialty}. {instagram.specialty}. {instagram.degree}.
          </p>
        </FadeIn>
        <FadeIn delay={0.18} className="mt-10">
          <HeroCtas />
        </FadeIn>
      </div>
    </section>
  );
}
