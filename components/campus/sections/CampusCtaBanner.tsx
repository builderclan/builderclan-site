"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CampusCtaBanner() {
  return (
    <section className="py-12 relative" aria-label="Apply CTA">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1c1c1c] via-[#222222] to-[#1c1c1c] border border-[#caff33]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(202,255,51,0.15)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#caff33]/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to Bring BuilderClan on Campus (BCC) to{" "}
            <span className="text-[#caff33]">Your University?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-xl mx-auto leading-relaxed mb-8">
            Build a thriving campus ecosystem where engineering students,
            educators, and researchers collaborate on hardware, software, AI,
            IoT, robotics, and open source to launch real products and startups.
          </p>

          <motion.a
            href="https://forms.gle/tBUDeHSj75sW7et69"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-bold text-sm transition-all duration-250 ease-out shadow-[0_0_25px_rgba(202,255,51,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
            aria-label="Start BuilderClan at Your Campus Application"
          >
            <span>Start BuilderClan at Your Campus</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
