"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

const motivos = ["Primera consulta", "Rinoplastia", "Rinoseptoplastia", "Otro"] as const;

export type Motivo = (typeof motivos)[number];

const ease = [0.16, 1, 0.3, 1] as const;

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
  const reduce = useReducedMotion();
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

  const panelMotion = reduce
    ? { initial: false, animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -10, scale: 0.98, filter: "blur(8px)" },
        animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        exit: { opacity: 0, y: -6, scale: 0.99, filter: "blur(4px)" },
      };

  const panelTransition = reduce ? { duration: 0 } : { duration: 0.65, ease };

  return (
    <div ref={rootRef} className="mt-6">
      <span id={`${listId}-label`} className="label">Motivo</span>
      <input type="hidden" name={name} value={value} />

      <div className="relative mt-2">
        <motion.button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${listId}-label`}
          onClick={() => setOpen((o) => !o)}
          className={
            isMobile
              ? `group flex w-full min-h-11 items-center justify-between gap-3 border-b py-2.5 text-left text-base text-ink outline-none ${
                  open ? "border-logo" : "border-line"
                }`
              : `group flex w-full min-h-12 items-center justify-between gap-3 rounded-2xl border bg-canvas px-4 py-3 text-left text-base text-ink outline-none ${
                  open
                    ? "border-logo shadow-[0_0_0_2px_color-mix(in_srgb,var(--logo)_35%,transparent)]"
                    : "border-line"
                }`
          }
        >
          <motion.span
            key={value}
            className="truncate"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {value}
          </motion.span>
          <motion.span
            animate={
              reduce
                ? { rotate: open ? 180 : 0 }
                : {
                    rotate: open ? 180 : 0,
                    scale: open ? 1.05 : 1,
                    backgroundColor: open ? "color-mix(in srgb, var(--logo) 18%, transparent)" : undefined,
                  }
            }
            transition={{ duration: 0.55, ease }}
            className={`flex shrink-0 items-center justify-center rounded-full text-logo ${
              isMobile
                ? `size-8 border border-line-strong bg-canvas-elevated/90 ${open ? "border-logo/40" : ""}`
                : `size-9 bg-logo/12`
            }`}
          >
            <Chevron className="size-3.5 md:size-4" />
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.ul
              id={listId}
              role="listbox"
              aria-labelledby={`${listId}-label`}
              {...panelMotion}
              transition={panelTransition}
              className={`absolute z-50 max-h-56 w-full overflow-auto rounded-2xl border border-line-strong bg-canvas-elevated p-1.5 shadow-[0_16px_48px_#000000a0] backdrop-blur-xl top-full mt-2`}
            >
              {motivos.map((m, i) => {
                const selected = value === m;
                return (
                  <motion.li
                    key={m}
                    role="option"
                    aria-selected={selected}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.05, ease }}
                  >
                    <motion.button
                      type="button"
                      onClick={() => pick(m)}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-[0.9375rem] transition-colors duration-500 ${
                        selected ? "bg-logo/15 text-logo" : "text-ink-soft hover:bg-white/5 hover:text-ink"
                      }`}
                    >
                      {m}
                      <AnimatePresence mode="wait">
                        {selected && (
                          <motion.span
                            key="check"
                            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.35, ease }}
                            className="text-logo"
                            aria-hidden
                          >
                            ✓
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
