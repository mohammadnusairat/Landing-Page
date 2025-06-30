// src/sections/Experience.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    org: "Comprehension, Collaboration and Creativity Lab – UIC",
    date: "Sept 2024 – May 2025",
    bullets: [
      "Researched cognitive patterns in algorithmic problem-solving for a study on “Aha! moments” in programming.",
      "Analyzed participant interviews and insight-related data.",
      "Co-authored findings presented at MPA 2025."
    ],
    image: "/mpa-poster-full.jpg",
    thumbnail: "/mpa-poster-full.jpg",
    imageAlt: "MPA Poster Preview"
  },
  {
    title: "Software Developer – AI Trainer",
    org: "Outlier (Remote)",
    date: "Jul 2024 – Apr 2025",
    bullets: [
      "Evaluated the quality of AI-generated Python/C++ code by developing robust test cases to train the model.",
      "Enhanced the accuracy of the LLM’s output through data ingestion and feedback cycles.",
      "Focused on algorithmic correctness, edge cases, and alignment with prompt intent."
    ],
    image: "/Outlier_Diagram.png",
    thumbnail: "/Outlier_Diagram.png",
    imageAlt: "LLM Feedback Loop Diagram"
  },
  {
    title: "Software Engineering Fellow",
    org: "Headstarter AI (Remote)",
    date: "Jul 2024 – Aug 2024",
    bullets: [
      "Built 5 AI apps & APIs using Next.js, OpenAI, Pinecone, and Stripe API with 98% accuracy as seen by 1000+ users.",
      "Led a team of 4 engineering fellows through the full development lifecycle using MVC design patterns.",
      "Received mentorship from engineers at Amazon, Bloomberg, and Capital One on Agile, CI/CD, Git, and microservice architecture."
    ],
    image: "/headstarter_profile.jpg", 
    thumbnail: "/headstarter_profile.jpg",
    imageAlt: "Headstarter AI Preview"
  },
  {
    title: "Certified Nursing Assistant",
    org: "Associates in Pediatrics – Elgin, IL (On-site)",
    date: "Sep 2021 – Jul 2022",
    bullets: [
      "Delivered care to pediatric patients in a clinic through medical procedures and compassionate interaction.",
      "Documented patient encounters using eClinicalWorks, gaining exposure to EHR systems and clinic workflows."
    ],
    image: "/cna.png",
    thumbnail: "/cna.png",
    imageAlt: "CNA Experience Preview"
  }  
];

export function Experience() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-12 text-center">Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={exp.thumbnail}
              alt={exp.imageAlt}
              className="w-full h-56 object-cover cursor-pointer"
              onClick={() => setModalImg(exp.image)}
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.org}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Expanded view"
            className="max-w-full max-h-full object-contain p-4"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold"
            onClick={() => setModalImg(null)}
          >
            &times;
          </button>
        </div>
      )}
    </motion.section>
  );
}
