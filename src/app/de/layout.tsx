import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Schwarzer Bildschirm & Weißes Bild – Vollbild kostenlos online",
  description:
    "Schwarzer Bildschirm (#000000) und weißes Bild (#FFFFFF) im Vollbild: kostenloses Online-Tool für Pixeltest, OLED-Stromsparen und Bildschirm-Reinigung – kein Download, keine App.",
  keywords: [
    "schwarzer bildschirm",
    "schwarzes vollbild",
    "schwarz vollbild",
    "schwarzer screen",
    "weißes bild",
    "weißer bildschirm",
    "black screen bild",
    "vollbild schwarz",
    "bildschirm schwarz",
  ],
  alternates: {
    canonical: "/de",
    languages: {
      de: "/de",
      en: "/black-screen",
      "x-default": "/black-screen",
    },
  },
  openGraph: {
    type: "website",
    url: "/de",
    siteName: SITE_NAME,
    locale: "de_DE",
    title:
      "Schwarzer Bildschirm & Weißes Bild – Vollbild kostenlos online",
    description:
      "Kostenloses Online-Vollbild in Schwarz (#000000) oder Weiß (#FFFFFF): Pixeltest, OLED-Stromsparen, Reinigung – kein Download.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DeRootLayout({ children }: LayoutProps<"/de">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-zinc-200">
        {children}
      </body>
    </html>
  );
}
