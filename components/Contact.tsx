"use client";

import { ArrowUpRight, Briefcase, Handshake, Mail } from "lucide-react";
import { useState } from "react";

interface ContactItem {
  title: string;
  text: string;
  link?: string;
}

type TabType = "general" | "partnership" | "careers";

interface TabConfig {
  id: TabType;
  label: string;
  icon: typeof Mail;
}

const tabs: TabConfig[] = [
  { id: "general", label: "General Inquiry", icon: Mail },
  { id: "partnership", label: "Partnerships", icon: Handshake },
  { id: "careers", label: "Careers & Mentorship", icon: Briefcase },
];

const tabContent: Record<TabType, ContactItem[]> = {
  general: [
    {
      title: "Community Support",
      text: "Have questions about joining BuilderClan or getting started as a beginner? Reach out directly via Discord or email.",
      link: "https://discord.gg/GFnBvjc5tj",
    },
    {
      title: "Hardware & Software Projects",
      text: "Interested in pitching your hardware device or software project to BuilderClan? Learn how to get contributors.",
      link: "https://github.com/BuilderClan",
    },
    {
      title: "Workshops & Build Sessions",
      text: "Want to host a tech workshop, share a hardware build log, or learn about upcoming community build sessions?",
      link: "#faq",
    },
    {
      title: "General Inquiries",
      text: "For general questions, community ideas, or feedback, send us an email at main.builderclan@gmail.com.",
      link: "mailto:main.builderclan@gmail.com",
    },
  ],
  partnership: [
    {
      title: "Sponsor Hackathons & Labs",
      text: "Partner with BuilderClan to sponsor hardware labs, hackathons, and developer prizes for 500+ tech builders.",
      link: "mailto:main.builderclan@gmail.com",
    },
    {
      title: "Community & Open-Source Collaboration",
      text: "Collaborate with our community of builders on hardware prototypes, software tools, and open-source projects.",
      link: "mailto:main.builderclan@gmail.com",
    },
  ],
  careers: [
    {
      title: "Join Core Team & Project Leads",
      text: "Lead hardware/software projects, moderate Discord, organize hackathons, or coordinate campus chapters.",
      link: "/careers",
    },
    {
      title: "Community Peer Support",
      text: "Connect with fellow builders, share build logs, get hardware & software help, and learn together in an open environment.",
      link: "https://discord.gg/GFnBvjc5tj",
    },
  ],
};

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<TabType>("general");

  return (
    <section
      className="py-24 relative overflow-hidden bg-[#141414]"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get in <span className="text-[#caff33]">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Get in touch with us to explore collaboration, partnerships, or
            community inquiries. We&apos;re here to support and innovate
            together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Navigation Tabs */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div
              className="bg-[#1c1c1c] border border-[#262626] p-4 rounded-2xl flex flex-col gap-3"
              role="tablist"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full px-5 py-3.5 rounded-xl font-medium text-sm text-left flex items-center gap-3 transition-all ${
                      isActive
                        ? "bg-[#caff33] text-[#1c1c1c] font-semibold shadow-md"
                        : "text-[#a1a1aa] hover:bg-[#262626] hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Section Cards */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {tabContent[activeTab].map((item) => (
              <a
                key={item.title}
                href={item.link || "#"}
                target={item.link?.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.link?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-full flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#caff33] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#caff33] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
