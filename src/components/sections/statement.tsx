import { Fade } from "@/components/motion/fade";
import { instagram } from "@/lib/doctor-content";

export function Statement() {
  return (
    <section className="border-y border-line">
      <div className="section-pad mx-auto max-w-4xl text-center">
        <Fade>
          <p className="font-serif text-[clamp(1.25rem,5vw,2.75rem)] leading-[1.35] text-ink-soft">
            {instagram.specialty} · {instagram.degree}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed tracking-wide text-muted sm:mt-4 sm:text-[15px]">
            {instagram.locations} · {instagram.hashtags}
          </p>
        </Fade>
      </div>
    </section>
  );
}
