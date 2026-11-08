"use client";

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CampusAudience from "./sections/CampusAudience";
import CampusCtaBanner from "./sections/CampusCtaBanner";
import CampusDirectory from "./sections/CampusDirectory";
import CampusHero from "./sections/CampusHero";
import CampusHowItWorks from "./sections/CampusHowItWorks";
import CampusWhyStart from "./sections/CampusWhyStart";

export default function CampusContent() {
  return (
    <div className="bg-[#141414] min-h-screen text-white relative overflow-hidden">
      <header className="fixed w-full top-4 sm:top-6 left-0 z-50 pointer-events-none">
        <Header />
      </header>

      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <main className="mt-[108px] sm:mt-[116px] pb-16 relative z-10">
        <CampusHero />
        <CampusWhyStart />
        <CampusHowItWorks />
        <CampusAudience />
        <CampusDirectory />
        <CampusCtaBanner />
      </main>

      <Footer />
      <div className="fixed z-10">
        <BackToTop />
      </div>
    </div>
  );
}
