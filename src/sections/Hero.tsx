import { motion } from 'framer-motion';
import { Github } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-20 gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      {/* Text content */}
      <div className="md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi! I'm Mohammad,&nbsp;
        <span className="relative inline-block group cursor-pointer whitespace-nowrap">
          <span className="relative z-10 text-blue-700 dark:text-blue-300 animate-[pulse-glow_3s_ease-in-out_infinite]">
            AI Software Engineer
          </span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          <span className="absolute inset-0 rounded-md ring-2 ring-blue-300/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></span>
        </span>
      </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-4">
          I design and build intelligent systems that are fast, scalable, and user-focused. My variety of experience spans full-stack development, ML model training and deployment, data science, and research in computer programming.
          <br />
          <span className="inline-block">
            I recently graduated with a B.S. in Data Science (Computer Science concentration) from the University of Illinois Chicago. I’m currently working as a{' '}
            <span className="relative inline-block group cursor-pointer">
              <span className="relative z-10 text-blue-700 dark:text-blue-300 animate-[pulse-glow_3s_ease-in-out_infinite]">
                Data Scientist
              </span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="absolute inset-0 rounded-md ring-2 ring-blue-300/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></span>
            </span>
            {/* {' '} at{' '}
            <a
              href="https://www.constellation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900 transition-colors"
            >
              Brooksource
            </a> */}
            , and pursuing a M.S. in Computer Science at the University of Illinois Urbana-Champaign. Let’s connect!
          </span>
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          {/* View Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">View Resume</span>
            <svg
              className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform relative z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="absolute inset-0 rounded-lg animate-[pulse-glow_3s_ease-in-out_infinite] bg-blue-500/20 blur-md opacity-70" />
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
          </a>

          {/* View GitHub Button */}
          <a
            href="https://github.com/mohammadnusairat"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <Github className="w-4 h-4 relative z-10" />
            <span className="relative z-10">View GitHub</span>
            <span className="absolute inset-0 rounded-lg animate-[pulse-glow_3s_ease-in-out_infinite] bg-gray-400/20 blur-md opacity-70" />
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
          </a>
        </div>
      </div>
      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/bannerMN.jpeg"
          alt="Mohammad Nusairat working at laptop"
          className="rounded-xl shadow-lg max-h-[500px] object-cover"
          loading="lazy"
        />
      </div>
    </motion.section>
  );
}
