import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "notfinancialadvice.com",
  description: "A collection of thoughts and experiences on freedom tech, longevity, and entrepreneurship.",
  metadataBase: new URL("https://notfinancialadvice.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased max-w-3xl mx-auto px-4 py-8`}>
        <nav className="mb-12 text-center">
          <div>
            <a href="/" className="hover:text-gray-600">Home</a>
            <span className="mx-6"> | </span>
            <a href="https://rodroudi.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              About
            </a>
          </div>
        </nav>

        <main className="mx-auto">
          {children}
        </main>

        <footer className="mt-20 pt-6 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} notfinancialadvice.com</p>
        </footer>
      </body>
    </html>
  );
}
