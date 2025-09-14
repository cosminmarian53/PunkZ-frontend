import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UnifiedWalletButton from "./UnifiedWalletButton";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-black/80 backdrop-blur-md border-b border-fuchsia-900/30 text-white fixed w-full z-40">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center">
              <Image
                src="/assets/images/logo1.png"
                alt="PunkZ"
                width={90}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Retro Style */}
        <nav className="hidden md:flex items-center space-x-10"></nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <UnifiedWalletButton />
          </div>
        </div>
      </header>

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
