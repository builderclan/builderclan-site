import type React from "react";

export interface ButtonProps {
  content: React.ReactNode;
  href: string;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ content, href, active = false }) => {
  return (
    <a
      href={href}
      className={`text-sm lg:text-base px-6 py-3 rounded-[82px] font-normal transition-all duration-300 ${
        active
          ? "btn-builder-active hover:opacity-90"
          : "text-white hover:text-[#CAFF33]"
      }`}
    >
      {content}
    </a>
  );
};

export default Button;
