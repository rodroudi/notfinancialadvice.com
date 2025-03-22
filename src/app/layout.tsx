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
      <body className={`${geist.className} antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
