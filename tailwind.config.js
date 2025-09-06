/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        dafoe: ["Mr Dafoe", "cursive"],
        monoton: ["Monoton", "cursive"],
        marker: ["Permanent Marker", "cursive"],
        righteous: ["Righteous", "cursive"],
        titillium: ["Titillium Web", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 5s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 5px #f008b7)' },
          '100%': { filter: 'drop-shadow(0 0 20px #f008b7)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
