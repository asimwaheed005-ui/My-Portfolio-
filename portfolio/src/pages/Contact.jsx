import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Contact = () => {


return (

<section className="min-h-screen bg-slate-950 text-white py-24">


<div className="max-w-6xl mx-auto px-6">


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

Contact <span className="text-cyan-400">
Me
</span>

</h1>


<p className="text-gray-400 mt-4">

Let's connect and build something amazing

</p>


</motion.div>





<div className="grid md:grid-cols-2 gap-10 mt-16">



{/* Contact Information */}


<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="
bg-slate-900/70
border
border-slate-700
rounded-2xl
p-8
"


>


<h2 className="
text-3xl
font-semibold
mb-6
">

Get In Touch

</h2>


<p className="text-gray-400 leading-7">

I am open to software engineering opportunities, 
full-stack development collaborations, and exciting projects 
where I can contribute my skills in React, Node.js, MongoDB, 
and modern web technologies to build scalable applications.


</p>




<div className="mt-8 space-y-5">


<a
href="https://mail.google.com/mail/?view=cm&fs=1&to=asimwaheed856@gmail.com"
target="_blank"
rel="noreferrer"
className="
flex
items-center
gap-4
text-gray-300
hover:text-cyan-400
transition
"
>
<FaEnvelope size={22}/>

Email Me

</a>



<a

href="https://github.com/asimwaheed005-ui"

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-4
text-gray-300
hover:text-cyan-400
transition
"

>

<FaGithub size={22}/>

Github

</a>




<a

href="https://www.linkedin.com/in/asim-waheed-705b18377?utm_source=share_via&utm_content=profile&utm_medium=member_android"

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-4
text-gray-300
hover:text-cyan-400
transition
"

>

<FaLinkedin size={22}/>

LinkedIn

</a>



</div>


</motion.div>





{/* Contact Form */}


<motion.form

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}


className="
bg-slate-900/70
border
border-slate-700
rounded-2xl
p-8
"


>


<input

type="text"

placeholder="Your Name"

className="
w-full
mb-5
px-4
py-3
bg-slate-800
rounded-lg
outline-none
focus:ring-2
focus:ring-cyan-400
"

/>




<input

type="email"

placeholder="Your Email"

className="
w-full
mb-5
px-4
py-3
bg-slate-800
rounded-lg
outline-none
focus:ring-2
focus:ring-cyan-400
"

/>




<textarea

rows="5"

placeholder="Your Message"

className="
w-full
mb-5
px-4
py-3
bg-slate-800
rounded-lg
outline-none
focus:ring-2
focus:ring-cyan-400
"

/>




<button

className="
px-8
py-3
bg-cyan-500
rounded-lg
hover:bg-cyan-600
transition
"

>

Send Message

</button>



</motion.form>



</div>


</div>


</section>

);


};


export default Contact;