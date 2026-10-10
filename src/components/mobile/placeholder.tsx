type PlaceholderProps = {
  className?: string;
  label?: string;
};

export function Placeholder({ className = "", label = "Imagen" }: PlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-canvas-elevated bg-[radial-gradient(ellipse_at_30%_20%,#ffffff10,transparent_60%),linear-gradient(160deg,#2a2a30,#1c1c20)] ${className}`}
    >
      <span className="absolute inset-0 flex items-center justify-center text-[0.625rem] uppercase tracking-[0.3em] text-muted/70">
        {label}
      </span>
    </div>
  );
}
