import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
