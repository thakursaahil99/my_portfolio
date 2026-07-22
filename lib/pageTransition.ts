import gsap from "gsap";

export const pageEnter = () => {
  gsap.fromTo(
    "main",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );
};