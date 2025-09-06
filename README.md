# PunkFi - Retro-Futuristic DeFi Protocol

![PunkFi Banner](https://github.com/cosminmarian53/PunkFi-frontend/blob/main/public/assets/images/logo.png?raw=true)

## 🌐 Overview

PunkFi is a next-generation DeFi protocol with a distinctive retro-futuristic interface that blends 80s aesthetics with cutting-edge blockchain technology. The platform features an immersive 3D experience, neon visual elements, and a synthwave-inspired design that sets it apart from traditional DeFi applications.

## ✨ Features

- **Immersive 3D Environment**: Interactive 3D scene powered by React Three Fiber
- **Retro-Futuristic UI**: Neon-lit interface with cyberpunk aesthetics
- **Web3 Integration**: Seamless wallet connectivity via RainbowKit
- **Full DeFi Functionality**: Deposit, borrow, and explore markets with an intuitive interface
- **Responsive Design**: Optimized for both desktop and mobile experiences

## 🛠️ Technologies

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4, CSS Modules
- **3D Visualization**: Three.js, React Three Fiber, Drei
- **Animations**: GSAP (GreenSock Animation Platform)
- **Web3**: Wagmi, Viem, RainbowKit
- **State Management**: TanStack Query (React Query)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cosminmarian53/PunkFi-frontend.git
   cd PunkFi-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 📚 Project Structure

```
/
├── public/                # Static assets
│   └── assets/
│       ├── images/        # UI images and icons
│       └── models/        # 3D models
├── src/
│   ├── assets/            # Asset imports and management
│   ├── components/        # React components
│   │   ├── Scene3D.tsx    # 3D environment
│   │   └── ...           
│   ├── pages/             # Next.js pages
│   ├── styles/            # CSS and styling
│   └── wagmi.ts           # Web3 configuration
├── next.config.js         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎮 Key Components

### 3D Environment

The application features an immersive 3D scene built with React Three Fiber, showcasing a DeLorean model with dynamic camera animations for a cinematic experience.

```tsx
<Canvas
  shadows
  frameloop="always"
  gl={{
    powerPreference: "high-performance",
    antialias: true,
    alpha: true
  }}
>
  <SceneContent />
</Canvas>
```

### Retro UI Elements

PunkFi employs custom retro-styled components that feature neon glow effects and 80s-inspired typography:

```tsx
<span 
  style={{
    fontFamily: "'Monoton', cursive",
    textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff'
  }}
>
  Deposit
</span>
```

## 🔌 Web3 Integration

PunkFi uses RainbowKit and wagmi for seamless blockchain integration:

```tsx
<RainbowKitProvider>
  <WagmiConfig>
    <Component {...pageProps} />
  </WagmiConfig>
</RainbowKitProvider>
```

## 🌙 Roadmap

- [x] Core UI implementation
- [x] 3D scene integration
- [x] Web3 wallet connectivity
- [ ] Smart contract integration
- [ ] Governance features
- [ ] Mobile app release

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- [Cosmin Marian](https://github.com/cosminmarian53) - Creator & Lead Developer

## 💬 Contact

For questions or feedback about PunkFi, please open an issue on this repository or reach out directly to project contributors.

---

<p align="center">
  Built with 💜 and neon lights
</p>
