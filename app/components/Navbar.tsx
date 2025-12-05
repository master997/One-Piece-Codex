import Link from "next/link"; // Next.js link for page navigation

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white py-4">
      {/* Centered container */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          One Piece Codex
        </Link>

        {/* Navigation links */}
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            href="/characters"
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Characters
          </Link>

          <Link
            href="/fruits"
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Fruits
          </Link>

          <Link
            href="/crews"
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Crews
          </Link>
        </div>
      </div>
    </nav>
  );
}
