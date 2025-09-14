import React, { useState } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex flex-col justify-center items-center transform transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white p-2"
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <nav className="flex flex-col items-center space-y-12"></nav>

      <div className="absolute bottom-10 w-1/2 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
    </div>
  );
};

export default MobileNav;
