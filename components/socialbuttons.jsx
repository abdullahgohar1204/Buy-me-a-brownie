"use client";
import React from "react";

const SocialButton = ({
  icon,
  text,
  bgColor = "#312e81",
  hoverBg = "#4338ca",
  onClick,
}) => {
  return (
    <button
      className="flex items-center justify-center gap-3 w-full px-6 py-3 rounded-full font-semibold transition-all duration-300"
      style={{
        backgroundColor: bgColor,
        color: "#ffffff",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      <span className="flex items-center justify-center w-6 h-6">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default SocialButton;
