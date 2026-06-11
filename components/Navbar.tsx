import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          LearnTrack
        </h1>

        <nav className="flex gap-8">

          <Link
            href="/"
            className="text-slate-300 hover:text-white transition"
          >
            Dashboard
          </Link>

          <Link
            href="/analytics"
            className="text-slate-300 hover:text-white transition"
          >
            Analytics
          </Link>

          <Link
            href="/profile"
            className="text-slate-300 hover:text-white transition"
          >
            Profile
          </Link>

          <Link
            href="/settings"
            className="text-slate-300 hover:text-white transition"
          >
            Settings
          </Link>

          <Link
            href="/admin"
            className="text-slate-300 hover:text-white transition"
          >
            Admin
          </Link>

        </nav>

      </div>
    </header>
  );
}