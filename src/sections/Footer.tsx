import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

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
      <footer className="w-full text-center py-6 border-t dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <p>
            © {new Date().getFullYear()} Mohammad Nusairat. Built with React + Tailwind CSS.
          </p>
          <p className="text-xs opacity-70">v1.3 — Last updated September 2026</p>
        </div>

        <div className="mt-3 flex justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <a href="mailto:mnusairat2003@gmail.com" className="flex items-center gap-1 hover:text-blue-500">
            <Mail className="w-4 h-4" /> mnusairat2003@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-nusairat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/mohammadnusairat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </footer>
    </motion.section>
  );
}
