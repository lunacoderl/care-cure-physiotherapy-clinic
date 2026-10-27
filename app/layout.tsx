import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingRail } from "@/components/layout/FloatingRail";
import { CookieBanner } from "@/components/layout/CookieBanner";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Care & Cure Physiotherapy And Sports Injury Clinic | Malkapuram, Visakhapatnam",
    template: "%s | Care & Cure Physiotherapy Vizag",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.doctor.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-['Inter',sans-serif] bg-[#F7FBFA] text-[#0F2A2A] selection:bg-[#0E7C73]/20 selection:text-[#0E7C73]">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0E7C73] focus:text-white focus:rounded-xl focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <div id="main-content" className="flex-1">
          {children}
        </div>

        {/* Floating Patient Actions */}
        <FloatingRail />

        {/* Cookie Banner */}
        <CookieBanner />

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
