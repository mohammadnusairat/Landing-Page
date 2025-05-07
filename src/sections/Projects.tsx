import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Obesity Risk Predictor",
    description:
      "ML pipeline with ensemble models and 98% accuracy. Feature engineering on 20k records, with full-stack Docker deployment in progress.",
    tech: ["Python", "Scikit-learn", "PostgreSQL", "Docker", "AWS"],
    image: "/obesity-model.jpg",
    github: "https://github.com/mohammadnusairat/Full-Stack-Obesity-Insight-Predictor",
    live: "/obesity-model.jpg"
  },
  {
    title: "Campus Meeting Point App",
    description:
      "React + Flask app for finding optimal geospatial midpoints on campus using OSM XML, Dijkstra’s algorithm, Geodesic Fermat Point, and building feature filters.",
    tech: ["React", "Flask", "OpenStreetMap", "Geopy", "NetworkX"],
    image: "/campus-app.png",
    github: "https://github.com/mohammadnusairat/Campus-Meeting-Point-Application",
    live: "/campus-app.png"
  },
  {
    title: "Flight Delay Prediction",
    description:
      "ML pipeline trained on O'Hare airport data. Used visualization + ensemble methods to achieve 81% accuracy for airline schedule optimization.",
    tech: ["Pandas", "Matplotlib", "Logistic Regression", "Random Forest"],
    image: "/flight-delay-model.jpg",
    github: "https://github.com/mohammadnusairat/Flight-Time-Delay-Prediction",
    live: "/flight-delay-model.jpg"
  }
];

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow-md overflow-hidden"
          >
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium"
                  >
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 text-sm font-medium"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
