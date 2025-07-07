import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: "MOV - Create Amazing Aftermovies with AI",
  description:
    "Invite friends to take short videos during events and parties. Our AI creates an edited aftermovie showing the POV of different attendees.",
  keywords: "MOV, aftermovie, AI, social app, video editing, events, parties",
  authors: [{ name: "MOV Team" }],
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/mov-logo.png" }],
    other: [
      {
        rel: "icon",
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "MOV - Create Amazing Aftermovies with AI",
    description:
      "Invite friends to take short videos during events and parties. Our AI creates an edited aftermovie showing the POV of different attendees.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "MOV Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOV - Create Amazing Aftermovies with AI",
    description:
      "Invite friends to take short videos during events and parties. Our AI creates an edited aftermovie showing the POV of different attendees.",
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
