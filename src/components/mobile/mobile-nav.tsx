"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
    id: "m-sobre",
    label: "Sobre mí",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
      </>
    ),
  },
  {
    id: "m-turnos",
    label: "Turnos",
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" />,
  },
] as const;

const premiumEase = [0.16, 1, 0.3, 1] as const;

export function MobileNav() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>(items[0].id);
  const [pillInstant, setPillInstant] = useState(false);
  const [pill, setPill] = useState({ x: 0, width: 0, ready: false });
  const navLock = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const scheduleUnlockRef = useRef<() => void>(() => {});
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef(new Map<string, HTMLLIElement>());

  const syncPill = useCallback(() => {
    const list = listRef.current;
    const item = itemRefs.current.get(active);
    if (!list || !item) return;
    const listRect = list.getBoundingClientRect();
    const rect = item.getBoundingClientRect();
    setPill({ x: rect.left - listRect.left, width: rect.width, ready: true });
  }, [active]);

  useEffect(() => {
    syncPill();
    const id = requestAnimationFrame(() => syncPill());
    return () => cancelAnimationFrame(id);
  }, [active, syncPill]);

  useEffect(() => {
    const onResize = () => syncPill();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [syncPill]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (navLock.current) return;
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
    const scheduleUnlock = () => {
      clearTimeout(unlockTimer.current);
      unlockTimer.current = setTimeout(() => {
        navLock.current = false;
        update();
      }, 180);
    };
    scheduleUnlockRef.current = scheduleUnlock;
    const onScroll = () => {
      if (navLock.current) scheduleUnlock();
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(unlockTimer.current);
    };
  }, []);

  const pillTransition =
    reduce || pillInstant
      ? { duration: 0 }
      : {
          duration: 1.45,
          ease: premiumEase,
        };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 1.2, delay: 1.7, ease: premiumEase }}
      aria-label="Navegación"
      className="fixed left-1/2 z-40 w-max"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <ul
        ref={listRef}
        className="relative flex items-center gap-1 rounded-full border border-line-strong bg-[#0e0e10]/90 p-1.5 shadow-[0_12px_40px_#00000080] backdrop-blur-xl"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-full bg-ink shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_40px_rgba(255,255,255,0.14)]"
          initial={false}
          animate={{
            x: pill.x,
            width: pill.width,
            opacity: pill.ready ? 1 : 0,
            scale: pill.ready ? 1 : 0.96,
          }}
          transition={pillTransition}
          style={{ left: 0, willChange: "transform, width" }}
        />

        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li
              key={item.id}
              ref={(el) => {
                if (el) itemRefs.current.set(item.id, el);
                else itemRefs.current.delete(item.id);
              }}
              className="relative"
            >
              <a
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => {
                  const target = document.getElementById(item.id);
                  if (!target) return;
                  e.preventDefault();
                  const scrollY = window.scrollY;
                  navLock.current = true;
                  setPillInstant(true);
                  setActive(item.id);
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.replaceState(null, "", `#${item.id}`);
                  requestAnimationFrame(() => setPillInstant(false));
                  requestAnimationFrame(() => {
                    if (Math.abs(window.scrollY - scrollY) < 2) scheduleUnlockRef.current();
                  });
                }}
                className="relative z-10 flex size-11 items-center justify-center gap-2 rounded-full md:size-auto md:h-11 md:px-5"
              >
                <motion.span
                  className="flex items-center justify-center gap-2"
                  animate={{
                    color: isActive ? "#101012" : "var(--color-ink-soft)",
                    scale: isActive ? 1 : 0.94,
                    opacity: isActive ? 1 : 0.72,
                  }}
                  transition={
                    reduce || pillInstant
                      ? { duration: 0 }
                      : { duration: 1.1, ease: premiumEase }
                  }
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
                </motion.span>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
