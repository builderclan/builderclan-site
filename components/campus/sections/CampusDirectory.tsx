"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  ExternalLink,
  Globe,
  GraduationCap,
  MapPin,
  RotateCcw,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";
import { CAMPUS_CHAPTERS } from "../data/campusData";

export default function CampusDirectory() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChapters = CAMPUS_CHAPTERS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <section
      className="py-20 relative"
      id="directory"
      aria-label="Campus Directory"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Our <span className="text-[#caff33]">Campus Chapters</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-xl mx-auto">
            Explore our founding university chapter or apply to bring
            BuilderClan to your college.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-4.5 h-4.5 text-[#a1a1aa] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search university, city, or tech stack..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#1c1c1c] border border-[#262626] focus:border-[#caff33] text-sm text-white placeholder-[#71717a] outline-none transition-all shadow-md focus:shadow-[0_0_15px_rgba(202,255,51,0.2)]"
            aria-label="Search campus chapters"
          />
        </div>

        {/* Chapter Cards Grid */}
        {filteredChapters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredChapters.map((chapter) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#161616] border border-[#262626] hover:border-[#caff33]/50 transition-all flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(202,255,51,0.15)] relative overflow-hidden"
              >
                {/* Top Corner Halo */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#caff33]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#caff33]/20 transition-all" />

                <div>
                  {/* Top status Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[#caff33]/10 border border-[#caff33]/30 text-[#caff33] shadow-inner group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-semibold text-[#caff33]">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#caff33] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#caff33]" />
                      </span>
                      <span>{chapter.status}</span>
                    </div>
                  </div>

                  {/* Title & Location */}
                  <h3 className="text-xl font-extrabold text-white mb-2.5 group-hover:text-[#caff33] transition-colors leading-snug tracking-tight">
                    {chapter.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#a1a1aa] mb-6">
                    <div className="p-1 rounded-full bg-[#caff33]/10 text-[#caff33]">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      {chapter.city}, {chapter.country}
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="p-4 rounded-2xl bg-[#141414]/90 border border-[#262626] grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-[#71717a] block text-[10px] font-bold uppercase tracking-wider mb-0.5">
                        CHAPTER
                      </span>
                      <span className="text-xs font-bold text-white block truncate">
                        {chapter.shortName}
                      </span>
                    </div>
                    <div className="border-l border-[#262626] pl-4">
                      <span className="text-[#71717a] block text-[10px] font-bold uppercase tracking-wider mb-0.5">
                        MEMBERS
                      </span>
                      <span className="text-xs font-extrabold text-[#caff33] inline-flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {chapter.members}+ Builders
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {chapter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-[#141414] border border-[#262626] text-[#a1a1aa] group-hover:border-[#383838] transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href={chapter.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#222222] border border-[#262626] hover:border-[#caff33]/50 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
                    aria-label={`Visit ${chapter.name} Website`}
                  >
                    <Globe className="w-4 h-4 text-[#caff33]" />
                    <span>Visit College Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#71717a] group-hover/btn:text-[#caff33] group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Apply Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1c1c1c]/60 to-[#141414]/60 border-2 border-dashed border-[#383838] hover:border-[#caff33]/60 transition-all flex flex-col justify-between group text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#caff33]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#caff33]/15 transition-all" />

              <div className="flex flex-col items-center justify-center my-auto py-8">
                <div className="w-14 h-14 rounded-2xl bg-[#1c1c1c] border border-[#262626] group-hover:border-[#caff33]/50 flex items-center justify-center text-[#caff33] mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2.5">
                  Your University Here
                </h3>
                <p className="text-xs text-[#a1a1aa] max-w-xs mx-auto leading-relaxed mb-6">
                  Bring BuilderClan hardware labs, robotics workshops, and
                  open-source projects to your campus. Applications open once
                  per academic year.
                </p>
                <a
                  href="https://forms.gle/tBUDeHSj75sW7et69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-extrabold text-xs transition-all shadow-[0_0_20px_rgba(202,255,51,0.25)] hover:shadow-[0_0_30px_rgba(202,255,51,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#caff33]"
                >
                  <span>Start BuilderClan at Your Campus</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 sm:p-9 rounded-3xl bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#383838] max-w-lg mx-auto text-center shadow-xl backdrop-blur-md relative overflow-hidden transition-colors"
          >
            <div className="flex flex-col items-center relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#caff33]/10 border border-[#caff33]/25 text-[#caff33] flex items-center justify-center mb-4 shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                No Chapters Found
              </h3>

              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-sm mx-auto mb-6">
                No active chapter matches{" "}
                <span className="text-[#caff33] font-medium">
                  &quot;{searchQuery}&quot;
                </span>
                . Be the pioneer to bring BuilderClan to your campus!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href="https://forms.gle/tBUDeHSj75sW7et69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-bold text-xs transition-all shadow-[0_0_15px_rgba(202,255,51,0.2)]"
                >
                  <span>Start BuilderClan at Your Campus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#141414] hover:bg-[#222222] border border-[#262626] text-xs font-medium text-[#a1a1aa] hover:text-white transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-[#caff33]" />
                  <span>Reset Search</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
