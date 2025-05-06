// App.tsx
import { useState, useEffect } from 'react';
import About from './sections/About';
import Hero from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Resume } from './sections/Resume';
import { Footer } from './sections/Footer';
import { Navbar } from './components/Navbar';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
