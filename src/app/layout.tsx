
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

const siteUrl = "https://darkcypher-portfolio.vercel.app";

const siteTitle =
  "DarkCypher | Software Engineer, Web Developer & AI Automation";

const siteDescription =
  "Samuel Ekpo, known as DarkCypher, is a software engineer building websites, full-stack applications, and AI automation solutions. Explore his projects in software engineering, web development, and cybersecurity.";

const socialPreviewImage = "/images/darkcypher-social-preview.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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

  alternates: {
    canonical: "/",
  },

  keywords: [
    "DarkCypher",
    "Samuel Ekpo",
    "Software Engineer",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "AI Automation",
    "AI Integration",
    "Cybersecurity",
    "Ethical Hacking",
    "Programming",
    "Software Development",
    "Website Development",
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
    url: siteUrl,
    siteName: "DarkCypher",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: "DarkCypher — Software Engineer, Developer and Cybersecurity Enthusiast",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@Sterling_Tech19",
    images: [
      {
        url: socialPreviewImage,
        alt: "DarkCypher — Software Engineer, Developer and Cybersecurity Enthusiast",
      },
    ],
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
