// src/sections/About.tsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        I'm a UIC Data Science student with a concentration in Computer Science, passionate about
        building practical AI solutions, full-stack tools, and cognitive research in algorithmic thinking.
      </p>
    </motion.section>
  );
}