// src/sections/Skills.tsx
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = {
    "Languages": [
      "Python", "C++", "C", "C#", "Java", "JavaScript", "TypeScript", "SQL", "R", "SAS"
    ],
    "Web & App Development": [
      "React", "Next.js", "Flask", "Node.js", "Express", "HTML", "CSS", "Tailwind CSS"
    ],
    "Machine Learning & AI": [
      "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI API", "Pinecone"
    ],
    "Data & Visualization": [
      "PostgreSQL", "MongoDB", "SQLite", "Matplotlib", "Seaborn", "NetworkX", "Geopy"
    ],
    "Tools & DevOps": [
      "Git", "GitHub", "Jupyter Notebook", "VS Code", "Docker", "AWS", "Anaconda", "Stripe API", "Railway", "Vercel"
    ],
    "Design & Collaboration": [
      "Figma", "Agile/Scrum", "CI/CD", "MVC Design Pattern", "Technical Writing", "Test-Driven Development"
    ]
  };

  const categoryColors: { [key: string]: string } = {
    "Languages": "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700",
    "Web & App Development": "bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700",
    "Machine Learning & AI": "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
    "Data & Visualization": "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700",
    "Tools & DevOps": "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200 dark:border-red-700",
    "Design & Collaboration": "bg-pink-100 text-pink-800 border-pink-300 dark:bg-pink-900 dark:text-pink-200 dark:border-pink-700"
  };

  return (
    <motion.section
      id="skills"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map(skill => (
                <span
                  key={skill}
                  className={`px-4 py-2 border rounded-md text-sm font-medium ${categoryColors[category]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
