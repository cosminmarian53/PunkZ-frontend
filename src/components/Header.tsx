import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import UnifiedWalletButton from "./UnifiedWalletButton";

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-black/80 backdrop-blur-md border-b border-fuchsia-900/30 text-white fixed w-full z-40">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center">
              <Image
                src="/assets/images/logo1.png"
                alt="PunkFi"
                width={90}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Retro Style */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/dashboard" passHref>
            <span
              className="transition-all text-fuchsia-100 uppercase tracking-wider text-sm relative group hover:text-transparent px-2 py-1"
              style={{
                fontFamily: "'Monoton', cursive",
                letterSpacing: "0.1em",
                fontSize: "0.85rem",
              }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                style={{
                  color: "#fff",
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff",
                }}
              >
                Dashboard
              </span>
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                Dashboard
              </span>
            </span>
          </Link>
          <Link href="/markets" passHref>
            <span
              className="transition-all text-fuchsia-100 uppercase tracking-wider text-sm relative group hover:text-transparent px-2 py-1"
              style={{
                fontFamily: "'Monoton', cursive",
                letterSpacing: "0.1em",
                fontSize: "0.85rem",
              }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                style={{
                  color: "#fff",
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00c2ff, 0 0 20px #00c2ff, 0 0 25px #00c2ff",
                }}
              >
                Markets
              </span>
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                Markets
              </span>
            </span>
          </Link>
          <Link href="/deposit" passHref>
            <span
              className="transition-all text-fuchsia-100 uppercase tracking-wider text-sm relative group hover:text-transparent px-2 py-1"
              style={{
                fontFamily: "'Monoton', cursive",
                letterSpacing: "0.1em",
                fontSize: "0.85rem",
              }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                style={{
                  color: "#fff",
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #7c3aed, 0 0 20px #7c3aed, 0 0 25px #7c3aed",
                }}
              >
                Deposit
              </span>
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                Deposit
              </span>
            </span>
          </Link>
          <Link href="/borrow" passHref>
            <span
              className="transition-all text-fuchsia-100 uppercase tracking-wider text-sm relative group hover:text-transparent px-2 py-1"
              style={{
                fontFamily: "'Monoton', cursive",
                letterSpacing: "0.1em",
                fontSize: "0.85rem",
              }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                style={{
                  color: "#fff",
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff",
                }}
              >
                Borrow
              </span>
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                Borrow
              </span>
            </span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <UnifiedWalletButton />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-fuchsia-100 p-1"
            onClick={toggleMobileNav}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Mobile wallet connect button - fixed at bottom */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center sm:hidden z-30">
        <div className="bg-black/80 backdrop-blur-md px-2 py-1">
          <UnifiedWalletButton isMobile={true} />
        </div>
      </div>
    </>
  );
};

export default Header;
