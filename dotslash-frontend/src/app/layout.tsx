import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "DotSlash '26",
  description:
    "The official website for DotSlash 2026, the techno-cultural fest of CSE CET",
  openGraph: {
    title: "DotSlash '26",
    description:
      "The official website for DotSlash 2026, the techno-cultural fest of CSE CET",
    url: "https://dotslashcet.in/",
    type: "website",
    images: "https://i.postimg.cc/qBPjg18z/card-Image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "DotSlash '26",
    description:
      "The official website for DotSlash 2026, the techno-cultural fest of CSE CET",
    images: "https://i.postimg.cc/qBPjg18z/card-Image.jpg",
    site: "dotslashcet.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="landing" className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}