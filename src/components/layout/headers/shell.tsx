"use client";

import { cn } from "@/lib/utils";

type HeaderShellProps = {
  visible: boolean;
  className?: string;
  children: React.ReactNode;
  preview?: boolean;
};

export function HeaderShell({ visible, className, children, preview }: HeaderShellProps) {
  return (
    <header
      className={cn(
        preview ? "relative w-full" : "fixed inset-x-0 top-0 z-50",
        !preview && "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        !preview && !visible && "-translate-y-full",
        className,
      )}
    >
      {children}
    </header>
  );
}

export function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={open}
      className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
      onClick={onClick}
    >
      <span className={cn("h-px w-5 bg-ink transition", open && "translate-y-2 rotate-45")} />
      <span className={cn("h-px w-5 bg-ink transition", open && "opacity-0")} />
      <span className={cn("h-px w-5 bg-ink transition", open && "-translate-y-2 -rotate-45")} />
    </button>
  );
}
