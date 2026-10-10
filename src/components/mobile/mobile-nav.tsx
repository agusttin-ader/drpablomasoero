"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: "m-inicio",
    label: "Inicio",
    icon: <path d="M4 11l8-7 8 7v8a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z" />,
  },
  {
    id: "m-especialidad",
    label: "Especialidad",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M15 9l-2 4-4 2 2-4z" />
      </>
    ),
  },
  {
    id: "m-galeria",
    label: "Galería",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M4 16l5-5 4 4 2-2 5 5" />
      </>
    ),
  },
  {
    id: "m-contacto",
    label: "Contacto",
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" />,
  },
] as const;

export function MobileNav() {
  const [active, setActive] = useState<string>(items[0].id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.45;
      let current: string = items[0].id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = items[items.length - 1].id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 1.2, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Navegación"
      className="fixed left-1/2 z-40 w-max"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <ul className="flex items-center gap-1 rounded-full border border-line-strong bg-[#0e0e10]/90 p-1.5 shadow-[0_12px_40px_#00000080] backdrop-blur-xl">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => {
                  const target = document.getElementById(item.id);
                  if (!target) return;
                  e.preventDefault();
                  setActive(item.id);
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.replaceState(null, "", `#${item.id}`);
                }}
                className={`flex size-11 items-center justify-center gap-2 rounded-full transition-colors duration-300 md:size-auto md:h-11 md:px-5 ${
                  isActive ? "bg-ink text-[#101012]" : "text-ink-soft md:hover:text-ink"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-[1.1875rem]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {item.icon}
                </svg>
                <span className="hidden text-[0.875rem] font-medium md:inline">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
