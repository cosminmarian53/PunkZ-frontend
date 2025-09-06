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
        style={{ padding: '8px 16px', transition: 'all 0.3s ease' }}
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
        style={{ padding: '8px 16px' }}
      >
        <div className={styles.neon_border} style={{ borderColor: '#ff3333', boxShadow: '0 0 10px #ff3333, inset 0 0 5px #ff3333' }}></div>
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
    return `${address.substring(0, 5)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className={styles.unified_button_container} onClick={openAccountModal} style={{ cursor: 'pointer' }}>
      <div className={styles.neon_border}></div>

      {/* Network section with icon */}
      {!isMobile && chain && (
        <div 
          className={styles.network_display} 
          onClick={(e) => { e.stopPropagation(); openChainModal?.(); }}
          style={{ cursor: 'pointer' }}
        >
          <div className={styles.network_indicator}></div>
          <span style={{ fontSize: '14px', color: '#fff', textShadow: '0 0 5px #00c2ff' }}>
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
