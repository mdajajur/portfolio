import { motion } from "framer-motion";

const skills = ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Git", "Vite"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-[60vh]
bg-gray-900 px-6 py-12">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-teal-400">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 hover:scale-105 transition-transform rounded-md shadow-md p-6 text-gray-100"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
