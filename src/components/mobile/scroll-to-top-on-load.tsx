"use client";

import { useLayoutEffect } from "react";

/** Al refrescar, siempre inicio: sin hash y scroll arriba. */
export function ScrollToTopOnLoad() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const path = `${window.location.pathname}${window.location.search}`;
    if (window.location.hash) history.replaceState(null, "", path);
    window.scrollTo(0, 0);
  }, []);

  return null;
}
