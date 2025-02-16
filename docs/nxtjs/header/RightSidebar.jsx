export default function RightSidebar() {
    return (
      <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-4">
        <h2 className="text-lg font-bold mb-4">On This Page</h2>
        <ul className="space-y-2">
          <li>
            <a href="#main-topic" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
              Main Topic
            </a>
          </li>
          <li className="ml-4">
            <a href="#subtopic-1" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
              Subtopic 1
            </a>
          </li>
          <li className="ml-4">
            <a href="#subtopic-2" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
              Subtopic 2
            </a>
          </li>
        </ul>
      </aside>
    );
  }