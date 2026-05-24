import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prabhav Setia",
  description:
    "Software Engineer specializing in AI-powered enterprise automation, full-stack platforms, and workflow systems. 94% ticket handling time reduction. Based in Bengaluru, India.",
  metadataBase: new URL("https://prabhavsetia.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Prabhav Setia",
    "Software Engineer",
    "AI Automation",
    "Full-Stack Developer",
    "React.js",
    "Node.js",
    "TypeScript",
    "Python",
    "LangChain",
    "Enterprise Automation",
    "Accenture",
  ],
  authors: [{ name: "Prabhav Setia" }],
  creator: "Prabhav Setia",
  openGraph: {
    title: "Prabhav Setia — Software Engineer",
    description:
      "Software Engineer specializing in AI-powered enterprise automation and full-stack platforms. 94% ticket handling time reduction, 78+ hrs saved daily.",
    url: "https://prabhavsetia.com",
    siteName: "Prabhav Setia",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhav Setia — Software Engineer",
    description:
      "AI-powered enterprise automation & full-stack platforms. 94% handling time reduction, 78+ hrs saved daily.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
