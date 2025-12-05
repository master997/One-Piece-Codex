import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">One Piece Codex</h1>
        <p className="text-lg text-gray-600">
          Your complete guide to the fictional world of One Piece
        </p>
      </section>

      {/* Explore Categories section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-8">Explore Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Characters card */}
          <Link
            href="/characters"
            className="border rounded-lg p-6 text-center hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">Characters</h3>
            <p className="text-gray-600">Explore the characters of One Piece</p>
          </Link>

          {/* Fruits card */}
          <Link
            href="/fruits"
            className="border rounded-lg p-6 text-center hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">Fruits</h3>
            <p className="text-gray-600">Discover Devil Fruits</p>
          </Link>

          {/* Crews card */}
          <Link
            href="/crews"
            className="border rounded-lg p-6 text-center hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">Crews</h3>
            <p className="text-gray-600">Learn about pirate crews</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
