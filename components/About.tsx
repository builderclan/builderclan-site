"use client";

import { type Variants, motion } from "framer-motion";
import {
  BookOpenCheck,
  Briefcase,
  Eye,
  Flame,
  Gamepad2,
  GraduationCap,
  PackageCheck,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const audience = [
    {
      icon: GraduationCap,
      badge: "CURIOUS BEGINNERS",
      title: "Learn by Building",
      description:
        "Start with real projects, ask questions without judgment, receive mentorship, and build confidence through hands-on experience.",
    },
    {
      icon: Briefcase,
      badge: "PROFESSIONALS",
      title: "Collaborate & Mentor",
      description:
        "Work on ambitious projects, explore new technologies, share industry experience, and help shape the next generation of builders.",
    },
    {
      icon: BookOpenCheck,
      badge: "RESEARCHERS & EDUCATORS",
      title: "Share Knowledge",
      description:
        "Advance hardware, software, AI, and research while mentoring curious minds and transforming ideas into real-world impact.",
    },
    {
      icon: Flame,
      badge: "LIFELONG LEARNERS",
      title: "Keep Building",
      description:
        "You don't need a title to belong here, only curiosity and the desire to keep learning and building.",
    },
  ];

  const buildSpectrum = [
    {
      icon: Gamepad2,
      subtitle: "START HERE",
      title: "Side Projects",
      description:
        "Experiment, explore new technologies, and learn by building things that genuinely interest you.",
    },
    {
      icon: PackageCheck,
      subtitle: "BUILD TOGETHER",
      title: "Open Source",
      description:
        "Contribute to meaningful software and hardware projects, collaborate with other builders, and create technology anyone can use.",
    },
    {
      icon: Rocket,
      subtitle: "MAKE AN IMPACT",
      title: "Products & Startups",
      description:
        "Turn ideas into products, validate them with the community, find collaborators, and launch real ventures.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#141414]" id="about">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-tr from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why We Exist</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Building More Than Technology.{" "}
            <span className="text-[#caff33]">We&apos;re Building People.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Great technology doesn&apos;t begin with code; it begins with
            curious people willing to learn, build, and share. BuilderClan
            exists to bring those people together, creating an environment where
            ideas become projects, projects become products, and builders grow
            together.
          </p>
        </motion.div>

        {/* Dual Hero Cards: Mission & Vision */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#caff33]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#caff33]/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-[#caff33]/10" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#262626] text-[#caff33] group-hover:bg-[#caff33] group-hover:text-[#1c1c1c] transition-colors duration-300">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#caff33]">
                  PURPOSE
                </span>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
            </div>

            <p className="text-[#d4d4d8] text-base leading-relaxed">
              Empower builders of all backgrounds to learn, collaborate, and
              build meaningful technology together.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#caff33]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#caff33]/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-[#caff33]/10" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#262626] text-[#caff33] group-hover:bg-[#caff33] group-hover:text-[#1c1c1c] transition-colors duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#caff33]">
                  FUTURE
                </span>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
            </div>

            <p className="text-[#d4d4d8] text-base leading-relaxed">
              Become the world&apos;s most welcoming home for builders.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 1: Where You Fit (4 Card Grid) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Everyone Starts Somewhere</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              There&apos;s a Place for{" "}
              <span className="text-[#caff33]">Every Builder.</span>
            </h3>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re taking your first steps or mentoring the next
              generation, BuilderClan grows with you. Everyone has something to
              learn, something to build, and something to share.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {audience.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/50 p-6 rounded-2xl transition-all shadow-md flex flex-col justify-between h-full w-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#222222] text-[#caff33]">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="inline-block text-[11px] font-semibold text-[#caff33] uppercase tracking-wider mb-1">
                    {item.badge}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 2: What You'll Build Together (4 Card Grid) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What You&apos;ll Build Together</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Build What <span className="text-[#caff33]">Matters.</span>
            </h3>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
              From your first side project to open source, research, products,
              and startups, BuilderClan is where ideas become reality.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {buildSpectrum.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/50 p-6 rounded-2xl transition-all shadow-lg flex flex-col justify-between h-full w-full"
              >
                <div>
                  <div className="p-3.5 w-fit rounded-xl bg-[#222222] text-[#caff33] mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#caff33] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
