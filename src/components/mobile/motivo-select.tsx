"use client";

import { useEffect, useId, useRef, useState } from "react";

const motivos = ["Primera consulta", "Rinoplastia", "Rinoseptoplastia", "Otro"] as const;

export type Motivo = (typeof motivos)[number];

function Chevron({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type MotivoSelectProps = {
  name: string;
  variant: "mobile" | "desktop";
  defaultValue?: Motivo;
};

export function MotivoSelect({ name, variant, defaultValue = motivos[0] }: MotivoSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Motivo>(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const isMobile = variant === "mobile";

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = (m: Motivo) => {
    setValue(m);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="mt-6">
      <span id={`${listId}-label`} className="label">Motivo</span>
      <input type="hidden" name={name} value={value} />

      <div className={isMobile ? "relative mt-2" : "relative mt-2"}>
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${listId}-label`}
          onClick={() => setOpen((o) => !o)}
          className={
            isMobile
              ? `group flex w-full min-h-11 items-center justify-between gap-3 border-b py-2.5 text-left text-base text-ink outline-none transition-colors duration-300 ${
                  open ? "border-logo" : "border-line"
                }`
              : `group flex w-full min-h-12 items-center justify-between gap-3 rounded-2xl border bg-canvas px-4 py-3 text-left text-base text-ink outline-none transition-all duration-300 ${
                  open ? "border-logo shadow-[0_0_0_2px_color-mix(in_srgb,var(--logo)_35%,transparent)]" : "border-line"
                }`
          }
        >
          <span className="truncate">{value}</span>
          <span
            className={`flex shrink-0 items-center justify-center rounded-full text-logo transition duration-300 ${
              isMobile
                ? `size-8 border border-line-strong bg-canvas-elevated/90 ${open ? "border-logo/40 bg-logo/15" : ""}`
                : `size-9 bg-logo/12 ${open ? "bg-logo/20" : ""}`
            }`}
          >
            <Chevron className={`size-3.5 transition-transform duration-300 md:size-4 ${open ? "rotate-180" : ""}`} />
          </span>
        </button>

        {open && (
          <ul
            id={listId}
            role="listbox"
            aria-labelledby={`${listId}-label`}
            className={`absolute z-50 max-h-56 w-full overflow-auto rounded-2xl border border-line-strong bg-canvas-elevated p-1.5 shadow-[0_16px_48px_#000000a0] backdrop-blur-xl ${
              isMobile ? "top-full mt-2" : "top-full mt-2"
            }`}
          >
            {motivos.map((m) => {
              const selected = value === m;
              return (
                <li key={m} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => pick(m)}
                    className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-[0.9375rem] transition-colors ${
                      selected ? "bg-logo/15 text-logo" : "text-ink-soft hover:bg-white/5 hover:text-ink"
                    }`}
                  >
                    {m}
                    {selected && (
                      <span className="text-logo" aria-hidden>✓</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
