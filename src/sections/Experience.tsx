import React from 'react';
import { motion } from 'framer-motion';

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="py-20" id="experience">
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>
        <ul className="space-y-6">
          <li>
            <strong>Undergraduate Research Assistant</strong> — UIC, Sept 2024 - May 2025<br />
            <em>Studying Aha! moments in programming and cognitive problem-solving.</em>
          </li>
          <li>
            <strong>Software Developer - AI Trainer</strong> — Outlier, Jul 2024 - Present<br />
            <em>LLM quality improvements using robust test cases and algorithmic challenges.</em>
          </li>
          <li>
            <strong>Software Engineering Fellow</strong> — Headstarter AI, Jul 2024 - Aug 2024<br />
            <em>Built 5 AI apps using NextJs, OpenAI, Pinecone, and Stripe API.</em>
          </li>
        </ul>
      </section>
    </motion.section>
  );
}
