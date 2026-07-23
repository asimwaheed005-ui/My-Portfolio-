import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 text-lg leading-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-3
            mt-10
            px-7
            py-3
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-600
            transition
            font-semibold
            shadow-lg
            shadow-cyan-500/30
          "
        >
          <FaHome />
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;