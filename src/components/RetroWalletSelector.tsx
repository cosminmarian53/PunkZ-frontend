import React, { useState } from 'react';
import Image from 'next/image';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import RetroModal from './RetroModal';
import styles from '../styles/RetroModal.module.css';

// Sample wallet options - you can expand this list
const walletOptions = [
  { id: 'metamask', name: 'MetaMask', iconUrl: 'https://metamask.io/images/metamask-fox.svg' },
  { id: 'walletconnect', name: 'WalletConnect', iconUrl: 'https://walletconnect.com/images/walletconnect-logo.svg' },
  { id: 'coinbase', name: 'Coinbase Wallet', iconUrl: 'https://www.coinbase.com/assets/press/coinbase-icon-2ecd17816643cc10d6619404f6eefd7c.png' },
];

const RetroWalletSelector: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openConnectModal } = useConnectModal();
  
  const handleWalletSelect = (walletId: string) => {
    console.log(`Selected wallet: ${walletId}`);
    // Close our custom modal
    setIsModalOpen(false);
    // Open the RainbowKit connect modal
    if (openConnectModal) {
      openConnectModal();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={styles.retroButton}
      >
        Connect Wallet
      </button>

      <RetroModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Select Your Wallet"
      >
        <div>
          <p style={{ marginBottom: "20px", textAlign: "center" }}>
            Choose a wallet to connect to PunkFi protocol
          </p>

          {walletOptions.map((wallet) => (
            <div
              key={wallet.id}
              className={styles.walletOption}
              onClick={() => handleWalletSelect(wallet.id)}
            >
              <div className={styles.walletIcon}>
                {/* Use a placeholder or the actual wallet icon */}
                <Image
                  src={wallet.iconUrl}
                  alt={`${wallet.name} icon`}
                  width={30}
                  height={30}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.walletName}>{wallet.name}</div>
            </div>
          ))}

          <p
            style={{
              fontSize: "0.8rem",
              marginTop: "20px",
              opacity: 0.7,
              textAlign: "center",
            }}
          >
            By connecting a wallet, you agree to PunkFi&apos;s Terms of Service
          </p>
        </div>
      </RetroModal>
    </>
  );
};

export default RetroWalletSelector;
