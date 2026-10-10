"use client";

import { Fade } from "@/components/motion/fade";
import { SectionLabel } from "@/components/ui/section-label";
import { procedures } from "@/lib/site";

export function Expertise() {
  return (
    <section id="especialidad" className="border-t border-line bg-canvas-soft/40">
      <div className="section-pad mx-auto max-w-[88rem]">
        <Fade className="max-w-2xl">
          <SectionLabel>Especialidad</SectionLabel>
          <h2 className="mt-4 font-serif text-[clamp(1.75rem,6vw,3.25rem)] leading-tight text-ink sm:mt-5">Procedimientos</h2>
        </Fade>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3">
          {procedures.map((item, i) => (
            <Fade key={item.title} delay={i * 0.06}>
              <article
                className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-canvas-elevated/50 p-5 transition duration-500 active:border-turquoise/25 sm:p-7 md:hover:border-turquoise/35 md:hover:bg-canvas-elevated"
              >
                <div>
                  <span className="font-serif text-3xl text-turquoise/30 sm:text-4xl md:group-hover:text-turquoise/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-ink sm:mt-6 sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted sm:mt-4 sm:text-[15px]">{item.text}</p>
                </div>
                <span className="mt-6 text-[12px] uppercase tracking-[0.2em] text-turquoise-deep sm:mt-8 md:opacity-0 md:transition md:group-hover:opacity-100">
                  Consultar →
                </span>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
