"use client";

import { type Variants, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  FolderGit2,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function OpportunitySection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const opportunities = [
    {
      num: "01",
      icon: Rocket,
      title: "Turn Side Projects into Startups",
      description:
        "Start with small experiments, collaborate on real projects, and grow your ideas into open source, research, products, or startups.",
      badge: "BUILD JOURNEY",
    },
    {
      num: "02",
      icon: FolderGit2,
      title: "Build in Open Source",
      description:
        "Contribute to meaningful software and hardware projects, collaborate with experienced builders, review code, and create technology anyone can use.",
      badge: "OPEN SOURCE",
    },
    {
      num: "03",
      icon: BookOpen,
      title: "Learn. Build. Grow.",
      description:
        "Learn from peers, mentors, workshops, and real projects while continuously improving your skills through collaboration.",
      badge: "LEARN TOGETHER",
    },
    {
      num: "04",
      icon: Users,
      title: "A Community for Every Builder",
      description:
        "Connect with students, engineers, designers, researchers, educators, founders, and creators who share the builder mindset.",
      badge: "BUILDER NETWORK",
    },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden bg-[#141414]"
      id="opportunity"
    >
      {/* Subtle Radial Green Glow Behind Entire Section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 sm:h-[450px] bg-gradient-to-tr from-[#caff33]/10 via-[#caff33]/5 to-transparent pointer-events-none blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How You Build</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            More Than a Community.{" "}
            <span className="text-[#caff33]">A Place to Build.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            BuilderClan gives you the people, guidance, and environment to turn
            curiosity into open source, products, research, and startups.
          </p>
        </motion.div>

        {/* 2x2 Opportunity Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {opportunities.map((item) => (
            <motion.div
              key={item.num}
              variants={itemVariants}
              whileHover={{ y: -7 }}
              className="h-full"
            >
              <Link
                href="#joinclan"
                className="group relative bg-[#1c1c1c]/90 hover:bg-[#222222] border border-[#262626] hover:border-[#caff33] hover:shadow-[0_0_25px_rgba(202,255,51,0.2)] rounded-3xl px-8 py-10 sm:px-10 sm:py-14 transition-all duration-300 ease-out shadow-xl overflow-hidden flex flex-col justify-between h-full cursor-pointer block"
              >
                {/* Top Accent & Numbering */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#262626] text-[#caff33] group-hover:border-[#caff33]/60 transition-colors duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#222222] border border-[#262626] text-xs text-[#a1a1aa] font-medium tracking-wide group-hover:border-[#caff33]/40 group-hover:text-white transition-colors duration-300">
                      {item.badge}
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-[#383838] group-hover:text-[#caff33] transition-colors duration-300">
                      {item.num}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#caff33] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Subtle Arrow Indicator */}
                <div className="mt-8 pt-4 border-t border-[#262626]/60 flex items-center justify-end">
                  <ArrowUpRight className="w-4 h-4 text-[#caff33] transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="#joinclan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-semibold text-sm transition-all shadow-lg hover:shadow-[0_0_20px_rgba(202,255,51,0.4)]"
          >
            <span>Get Started with BuilderClan</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
