import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://builderclan.org";
const siteName = "BuilderClan";
const siteDescription =
  "BuilderClan is an open tech community for professionals, students, teachers, researchers, beginners, and tech lovers. Build fun projects, open-source products, and startups across hardware and software.";

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "BuilderClan | Community for Pros, Students, Researchers & Beginners",
    template: "%s | BuilderClan",
  },
  description: siteDescription,
  keywords: [
    "BuilderClan",
    "tech community",
    "students and beginners in tech",
    "tech teachers and researchers",
    "software engineers and pros",
    "fun side projects",
    "open source products",
    "tech startups",
    "hardware and software community",
    "build anything in tech",
    "robotics and IoT",
    "embedded systems",
    "software development",
  ],
  authors: [{ name: "BuilderClan", url: siteUrl }],
  creator: "BuilderClan",
  publisher: "BuilderClan",
  alternates: { canonical: "/" },
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title:
      "BuilderClan | Community for Pros, Students, Researchers & Beginners",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuilderClan | Community for Pros, Students, Researchers & Beginners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BuilderClan | Community for Pros, Students, Researchers & Beginners",
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@builderclan",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BuilderClan",
  url: siteUrl,
  logo: `${siteUrl}/Logo.png`,
  description: siteDescription,
  email: "main.builderclan@gmail.com",
  sameAs: [
    "https://discord.gg/GFnBvjc5tj",
    "https://github.com/BuilderClan",
    "https://instagram.com/builderclan",
    "https://linkedin.com/company/builderclan",
  ],
  foundingDate: "2024",
  areaServed: "Worldwide",
  knowsAbout: [
    "Hardware Engineering & Embedded Systems",
    "Software Development & AI",
    "Open Source Products & Fun Side Projects",
    "Tech Startups & Ventures",
    "Students, Teachers, Researchers & Professionals Community",
    "Robotics & IoT",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BuilderClan",
  url: siteUrl,
  description: siteDescription,
  potentialAction: {
    "@type": "JoinAction",
    target: "https://discord.gg/GFnBvjc5tj",
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
      className="bg-[#141414] dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#141414" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-navbutton-color" content="#141414" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#141414] text-white">
        <main>{children}</main>
      </body>
      <GoogleAnalytics gaId="G-Y5L2HBGQLW" />
    </html>
  );
}
