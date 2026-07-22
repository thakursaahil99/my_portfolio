"use client";

import { useEffect } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

import GradientBackground from "@/components/background/GradientBackground";
import CursorLight from "@/components/ui/CursorLight";
import Loader from "@/components/ui/Loader";

import useLenis from "@/hooks/useLenis";
import { sectionReveal } from "@/lib/scrollAnimations";
import Noise from "@/components/ui/Noise";

export default function Home() {
  useLenis();

  useEffect(() => {
    sectionReveal();
  }, []);

  return (
    <main className="text-white">

      <Loader />

      <GradientBackground />
      <CursorLight />

      <Navbar />

      <div className="reveal">
        <Hero />
      </div>

      <div className="reveal">
        <About />
      </div>

      <div className="reveal">
        <Skills />
      </div>

      <div className="reveal">
        <Experience />
      </div>

      <div className="reveal">
        <Projects />
      </div>

      <div className="reveal">
        <Contact />
      </div>

      <div className="reveal">
        <Footer />
      </div>

        <Noise />
    </main>
  );
}