"use client";

import FadeUp from "../animations/FadeUp";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    year: "2026 — Present",
    stack: ["Next.js", "Laravel", "Python Flask"],
    desc: "Working independently on full-stack web applications using Next.js and Laravel, with Python Flask for backend services and API development.",
  },
  {
    role: "Laravel Developer",
    company: "Technodeft",
    year: "2024 — 2026",
    stack: ["Laravel", "MySQL", "Next.js"],
    desc: "Built REST APIs, admin dashboards, and backend systems using Laravel, while extending into frontend development with Next.js.",
  },
  {
    role: "Magento Developer",
    company: "Technodeft",
    year: "2024 — 2026",
    stack: ["Magento 2", "PHP", "Tailwind CSS"],
    desc: "Delivered Magento 2 eCommerce projects, custom modules, and performance optimization across multiple client stores.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-40 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-center mb-4">
            Experience
          </h2>
          <p className="text-center text-gray-400 text-lg mb-24 md:mb-32 max-w-md mx-auto">
            A journey through roles, stacks, and shipped work since 2024.
          </p>
        </FadeUp>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="group py-12 md:py-16 border-t border-white/10 first:border-t-0 first:pt-0">
                <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-16">
                  {/* Year */}
                  <div className="text-sm text-gray-500 tracking-wide pt-1">
                    {exp.year}
                  </div>

                  {/* Content */}
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-1 transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      {exp.company}
                    </p>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                      {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-400 transition-colors duration-300 group-hover:border-white/25 group-hover:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}