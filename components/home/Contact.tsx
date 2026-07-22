"use client";

import FadeUp from "../animations/FadeUp";
import {
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
              🚀 Available for Freelance
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white">
              Let's Build Something
              <span className="text-blue-400"> Amazing.</span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
              Have a project in mind or just want to say hello? I'm always open
              to discussing new opportunities, collaborations, and exciting
              ideas.
            </p>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.15}>
          <div className="mt-10 flex justify-center">
            <a
              href="mailto:sahilthakur961999@email.com"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 font-medium text-white transition hover:bg-blue-600"
            >
              <FiMail />
              Email Me
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>
          </div>
        </FadeUp>

        {/* Contact Cards */}
        <FadeUp delay={0.25}>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <a
              href="tel:+919805338877"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/40 hover:bg-white/10"
            >
              <FiPhone className="text-3xl text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold text-white">Phone</h3>

              <p className="mt-2 text-gray-400">
                +919805338877
              </p>
            </a>

            <a
              href="https://github.com/thakursaahil99"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/40 hover:bg-white/10"
            >
              <FiGithub className="text-3xl text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold text-white">GitHub</h3>

              <p className="mt-2 text-gray-400">
                Check out my projects and open-source work.
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-thakur"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/40 hover:bg-white/10"
            >
              <FiLinkedin className="text-3xl text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold text-white">LinkedIn</h3>

              <p className="mt-2 text-gray-400">
                Let's connect professionally.
              </p>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
