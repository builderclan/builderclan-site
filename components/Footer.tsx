"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Campus Chapters", href: "/campus" },
    { name: "Opportunity", href: "/#opportunity" },
    { name: "FAQ", href: "/#faq" },
    { name: "Careers", href: "/careers" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/BuilderClan", icon: GithubIcon },
    { name: "Discord", href: "https://discord.gg/GFnBvjc5tj", icon: DiscordIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/builderclan/", icon: LinkedinIcon },
    { name: "Instagram", href: "https://www.instagram.com/thebuilderclan/", icon: InstagramIcon },
  ];

  return (
    <footer className="relative bg-[#141414] text-[#d4d4d8] pt-16 pb-8 overflow-hidden" role="contentinfo">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
          
          {/* Brand Info Column (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <Link href="/#home" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33] rounded-xl" aria-label="BuilderClan Home">
              <div className="p-2 rounded-xl bg-[#1c1c1c] border border-[#262626] group-hover:border-[#caff33]/50 transition-colors duration-250">
                <Image src="/LogoShort.png" alt="BuilderClan Logo" width={206} height={161} className="w-8 h-auto" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-[#caff33] transition-colors duration-250">
                BuilderClan
              </span>
            </Link>
            
            <p className="text-sm text-[#a1a1aa] max-w-sm leading-relaxed">
              BuilderClan is a home for people who love to build. Learn, collaborate, and create hardware, software, open-source projects, research, products, and startups with builders around the world.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <a
                href="mailto:main.builderclan@gmail.com"
                className="flex items-center gap-2 text-xs font-medium text-white bg-[#222222] hover:bg-[#282828] border border-[#262626] hover:border-[#caff33]/40 px-3.5 py-2 rounded-full transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
                aria-label="Email BuilderClan"
              >
                <Mail className="w-3.5 h-3.5 text-[#caff33]" />
                <span>main.builderclan@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-[#a1a1aa] bg-[#1c1c1c] border border-[#262626] px-3.5 py-2 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#caff33]" />
                <span>Worldwide / Remote</span>
              </div>
            </div>
          </div>

          {/* Navigation Column (3 Cols) */}
          <nav className="md:col-span-3" aria-label="Footer Navigation">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#caff33] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group/link text-[#a1a1aa] hover:text-[#caff33] transition-all duration-250 ease-out inline-flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33] rounded"
                  >
                    <span className="transition-transform duration-250 ease-out group-hover/link:translate-x-1">
                      {link.name}
                    </span>
                    <span className="h-[1px] w-full bg-[#caff33] scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-250 ease-out mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect with BuilderClan Column (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#caff33] mb-4">
              Connect with BuilderClan
            </h4>

            {/* Social Icons (GitHub, Discord, LinkedIn, Instagram) */}
            <div className="flex items-center justify-start gap-3 mb-6">
              {socialLinks.map((soc) => (
                <motion.a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-[#1c1c1c] border border-[#262626] text-white hover:text-[#caff33] hover:border-[#caff33] hover:shadow-[0_0_15px_rgba(202,255,51,0.3)] transition-all duration-250 ease-out flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
                  aria-label={soc.name}
                >
                  <soc.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Join Community Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1c1c1c] to-[#222222] border border-[#262626] flex items-center justify-between gap-3 shadow-md">
              <div>
                <div className="text-sm font-semibold text-white">Join the Community</div>
                <div className="text-xs text-[#b0b0b8] mt-0.5">Connect with builders worldwide</div>
              </div>
              <motion.a
                href="https://discord.gg/GFnBvjc5tj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1c1c1c] bg-[#caff33] hover:bg-[#bce62e] px-4 py-2.5 rounded-full transition-all duration-250 ease-out shadow-sm hover:shadow-[0_0_15px_rgba(202,255,51,0.4)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
                aria-label="Join BuilderClan Discord Community"
              >
                <span>Join Discord →</span>
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>© {currentYear} BuilderClan. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#caff33] transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33] rounded">
              Privacy Policy
            </Link>
            <span className="text-[#262626]">|</span>
            <Link href="#" className="hover:text-[#caff33] transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33] rounded">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}