import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-slate-950 flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>

      {/* Animated Circles */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="absolute w-80 h-80 border border-cyan-400/20 rounded-full"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="absolute w-60 h-60 border border-cyan-400/20 rounded-full"
      />

      {/* Center */}
      <div className="relative flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{
            scale: 0,
            rotate: -180,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          className="w-28 h-28 rounded-full
          bg-gradient-to-br
          from-cyan-400
          to-blue-600
          flex items-center justify-center
          text-5xl
          font-extrabold
          text-white
          shadow-[0_0_60px_rgba(34,211,238,0.6)]"
        >
          AW
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="mt-8 text-4xl font-bold"
        >
          Asim <span className="text-cyan-400">Waheed</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
          }}
          className="text-gray-400 mt-2 tracking-widest uppercase text-sm"
        >
          Software Engineer • Full Stack Developer
        </motion.p>

        {/* Progress Bar */}
        <div className="w-72 h-2 bg-slate-800 rounded-full overflow-hidden mt-10">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />

        </div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="mt-4 text-gray-400"
        >
          Initializing Portfolio...
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Loader;