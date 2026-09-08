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
