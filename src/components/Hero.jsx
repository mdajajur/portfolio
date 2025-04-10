import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-800 text-gray-100">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Md Ajajur Rahman
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl font-medium mb-6 text-teal-400"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Front-End Developer | React & Tailwind Enthusiast
      </motion.h2>

      <motion.a
        href="#projects"
        className="px-6 py-3 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        View Projects
      </motion.a>
    </section>
  );
};

export default Hero;
