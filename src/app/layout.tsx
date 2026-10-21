import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioConfig } from "@/data/portfolioData";

export const viewport: Viewport = {
  themeColor: "#070a12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://paragmali.dev"),
  title: `${portfolioConfig.personal.displayName} | ${portfolioConfig.personal.headline}`,
  description: portfolioConfig.personal.bioParagraph,
  keywords: [
    "Parag Mali",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "Computer Vision",
    "YOLOv8",
    "Time Series",
    "LSTM",
    "Agentic AI",
    "RAG",
    "LangChain",
    "Google Student Ambassador",
  ],
  authors: [{ name: portfolioConfig.personal.fullName, url: portfolioConfig.personal.linkedIn }],
  creator: portfolioConfig.personal.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paragmali.dev",
    title: `${portfolioConfig.personal.displayName} | AI/ML Engineer Portfolio`,
    description: portfolioConfig.personal.bioParagraph,
    siteName: `${portfolioConfig.personal.displayName} Portfolio`,
    images: [
      {
        url: portfolioConfig.personal.profilePhotoPath,
        width: 800,
        height: 800,
        alt: `${portfolioConfig.personal.displayName} - AI/ML Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.personal.displayName} | AI/ML Engineer`,
    description: portfolioConfig.personal.bioParagraph,
    images: [portfolioConfig.personal.profilePhotoPath],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-gray-100 antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
