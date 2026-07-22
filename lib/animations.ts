import gsap from "gsap";

export const fadeUp = (element: string) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
    }
  );
};

export const revealText = (element: string) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 100,
      skewY: 10,
    },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1.5,
      ease: "power4.out",
    }
  );
};