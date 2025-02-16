import { useState } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 dark:bg-gray-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Documentation</h1>
        <button onClick={toggleDarkMode} className="px-4 py-2 bg-gray-700 rounded-md">
          Toggle Dark Mode
        </button>
      </div>
    </header>
  );
}