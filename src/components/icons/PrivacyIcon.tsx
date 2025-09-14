import React from "react";

const PrivacyIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff00ff" />
        <stop offset="100%" stopColor="#00f0ff" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="10" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Connections */}
    <line x1="50" y1="150" x2="120" y2="80" stroke="url(#grad1)" strokeWidth="2" />
    <line x1="50" y1="150" x2="120" y2="220" stroke="url(#grad1)" strokeWidth="2" />
    <line x1="180" y1="80" x2="250" y2="150" stroke="url(#grad1)" strokeWidth="2" />
    <line x1="180" y1="220" x2="250" y2="150" stroke="url(#grad1)" strokeWidth="2" />

    {/* Nodes */}
    <circle cx="50" cy="150" r="15" fill="#0d0221" stroke="url(#grad1)" strokeWidth="3" filter="url(#glow)" />
    <text x="50" y="155" fill="#e0e0e0" fontSize="12" textAnchor="middle">IN</text>

    <circle cx="250" cy="150" r="15" fill="#0d0221" stroke="url(#grad1)" strokeWidth="3" filter="url(#glow)" />
    <text x="250" y="155" fill="#e0e0e0" fontSize="12" textAnchor="middle">OUT</text>

    {/* Mixer Box */}
    <rect x="120" y="80" width="60" height="140" fill="none" stroke="url(#grad1)" strokeWidth="3" rx="10" filter="url(#glow)" />
    <text x="150" y="155" fill="#00f0ff" fontSize="20" textAnchor="middle" fontFamily="Orbitron">PUNKZ</text>

    {/* Question Mark */}
    <text x="150" y="120" fill="#ff00ff" fontSize="30" textAnchor="middle" fontWeight="bold">?</text>
  </svg>
);

export default PrivacyIcon;
