# PunkZ - A ZK Mixer Application

![PunkFi Banner](https://github.com/cosminmarian53/PunkFi-frontend/blob/main/public/assets/images/logo.png?raw=true)

## 🌐 Overview

PunkZ is a decentralized, non-custodial privacy solution for Ethereum, inspired by applications like Tornado Cash. It allows users to deposit assets and later withdraw them to a different address without creating an on-chain link between the two transactions.

Wrapped in a distinctive retro-futuristic interface, PunkZ blends 80s aesthetics with cutting-edge privacy technology, featuring an immersive 3D experience, neon visual elements, and a synthwave-inspired design.

## ✨ Features

- **Anonymous Transactions**: Deposit from one address and withdraw to another, breaking the on-chain link.
- **Zero-Knowledge Proofs**: Utilizes ZKPs (built with Noir) to prove ownership of a deposit without revealing the specific deposit.
- **Merkle Tree Anonymity**: Each deposit commitment is added to a Merkle tree, strengthening the anonymity set with every new user.
- **Double-Spend Prevention**: Employs nullifiers to ensure that each deposit can only be withdrawn once.
- **Immersive 3D Environment**: Interactive 3D scene powered by React Three Fiber.
- **Retro-Futuristic UI**: Neon-lit interface with synthwave/cyberpunk aesthetics.
- **Dynamic & Responsive Design**: The UI and typography adapt for a seamless experience on both desktop and mobile.

## ⚙️ How it works

This app allows users to deposit assets and later withdraw them without linking the withdrawal to the deposit. It allows withdrawers to prove ownership of a deposit without revealing which deposit belongs to the withdrawer.

#### Merkle tree for anonymity set:
- Each deposit has its own unique commitment: `hash` of a secret plus public identifier.
- These commitments are stored in a Merkle tree.
- The root of this Merkle tree is updated whenever a new deposit is made.

#### ZK proofs for withdrawals:
- The withdrawer proves (using Noir) that they know a valid preimage for a commitment in the Merkle tree (without revealing which commitment they know).
- The proof also confirms that the commitment is part of a valid tree root without revealing which specific leaf they control.
- To prevent double-spending, the protocol includes a nullifier (a hash of the secret that gets recorded on-chain when withdrawn).

## 💡 How are ZKPs used in this app?
Zero Knowledge Proofs (ZKPs) allow a prover to convince a verifier that a specific computation was correctly executed without requiring the verifier to rerun it. The proof ensures correctness without revealing the inputs used in the computation. The ‘zero-knowledge’ property means that the proof can be structured in a way that leaks no additional information beyond the validity of the computation itself.

## 🛠️ Technologies

- **Frontend**: Next.js, React, TypeScript
- **ZK Proofs**: Noir
- **Styling**: TailwindCSS, CSS Modules, Google Fonts (Monoton, VT323, etc.)
- **3D Visualization**: Three.js, React Three Fiber, Drei
- **Web3**: Wagmi, Viem, RainbowKit
- **Device Detection**: Custom React hooks for conditional rendering (e.g., `useIsMobile`)

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

### Responsive Retro Text

The main title uses a custom `ResponsiveRetroText` component with conditional font sizing and a flickering neon effect:

```tsx
import useIsMobile from "../hooks/useIsMobile";

const isMobile = useIsMobile();

<ResponsiveRetroText
  text="PUNKZ"
  fontFamily="Monoton"
  fontSize={isMobile ? "15vw" : "6rem"}
  color="#ff00ff"
  glowColor="#ff00ff"
  className="flickering"
/>;
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
