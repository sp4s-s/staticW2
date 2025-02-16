export default function Home() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to the Documentation Site</h1>
          <p className="mt-4 text-lg">Your go-to resource for everything you need to know.</p>
          <a href="/docs" className="mt-8 inline-block px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
            Go to Docs
          </a>
        </div>
      </div>
    );
  }