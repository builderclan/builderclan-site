"use client";

import styles from "@/app/signup/signup.module.css";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

const DISCORD_APP_URL = process.env.NEXT_PUBLIC_DISCORD_APP_URL;
const DISCORD_WEB_URL =
  process.env.NEXT_PUBLIC_DISCORD_WEB_URL || "https://discord.gg/GFnBvjc5tj";

export default function Success() {
  const openDiscord = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (DISCORD_APP_URL) {
      window.open(DISCORD_APP_URL, "_self");
    }

    setTimeout(() => {
      if (!document.hasFocus()) return;
      window.location.href = DISCORD_WEB_URL;
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={styles.successMessage}
    >
      <div className="w-16 h-16 rounded-full bg-[#caff33]/10 border border-[#caff33]/30 flex items-center justify-center text-[#caff33] mb-2 shadow-[0_0_20px_rgba(202,255,51,0.2)]">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-semibold text-[#caff33]">
        <Sparkles className="w-3.5 h-3.5" />
        <span>WELCOME TO THE CLAN</span>
      </div>

      <h2 className={styles.successTitle}>Registration Successful!</h2>

      <p className="text-sm text-[#a1a1aa] max-w-sm leading-relaxed">
        Your BuilderClan account has been created. Join our Discord community to
        connect with 500+ builders worldwide.
      </p>

      <div className={styles.buttonGroup}>
        <a
          href={DISCORD_WEB_URL}
          onClick={openDiscord}
          className={`${styles.button} inline-flex items-center justify-center gap-2`}
        >
          <span>Go to Discord Community</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
