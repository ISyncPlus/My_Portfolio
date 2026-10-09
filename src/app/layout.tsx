import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ebube-portfolio.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5d871" },
    { media: "(prefers-color-scheme: dark)", color: "#16131f" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ebube Ezedimbu — Creative Developer & UI Engineer",
    template: "%s | Ebube Ezedimbu",
  },
  description:
    "Ebube Ezedimbu is a creative developer and UI engineer based in Nigeria crafting thoughtful web interfaces, scalable interactive systems, and intuitive digital products.",
  applicationName: "Ebube Ezedimbu Portfolio",
  authors: [{ name: "Ebube Ezedimbu", url: "https://github.com/ISyncPlus" }],
  creator: "Ebube Ezedimbu",
  publisher: "Ebube Ezedimbu",
  keywords: [
    "Ebube Ezedimbu",
    "Ebube",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ebube Ezedimbu Portfolio",
    title: "Ebube Ezedimbu — Creative Developer & UI Engineer",
    description:
      "Creative developer and UI engineer based in Nigeria crafting thoughtful web interfaces, scalable interactive systems, and intuitive digital products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ebube Ezedimbu — Creative Developer & UI Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebube Ezedimbu — Creative Developer & UI Engineer",
    description:
      "Creative developer and UI engineer based in Nigeria crafting thoughtful web interfaces, scalable interactive systems, and intuitive digital products.",
    creator: "@ISyncPlus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ebube Ezedimbu — Creative Developer & UI Engineer Portfolio",
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
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.svg",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
