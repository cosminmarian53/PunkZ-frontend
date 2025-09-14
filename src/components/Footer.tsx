import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-gradient-to-t from-black to-black/80 text-center border-t border-fuchsia-900/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-fuchsia-200/80 font-medium">
          Made with <span className="text-pink-500">❤️</span> by your frens at{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 font-bold">
            PunkZ
          </span>
        </p>
        <p className="text-fuchsia-300/50 text-sm mt-2">
          © 2025 PunkZ Protocol. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
