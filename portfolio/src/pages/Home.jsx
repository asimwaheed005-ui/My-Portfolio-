import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-[110vh] bg-slate-950 flex items-center py-24 overflow-hidden">

     <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-24 items-center">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 text-xl font-medium mb-4">
            👋 Hello, I'm
          </p>
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full mb-6"
>
  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
  Available for Internships & Freelance
</motion.div>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Asim Waheed
            </span>

          </h1>

          <div className="mt-8 text-3xl md:text-4xl font-semibold h-16">

            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Machine Learning Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-white"
            />

          </div>

          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">

            Software Engineering student passionate about building
            modern, scalable and user-friendly web applications using
            React, Node.js, Express.js, MongoDB and Machine Learning.
            I enjoy transforming ideas into real-world digital solutions.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-600
              transition
              duration-300
              font-semibold
              flex
              items-center
              gap-3
              shadow-lg
              shadow-cyan-500/30
              hover:scale-110
            hover:-translate-y-1
            shadow-xl
              "
            >
              <FaDownload />

              Download Resume

            </a>

            <a
              href="/projects"
              className="
              px-8
              py-4
              rounded-xl
              border
              border-cyan-400
              hover:bg-cyan-400
              hover:text-black
              transition
              duration-300
              font-semibold
              flex
              items-center
              gap-3
              hover:scale-110
            hover:-translate-y-1
            shadow-xl
              "
            >
              View Projects

              <FaArrowRight />

            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/asimwaheed005-ui"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-cyan-400 hover:scale-125
hover:-translate-y-2 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/asim-waheed-705b18377"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-cyan-400 hover:scale-125
hover:-translate-y-2 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=asimwaheed856@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-cyan-400 hover:scale-125
hover:-translate-y-2 transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >

          {/* Glow */}

          <div className="absolute w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

          {/* Floating Image */}

          <motion.div
            whileHover={{
    scale: 1.03,
    rotate: 1,
  }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            relative
            rounded-[35px]
            p-3
            bg-white/5
            backdrop-blur-xl
            border
            border-cyan-400/30
            shadow-2xl
            shadow-cyan-500/50
            "
          >

            <div className="absolute inset-0 rounded-[35px] border-2 border-cyan-400 animate-pulse"></div>

            <img
              src="/Profile.jpg"
              alt="Asim Waheed"
              className="
              w-[380px]
              h-[500px]
              object-cover
              rounded-[28px]
              relative
              z-10
              "
            />

          </motion.div>

          {/* Stats */}

          <div className="absolute -bottom-10 flex gap-4">

            <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl px-5 py-4 text-center">

              <h2 className="text-cyan-400 text-2xl font-bold">
                3+
              </h2>

              <p className="text-gray-300 text-sm">
                Projects
              </p>

            </div>

            <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl px-5 py-4 text-center">

              <h2 className="text-cyan-400 text-2xl font-bold">
                2+
              </h2>

              <p className="text-gray-300 text-sm">
                Certificates
              </p>

            </div>

            <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl px-5 py-4 text-center">

              <h2 className="text-cyan-400 text-2xl font-bold">
                7th
              </h2>

              <p className="text-gray-300 text-sm">
                Semester
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    <motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, 12, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400"
>
  <FaChevronDown size={28} />
</motion.div>
    </section>
  );
};

export default Home;