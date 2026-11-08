"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { TARGET_AUDIENCE } from "../data/campusData";

export default function CampusAudience() {
  return (
    <section
      className="py-24 bg-[#141414] relative overflow-hidden"
      aria-label="Target Audience"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-semibold text-[#caff33] mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>ECOSYSTEM AUDIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Who is BuilderClan on Campus{" "}
            <span className="text-[#caff33]">For?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
            A home for anyone passionate about technology, learning, and
            creating together across campus.
          </p>
        </div>

        {/* Audience Grid with Transformation & Outcome Copy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {TARGET_AUDIENCE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#161616] border border-[#262626] hover:border-[#caff33]/50 transition-all duration-250 ease-out shadow-md hover:shadow-[0_0_25px_rgba(202,255,51,0.12)] group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#caff33]/10 border border-[#caff33]/25 flex items-center justify-center text-[#caff33] mb-5 shadow-sm group-hover:scale-105 transition-transform duration-250 ease-out">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug tracking-tight group-hover:text-[#caff33] transition-colors duration-250">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Closing Quote */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-[#71717a] font-medium max-w-md mx-auto leading-relaxed opacity-90">
            BuilderClan isn&apos;t defined by roles, it grows through people who
            love to build.
          </p>
        </div>
      </div>
    </section>
  );
}
