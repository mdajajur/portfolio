import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 py-6 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Md Ajajur Rahman. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center gap-4 text-teal-400">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          X
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
