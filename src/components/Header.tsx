import React from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center">
        <Link href="/" passHref>
          <span className="text-2xl font-bold text-cyan-400" style={{ fontFamily: "'Orbitron', sans-serif" }}>PunkFi</span>
        </Link>
      </div>
      <nav className="flex items-center space-x-4">
        <Link href="/dashboard" passHref><span className="hover:text-cyan-400">Dashboard</span></Link>
        <Link href="/markets" passHref><span className="hover:text-cyan-400">Markets</span></Link>
        <Link href="/deposit" passHref><span className="hover:text-cyan-400">Deposit</span></Link>
        <Link href="/borrow" passHref><span className="hover:text-cyan-400">Borrow</span></Link>
      </nav>
      <div>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
