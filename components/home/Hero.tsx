"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const NAME = "Sahil Thakur";

export default function Hero() {

  const glowRef = useRef<HTMLDivElement>(null);


  // INTRO ANIMATION
  useEffect(() => {

    const tl = gsap.timeline();

    tl.from(".hero-content > *", {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
    });

  }, []);



  // CURSOR GLOW
  useEffect(() => {


    const handleMouse = (e: MouseEvent) => {


      if (!glowRef.current) return;


      gsap.to(glowRef.current, {

        x: e.clientX,
        y: e.clientY,

        duration: 0.6,
        ease: "power3.out",

      });


    };


    window.addEventListener(
      "mousemove",
      handleMouse
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouse
      );

    };


  }, []);



  return (

<section
id="home"
className="
relative
min-h-screen
flex
items-center
justify-center
overflow-hidden
bg-[#050816]
text-white
py-32
"
>



{/* Cursor Glow */}

<div
ref={glowRef}
className="
fixed
pointer-events-none
w-[350px]
h-[350px]
rounded-full
bg-cyan-400/10
blur-[120px]
-translate-x-1/2
-translate-y-1/2
z-0
"
/>



{/* Background Glow */}

<div
className="
absolute
top-0
left-0
w-[500px]
h-[500px]
rounded-full
bg-blue-500/10
blur-[120px]
"
/>


<div
className="
absolute
bottom-0
right-0
w-[500px]
h-[500px]
rounded-full
bg-purple-500/10
blur-[120px]
"
/>




{/* Floating Particles */}


<div
className="
absolute
top-32
left-24
w-3
h-3
rounded-full
bg-cyan-400
animate-pulse
"
/>



<div
className="
absolute
right-32
top-52
w-4
h-4
rounded-full
bg-purple-400
animate-bounce
"
/>



<div
className="
absolute
bottom-40
left-1/3
w-3
h-3
rounded-full
bg-pink-400
animate-ping
"
/>






{/* CONTENT */}

<div
className="
hero-content
relative
z-10
max-w-5xl
mx-auto
px-6
text-center
"
>



{/* Badge */}

<div
className="
inline-flex
items-center
gap-2
mb-8
px-5
py-2
rounded-full
border
border-emerald-400/30
bg-emerald-400/10
text-xs
font-medium
text-emerald-300
backdrop-blur-md
"
>


<span
className="
w-2
h-2
rounded-full
bg-emerald-400
animate-pulse
"
/>


Available For Hire


</div>






{/* Heading */}

<h1
className="
text-5xl
md:text-7xl
lg:text-8xl
font-bold
leading-tight
"
>

Hi, I'm

<br/>


<span
className="
bg-gradient-to-r
from-cyan-300
via-purple-400
to-pink-400
bg-clip-text
text-transparent
"
>

{NAME}

</span>


</h1>







{/* Role */}

<p
className="
mt-8
text-xl
md:text-3xl
font-medium
text-cyan-300
"
>

Full-Stack Developer

</p>







{/* Description */}

<p
className="
mt-6
max-w-2xl
mx-auto
text-sm
md:text-base
text-gray-400
leading-relaxed
"
>

I build fast, scalable and modern digital experiences —
from Magento storefronts and Laravel APIs to Next.js
interfaces designed for performance and growth.

</p>







{/* Buttons */}

<div
className="
mt-10
flex
flex-wrap
justify-center
gap-5
"
>


<a
href="#projects"
className="
px-8
py-3.5
rounded-full
bg-gradient-to-r
from-blue-500
via-purple-500
to-cyan-500
font-medium
text-sm
transition
duration-300
hover:-translate-y-1
hover:shadow-[0_0_40px_rgba(59,130,246,.5)]
"
>

View Projects

</a>





<a
href="/Sahilthakur.pdf"
download
className="
px-8
py-3.5
rounded-full
border
border-white/20
bg-white/5
backdrop-blur-md
font-medium
text-sm
transition
duration-300
hover:bg-white/10
hover:-translate-y-1
"
>

Download Resume

</a>



</div>




</div>


</section>

  );

}