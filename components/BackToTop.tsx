"use client";

import { MoveUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;

  return (
    <Link
      className="back-to-top fixed bottom-10 right-10 cursor-pointer shadow-lg hover:scale-110 transition-transform"
      href="#home"
      aria-label="Back to top"
    >
      <MoveUp className="w-6 h-6 text-[#1c1c1c]" />
    </Link>
  );
}
