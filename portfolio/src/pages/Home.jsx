import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-semibold text-lg"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mt-3"
          >
            Asim Waheed
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl mt-5 text-gray-300"
          >
            Software Engineer | Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-gray-400 leading-8 max-w-xl"
          >
            Passionate Software Engineering student specializing in
            Full Stack Web Development. I enjoy building modern,
            scalable web applications and continuously improving
            my programming and problem-solving skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-5 mt-10"
          >

            <button className="px-7 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition duration-300">
              View Projects
            </button>

            <button className="px-7 py-3 border border-cyan-500 rounded-xl hover:bg-cyan-500 transition duration-300">
              Download Resume
            </button>

          </motion.div>

        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src="/Profile.jpg"
              alt="Profile"
              className="relative w-80 h-80 rounded-full border-4 border-cyan-500 object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Home;