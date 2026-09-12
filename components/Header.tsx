"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pathname === "/careers") {
      setActiveLink("careers");
      return;
    }

    if (pathname === "/campus") {
      setActiveLink("campus");
      return;
    }

    if (pathname !== "/") {
      setActiveLink("");
      return;
    }

    const sectionIds = ["home", "about", "opportunity", "faq"];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveLink(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Opportunity", href: "/#opportunity", id: "opportunity" },
    { name: "FAQ", href: "/#faq", id: "faq" },
    { name: "Campus", href: "/campus", id: "campus" },
    { name: "Careers", href: "/careers", id: "careers" },
  ];

  return (
    <div className="px-4 container mx-auto max-w-6xl pointer-events-auto">
      <div
        className={`rounded-full transition-all duration-300 backdrop-blur-xl border px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl ${
          scrolled
            ? "bg-[#181818]/95 border-[#333333] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#1c1c1c]/85 border-[#262626]"
        }`}
      >
        {/* Logo Brand */}
        <Link href="/#home" className="flex items-center group">
          <Image
            src="/LogoShort.png"
            alt="BuilderClan Logo"
            width={206}
            height={161}
            priority
            className="w-8 h-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#141414]/70 p-1.5 rounded-full border border-[#262626]">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-[#1c1c1c] font-semibold bg-[#caff33] shadow-[0_0_10px_rgba(202,255,51,0.3)]"
                    : "text-[#a1a1aa] hover:text-white hover:bg-[#222222]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Action CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#joinclan"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-[0_0_15px_rgba(202,255,51,0.4)]"
          >
            <span>Join Clan</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full bg-[#222222] border border-[#262626] text-[#caff33] hover:bg-[#282828] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden mt-2"
          >
            <div className="rounded-2xl bg-[#1c1c1c]/95 border border-[#262626] backdrop-blur-2xl p-5 shadow-2xl flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#caff33] text-[#1c1c1c] font-semibold"
                        : "text-[#d4d4d8] hover:bg-[#262626] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-[#262626] mt-1">
                <Link
                  href="/#joinclan"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#caff33] text-[#1c1c1c] text-sm font-semibold shadow-md"
                >
                  <span>Join Clan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}