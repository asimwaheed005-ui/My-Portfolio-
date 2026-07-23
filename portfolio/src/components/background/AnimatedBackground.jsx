import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500 opacity-30 blur-[180px]"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-600 opacity-30 blur-[180px]"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500 opacity-20 blur-[160px]"
      />

    </div>
  );
};

export default AnimatedBackground;