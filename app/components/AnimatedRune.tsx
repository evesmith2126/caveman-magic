"use client"

import React, { useRef } from "react";

interface AnimatedRuneProps {
  symbol: string;
  color: string;
  animation?: "glow" | "pulse" | "all";
}

export const AnimatedRune: React.FC<AnimatedRuneProps> = ({
  symbol,
  color,
  animation = "all",
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  
  return (
    <div
      className={`rune-icon ${animation}`}
      style={{
        color,
        borderColor: color,
        fontSize: "3rem",
        padding: "1rem",
        border: "3px solid",
        borderRadius: "12px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
        cursor: "pointer",
      }}
    >
      {symbol}
    </div>
  );
};
