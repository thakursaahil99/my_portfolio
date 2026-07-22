"use client";

import { useState } from "react";
import { Code2, Server, Wrench } from "lucide-react";
import FadeUp from "../animations/FadeUp";

type SkillItem = { name: string; level: number };

const skillGroups: Record<
  string,
  { label: string; icon: React.ElementType; accent: string; items: SkillItem[] }
> = {
  frontend: {
    label: "Frontend",
    icon: Code2,
    accent: "text-blue-400 border-blue-400/40 bg-blue-400/10",
    items: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "TypeScript", level: 82 },
    ],
  },
  backend: {
    label: "Backend",
    icon: Server,
    accent: "text-purple-400 border-purple-400/40 bg-purple-400/10",
    items: [
      { name: "Laravel", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "MySQL", level: 84 },
      { name: "MongoDB", level: 78 },
    ],
  },
  tools: {
    label: "Tools",
    icon: Wrench,
    accent: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    items: [
      { name: "Git", level: 93 },
      { name: "Docker", level: 75 },
      { name: "Postman", level: 88 },
      { name: "VS Code", level: 95 },
    ],
  },
};

const tabKeys = Object.keys(skillGroups) as (keyof typeof skillGroups)[];

export default function Skills() {
  const [active, setActive] = useState<keyof typeof skillGroups>("frontend");
  const current = skillGroups[active];
  const Icon = current.icon;

  return (
    <section id="skills" className="py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
        </FadeUp>

        {/* Tabs */}
        <FadeUp>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabKeys.map((key) => {
              const group = skillGroups[key];
              const isActive = key === active;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? group.accent + " shadow-[0_0_20px_-4px_currentColor]"
                      : "text-gray-400 border-white/10 bg-white/5 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-current" : "bg-gray-500"
                    }`}
                  />
                  {group.label}
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* Content Card */}
        <FadeUp delay={0.1}>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_0_40px_-15px_rgba(255,255,255,0.15)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center ${current.accent}`}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {current.label}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {current.items.length} technologies
                  </p>
                </div>
              </div>
              <span
                className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${current.accent}`}
              >
                {active === "frontend"
                  ? "UI / UX"
                  : active === "backend"
                  ? "Server / API"
                  : "Dev / Deploy"}
              </span>
            </div>

            {/* Skill bars */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
              {current.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        active === "frontend"
                          ? "bg-blue-400"
                          : active === "backend"
                          ? "bg-purple-400"
                          : "bg-cyan-400"
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-center text-gray-500 text-xs mt-8 font-mono">
            Always learning — this stack keeps growing
          </p>
        </FadeUp>
      </div>
    </section>
  );
}