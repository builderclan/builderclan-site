import BackToTop from "@components/BackToTop";
import Footer from "@components/Footer";
import Header from "@components/Header";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities and open community roles at BuilderClan. Connect with 500+ global builders and contribute to impactful open-source software.",
  alternates: {
    canonical: "https://builderclan.org/careers",
  },
  openGraph: {
    title: "Careers | BuilderClan",
    description:
      "Explore career opportunities and open community roles at BuilderClan. Connect with 500+ global builders.",
    url: "https://builderclan.org/careers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuilderClan Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | BuilderClan",
    description:
      "Join BuilderClan, a global community of hardware and software builders.",
    images: ["/og-image.png"],
  },
};

export default function Careers() {
  return (
    <>
      <header className="fixed w-full top-4 sm:top-6 left-0 z-50 pointer-events-none">
        <Header />
      </header>

      <main className="min-h-screen pt-28 pb-20 bg-[#141414] relative overflow-hidden">
        {/* Ambient Radial Lighting Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-60" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAREERS AT BUILDERCLAN</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Build the Future <span className="text-[#caff33]">Together</span>
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
              We are an open tech community for professionals, students,
              teachers, researchers, beginners, and tech lovers. Join us to
              build anything from fun side projects to open-source products and
              startups.
            </p>
          </div>

          {/* No Open Positions Banner */}
          <div className="bg-[#1c1c1c]/90 border border-[#262626] rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#caff33]/5 rounded-bl-full pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-[#222222] border border-[#262626] flex items-center justify-center mx-auto mb-6 text-[#caff33]">
              <Briefcase className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              No Open Full-Time Positions Currently
            </h2>

            <p className="text-base text-[#a1a1aa] max-w-xl mx-auto mb-8 leading-relaxed">
              We don&apos;t have active full-time job openings at this moment.
              However, our community is constantly opening hardware/software
              project lead, peer mentorship, and BuilderClan On Campus (BCC)
              leadership roles!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://discord.gg/GFnBvjc5tj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-semibold text-sm transition-all shadow-[0_0_15px_rgba(202,255,51,0.3)] hover:shadow-[0_0_25px_rgba(202,255,51,0.5)]"
              >
                <span>Join Community Discord</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:main.builderclan@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] hover:border-[#383838] text-white font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#caff33]" />
                <span>Send Spontaneous Application</span>
              </a>
            </div>
          </div>

          {/* Additional Community Roles Cards (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/50 transition-all p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-[#222222] text-[#caff33] w-fit mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Project Leads
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-4">
                  Have an idea for a fun side hack, open-source product, or
                  startup? Lead a team of community builders and turn ideas into
                  reality.
                </p>
              </div>
              <a
                href="https://discord.gg/GFnBvjc5tj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#caff33] hover:underline"
              >
                <span>Propose a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/50 transition-all p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-[#222222] text-[#caff33] w-fit mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Peer Mentors
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-4">
                  Support beginners, students, and curious minds by reviewing
                  code & schematics, answering questions, and hosting build
                  sessions.
                </p>
              </div>
              <a
                href="mailto:main.builderclan@gmail.com"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#caff33] hover:underline"
              >
                <span>Become a Mentor</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/50 transition-all p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-[#222222] text-[#caff33] w-fit mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  BCC Campus Leads
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-4">
                  Build a campus ecosystem where students and teachers work side
                  by side to learn, experiment, and build tech projects
                  together.
                </p>
              </div>
              <Link
                href="/campus"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#caff33] hover:underline"
              >
                <span>Apply as BCC Lead</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <div className="fixed z-10">
        <BackToTop />
      </div>
    </>
  );
}
