import React from 'react';
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import styles from '../styles/UnifiedWalletButton.module.css';

interface UnifiedWalletButtonProps {
  isMobile?: boolean;
}

/**
 * A custom wallet button that visually matches the example in the screenshot
 */
const UnifiedWalletButton: React.FC<UnifiedWalletButtonProps> = ({ isMobile = false }) => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const { address, isConnected, chainId, chain } = useAccount();

  if (!isConnected || !address) {
    return (
      <button
        onClick={openConnectModal}
        className={styles.unified_button_container}
        style={{ padding: "8px 16px", transition: "all 0.3s ease" }}
      >
        <div className={styles.neon_border}></div>
        <span className={`${styles.wallet_address} ${styles.connect_text}`}>
          CONNECT WALLET
        </span>
      </button>
    );
  }

  // Handle wrong network case
  if (isConnected && !chain) {
    return (
      <button
        onClick={openChainModal}
        className={styles.unified_button_container}
        style={{ padding: "8px 16px" }}
      >
        <div
          className={styles.neon_border}
          style={{
            borderColor: "#ff3333",
            boxShadow: "0 0 10px #ff3333, inset 0 0 5px #ff3333",
          }}
        ></div>
        <span className={`${styles.wallet_address} ${styles.error_text}`}>
          WRONG NETWORK
        </span>
      </button>
    );
  }

  // Format the address to show first and last few characters
  const formatAddress = (address: string) => {
    if (isMobile) {
      return `${address.substring(0, 4)}...`;
    }
    return `${address.substring(0, 5)}...${address.substring(
      address.length - 4
    )}`;
  };

  // Get color based on network
  const getNetworkColor = () => {
    if (!chain) return "#00c2ff"; // Default color

    // Match network name to appropriate color
    switch (chain.name.toLowerCase()) {
      case "arbitrum":
      case "arbitrum one":
        return "#00c2ff"; // Cyan for Arbitrum
      case "optimism":
        return "#ff0000"; // Red for Optimism
      case "ethereum":
      case "mainnet":
        return "#7c3aed"; // Purple for Ethereum
      default:
        return "#00c2ff"; // Default to cyan
    }
  };

  const networkColor = getNetworkColor();

  return (
    <div
      className={styles.unified_button_container}
      onClick={openAccountModal}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.neon_border}></div>

      {/* Network section with icon */}
      {!isMobile && chain && (
        <div
          className={styles.network_display}
          onClick={(e) => {
            e.stopPropagation();
            openChainModal?.();
          }}
          style={{ cursor: "pointer" }}
          onMouseOver={(e) => {
            // Update text glow
            const target = e.currentTarget.querySelector(
              `.${styles.network_text}`
            );
            if (target) {
              (
                target as HTMLElement
              ).style.textShadow = `0 0 3px #fff, 0 0 7px ${networkColor}, 0 0 10px ${networkColor}`;
              (target as HTMLElement).style.color = "#fff";
            }
            // Update background glow
            e.currentTarget.style.backgroundColor = `rgba(${
              networkColor === "#00c2ff"
                ? "0, 194, 255"
                : networkColor === "#ff0000"
                ? "255, 0, 0"
                : "124, 58, 237"
            }, 0.1)`;
          }}
          onMouseOut={(e) => {
            // Reset text glow
            const target = e.currentTarget.querySelector(
              `.${styles.network_text}`
            );
            if (target) {
              (
                target as HTMLElement
              ).style.textShadow = `0 0 2px ${networkColor}`;
              (target as HTMLElement).style.color = "#fff";
            }
            // Reset background
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          }}
        >
          <div
            className={styles.network_indicator}
            style={{
              backgroundColor: networkColor,
              boxShadow: `0 0 3px ${networkColor}`,
            }}
          ></div>
          <span
            className={styles.network_text}
            style={{ textShadow: `0 0 2px ${networkColor}` }}
          >
            {chain.name}
          </span>
        </div>
      )}

      {/* Address section */}
      <div className={styles.wallet_address}>
        {formatAddress(address)}
        <span className={styles.dropdown_icon}>▼</span>
      </div>
    </div>
  );
};

export default UnifiedWalletButton;
