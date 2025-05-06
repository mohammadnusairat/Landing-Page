// src/components/Navbar.tsx
import { Moon, Sun } from 'lucide-react';

export function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (val: boolean) => void }) {
  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-semibold">Mohammad Nusairat</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

// src/sections/Hero.tsx
export function Hero() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold">Hi, I'm Mohammad Nusairat</h2>
      <p className="mt-4 text-lg max-w-xl">
        Data Scientist | Software Engineer | AI Research Fellow. I build intelligent systems and full-stack applications with clean, scalable code.
      </p>
      <a
        href="#resume"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View My Resume
      </a>
    </section>
  );
}

// src/sections/About.tsx
export function About() {
  return (
    <section className="py-20" id="about">
      <h3 className="text-2xl font-semibold mb-4">About Me</h3>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
        I'm a UIC Data Science student with a concentration in Computer Science, passionate about building practical AI solutions, full-stack tools, and cognitive research in algorithmic thinking.
      </p>
    </section>
  );
}

// src/sections/Experience.tsx
export function Experience() {
  return (
    <section className="py-20" id="experience">
      <h3 className="text-2xl font-semibold mb-6">Experience</h3>
      <ul className="space-y-6">
        <li>
          <strong>Undergraduate Research Assistant</strong> — UIC, Sept 2024 - May 2025<br/>
          <em>Studying Aha! moments in programming and cognitive problem-solving.</em>
        </li>
        <li>
          <strong>Software Developer - AI Trainer</strong> — Outlier, Jul 2024 - Present<br/>
          <em>LLM quality improvements using robust test cases and algorithmic challenges.</em>
        </li>
        <li>
          <strong>Software Engineering Fellow</strong> — Headstarter AI, Jul 2024 - Aug 2024<br/>
          <em>Built 5 AI apps using NextJs, OpenAI, Pinecone, and Stripe API.</em>
        </li>
      </ul>
    </section>
  );
}

// src/sections/Projects.tsx
export function Projects() {
  return (
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
  );
}

// src/sections/Resume.tsx
export function Resume() {
  return (
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
  );
}

// src/sections/Footer.tsx
export function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Mohammad Nusairat. Built with React + Tailwind CSS.</p>
      <div className="mt-2">
        <a href="mailto:mnusairat2003@gmail.com" className="hover:underline">Email</a> ·
        <a href="https://linkedin.com/in/mohammad-nusairat" className="hover:underline ml-2">LinkedIn</a> ·
        <a href="https://github.com" className="hover:underline ml-2">GitHub</a>
      </div>
    </footer>
  );
}
