import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme, Theme } from "@rainbow-me/rainbowkit";
import { config } from "../wagmi";
import Layout from "../components/Layout";
import { merge } from "lodash";

const client = new QueryClient();

// Create a custom retro theme for RainbowKit
const retroTheme = merge(darkTheme(), {
  colors: {
    accentColor: "#ff00ff", // Neon pink
    accentColorForeground: "#ffffff",
    connectButtonBackground: "#000000",
    connectButtonInnerBackground: "#130021",
    connectButtonText: "#ffffff",
    modalBackground: "#130021",
    modalText: "#ffffff",
    modalTextSecondary: "#ff00ff",
  },
  fonts: {
    body: "'Orbitron', sans-serif",
  },
  radii: {
    actionButton: "4px",
    connectButton: "8px",
    menuButton: "8px",
    modal: "8px",
    modalMobile: "8px",
  },
  shadows: {
    connectButton: "0 0 10px 2px #ff00ff",
    dialog: "0 0 15px 3px #ff00ff",
  },
} as Theme);

// Custom styles for the button
const customConnectButtonStyles = `
  .custom-connect-button-class .rk-connect-button {
    background: linear-gradient(to right, #130021, #290042) !important;
    box-shadow: 0 0 10px 2px #ff00ff, inset 0 0 6px 2px rgba(255, 0, 255, 0.5) !important;
    border: 1px solid #ff00ff !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    font-family: 'Orbitron', sans-serif !important;
    transition: all 0.3s ease !important;
  }

  .custom-connect-button-class .rk-connect-button:hover {
    box-shadow: 0 0 15px 4px #ff00ff, inset 0 0 10px 3px rgba(255, 0, 255, 0.7) !important;
    transform: translateY(-1px) !important;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  // Add custom styles to head
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = customConnectButtonStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider theme={retroTheme}>
          <Layout>
            <div className="custom-connect-button-class">
              <Component {...pageProps} />
            </div>
          </Layout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
