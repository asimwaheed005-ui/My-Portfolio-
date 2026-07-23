import { motion } from "framer-motion";

const Skills = () => {

  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "90%" },
        { name: "JavaScript", level: "85%" },
        { name: "HTML & CSS", level: "95%" },
        { name: "Tailwind CSS", level: "85%" }
      ]
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: "85%" },
        { name: "Express.js", level: "80%" },
        { name: "REST APIs", level: "85%" }
      ]
    },

    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: "85%" },
        { name: "MySQL", level: "75%" }
      ]
    },

    {
      title: "Programming",
      skills: [
        { name: "Java", level: "80%" },
        { name: "Python", level: "75%" },
        { name: "JavaScript", level: "85%" }
      ]
    },

    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-Learn", level: "70%" },
        { name: "Pandas", level: "70%" },
        { name: "NumPy", level: "70%" }
      ]
    }
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
            My <span className="text-cyan-400">Skills</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Technologies and tools I work with
          </p>

        </motion.div>



        {/* Skills Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">


          {categories.map((category, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}

              viewport={{ once: true }}

              className="
              bg-slate-900/70
              backdrop-blur-lg
              border
              border-slate-700
              rounded-2xl
              p-6
              hover:border-cyan-400
              transition
              duration-300
              "

            >


              <h2 className="
              text-2xl
              font-semibold
              mb-6
              text-cyan-400
              ">
                {category.title}
              </h2>



              {category.skills.map((skill, i) => (

                <div key={i} className="mb-5">


                  <div className="flex justify-between mb-2">

                    <span>
                      {skill.name}
                    </span>


                    <span className="text-gray-400">
                      {skill.level}
                    </span>

                  </div>



                  <div className="
                  w-full
                  bg-slate-700
                  rounded-full
                  h-2
                  ">


                    <motion.div

                      initial={{ width: 0 }}

                      whileInView={{
                        width: skill.level
                      }}

                      transition={{
                        duration: 1
                      }}

                      viewport={{
                        once: true
                      }}

                      className="
                      bg-cyan-400
                      h-2
                      rounded-full
                      "

                    >

                    </motion.div>


                  </div>


                </div>

              ))}


            </motion.div>

          ))}


        </div>


      </div>

    </section>

  );

};


export default Skills;