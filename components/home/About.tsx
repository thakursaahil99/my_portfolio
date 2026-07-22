"use client";

import FadeUp from "../animations/FadeUp";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <FadeUp>
          <div className="w-full h-[400px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
            <p className="text-gray-400">Profile Image</p>
          </div>
        </FadeUp>

        {/* Right Side - Text */}
        <div>

          <FadeUp>
            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate Full Stack Developer specializing in Magento,
              Laravel, and modern web technologies like Next.js.
              I love building scalable, fast, and visually engaging web applications.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-gray-400">
              I focus on clean architecture, performance optimization, and modern UI/UX design systems.
            </p>
          </FadeUp>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">

            <FadeUp delay={0.3}>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <h3 className="text-2xl font-bold">2+</h3>
                <p className="text-sm text-gray-400">Years Exp</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <h3 className="text-2xl font-bold">20+</h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <h3 className="text-2xl font-bold">5+</h3>
                <p className="text-sm text-gray-400">Clients</p>
              </div>
            </FadeUp>

          </div>

        </div>

      </div>

    </section>
  );
}