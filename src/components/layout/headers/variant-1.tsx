"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useHideOnScroll } from "@/hooks/use-hide-on-scroll";
import { images, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { HeaderShell, MenuButton } from "./shell";

export function HeaderVariant1({ preview }: { preview?: boolean }) {
  const [open, setOpen] = useState(false);
  const visible = useHideOnScroll(open && !preview);

  useEffect(() => {
    if (preview) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, preview]);

  return (
    <HeaderShell
      preview={preview}
      visible={preview ? true : visible}
      className="border-b border-line bg-canvas/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[88rem] items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:gap-6 sm:px-5 md:px-10">
        <Link href="#" className="touch-target -ml-2 shrink-0" onClick={() => setOpen(false)}>
          <Image src={images.logo} alt="Masoero" width={40} height={40} className="h-9 w-9 object-contain" priority={!preview} />
        </Link>

        <nav className="hidden flex-1 justify-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[13px] text-muted transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="#contacto"
            className="inline-flex min-h-10 items-center rounded-full bg-turquoise px-4 py-2 text-[12px] font-medium text-[#101012] sm:px-5 lg:inline-flex"
          >
            Consulta
          </Link>
          <div className="lg:hidden">
            <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </div>
      </div>
      <MobileDropdown open={open} onClose={() => setOpen(false)} className="lg:hidden" />
    </HeaderShell>
  );
}

export function MobileDropdown({
  open,
  onClose,
  className,
}: {
  open: boolean;
  onClose: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden border-t border-line bg-canvas-elevated transition-[max-height,opacity] duration-300",
        open ? "max-h-[min(80vh,480px)] opacity-100" : "max-h-0 opacity-0",
        className,
      )}
    >
      <nav className="flex flex-col gap-1 px-3 py-3 sm:px-5 sm:py-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="flex min-h-12 items-center rounded-xl px-3 text-[16px] text-ink active:bg-canvas-soft"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
