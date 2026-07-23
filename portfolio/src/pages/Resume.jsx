import { motion } from "framer-motion";


const Resume = () => {


return (

<section className="min-h-screen text-white">


<div className="max-w-5xl mx-auto px-6 text-center">


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

>


<h1 className="text-5xl font-bold">

My <span className="text-cyan-400">
Resume
</span>

</h1>


<p className="text-gray-400 mt-5">

Download my resume to know more about my skills,
projects and experience.

</p>



<a

href="/My CV.pdf"

download

className="
inline-block
mt-10
px-8
py-3
bg-cyan-500
rounded-xl
hover:bg-cyan-600
transition
"

>

Download Resume

</a>


</motion.div>


</div>


</section>

);


};


export default Resume;