"use client";

import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { HeroCtas, HeroPortrait, heroSectionClass } from "./shared";

export function HeroVariant4({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "overflow-hidden bg-canvas" : heroSectionClass}>
      <div
        className={
          preview
            ? "grid gap-8 px-5 py-12 md:grid-cols-2 md:px-10"
            : "mx-auto grid min-h-[calc(92svh-4.5rem)] max-w-[88rem] gap-10 px-5 py-10 md:grid-cols-2 md:gap-12 md:px-10 md:py-16"
        }
      >
        <div className="flex flex-col justify-center">
          <FadeIn>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-ink">{instagram.displayName}</h1>
          </FadeIn>
          <FadeIn delay={0.06}>
            <ul className="mt-10 space-y-4 border-t border-line pt-8 text-[15px]">
              <li className="flex justify-between gap-4 border-b border-line pb-4">
                <span className="text-muted">Especialidad</span>
                <span className="text-right text-ink-soft">{instagram.specialty}</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-line pb-4">
                <span className="text-muted">Doctoralia</span>
                <span className="text-right text-ink-soft">{doctoralia.specialty} · MP {doctoralia.license}</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-line pb-4">
                <span className="text-muted">Consultorio</span>
                <span className="text-right text-ink-soft">{doctoralia.addressLine}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted">Ciudades</span>
                <span className="text-right text-ink-soft">{instagram.locations}</span>
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-10">
            <HeroCtas primary={`${instagram.turnos} · ${instagram.phoneDisplay}`} />
          </FadeIn>
        </div>
        <FadeIn delay={0.08} className="relative min-h-[360px] overflow-hidden rounded-2xl">
          <HeroPortrait alt={doctoralia.name} className="absolute inset-0" priority={!preview} />
        </FadeIn>
      </div>
    </section>
  );
}
