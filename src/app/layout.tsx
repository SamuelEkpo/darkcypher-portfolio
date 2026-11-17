
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "DarkCypher | Software Engineer & Ethical Hacker";

const siteDescription =
  "Explore the portfolio of Samuel Ekpo, known as DarkCypher. Discover software engineering projects, web development, cybersecurity, ethical hacking, AI, and technology innovation.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | DarkCypher",
  },

  description: siteDescription,

  applicationName: "DarkCypher",

  authors: [
    {
      name: "Samuel Ekpo",
    },
  ],

  creator: "Samuel Ekpo",

  publisher: "DarkCypher",

  keywords: [
    "DarkCypher",
    "Samuel Ekpo",
    "Software Engineer",
    "Aspiring Ethical Hacker",
    "Web Development",
    "Full-Stack Development",
    "Cybersecurity",
    "Penetration Testing",
    "Artificial Intelligence",
    "AI Automation",
    "Programming",
    "Technology Innovation",
  ],

  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "DarkCypher",
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    creator: "@Sterling_Tech19",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
