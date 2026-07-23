import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const GithubProjects = () => {


const [repos,setRepos] = useState([]);



useEffect(()=>{


fetch(
"https://api.github.com/users/asimwaheed005-ui/repos"
)

.then(res=>res.json())

.then(data=>{

setRepos(data.slice(0,6));

})


},[]);



return (

<section className="bg-slate-950 text-white py-24">


<div className="max-w-7xl mx-auto px-6">


<h1 className="text-5xl font-bold text-center">

GitHub <span className="text-cyan-400">
Projects
</span>

</h1>



<div className="grid md:grid-cols-3 gap-8 mt-16">


{
repos.map((repo,index)=>(


<motion.div

key={repo.id}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

className="
bg-slate-900
border
border-slate-700
rounded-2xl
p-6
hover:border-cyan-400
transition
"


>


<h2 className="text-xl font-semibold">

{repo.name}

</h2>



<p className="text-gray-400 mt-3">

{repo.description || 
"No description available"}

</p>



<a

href={repo.html_url}

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-2
mt-5
text-cyan-400
"

>

<FaGithub/>

View Repository

</a>



</motion.div>


))

}


</div>


</div>


</section>

);


};


export default GithubProjects;