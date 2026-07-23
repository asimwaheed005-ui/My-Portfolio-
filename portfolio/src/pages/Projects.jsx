import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {


const projects = [

{
title:"Smart Government Contract Bidding System",

description:
"Final Year Project - A full-stack government tender management platform with contractor evaluation, bidding workflow, role-based authentication and automated scoring.",

image:"/projects/Admin.png",

technologies:[
"React",
"Node.js",
"Express",
"MongoDB",
"Python",
"Machine Learning"
],

github:
"https://github.com/asimwaheed005-ui/Smart-Contract-Bidding-System",

demo:"#"

},



{
title:"E-Commerce Mobile Store",

description:
"A modern online mobile shopping platform with product management, cart functionality and responsive user interface.",

image:"/projects/shop.png",

technologies:[
"React",
"Node.js",
"MongoDB"
],

github:"https://github.com/asimwaheed005-ui/ecommerce-webstie-for-mobile-shop/tree/master",

demo:"#"

},



{
title:"Portfolio Website",

description:
"A personal developer portfolio website built with React, Tailwind CSS and animations.",

image:"/projects/portfolio.png",

technologies:[
"React",
"Tailwind CSS",
"Framer Motion"
],

github:"#",

demo:"#"

}

];



return (

<section className="min-h-screen bg-slate-950 text-white py-24">


<div className="max-w-7xl mx-auto px-6">


{/* Heading */}

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="text-center"

>

<h1 className="text-5xl font-bold">

My <span className="text-cyan-400">
Projects
</span>

</h1>


<p className="text-gray-400 mt-4">

Some of my featured work and applications

</p>


</motion.div>





{/* Project Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">


{
projects.map((project,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5,
delay:index*0.1
}}

viewport={{
once:true
}}


className="
bg-slate-900/70
backdrop-blur-lg
border
border-slate-700
rounded-2xl
overflow-hidden
hover:border-cyan-400
transition
duration-300
flex
flex-col
"


>


{/* Image */}

<img

src={project.image}

alt={project.title}

className="
w-full
h-52
object-cover
"

/>




{/* Content */}

<div className="
p-6
flex
flex-col
flex-grow
">


<h2 className="
text-2xl
font-semibold
">

{project.title}

</h2>




{/* Fixed Description Height */}

<p className="
text-gray-400
mt-4
leading-7
h-28
overflow-hidden
">

{project.description}

</p>





{/* Technology Tags */}

<div className="
flex
flex-wrap
gap-2
mt-5
">


{

project.technologies.map((tech,i)=>(


<span

key={i}

className="
px-3
py-1
bg-cyan-500/10
text-cyan-400
rounded-full
text-sm
"

>

{tech}

</span>


))

}


</div>





{/* Buttons */}

<div className="
flex
gap-4
mt-auto
pt-8
">


<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
flex
items-center
justify-center
gap-2
px-5
py-2
bg-cyan-500
rounded-lg
hover:bg-cyan-600
transition
"

>

<FaGithub />

Github

</a>




<a

href={project.demo}

target="_blank"

rel="noreferrer"

className="
flex
items-center
justify-center
gap-2
px-5
py-2
border
border-cyan-400
rounded-lg
hover:bg-cyan-400
hover:text-black
transition
"

>

<FaExternalLinkAlt />

Demo

</a>



</div>


</div>



</motion.div>


))

}


</div>



</div>


</section>


);


};


export default Projects;