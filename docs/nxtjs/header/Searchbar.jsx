import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search [Ctrl/Cmd + K]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 200)}
        className="px-4 py-2 w-64 border rounded-md dark:bg-gray-800 dark:border-gray-700"
      />
      <div
        className={`absolute top-full left-0 mt-2 w-64 max-h-48 overflow-y-auto bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg ${
          showResults ? '' : 'hidden'
        }`}
      >
        <ul className="divide-y dark:divide-gray-700">
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Search Result 1
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Search Result 2
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Search Result 3
          </li>
        </ul>
      </div>
    </div>
  );
}