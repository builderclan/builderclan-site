"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Minus, Plus, Search, Sparkles } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is BuilderClan?",
    answer:
      "BuilderClan is a home for people who love to build. We are an open technology community where students, professionals, researchers, educators, founders, and curious beginners come together to learn, collaborate, and build hardware, software, open-source projects, research, products, and startups.",
  },
  {
    question: "Who can join BuilderClan?",
    answer:
      "Anyone with a builder mindset is welcome. Whether you're a student, developer, hardware engineer, designer, researcher, educator, founder, or simply curious about technology, BuilderClan is open to everyone regardless of background or experience.",
  },
  {
    question: "What can I build at BuilderClan?",
    answer:
      "You can build anything that helps you grow as a builder, from side projects and creative experiments to open-source software, embedded systems, AI applications, IoT devices, robotics, research projects, developer tools, products, and startups.",
  },
  {
    question: "I'm a beginner. Can I still join?",
    answer:
      "Absolutely. Everyone starts somewhere. BuilderClan encourages learning by building, so you'll find beginner-friendly projects, mentors, peer support, workshops, and a welcoming community to help you build with confidence.",
  },
  {
    question: "Does BuilderClan support both hardware and software?",
    answer:
      "Yes. BuilderClan is built for both hardware and software builders. Our community explores embedded systems, IoT, robotics, electronics, PCB design, AI, web development, mobile apps, cloud computing, systems programming, and more.",
  },
  {
    question: "Is BuilderClan free to join?",
    answer:
      "Yes. BuilderClan is completely free to join. Our community, discussions, learning resources, project collaboration, open-source initiatives, and community events are open to everyone.",
  },
  {
    question: "How does BuilderClan help me learn?",
    answer:
      "BuilderClan believes in learning by building. Members learn through real projects, open source, workshops, mentorship, peer collaboration, campus chapters, and hands-on experience rather than only tutorials.",
  },
  {
    question: "Can I contribute to open source through BuilderClan?",
    answer:
      "Yes. BuilderClan encourages open-source collaboration by helping members discover beginner-friendly projects, contribute to existing repositories, and launch new community-driven initiatives across hardware and software.",
  },
  {
    question: "How can I get involved?",
    answer:
      "Join our community, introduce yourself, explore ongoing projects, or share an idea you'd like to build. You can contribute code, design hardware, participate in open source, join a startup team, mentor others, or simply start learning alongside fellow builders.",
  },
  {
    question: "How can I contact the BuilderClan team?",
    answer:
      "You can reach us anytime at main.builderclan@gmail.com or connect with the BuilderClan team through our official Discord community and social platforms.",
  },
];

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="py-24 relative overflow-hidden bg-[#141414]" id="faq">
      {/* FAQPage JSON-LD for Google Rich Results & AI Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-[#caff33]/6 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HAVE QUESTIONS?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-[#caff33]">Questions</span>
          </h2>
          <p className="text-base text-[#a1a1aa] max-w-xl mx-auto leading-relaxed">
            Everything you need to know about BuilderClan, community projects,
            and how to get involved.
          </p>
        </motion.div>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="w-4.5 h-4.5 text-[#a1a1aa] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., hackathons, fee, projects)..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#1c1c1c] border border-[#262626] focus:border-[#caff33] text-sm text-white placeholder-[#71717a] outline-none transition-all shadow-md focus:shadow-[0_0_15px_rgba(202,255,51,0.2)]"
          />
        </div>

        {/* FAQ List */}
        {filteredFaqs.length > 0 ? (
          <div className="divide-y divide-[#262626]">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full py-7 flex items-start gap-6 text-left group"
                  >
                    {/* Number */}
                    <span
                      className={`text-sm font-mono font-bold shrink-0 mt-0.5 transition-colors duration-200 ${isOpen ? "text-[#caff33]" : "text-[#3f3f46] group-hover:text-[#52525b]"}`}
                    >
                      {num}.
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-base sm:text-lg font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-[#a1a1aa] group-hover:text-[#d4d4d8]"}`}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}
                    <div
                      className={`shrink-0 mt-0.5 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-[#caff33] border-[#caff33] text-[#1c1c1c]"
                          : "border-[#333333] text-[#71717a] group-hover:border-[#444444]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                      >
                        <div className="pb-7 pl-11 pr-10 text-[#a1a1aa] text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#1c1c1c] border border-[#262626] rounded-2xl p-8">
            <p className="text-white font-medium mb-1">
              No matching questions found
            </p>
            <p className="text-sm text-[#a1a1aa]">
              Try searching for different keywords or contact us directly below.
            </p>
          </div>
        )}

        {/* Still Have Questions */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-[#262626] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#caff33]" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">
                Still have questions?
              </h4>
              <p className="text-sm text-[#a1a1aa]">
                Can&apos;t find what you&apos;re looking for? We&apos;d love to
                talk.
              </p>
            </div>
            <a
              href="mailto:main.builderclan@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] text-sm font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk to us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
