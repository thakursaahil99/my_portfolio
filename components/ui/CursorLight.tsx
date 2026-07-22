"use client";

import { useEffect, useRef } from "react";

export default function CursorLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;

      ref.current.style.transform =
        `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"
    />
  );
}