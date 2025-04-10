import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[16rem] md:min-h-[50vh] flex items-center justify-center px-6 py-12 bg-gray-900 text-gray-100"
    >
      <motion.div
        className="max-w-2xl text-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-teal-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m a beginner web developer passionate about building interactive user
          interfaces with React and bringing them to life using Framer Motion. My
          focus is on writing clean, responsive code and learning every day to become
          a better developer.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
