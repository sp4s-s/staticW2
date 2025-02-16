export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-800 dark:bg-gray-950 text-white p-4">
        <ul className="space-y-2">
          <li>
            <a href="#main-topic" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
              Introduction
            </a>
          </li>
          <li>
            <a href="#subtopic-1" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
              Getting Started
            </a>
          </li>
          <li>
            <a href="#subtopic-2" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
              Advanced Topics
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
              API Reference
            </a>
          </li>
        </ul>
      </aside>
    );
  }