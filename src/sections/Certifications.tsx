// src/sections/Certifications.tsx
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Technical Interview Preparation Course",
    issuer: "CodePath",
    date: "Issued Aug 2024",
    logo: "/codepath.jpg"
  },
  {
    title: "AT&T 2024 Technology Academy",
    issuer: "AT&T",
    date: "Issued Jun 2024",
    logo: "/att.jpg"
  },
  {
    title: "Intro to Generative AI Learning Path Specialization",
    issuer: "Google Cloud",
    date: "Issued May 2024",
    logo: "/google-cloud.jpg"
  },
  {
    title: "SQL for Data Science",
    issuer: "UC Davis",
    date: "Issued May 2024",
    logo: "/ucdavis.jpg"
  },
  {
    title: "Certified EKG Technician (CET)",
    issuer: "NHA",
    date: "Issued Aug 2021",
    logo: "/nha.jpg"
  },
  {
    title: "Certified Nursing Assistant",
    issuer: "IDPH",
    date: "Issued Aug 2021",
    logo: "/idph.jpg"
  }
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-12 text-center">Certifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 flex items-start gap-4"
          >
            <img
              src={cert.logo}
              alt={`${cert.issuer} logo`}
              className="w-12 h-12 object-contain mt-1"
            />
            <div>
              <h4 className="text-lg font-semibold">{cert.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
