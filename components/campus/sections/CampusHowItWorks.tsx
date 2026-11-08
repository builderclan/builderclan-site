"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../data/campusData";

export default function CampusHowItWorks() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-label="How It Works"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-semibold text-[#caff33] mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>BUILDER JOURNEY PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            How BuilderClan on Campus{" "}
            <span className="text-[#caff33]">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-lg mx-auto leading-relaxed">
            A structured step-by-step pathway for leaders bringing hands-on
            tech, hardware labs, open source, and startups to their university.
          </p>
        </div>

        {/* Step-by-Step Pathway Grid with Connectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#161616] border border-[#262626] hover:border-[#caff33]/50 transition-all duration-250 ease-out shadow-md hover:shadow-[0_0_25px_rgba(202,255,51,0.12)] group flex flex-col justify-between h-full relative overflow-hidden"
              >
                <div>
                  {/* Top Header Row with Mono Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#caff33] tracking-wider">
                      {step.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#141414] border border-[#262626] group-hover:border-[#caff33]/40 text-[#a1a1aa] group-hover:text-[#caff33] transition-colors duration-250">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Builder-Focused Copy */}
                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug tracking-tight group-hover:text-[#caff33] transition-colors duration-250">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Connector Indicator at Bottom */}
                <div className="pt-4 mt-4 border-t border-[#262626]/60 flex items-center justify-between text-[11px] font-semibold text-[#71717a] group-hover:text-[#caff33] transition-colors duration-250">
                  <span>STEP {step.step} OF 06</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Inspiring Closing Philosophy Statement */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-[#71717a] font-medium max-w-md mx-auto leading-relaxed opacity-90">
            Every great builder starts with a single step.
          </p>
        </div>
      </div>
    </section>
  );
}
