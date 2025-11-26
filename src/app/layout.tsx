import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bold Media Group",
  description: "Your Voice. Your Brand. Boldly Amplified. Professional podcast production services that help you create amazing content without the technical headaches.",
  keywords: "podcast production, professional podcast, podcast services, audio production, video podcast, podcast editing, podcast distribution, podcast strategy",
  authors: [{ name: "Bold Media Group" }],
  creator: "Bold Media Group",
  publisher: "Bold Media Group",
  metadataBase: new URL("https://boldmediagroup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bold Media Group",
    description: "Your Voice. Your Brand. Boldly Amplified. Professional podcast production services.",
    url: "https://boldmediagroup.com",
    siteName: "Bold Media Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bold Media Group - Professional Podcast Production",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bold Media Group",
    description: "Your Voice. Your Brand. Boldly Amplified. Professional podcast production services.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
