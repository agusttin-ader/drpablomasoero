"use client";

import { useEffect, useRef, useState } from "react";

export function useHideOnScroll(lockVisible = false) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (lockVisible) {
        setVisible(true);
        lastY.current = y;
        return;
      }

      if (y < 64) {
        setVisible(true);
      } else if (y > lastY.current + 6) {
        setVisible(false);
      } else if (y < lastY.current - 6) {
        setVisible(true);
      }

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lockVisible]);

  return visible;
}
