import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import RightSidebar from '../components/RightSidebar';

export default function Docs() {
  return (
    <div className="min-h-screen flex dark:bg-gray-900 dark:text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <SearchBar />
        <section>
          <h2 id="main-topic" className="text-2xl font-bold mb-4">
            Main Topic
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nisi nec lorem feugiat, vel malesuada nunc tincidunt.
          </p>
          <h3 id="subtopic-1" className="text-xl font-semibold mt-6 mb-2 ml-4">
            Subtopic 1
          </h3>
          <p className="ml-4">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod ligula non justo aliquet.
          </p>
          <h3 id="subtopic-2" className="text-xl font-semibold mt-6 mb-2 ml-4">
            Subtopic 2
          </h3>
          <p className="ml-4">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </section>
      </main>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}