"use client";

import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { HeroCtas, HeroLogoVisual, heroSectionClass } from "./shared";

export function HeroVariant6({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "relative bg-canvas px-5 py-16" : heroSectionClass}>
      <div
        className={
          preview
            ? "flex flex-col items-center text-center"
            : "mx-auto flex min-h-[calc(92svh-4.5rem)] max-w-4xl flex-col items-center justify-center px-5 pb-16 pt-8 text-center md:px-8"
        }
      >
        <FadeIn className="w-full">
          <HeroLogoVisual className="relative flex items-center justify-center [&_img]:h-[min(45vh,480px)] md:[&_img]:h-[min(58vh,620px)]" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mt-10 font-serif text-[clamp(2rem,4vw,3rem)] text-ink">{doctoralia.name}</h1>
          <p className="mt-3 text-muted">{instagram.specialty} · {instagram.degree}</p>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-ink-soft">{instagram.locations}</p>
        </FadeIn>
        <FadeIn delay={0.16} className="mt-10 flex justify-center">
          <HeroCtas primary={instagram.turnos} />
        </FadeIn>
      </div>
    </section>
  );
}
