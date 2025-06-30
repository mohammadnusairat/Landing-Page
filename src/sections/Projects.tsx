import React from 'react';
import { motion } from 'framer-motion';

const projectsByCategory = {
  "Full-Stack Applications": [
    {
      title: "Arabic YouTube Transcript Translator",
      description: "Full-stack app that transcribes Arabic YouTube videos, translates them into English, and outputs timestamped Markdown, PDF, and SRT documents. Built with Vite + React frontend, Node/Express backend, and deployed on Vercel and Railway.",
      tech: ["React", "Vite", "Node.js", "Express.js", "4+ Cloud APIs", "Railway", "Vercel"],
      image: "/arabic-transcript-translator.png",
      github: "https://github.com/mohammadnusairat/Arabic-YouTube-Transcript-Translator",
      live: "https://arabic-youtube-transcript-translator.vercel.app/"
    },
    {
      title: "TreeScribe🌳",
      description: "Full-stack web app that allows the user to upload any folder and download its entire directory structure in seconds. Perfect for documentation, collaboration, or just staying organized!",
      tech: ["FastAPI", "Jinja2", "JavaScript", "Railway", "Jinja2", "CSS"],
      image: "/TreeScribe.png",
      github: "https://github.com/mohammadnusairat/TreeScribe",
      live: "https://web-production-7ebec6.up.railway.app/"
    },
    {
      title: "Obesity Risk Predictor",
      description: "ML pipeline with ensemble models and 98% accuracy. Feature engineering on 20k+ records. Full-stack Docker deployment in progress.",
      tech: ["Python", "Scikit-learn", "PostgreSQL", "Docker", "AWS"],
      image: "/obesity-risk-predictor.jpg",
      github: "https://github.com/mohammadnusairat/Full-Stack-Obesity-Insight-Predictor",
      live: "/CS412_Final_Project.pdf"
    },
    {
      title: "UIC Spot Finder",
      description: "Full-stack geospatial app that computes optimal meeting points using OSM data, Dijkstra’s algorithm, and geodesic Fermat point logic. Includes building filters, trie-based autocomplete, and interactive map rendering. Built with Next.js + Flask and deployed via Vercel and Railway.",
      tech: ["React", "Flask", "OpenStreetMap", "Geopy", "NetworkX", "Railway", "Vercel"],
      image: "/campus-app.png",
      github: "https://github.com/mohammadnusairat/Campus-Meeting-Point-Application",
      live: "https://campus-meeting-point-application.vercel.app/"
    },
    {
      title: "Book Review App",
      description: "Full-stack Flask app with secure auth, book search/filtering, and review aggregation built around raw SQL queries, deployed via Railway with a cloud-hosted MySQL database. Supports advanced queries, admin book control, and password hashing via SHA-256.",
      tech: ["Flask", "Python", "MySQL", "Railway", "Jinja2", "CSS"],
      image: "/book-review-app.png",
      github: "https://github.com/mohammadnusairat/Book-Review-Application",
      live: "https://web-production-0014.up.railway.app/"
    }
  ],
  "Machine Learning & Data Science": [
    {
      title: "Flight Delay Prediction",
      description: "ML pipeline trained on O'Hare airport data. Used visualization + ensemble methods to achieve 81% accuracy for airline schedule optimization.",
      tech: ["Pandas", "Matplotlib", "Logistic Regression", "Random Forest"],
      image: "/flight-delay-prediction.jpg",
      github: "https://github.com/mohammadnusairat/Flight-Time-Delay-Prediction",
      live: "Flight-Delay-Prediction.pdf"
    },
    {
      title: "Political Tweet Classifier",
      description: "Built a supervised machine learning pipeline to classify political tweets as liberal or conservative using TF-IDF, SVMs, and NLP preprocessing with NLTK.",
      tech: ["Python", "scikit-learn", "NLTK", "TF-IDF", "SVM"],
      image: "/political-tweet-classifier.jpg",
      github: "https://github.com/mohammadnusairat/Supervised-Machine-Learning-Pipeline",
      live: "/Political-Tweet-Classifier.pdf"
    },
    {
      title: "Scientific Abstract Clustering",
      description: "Performed unsupervised learning on 5,000 scientific abstracts using TF-IDF, dimensionality reduction (TruncatedSVD, PCA), and KMeans clustering.",
      tech: ["Python", "scikit-learn", "NLTK", "PCA", "KMeans"],
      image: "/scientific-abstract-clustering.jpg",
      github: "https://github.com/mohammadnusairat/Unsupervised-Learning-on-Scientific-Abstracts",
      live: "/Scientific-Abstract-Clustering.pdf"
    }
  ],
  "Statistical Modeling & Analysis": [
    {
      title: "Diabetes Progression Analysis",
      description: "Statistical modeling of diabetes disease progression using R. Applied multiple linear regression, model selection (Mallows’ Cp, adjusted R²), and diagnostic checks on the LARS diabetes dataset.",
      tech: ["R", "ggplot2", "car", "MASS", "dplyr", "corrplot"],
      image: "/diabetes-progression-analysis.jpg",
      github: "https://github.com/mohammadnusairat/Diabetes-Progression-Analysis",
      live: "/Diabetes-Progression-Analysis.pdf"
    },
    {
      title: "Optimized Tumor Prediction",
      description: "Applied statistical modeling and ML techniques to predict tumor malignancy using WDBC dataset. Achieved 97% accuracy using SVM and Random Forest after feature selection, multicollinearity checks, and model tuning.",
      tech: ["R", "Logistic Regression", "Random Forest", "SVM", "KNN", "Decision Tree"],
      image: "/optimized-tumor-prediction.png",
      github: "https://github.com/mohammadnusairat/Significant-Feature-Selection-and-Optimized-Tumor-Prediction",
      live: "/Optimized-Tumor-Prediction.pdf"
    }
  ]
};

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

      {Object.entries(projectsByCategory).map(([category, projects]) => (
        <div key={category} className="mb-16">
          <h4 className="text-2xl font-semibold mb-6">{category}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
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
        </div>
      ))}
    </motion.section>
  );
}
