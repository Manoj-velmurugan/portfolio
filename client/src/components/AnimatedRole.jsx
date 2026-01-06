import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Final Year Student", "Full Stack Web Developer"];

export default function AnimatedRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 sm:h-12 md:h-14 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45 }}
          className="text-xl sm:text-2xl md:text-4xl font-semibold text-purple-400 text-center"
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
