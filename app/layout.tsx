import "./globals.css"; // Global styles
import type { Metadata } from "next";
import Navbar from "./components/Navbar"; // Navbar shown on all pages

export const metadata: Metadata = {
  title: "One Piece Codex",
  description: "One Piece info encyclopedia",
};

// Root layout wraps every page in the app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar /> {/* Top navigation */}
        {/* Main page content */}
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
