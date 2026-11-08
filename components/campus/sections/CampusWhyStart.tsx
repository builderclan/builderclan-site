"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WHY_START_CARDS } from "../data/campusData";

export default function CampusWhyStart() {
  return (
    <section className="py-24 bg-[#141414] relative overflow-hidden" aria-label="Why Start a Chapter">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-[#caff33]/10 via-[#caff33]/5 to-transparent blur-3xl pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-semibold text-[#caff33] mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEARN. BUILD. LEAD.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Why Start BuilderClan on <span className="text-[#caff33]">Your Campus?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-3xl mx-auto">
            BuilderClan on Campus empowers students and educators to learn by building, collaborate on meaningful projects, contribute to open source, and grow into the next generation of technical leaders.
          </p>
        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {WHY_START_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#161616] border border-[#262626] hover:border-[#caff33]/50 transition-all duration-250 ease-out shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(202,255,51,0.12)] group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#caff33]/10 border border-[#caff33]/25 flex items-center justify-center text-[#caff33] mb-6 shadow-sm group-hover:scale-105 transition-transform duration-250 ease-out">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug tracking-tight">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Muted Section Transition */}
        <div className="mt-20 text-center">
          <p className="text-xs sm:text-sm text-[#71717a] font-medium max-w-lg mx-auto leading-relaxed opacity-90">
            Every BuilderClan chapter is unique, but every chapter shares one mission: building the next generation of builders.
          </p>
        </div>
      </div>
    </section>
  );
}
