import React from 'react';
import { motion } from 'framer-motion';

export function Resume() {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="py-20" id="resume">
        <h3 className="text-2xl font-semibold mb-4">Resume</h3>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View/Download PDF
        </a>
      </section>
    </motion.section>
  );
}
