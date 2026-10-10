"use client";

import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { HeroCtas, HeroLogoVisual, heroSectionClass } from "./shared";

export function HeroVariant7({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "relative overflow-hidden bg-canvas" : `${heroSectionClass} overflow-hidden`}>
      <div className={preview ? "grid min-h-[480px] lg:grid-cols-2" : "relative mx-auto grid min-h-[calc(92svh-4.5rem)] max-w-[88rem] lg:grid-cols-12"}>
        <div className="flex flex-col justify-center px-5 py-12 lg:col-span-5 lg:px-10">
          <FadeIn>
            <p className="label">{instagram.hashtags}</p>
            <h1 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-tight text-ink">{doctoralia.name}</h1>
            <p className="mt-4 text-ink-soft">{doctoralia.specialty} · {doctoralia.clinic}</p>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-10">
            <HeroCtas />
          </FadeIn>
        </div>
        <div className="relative lg:col-span-7 lg:min-h-[inherit]">
          <FadeIn delay={0.06} className="absolute -right-[18%] top-1/2 w-[130%] max-w-none -translate-y-1/2 lg:-right-[8%]">
            <HeroLogoVisual className="relative flex justify-end [&_img]:h-[min(70vh,780px)] [&_img]:max-w-none [&_img]:w-auto" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
