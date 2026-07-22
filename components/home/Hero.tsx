"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";

const TITLE = "Sahil Thakur";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 🎯 GSAP CINEMATIC INTRO
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title span", {
        opacity: 0,
        y: 140,
        rotateX: -120,
        z: -200,
        transformPerspective: 1000,
        stagger: 0.04,
        duration: 1.2,
        ease: "expo.out",
      })
        .from(
          ".hero-sub",
          { opacity: 0, y: 40, duration: 1, ease: "expo.out" },
          "-=0.6"
        )
        .from(
          ".hero-meta",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.7,
            stagger: 0.15,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          ".hero-social",
          { opacity: 0, y: 20, stagger: 0.1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 🌌 OPTIMIZED PARALLAX BACKGROUND ONLY
  useEffect(() => {
    const layers = containerRef.current?.querySelectorAll<HTMLElement>(
      ".parallax-layer"
    );
    if (!layers || layers.length === 0) return;

    let mouseX = 0;
    let mouseY = 0;
    let rafId: number | null = null;

    const applyTransform = () => {
      layers.forEach((el, i) => {
        const speed = (i + 1) * 6;
        el.style.transform = `translate3d(${mouseX * speed}px, ${
          mouseY * speed
        }px, 0)`;
      });
      rafId = null;
    };

    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 30;

      // Only schedule a frame if one isn't already pending —
      // avoids the previous version's infinite rAF loop running
      // continuously even when the mouse is idle.
      if (rafId === null) {
        rafId = requestAnimationFrame(applyTransform);
      }
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Avoid re-splitting the string on every render
  const titleChars = useMemo(() => TITLE.split(""), []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* 🔳 GRID / GRADIENT BACKGROUND (STATIC) */}
      <div className="pointer-events-none absolute inset-0 opacity-50 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.8),rgba(15,23,42,1))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent,_rgba(15,23,42,0.9))]" />
      </div>

      {/* 🌌 BACKGROUND GLOW (PARALLAX LAYERS) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="parallax-layer absolute w-[600px] h-[600px] bg-blue-500/25 blur-[160px] rounded-full"
          style={{ willChange: "transform", top: "10%", left: "10%" }}
        />
        <div
          className="parallax-layer absolute w-[420px] h-[420px] bg-purple-500/25 blur-[150px] rounded-full"
          style={{ willChange: "transform", top: "20%", right: "15%" }}
        />
        <div
          className="parallax-layer absolute w-[320px] h-[320px] bg-cyan-500/15 blur-[130px] rounded-full"
          style={{ willChange: "transform", bottom: "5%", left: "30%" }}
        />
      </div>

      {/* CONTENT (FIXED, NOT MOVING) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* SMALL LABEL / TAGLINE */}
        <div className="hero-meta flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-300/80">
          <span className="inline-block h-[1px] w-10 bg-cyan-300/60" />
          <span>Full-Stack Developer</span>
          <span className="inline-block h-[1px] w-10 bg-cyan-300/60" />
        </div>

        {/* TITLE */}
        <h1 className="hero-title mt-6 text-5xl md:text-7xl lg:text-8xl font-bold flex justify-center gap-[2px] leading-tight">
          {titleChars.map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* SUBTITLE */}
        <p className="hero-sub mt-5 text-gray-300 text-lg md:text-2xl">
          Magento • Laravel • Next.js Developer
        </p>

        {/* EXTRA META / STACK */}
        <div className="hero-meta mt-5 flex flex-wrap justify-center gap-3 text-xs md:text-sm text-gray-400">
          <span className="px-3 py-1 rounded-full border border-cyan-400/40 bg-cyan-950/40 backdrop-blur">
            E-commerce Architect
          </span>
          <span className="px-3 py-1 rounded-full border border-purple-400/40 bg-purple-950/40 backdrop-blur">
            API-First Backends
          </span>
          <span className="px-3 py-1 rounded-full border border-sky-400/40 bg-sky-950/40 backdrop-blur">
            Performance-Driven Frontends
          </span>
        </div>

        {/* SHORT DESCRIPTION */}
        <p className="hero-meta mt-4 max-w-xl mx-auto text-sm md:text-base text-gray-400">
          I build fast, reliable digital experiences — from high-conversion
          Magento storefronts to Laravel-powered APIs and modern Next.js UIs
          tailored for scaling teams.
        </p>
{/* 
        {/* BUTTONS */}
        {/* <div className="mt-10 flex flex-wrap gap-5 justify-center">
          <button className="hero-btn group px-7 py-3 rounded-full bg-blue-500 text-sm md:text-base font-medium hover:bg-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition transform hover:-translate-y-0.5">
            <span className="flex items-center gap-2">
              View Projects
              <span className="inline-block h-[1px] w-4 bg-white/70 group-hover:w-6 transition-all" />
            </span>
          </button>

          <button className="hero-btn px-7 py-3 rounded-full border border-white/20 text-sm md:text-base font-medium hover:bg-white/10 hover:border-white/40 transition transform hover:-translate-y-0.5">
            Contact Me
          </button>
        </div> */}

        {/* SOCIAL LINKS */}
        {/* <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="hero-social inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="hero-social inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
          >
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            LinkedIn
          </a>
          <a
            href="#about"
            className="hero-social inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
          >
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            About
          </a>
        </div>  */}

        {/* SCROLL INDICATOR */}
        <div className="mt-10 flex justify-center">
          <div className="hero-meta flex flex-col items-center text-xs text-gray-500">
            <span className="mb-2">Scroll to explore</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-gray-500/80 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}