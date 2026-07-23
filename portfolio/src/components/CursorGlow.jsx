import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorGlow = () => {
  const mouseX = useMotionValue(-150);
  const mouseY = useMotionValue(-150);

  const x = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-400 opacity-50 blur-[120px] pointer-events-none z-50"
    />
  );
};

export default CursorGlow;