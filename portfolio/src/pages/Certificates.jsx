import { motion } from "framer-motion";


const Certificates = () => {


const certificates = [

{
title:"Microsoft Learn Student Ambassador",

issuer:"Microsoft",

image:"/certificates/MICROSOFT CERTIFICATE.png",

link:"https://drive.google.com/file/d/1W4p0zRHSF_uqkh8LMalMdi1cRetGj9vw/view?usp=drive_link"

},


{
title:"Claude AI 101 Course Completion",

issuer:"Anthropic",

image:"/certificates/claud.png",

link:"https://drive.google.com/file/d/1xUTr0WBEGfTk8ePz0RU3OQxK5swv07Dm/view?usp=drive_link"

}

];



return (

<section className="min-h-screen text-white">


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
Certificates
</span>

</h1>


<p className="text-gray-400 mt-4">
Professional certifications and achievements
</p>


</motion.div>





<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">


{

certificates.map((certificate,index)=>(


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
border
border-slate-700
rounded-2xl
overflow-hidden
hover:border-cyan-400
transition
duration-300
"


>


<img

src={certificate.image}

alt={certificate.title}

className="
w-full
h-56
object-cover
"

/>



<div className="p-6">


<h2 className="
text-xl
font-semibold
">

{certificate.title}

</h2>



<p className="
text-gray-400
mt-2
">

{certificate.issuer}

</p>




<a

href={certificate.link}

target="_blank"

rel="noreferrer"

className="
inline-block
mt-5
px-5
py-2
bg-cyan-500
rounded-lg
hover:bg-cyan-600
transition
"

>

View Certificate

</a>


</div>



</motion.div>


))


}


</div>


</div>


</section>

);


};


export default Certificates;