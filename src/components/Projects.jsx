import { motion } from "framer-motion";
import goCarImage from "../assets/gocar.png"
const projects = [
  {
    title: "To-Do App",
    image: "/projects/todo.png", 
    description: "A simple task manager with localStorage and Framer Motion animations.",
    link: "https://your-todo-app-link.com",
  },
  {
    title: "GoCar: A Car Rental Website",
    image: goCarImage,
    description: "A pixel-perfect modern landing page using React & Tailwind CSS.",
    link: "https://splendid-druid-f332c1.netlify.app/",
  },
  {
    title: "Animated Portfolio",
    image: "/projects/portfolio.png",
    description: "My personal portfolio made with React, Tailwind, and Framer Motion.",
    link: "https://your-portfolio-link.com",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 min-h-[80vh]">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-teal-400 text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition-all hover:scale-105 hover:rotate-1"
              variants={item}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
