"use client";

import FadeUp from "../animations/FadeUp";
import { FiCode, FiZap, FiLayers } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Architecture",
    desc: "Scalable, maintainable code built to last.",
  },
  {
    icon: FiZap,
    title: "Performance First",
    desc: "Fast-loading, optimized web experiences.",
  },
  {
    icon: FiLayers,
    title: "Modern UI/UX",
    desc: "Thoughtful design systems that feel great.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

       {/* Left Side - Code Editor + Terminal Stats */}
<FadeUp>
  <div className="relative">
    {/* Glow behind card */}
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl rounded-3xl" />

    {/* Code card */}
    <div className="relative w-full bg-slate-900/80 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-500 font-mono">
          developer.ts
        </span>
      </div>

      {/* Code content */}
      <div className="p-6 font-mono text-sm leading-relaxed">
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-cyan-300">developer</span>{" "}
          <span className="text-gray-400">=</span>{" "}
          <span className="text-gray-400">{"{"}</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-300">name</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-emerald-300">"Sahil Thakur"</span>
          <span className="text-gray-400">,</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-300">role</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-emerald-300">"Full-Stack Developer"</span>
          <span className="text-gray-400">,</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-300">stack</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-gray-400">[</span>
        </p>
        <p className="pl-8">
          <span className="text-emerald-300">"Magento 2"</span>
          <span className="text-gray-400">,</span>
        </p>
        <p className="pl-8">
          <span className="text-emerald-300">"Laravel"</span>
          <span className="text-gray-400">,</span>
        </p>
        <p className="pl-8">
          <span className="text-emerald-300">"Next.js"</span>
          <span className="text-gray-400">,</span>
        </p>
        <p className="pl-4">
          <span className="text-gray-400">],</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-300">passion</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-emerald-300">"Building scalable web apps"</span>
          <span className="text-gray-400">,</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-300">available</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-orange-300">true</span>
        </p>
        <p>
          <span className="text-gray-400">{"};"}</span>
        </p>
      </div>
    </div>

    {/* Terminal stats block */}
    <div className="mt-6 w-full bg-slate-900/80 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-500 font-mono">
          terminal
        </span>
      </div>

      <div className="p-6 font-mono text-sm space-y-3">
        <p className="flex items-center gap-2 text-gray-400">
          <span className="text-emerald-400">$</span> whoami --stats
        </p>

        <div className="pl-4 space-y-2">
          <p className="flex items-center justify-between">
            <span className="text-gray-400">years_experience</span>
            <span className="text-blue-300 font-semibold">2+</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-gray-400">projects_delivered</span>
            <span className="text-purple-300 font-semibold">20+</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-gray-400">tech_stacks</span>
            <span className="text-cyan-300 font-semibold">3+</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-gray-400">status</span>
            <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              available
            </span>
          </p>
        </div>

        <p className="flex items-center gap-1 pt-1">
          <span className="text-emerald-400">$</span>
          <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
        </p>
      </div>
    </div>
  </div>
</FadeUp>

        {/* Right Side - Text */}
        <div>
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-3">
              Get to know me
            </p>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-gray-300 leading-relaxed mb-8">
              I am a passionate Full Stack Developer specializing in Magento,
              Laravel, and modern web technologies like Next.js. I love
              building scalable, fast, and visually engaging web
              applications.
            </p>
          </FadeUp>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.title} delay={0.15 + index * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05] transition-colors duration-300">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                      <Icon size={18} className="text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}