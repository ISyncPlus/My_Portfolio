import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://isyncplus.vercel.app");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d8e1e7" },
    { media: "(prefers-color-scheme: dark)", color: "#101819" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iSyncPlus — Creative Developer & UI Engineer",
    template: "%s | iSyncPlus",
  },
  description:
    "iSyncPlus is a creative developer and UI engineer based in Nigeria crafting thoughtful web interfaces, scalable interactive systems, and intuitive digital products.",
  applicationName: "iSyncPlus Portfolio",
  authors: [{ name: "iSyncPlus", url: "https://github.com/ISyncPlus" }],
  creator: "iSyncPlus",
  publisher: "iSyncPlus",
  keywords: [
    "iSyncPlus",
    "Creative Developer",
    "Frontend Engineer",
    "Full-Stack Developer",
    "UI/UX Engineer",
    "Creative Technologist",
    "Web Developer Nigeria",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Interactive Web Design",
    "Software Engineer Portfolio",
  ],
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "iSyncPlus Portfolio",
    title: "iSyncPlus — Creative Developer & UI Engineer",
    description:
      "Creative developer and UI engineer based in Nigeria crafting thoughtful web interfaces, scalable interactive systems, and intuitive digital products.",
    images: [
      {
        url: "/brand/isyncplus-relay-social.png",
        secureUrl: `${siteUrl}/brand/isyncplus-relay-social.png`,
        width: 1200,
        height: 630,
        alt: "iSyncPlus — Creative Developer & UI Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iSyncPlus — Creative Developer & UI Engineer",
    description:
      "Creative developer and UI engineer based in Nigeria crafting thoughtful web interfaces, scalable interactive systems, and intuitive digital products.",
    creator: "@ISyncPlus",
    images: [
      {
        url: "/brand/isyncplus-relay-social.png",
        width: 1200,
        height: 630,
        alt: "iSyncPlus — Creative Developer & UI Engineer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/brand/isyncplus-relay-apple.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, montserrat.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <ProgressiveBlur position="top" height="110px" backgroundColor="transparent" blurAmount="4px" />
          <ProgressiveBlur position="bottom" height="64px" backgroundColor="transparent" blurAmount="2px" />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
