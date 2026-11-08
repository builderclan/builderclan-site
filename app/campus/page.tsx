import CampusContent from "@/components/campus/CampusContent";
import type { Metadata } from "next";

const siteUrl = "https://builderclan.org";
const pageTitle =
  "BuilderClan on Campus (BCC) | Building the Next Generation of Builders";
const pageDescription =
  "BuilderClan on Campus (BCC) brings students and educators together to learn, collaborate, build hardware and software projects, contribute to open source, conduct research, and turn ideas into products and startups.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/campus",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/campus`,
    siteName: "BuilderClan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const campusJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "BuilderClan on Campus (BCC)",
  url: `${siteUrl}/campus`,
  description: pageDescription,
  parentOrganization: {
    "@type": "Organization",
    name: "BuilderClan",
    url: siteUrl,
  },
};

export default function CampusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(campusJsonLd),
        }}
      />
      <CampusContent />
    </>
  );
}
