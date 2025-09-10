import React, { useState } from "react";

const Logo = ({ size = 40, src = "/AnupamLogo.png" }) => {
  const [useFallback, setUseFallback] = useState(false);

  if (!useFallback) {
    return (
      <img
        className="logo-img"
        src={src}
        width={size}
        height={size}
        alt="Anupam logo"
        onError={() => setUseFallback(true)}
        style={{ display: "block", objectFit: "contain" }}
      />
    );
  }

  return (
    <svg
      className="logo-svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#logo-gradient)" opacity="0.15" />
      <path
        d="M16 46L28 18h8l-6.5 15.2c2.7-2.1 5.8-3.1 9.2-3.1 6.9 0 11.3 3.7 11.3 9.7 0 6.2-4.8 10.2-11.8 10.2-4.9 0-9.2-1.9-12.2-5.2l3.7-4c2.2 2.3 5.1 3.5 8.4 3.5 3.6 0 6-1.9 6-4.6 0-2.7-2.3-4.4-5.9-4.4-2.8 0-5.2.9-7.7 3L22.6 46H16z"
        fill="url(#logo-gradient)"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default Logo;