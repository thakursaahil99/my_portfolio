"use client";

import { useState } from "react";
import { Code2, Server, Wrench } from "lucide-react";
import FadeUp from "../animations/FadeUp";

type SkillItem = {
  name: string;
  level: number;
};


const skillGroups = {

  frontend: {
    label: "Frontend",
    icon: Code2,
    color: "bg-blue-400",
    accent: "text-blue-400 border-blue-400/40 bg-blue-400/10",

    items: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 92 },
      { name: "Vue.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "TypeScript", level: 85 },
    ],
  },


  backend: {
    label: "Backend",
    icon: Server,
    color: "bg-purple-400",
    accent: "text-purple-400 border-purple-400/40 bg-purple-400/10",

    items: [
      { name: "PHP", level: 88 },
      { name: "Laravel", level: 85 },
      { name: "Magento 2", level: 82 },
      { name: "WordPress", level: 85 },
      { name: "Node.js", level: 86 },
      { name: "Python Flask", level: 75 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 80 },
    ],
  },


  tools: {
    label: "Tools",
    icon: Wrench,
    color: "bg-cyan-400",
    accent: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",

    items: [
      { name: "GitHub", level: 92 },
      { name: "Docker", level: 78 },
      { name: "Postman", level: 88 },
      { name: "React Native", level: 82 },
    ],
  },

};


const tabs = Object.keys(skillGroups) as Array<
  keyof typeof skillGroups
>;



export default function Skills() {


  const [active,setActive] =
    useState<keyof typeof skillGroups>("frontend");


  const current = skillGroups[active];

  const Icon = current.icon;



return (

<section
id="skills"
className="py-24 px-6 md:px-20"
>

<div className="max-w-6xl mx-auto">


<FadeUp>

<h2 className="text-4xl font-bold text-center mb-12">
Skills & Technologies
</h2>

</FadeUp>



<FadeUp>

<div className="flex justify-center flex-wrap gap-3 mb-8">


{tabs.map((tab)=>{


const item = skillGroups[tab];

const activeTab = tab === active;


return (

<button
key={tab}
onClick={()=>setActive(tab)}

className={`
px-5 py-2.5 rounded-xl border text-sm
transition-all

${
activeTab
?
item.accent
:
"text-gray-400 border-white/10 bg-white/5"
}

`}
>

{item.label}

</button>


)

})}


</div>

</FadeUp>





<FadeUp>


<div
className="
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-md
p-8
"
>



<div className="flex items-center gap-4 mb-8">


<div
className={`
w-12 h-12 rounded-xl
border flex items-center justify-center
${current.accent}
`}
>

<Icon size={22}/>

</div>


<div>

<h3 className="text-lg font-semibold">
{current.label}
</h3>


<p className="text-sm text-gray-400">
{current.items.length} technologies
</p>


</div>


</div>






<div
className="
grid
md:grid-cols-2
gap-6
"
>


{

current.items.map((skill)=>(


<div key={skill.name}>


<div className="
flex justify-between mb-2 text-sm
">

<span className="text-gray-200">
{skill.name}
</span>


<span className="text-gray-400">
{skill.level}%
</span>


</div>



<div className="
h-1.5
rounded-full
bg-white/10
overflow-hidden
">


<div
className={`
h-full rounded-full
transition-all duration-700
${current.color}
`}
style={{
width:`${skill.level}%`
}}
/>


</div>


</div>


))

}


</div>


</div>


</FadeUp>



<FadeUp>

<p className="
text-center
text-gray-500
text-xs
mt-8
font-mono
">

Always learning — this stack keeps growing

</p>

</FadeUp>



</div>

</section>


);

}