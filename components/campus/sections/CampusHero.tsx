"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Cpu,
  FolderGit2,
  GraduationCap,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

export default function CampusHero() {
  return (
    <section className="pt-8 sm:pt-12 pb-12 relative" aria-label="Hero">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column Text (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            {/* Desktop Single Pill Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-semibold text-[#caff33] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BuilderClan on Campus (BCC)</span>
              <span className="text-[#383838]">•</span>
              <span className="text-[#a1a1aa] font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#caff33]" />
                Applications Open Once Every Academic Year
              </span>
            </div>

            {/* Mobile Double Compact Pills */}
            <div className="flex sm:hidden flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-[11px] font-semibold text-[#caff33] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>BuilderClan on Campus (BCC)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-[11px] font-medium text-[#a1a1aa] shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#caff33] shrink-0" />
                <span>Applications Open 1x / Year</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Building the{" "}
              <span className="text-[#caff33] drop-shadow-[0_0_20px_rgba(202,255,51,0.3)]">
                Next Generation of Builders.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mb-8 max-w-xl">
              BuilderClan on Campus empowers students and educators to build
              real hardware, software, AI, robotics, embedded systems, and
              open-source projects while developing leadership, collaboration,
              research, and startup experience beyond the classroom.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a
                href="https://forms.gle/tBUDeHSj75sW7et69"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-extrabold text-sm transition-all duration-250 ease-out shadow-[0_0_20px_rgba(202,255,51,0.3)] hover:shadow-[0_0_30px_rgba(202,255,51,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
                aria-label="Start BuilderClan at Your Campus Application"
              >
                <span>Start BuilderClan at Your Campus</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#directory"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-white font-semibold text-sm transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
              >
                <span>Explore Chapters</span>
              </motion.a>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
              {[
                { icon: Users, label: "Students & Educators" },
                { icon: Cpu, label: "Hardware & Software" },
                { icon: FolderGit2, label: "Open Source" },
                { icon: Rocket, label: "Projects & Startups" },
              ].map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-xl bg-[#1c1c1c]/90 border border-[#262626] text-[11px] sm:text-xs font-semibold text-[#d4d4d8] shadow-sm justify-center sm:justify-start"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#caff33] shrink-0" />
                    <span className="truncate sm:whitespace-nowrap">
                      {pill.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: 3D Floating Emblem Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px] sm:min-h-[360px] pt-8 pb-6 mt-10 lg:mt-0 [perspective:1000px]">
            {/* Radial Glow Halos */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#caff33]/20 via-[#a5cc29]/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

            {/* Center 3D Floating Campus Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [-10, 10, -10],
                rotateY: [-8, 8, -8],
                rotateX: [4, -4, 4],
              }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.8 },
                y: {
                  duration: 5.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
                rotateX: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.06, rotateY: 0, rotateX: 0 }}
              className="relative z-20 p-8 rounded-full bg-gradient-to-b from-[#1c1c1c] via-[#181818] to-[#141414] border-2 border-[#caff33]/40 hover:border-[#caff33] shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] hover:shadow-[0_0_50px_rgba(202,255,51,0.3)] transition-all cursor-pointer flex items-center justify-center"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#caff33]/10 border border-[#caff33]/30 flex items-center justify-center text-[#caff33] shadow-inner">
                <GraduationCap className="w-14 h-14 sm:w-18 sm:h-18 drop-shadow-[0_0_15px_rgba(202,255,51,0.5)]" />
              </div>
            </motion.div>

            {/* Floating Micro-Badge 1: Top-Right */}
            <motion.div
              className="absolute -top-3 right-0 sm:top-2 sm:right-2 z-30 backdrop-blur-md bg-[#1c1c1c]/90 border border-[#caff33]/40 hover:border-[#caff33] p-2.5 sm:p-3 rounded-2xl shadow-2xl flex items-center gap-2.5 sm:gap-3 transition-colors cursor-pointer max-w-[220px] sm:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [-8, 8, -8],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                y: {
                  duration: 4.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-1.5 sm:p-2 rounded-xl bg-[#caff33]/15 border border-[#caff33]/30 shrink-0">
                <Cpu className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#caff33]" />
              </div>
              <div className="text-left">
                <div className="text-[11px] sm:text-xs font-extrabold text-white">
                  Hardware & Software
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#a1a1aa]">
                  IoT, AI & Labs
                </div>
              </div>
            </motion.div>

            {/* Floating Micro-Badge 2: Bottom-Left */}
            <motion.div
              className="absolute -bottom-3 left-0 sm:bottom-2 sm:left-2 z-30 backdrop-blur-md bg-[#1c1c1c]/90 border border-[#caff33]/40 hover:border-[#caff33] p-2.5 sm:p-3 rounded-2xl shadow-2xl flex items-center gap-2.5 sm:gap-3 transition-colors cursor-pointer max-w-[220px] sm:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [8, -8, 8],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                y: {
                  duration: 5.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-1.5 sm:p-2 rounded-xl bg-[#caff33]/15 border border-[#caff33]/30 shrink-0">
                <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#caff33]" />
              </div>
              <div className="text-left">
                <div className="text-[11px] sm:text-xs font-extrabold text-white">
                  Annual Application
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#caff33] font-semibold flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#caff33] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#caff33]" />
                  </span>
                  1x / Academic Year
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Impact Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-24 sm:mt-32 max-w-5xl mx-auto"
        >
          {[
            { label: "Founding Chapter", val: "AISAT" },
            { label: "Student Builders", val: "50+" },
            { label: "Applications", val: "Once Every Academic Year" },
            { label: "Free Forever", val: "100%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl bg-[#1c1c1c]/80 border border-[#262626] text-center shadow-md hover:border-[#383838] transition-colors"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-[#caff33] mb-1">
                {stat.val}
              </div>
              <div className="text-xs font-medium text-[#a1a1aa]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
