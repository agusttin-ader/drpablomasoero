"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const viewport = { once: true, amount: 0.2 } as const;

export function MaskText({
  children,
  as = "h2",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  as?: "h2" | "p";
  className?: string;
  delay?: number;
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={`overflow-hidden pb-[0.08em] ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <motion.span
        className="block"
        variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 1.2, delay, ease } } }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}

export function ImageReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(18% 18% 18% 18% round 2rem)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0rem)", opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 1.4, delay, ease }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.8, delay, ease }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.94, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

export function Stagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={container} initial="hidden" whileInView="show" viewport={viewport}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

export function CollageMotion({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const rotate = useTransform(smooth, [0, 1], [38, 52]);
  const scale = useTransform(smooth, [0, 0.5, 1], [1.12, 1, 0.96]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div
        className={className}
        style={reduce ? { rotate: 45, x: "-50%", y: "-50%" } : { rotate, scale, x: "-50%", y: "-50%" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function StackLayer({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 1.2, delay, ease }}
    />
  );
}
