"use client";

import { type Variants, motion } from "framer-motion";
import { ArrowUpRight, Cpu, Rocket, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const heroTextVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      className="min-h-[calc(100vh-6rem)] flex flex-col justify-start lg:justify-center pt-6 sm:pt-10 pb-12 relative overflow-hidden bg-[#141414]"
      id="home"
    >
      {/* Ambient Radial Lighting Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center h-full">
          {/* Left Text & CTA Content (7 Cols) */}
          <div className="col-span-12 lg:col-span-7 lg:mb-0 mb-12">
            <div className="flex flex-col justify-center h-full px-2">
              {/* Top Pill Badge */}
              <motion.div
                className="mb-6 flex items-center"
                custom={0}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={heroTextVariants}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c]/90 border border-[#262626] text-xs font-medium text-white shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#caff33]" />
                  <span>Build from the Foundation Up</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                className="mb-6"
                custom={1}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={heroTextVariants}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  A home for people who{" "}
                  <span className="text-[#caff33] drop-shadow-[0_0_20px_rgba(202,255,51,0.3)]">
                    love to build.
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mb-8 max-w-xl"
                custom={2}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={heroTextVariants}
              >
                From your first side project to your first startup, BuilderClan
                brings curious minds together to learn, collaborate, and build
                meaningful technology.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-4"
                custom={3}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={heroTextVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    href="#joinclan"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-semibold text-sm transition-all shadow-[0_0_15px_rgba(202,255,51,0.3)] hover:shadow-[0_0_25px_rgba(202,255,51,0.5)]"
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    href="#about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] hover:border-[#383838] text-white font-medium text-sm transition-all"
                  >
                    <span>Explore BuilderClan</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Visual Section (5 Cols): Floating Feature Cards */}
          <div className="col-span-12 lg:col-span-5 flex justify-center items-center relative min-h-[400px] sm:min-h-[440px] py-8 my-4">
            {/* Ambient Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-[#caff33]/20 via-[#a5cc29]/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

            {/* Central Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20 flex items-center justify-center my-6"
            >
              <Image
                src="/Logo.png"
                alt="BuilderClan Logo"
                width={320}
                height={320}
                priority
                className="w-48 sm:w-64 md:w-72 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </motion.div>

            {/* Floating Card 1: Top-Right (Everyone Welcome) */}
            <motion.div
              className="absolute top-10 right-0 sm:-top-2 sm:-right-4 z-30 backdrop-blur-md bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#caff33]/40 p-2 sm:p-3.5 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 transition-colors cursor-pointer max-w-[240px] sm:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [-8, 8, -8],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                y: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-1.5 sm:p-2 rounded-xl bg-[#caff33]/10 border border-[#caff33]/20 shrink-0">
                <Users className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#caff33]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs font-bold text-white">
                  Students • Professionals • Builders
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#a1a1aa]">
                  Teachers & Researchers Welcome
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Bottom-Left (Build Anything in Tech) */}
            <motion.div
              className="absolute -bottom-2 left-0 sm:-left-4 z-30 backdrop-blur-md bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#caff33]/40 p-2 sm:p-3.5 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 transition-colors cursor-pointer max-w-[240px] sm:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [8, -8, 8],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 },
                y: {
                  duration: 5.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-1.5 sm:p-2 rounded-xl bg-[#caff33]/10 border border-[#caff33]/20 shrink-0">
                <Rocket className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#caff33]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] sm:text-xs font-bold text-white">
                  Side Projects → Startups
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#a1a1aa]">
                  From Curiosity to Companies
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3: Top-Left (Hardware & Software) */}
            <motion.div
              className="absolute -top-3 left-0 sm:top-12 sm:-left-6 z-20 backdrop-blur-md bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#caff33]/40 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl shadow-xl flex items-center gap-2 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: [-4, 4, -4],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                x: {
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              <Cpu className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#caff33] shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-[#d4d4d8]">
                Hardware • Software • AI
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
