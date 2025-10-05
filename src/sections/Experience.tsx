// src/sections/Experience.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Data Scientist",
    org: "Fortune 200 Company",
    date: "August 2025 - Present",
    bullets: [
      "Building a Modern AI-Powered Sales Platform."
    ],
    image: "",
    thumbnail: "",
    imageAlt: ""
  },
  {
    title: "Software Engineering Intern",
    org: "MUHSEN",
    date: "June 2025 - Present",
    bullets: [
      "Built and deployed an internally adopted org-wide CSV processing platform for donor data encryption, and advanced data cleaning and deduplication.",
      "Improved data privacy compliance and volunteer workflow by 10x, by implementing column-level encryption using Fernet and domain-gated Flask endpoints.",
      "Reduced duplicate donor records by 40% through fuzzy matching and entity resolution, using recordlinkage and rapidfuzz for clustering and ID assignment",
      "Increased donor outreach accuracy by validating 5,000+ emails and addresses, by integrating ZeroBounce API and Google Places API into a custom Flask + Next.js suite."
    ],
    image: "/muhsen_logo.png",
    thumbnail: "/muhsen_logo.png",
    imageAlt: "MUHSEN Logo"
  },
  {
    title: "Machine Learning Intern",
    org: "Dasion",
    date: "May 2025 - August 2025",
    bullets: [
      "Built a multimodal cancer imaging platform used to manage patient records and analyze MRI, CT, X-ray, and histopathology scans, by developing a full-stack app with FastAPI, PostgreSQL, and React",
      "Enabled 4-way breast cancer classification with 91% confidence, integrating a CNN-based histopathology model into the platform for real-time tissue analysis.",
      "Achieved 68% micro-F1 score on unseen protein networks, by training a GraphSAGE model with PyTorch Geometric for multi-label PPI classification across 24 disjoint graphs",
      "Enhanced model interpretability and diagnostic accuracy by generating t-SNE visualizations and error heatmaps to evaluate learned protein embeddings."
    ],
    image: "/dasion_logo.png",
    thumbnail: "/dasion_logo.png",
    imageAlt: "Dasion Logo"
  },
  {
    title: "Back-End Software Engineering Intern",
    org: "MailSped",
    date: "June 2025 - July 2025",
    bullets: [
      "Expanded the AI-powered email platform, integrating Outlook via Microsoft Graph API and Azure OAuth2",
      "Performed maintenance by resolving critical bugs, took part in Agile Sprints and Weekly Scrum Meetings",
      "Implemented TTL indexing in MongoDB for efficient auto-expiration, streamlining stored email cleanup"
    ],
    image: "/mailsped_logo.jpeg",
    thumbnail: "/mailsped_logo.jpeg",
    imageAlt: "MailSped Logo"
  },
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
