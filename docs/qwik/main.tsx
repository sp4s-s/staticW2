import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const isDarkMode = useSignal(true);
  const showSearchResults = useSignal(false);
  const searchQuery = useSignal('');

  return (
    <>
      {/* Landing Page */}
      <div id="landing-page" class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div class="text-center">
          <h1 class="text-4xl font-bold">Welcome to the Documentation Site</h1>
          <p class="mt-4 text-lg">Your go-to resource for everything you need to know.</p>
          <button
            onClick$={() => {
              document.getElementById('landing-page')?.classList.add('hidden');
              document.getElementById('doc-site')?.classList.remove('hidden');
            }}
            class="mt-8 px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
          >
            Go to Docs
          </button>
        </div>
      </div>

      {/* Documentation Site */}
      <div id="doc-site" class="hidden min-h-screen flex dark:bg-gray-900 dark:text-white">
        {/* Sidebar */}
        <aside class="w-64 bg-gray-800 dark:bg-gray-950 text-white p-4">
          <button
            onClick$={() => (isDarkMode.value = !isDarkMode.value)}
            class="w-full text-left py-2 px-4 bg-gray-700 rounded-md mb-4"
          >
            Toggle Dark Mode
          </button>
          <ul class="space-y-2">
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded-md">
                Introduction
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded-md">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded-md">
                Advanced Topics
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded-md">
                API Reference
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main class="flex-1 p-8 overflow-y-auto">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold">Documentation</h1>
            <div class="relative">
              <input
                type="text"
                placeholder="Search [Ctrl/Cmd + K]"
                class="px-4 py-2 w-64 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                onInput$={(e) => (searchQuery.value = (e.target as HTMLInputElement).value)}
                onFocus$={() => (showSearchResults.value = true)}
                onBlur$={() => setTimeout(() => (showSearchResults.value = false), 200)}
              />
              <div
                class={`absolute top-full left-0 mt-2 w-64 max-h-48 overflow-y-auto bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg ${
                  showSearchResults.value ? '' : 'hidden'
                }`}
              >
                <ul class="divide-y dark:divide-gray-700">
                  <li class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Search Result 1
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Search Result 2
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Search Result 3
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <section>
            <h2 id="main-topic" class="text-2xl font-bold mb-4">
              Main Topic
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nisi nec lorem feugiat, vel malesuada nunc tincidunt.
            </p>
            <h3 id="subtopic-1" class="text-xl font-semibold mt-6 mb-2 ml-4">
              Subtopic 1
            </h3>
            <p class="ml-4">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod ligula non justo aliquet.
            </p>
            <h3 id="subtopic-2" class="text-xl font-semibold mt-6 mb-2 ml-4">
              Subtopic 2
            </h3>
            <p class="ml-4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside class="w-64 bg-gray-100 dark:bg-gray-900 p-4">
          <h2 class="text-lg font-bold mb-4">On This Page</h2>
          <ul class="space-y-2">
            <li>
              <a
                href="#main-topic"
                class="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
              >
                Main Topic
              </a>
            </li>
            <li class="ml-4">
              <a
                href="#subtopic-1"
                class="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
              >
                Subtopic 1
              </a>
            </li>
            <li class="ml-4">
              <a
                href="#subtopic-2"
                class="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
              >
                Subtopic 2
              </a>
            </li>
          </ul>
        </aside>
      </div>

      {/* Global Styles */}
      <style>
        {`
          body.dark {
            background-color: #1f2937;
            color: white;
          }
          .hidden {
            display: none;
          }
        `}
      </style>

      {/* Global Keyboard Shortcut */}
      <script>
        {`
          document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
              e.preventDefault();
              document.querySelector('input[type="text"]')?.focus();
            }
            if (e.key === 'Escape') {
              document.querySelector('input[type="text"]')?.blur();
            }
          });
        `}
      </script>
    </>
  );
});