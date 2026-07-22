"use client";

import { useRef } from "react";

export default function MagneticButton({ children }: any) {
  const ref = useRef<HTMLButtonElement>(null);

  const move = (e: any) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (ref.current) {
      ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className="px-6 py-3 bg-blue-500 rounded-full transition"
    >
      {children}
    </button>
  );
}