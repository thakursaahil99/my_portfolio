"use client";

import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import { ExternalLink } from "lucide-react";

type ProjectType = "Frontend" | "Full-Stack" | "Design & Development";

const projects: {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  type: ProjectType;
}[] = [
  {
    title: "Dell Store",
    desc: "Full e-commerce platform with product catalog, cart, checkout flow, and backend order management.",
    tech: ["Magento 2", "PHP", "Tailwind CSS"],
    link: "https://www.dellstore.com/",
    type: "Full-Stack",
  },
  {
    title: "PlantShed",
    desc: "E-commerce storefront for a plant & flower delivery business — built with a focus on clean UI and smooth product browsing.",
    tech: ["Magento 2", "Tailwind CSS"],
    link: "https://www.plantshed.com/",
    type: "Frontend",
  },
  {
    title: "Pahadi Bhai",
    desc: "Full-stack platform with mobile app, custom dashboard, and complete backend management.",
    tech: ["Laravel", "Flutter", "MySQL"],
    link: "https://pahadibhai.in/",
    type: "Full-Stack",
  },
  {
    title: "Raintree",
    desc: "Full-stack web application covering both customer-facing frontend and backend systems.",
    tech: ["Magento 2", "PHP", "Tailwind CSS"],
    link: "https://raintree.com/",
    type: "Full-Stack",
  },
  {
    title: "Meraj",
    desc: "Full-stack web application with frontend UI and backend systems built for a complete end-to-end product.",
    tech: ["Magento 2", "PHP", "Tailwind CSS"],
    link: "https://meraj.in/",
    type: "Full-Stack",
  },
  {
    title: "Club of Notes",
    desc: "Contributed technical development and UI/UX design work on this platform.",
    tech: ["Tailwind CSS", "UI/UX", "Frontend Development"],
    link: "https://www.clubofnotes.com/",
    type: "Design & Development",
  },
];

// Generates a live homepage screenshot for a given URL using a free screenshot service.
// Swap this out for your own image path (e.g. `/projects/dellstore.png`) if you'd
// rather use a manually captured screenshot instead.
const getPreviewImage = (url: string) =>
  `https://image.thum.io/get/width/600/crop/800/${url}`;

const typeStyles: Record<ProjectType, string> = {
  "Full-Stack": "text-purple-300 border-purple-400/40 bg-purple-400/10",
  Frontend: "text-cyan-300 border-cyan-400/40 bg-cyan-400/10",
  "Design & Development": "text-amber-300 border-amber-400/40 bg-amber-400/10",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.1}>
              <div className="group bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:scale-[1.03] transition duration-300 relative overflow-hidden h-full flex flex-col">
                {/* Homepage Preview */}
                <div className="relative w-full aspect-video overflow-hidden border-b border-white/10 bg-slate-900">
                  <Image
                    src={getPreviewImage(project.link)}
                    alt={`${project.title} homepage preview`}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-blue-400">
                      {project.title}
                    </h3>
                    <span
                      className={`shrink-0 text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${typeStyles[project.type]}`}
                    >
                      {project.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mt-3 text-sm flex-1">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition w-fit"
                  >
                    View Project
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}