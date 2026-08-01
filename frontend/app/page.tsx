export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-6xl font-bold mb-6">
          🌍 Travel Together
        </h1>

        <p className="text-2xl text-slate-400 mb-10">
          Discover places you'll both love ❤️
        </p>

        <button className="rounded-xl bg-blue-600 px-8 py-4 text-xl font-semibold transition hover:bg-blue-700">
          Start Planning
        </button>
      </div>
    </main>
  );
}