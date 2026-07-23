import { motion } from "framer-motion";

const About = () => {
  const stats = [
    {
      number: "3+",
      title: "Projects Completed",
    },
    {
      number: "1",
      title: "Final Year Project",
    },
    {
      number: "2+",
      title: "Years Learning",
    },
    {
      number: "10+",
      title: "Technologies",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h1 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Get to know more about my journey
          </p>

        </motion.div>


        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">


          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-8"
          >

            <h2 className="text-3xl font-semibold mb-5">
              Software Engineering Student
            </h2>


            <p className="text-gray-300 leading-8">
              I am a Software Engineering student passionate about
              designing and developing modern web applications.
              My focus is on full-stack development, clean coding
              practices, and building solutions that solve real-world
              problems.
            </p>


            <p className="text-gray-300 leading-8 mt-5">
              I have experience working with technologies like
              React.js, Node.js, Express.js, MongoDB, and Python.
              Currently, I am working on my Final Year Project,
              a Smart Government Contract Bidding System with
              automated contractor evaluation.
            </p>


            <p className="text-gray-300 leading-8 mt-5">
              My goal is to become a skilled software engineer who
              can build scalable applications and continuously improve
              my problem-solving abilities.
            </p>


          </motion.div>



          {/* Right Side Stats */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            {stats.map((item,index)=>(
              <div
                key={index}
                className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400 transition duration-300"
              >

                <h3 className="text-4xl font-bold text-cyan-400">
                  {item.number}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.title}
                </p>

              </div>
            ))}

          </motion.div>


        </div>

      </div>

    </section>
  );
};


export default About;