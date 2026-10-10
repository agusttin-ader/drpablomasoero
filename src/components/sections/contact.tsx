"use client";

import Link from "next/link";
import { Fade } from "@/components/motion/fade";
import { SectionLabel } from "@/components/ui/section-label";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacto" className="border-t border-line">
      <div className="section-pad mx-auto max-w-[88rem]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Fade>
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="mt-4 font-serif text-[clamp(2rem,7vw,4rem)] leading-[1.05] text-ink sm:mt-5">
              Empecemos
              <span className="block text-ink-soft">por una conversación</span>
            </h2>
            <ul className="mt-8 space-y-3 text-[15px] text-muted sm:mt-12 sm:space-y-4">
              <li className="text-ink-soft">{site.address}</li>
              <li>
                <a href={site.phoneHref} className="inline-flex min-h-11 items-center text-[16px] hover:text-turquoise">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center break-all hover:text-turquoise">
                  {site.email}
                </a>
              </li>
            </ul>
            <Link
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center text-[15px] text-turquoise sm:mt-10"
            >
              WhatsApp directo →
            </Link>
          </Fade>

          <Fade delay={0.08}>
            <form
              className="rounded-2xl border border-line bg-canvas-elevated/60 p-5 backdrop-blur-md sm:p-7 md:p-9"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <Field label="Nombre" className="sm:col-span-2" />
                <Field label="Email" type="email" />
                <Field label="Teléfono" type="tel" />
              </div>
              <div className="mt-4 sm:mt-5">
                <label className="label text-muted">Motivo</label>
                <select className="mt-2 w-full min-h-12 rounded-xl border border-line bg-canvas-soft px-4 py-3 text-base text-ink outline-none focus:border-turquoise">
                  <option>Primera consulta</option>
                  <option>Rinoplastia primaria</option>
                  <option>Rinoplastia secundaria</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="mt-4 sm:mt-5">
                <label className="label text-muted">Mensaje</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-canvas-soft px-4 py-3 text-base text-ink outline-none focus:border-turquoise"
                  placeholder="Contanos qué te gustaría mejorar"
                />
              </div>
              <button
                type="submit"
                className="mt-6 min-h-12 w-full rounded-full border border-turquoise/50 py-3.5 text-[15px] font-medium tracking-wide text-turquoise transition active:bg-turquoise active:text-[#101012] sm:mt-8"
              >
                Enviar mensaje
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", className = "" }: { label: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="label text-muted">{label}</label>
      <input
        type={type}
        className="mt-2 w-full min-h-12 rounded-xl border border-line bg-canvas-soft px-4 py-3 text-base text-ink outline-none transition focus:border-turquoise"
      />
    </div>
  );
}
