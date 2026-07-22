"use client";

import FadeUp from "../animations/FadeUp";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/thakursaahil99",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sahil-thakur",
    icon: FiLinkedin,
  },
  {
    name: "Email",
    href: "mailto:sahilthakur961999@gmail.com",
    icon: FiMail,
  },
  {
    name: "Phone",
    href: "tel:+919805338877",
    icon: FiPhone,
  },
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <footer className="border-t border-white/10 px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-10">
          {/* Brand */}
          <FadeUp>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Sahil<span className="text-blue-400">.</span>
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Full Stack Developer
              </p>
            </div>
          </FadeUp>

          {/* Navigation */}
          <FadeUp delay={0.1}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Social Icons */}
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.name}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </FadeUp>
        </div>

        {/* Bottom */}
        <FadeUp delay={0.25}>
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <span>
              © {new Date().getFullYear()} Sahil Thakur. All rights reserved.
            </span>

            <span>Built with ❤️ using Next.js & Tailwind CSS</span>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
