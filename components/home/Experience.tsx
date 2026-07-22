"use client";

import FadeUp from "../animations/FadeUp";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    year: "2026 — Present",
    stack: ["Next.js", "Laravel", "Python Flask"],
    desc: "Working independently on full-stack web applications, building scalable interfaces, APIs, and modern digital solutions using Next.js, Laravel, and Python Flask.",
  },

  {
    role: "Magento & Laravel Developer",
    company: "Technodeft",
    year: "2023 — 2026",
    stack: ["Magento 2", "Laravel", "PHP", "MySQL"],
    desc: "Developed Magento 2 eCommerce solutions, custom modules, Laravel APIs, admin dashboards, and backend systems while working on performance optimization and scalable applications.",
  },

  {
    role: "Web Development Intern / Trainee",
    company: "Training & Internship",
    year: "2022 — 2023",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    desc: "Completed web development training and internship focused on frontend fundamentals, backend development, database concepts, and building real-world web projects.",
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
            A journey through roles, stacks, and shipped work since 2021.
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