import React from 'react';
import { motion } from 'framer-motion';


export function Footer() {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Mohammad Nusairat. Built with React + Tailwind CSS.</p>
        <div className="mt-2">
          <a href="mailto:mnusairat2003@gmail.com" className="hover:underline">Email</a> ·
          <a href="https://linkedin.com/in/mohammad-nusairat" className="hover:underline ml-2">LinkedIn</a> ·
          <a href="https://github.com" className="hover:underline ml-2">GitHub</a>
        </div>
      </footer>
    </motion.section>
  );
}
