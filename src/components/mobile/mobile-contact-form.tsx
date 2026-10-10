"use client";

import { site } from "@/lib/site";
import { MotivoSelect } from "./motivo-select";

function buildWhatsAppMessage(data: FormData) {
  return [
    `Hola, soy ${data.get("nombre")}.`,
    `Motivo: ${data.get("motivo")}.`,
    data.get("mensaje"),
    `Tel: ${data.get("telefono")}`,
  ]
    .filter(Boolean)
    .join("\n");
}

const inputMobile =
  "mt-2 w-full min-h-11 border-0 border-b border-line bg-transparent px-0 py-2 text-base text-ink outline-none transition placeholder:text-muted/50 focus:border-logo";

const inputDesktop =
  "mt-2 w-full min-h-12 rounded-2xl border border-line bg-canvas px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/60 focus:border-logo";

export function MobileContactForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`,
      "_blank",
      "noopener",
    );
  };

  return (
    <>
      <form className="md:hidden" onSubmit={onSubmit}>
        <h2 className="font-hero text-[2.25rem] leading-[1.05] text-ink">Turnos.</h2>
        <p className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.55em] text-muted">Consulta</p>

        <MotivoSelect name="motivo" variant="mobile" />

        <div className="mt-8 space-y-5">
          <div>
            <label htmlFor="m-nombre" className="label">Nombre</label>
            <input id="m-nombre" name="nombre" required autoComplete="name" className={inputMobile} />
          </div>
          <div>
            <label htmlFor="m-telefono" className="label">Teléfono</label>
            <input id="m-telefono" name="telefono" type="tel" required autoComplete="tel" className={inputMobile} />
          </div>
          <div>
            <label htmlFor="m-mensaje" className="label">Mensaje</label>
            <textarea
              id="m-mensaje"
              name="mensaje"
              rows={3}
              placeholder="Opcional"
              className={`${inputMobile} resize-none`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-logo text-[0.9375rem] font-medium text-[#101012] transition-transform active:scale-[0.97]"
        >
          Coordinar por WhatsApp
        </button>
      </form>

      <form
        className="hidden rounded-[2rem] border border-line bg-canvas-soft p-7 md:block md:rounded-[2.5rem] md:p-9"
        onSubmit={onSubmit}
      >
        <h2 className="font-hero text-[2.5rem] leading-[1.05] text-ink">Turnos.</h2>
        <p className="mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.55em] text-muted">Consulta</p>

        <MotivoSelect name="motivo" variant="desktop" />

        <div className="mt-6 grid grid-cols-2 gap-5">
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="d-nombre" className="label">Nombre</label>
            <input id="d-nombre" name="nombre" required autoComplete="name" className={inputDesktop} />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="d-telefono" className="label">Teléfono</label>
            <input id="d-telefono" name="telefono" type="tel" required autoComplete="tel" className={inputDesktop} />
          </div>
          <div className="col-span-2">
            <label htmlFor="d-mensaje" className="label">Mensaje</label>
            <textarea
              id="d-mensaje"
              name="mensaje"
              rows={4}
              placeholder="Contanos qué te gustaría mejorar"
              className={`${inputDesktop} resize-none`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-logo text-[0.9375rem] font-medium text-[#101012] transition-transform hover:scale-[1.02]"
        >
          Enviar por WhatsApp
        </button>
      </form>
    </>
  );
}
