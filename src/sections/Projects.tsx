import React from 'react';
import { motion } from 'framer-motion';

export function Projects() {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="py-20" id="projects">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-medium">Obesity Risk Predictor</h4>
            <p>Python ML pipeline with ensemble models and 98% accuracy. Dockerized full-stack deployment in progress.</p>
          </div>
          <div>
            <h4 className="text-xl font-medium">Campus Meeting Point App</h4>
            <p>React + Flask app calculating optimal geospatial midpoint on campus using OpenStreetMap and Dijkstra’s algorithm.</p>
          </div>
          <div>
            <h4 className="text-xl font-medium">Flight Delay Prediction</h4>
            <p>ML-based flight delay prediction from O'Hare data with data viz to optimize airline scheduling (81% accuracy).</p>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
