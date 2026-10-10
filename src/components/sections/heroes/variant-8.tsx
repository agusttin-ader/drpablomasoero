"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade";
import { doctoralia, instagram } from "@/lib/doctor-content";
import { images } from "@/lib/site";
import { HeroCtas, heroSectionClass } from "./shared";

export function HeroVariant8({ preview }: { preview?: boolean }) {
  return (
    <section className={preview ? "bg-canvas px-5 py-16" : heroSectionClass}>
      <div
        className={
          preview
            ? "mx-auto max-w-xl"
            : "mx-auto flex min-h-[calc(92svh-4.5rem)] max-w-2xl items-center px-5 py-12 md:px-8"
        }
      >
        <FadeIn className="w-full rounded-3xl border border-line bg-canvas-elevated/70 p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-12">
          <div className="flex justify-center">
            <Image src={images.logo} alt="" width={280} height={280} className="h-40 w-40 object-contain md:h-52 md:w-52" priority />
          </div>
          <h1 className="mt-8 text-center font-serif text-3xl text-ink">{doctoralia.name}</h1>
          <p className="mt-3 text-center text-sm text-muted">{instagram.specialty}</p>
          <p className="mt-6 text-center text-[15px] leading-relaxed text-ink-soft">{doctoralia.addressLine}</p>
          <div className="mt-10 flex justify-center">
            <HeroCtas primary={instagram.turnos} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
