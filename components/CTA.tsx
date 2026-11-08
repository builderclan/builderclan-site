"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-[#141414]" id="joinclan">
      <div className="container mx-auto">
        <div className="relative rounded-3xl bg-[#1c1c1c] border border-[#262626] p-10 sm:p-14 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Radial Green Glow behind Button */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#caff33]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Soft Right Gradient Overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#caff33]/5 via-[#caff33]/2 to-transparent pointer-events-none" />

          {/* Left Text Content with Generous Whitespace & Balanced Wrap */}
          <div className="text-center lg:text-left max-w-3xl relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-[1.18]">
              Ready to build together with <br className="hidden sm:inline" />
              <span className="text-[#caff33]">BuilderClan?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl">
              Join a community of builders learning, collaborating, and creating
              hardware, software, open-source projects, research, products, and
              startups together.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 shrink-0 flex flex-wrap items-center justify-center lg:justify-end gap-4">
            <motion.a
              href="https://discord.gg/GFnBvjc5tj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-semibold text-sm transition-all duration-250 ease-out shadow-[0_0_15px_rgba(202,255,51,0.3)] hover:shadow-[0_0_25px_rgba(202,255,51,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
              aria-label="Join the BuilderClan Community on Discord"
            >
              <span>Join the Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#opportunity"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] hover:border-[#383838] text-white font-medium text-sm transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
              >
                <span>Explore Projects</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
