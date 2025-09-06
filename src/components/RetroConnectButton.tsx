import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import RetroModal from './RetroModal';
import styles from '../styles/ConnectButton.module.css';
import modalStyles from '../styles/RetroModal.module.css';

interface RetroConnectButtonProps {
  isMobile?: boolean;
}

// Sample wallet options
const walletOptions = [
  { id: 'metamask', name: 'MetaMask', iconUrl: 'https://metamask.io/images/metamask-fox.svg' },
  { id: 'walletconnect', name: 'WalletConnect', iconUrl: 'https://walletconnect.org/walletconnect-logo.png' },
  { id: 'coinbase', name: 'Coinbase Wallet', iconUrl: 'https://www.coinbase.com/assets/press/coinbase-icon.png' },
  { id: 'trust', name: 'Trust Wallet', iconUrl: 'https://trustwallet.com/assets/images/favicon.png' },
];

const RetroConnectButton: React.FC<RetroConnectButtonProps> = ({ isMobile = false }) => {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === 'authenticated');

          const handleConnectClick = () => {
            // Open our custom modal first
            setIsCustomModalOpen(true);
          };

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
              className={styles.retro_connect_container}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button 
                      onClick={handleConnectClick} 
                      type="button"
                      className={styles.retro_connect_button}
                      style={{
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                      }}
                    >
                      <span>Connect Wallet</span>
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button 
                      onClick={openChainModal} 
                      type="button"
                      className={styles.retro_connect_button}
                      style={{
                        textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff0000, 0 0 20px #ff0000',
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                      }}
                    >
                      <span>Wrong Network</span>
                    </button>
                  );
                }

                return (
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button
                      onClick={openChainModal}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#000',
                        color: '#fff',
                        fontFamily: "'Monoton', cursive",
                        padding: '0 10px',
                        fontSize: isMobile ? '0.7rem' : '0.8rem',
                        letterSpacing: '0.05em',
                        border: '1px solid #ff00ff',
                        borderRadius: '4px',
                        boxShadow: '0 0 5px #ff00ff'
                      }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 16,
                            height: 16,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 6,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 16, height: 16 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>

                    <button 
                      onClick={openAccountModal} 
                      type="button"
                      className={styles.retro_connect_button}
                      style={{
                        fontSize: isMobile ? '0.7rem' : '0.8rem',
                      }}
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>

      {/* Custom Retro Modal */}
      <RetroModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        title="Select Your Wallet"
      >
        <div>
          <p style={{ marginBottom: '20px', textAlign: 'center', fontFamily: 'VT323, monospace' }}>
            Choose a wallet to connect to the PunkFi protocol
          </p>
          
          {walletOptions.map((wallet) => (
            <div 
              key={wallet.id}
              className={modalStyles.walletOption}
              onClick={() => {
                setIsCustomModalOpen(false);
                // Slight delay to avoid modal transition conflicts
                setTimeout(() => {
                  if (typeof window !== 'undefined') {
                    // This will trigger the RainbowKit modal
                    const connectButtons = document.querySelectorAll('[data-rk]');
                    if (connectButtons.length > 0) {
                      connectButtons[0].dispatchEvent(
                        new MouseEvent('click', { bubbles: true })
                      );
                    }
                  }
                }, 300);
              }}
            >
              <div className={modalStyles.walletIcon}>
                <img 
                  src={wallet.iconUrl} 
                  alt={`${wallet.name} icon`} 
                  width={30} 
                  height={30} 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={modalStyles.walletName}>{wallet.name}</div>
            </div>
          ))}
          
          <p style={{ 
            fontFamily: 'VT323, monospace',
            fontSize: '0.8rem', 
            marginTop: '20px', 
            opacity: 0.7, 
            textAlign: 'center' 
          }}>
            By connecting a wallet, you agree to PunkFi&apos;s Terms of Service
          </p>
        </div>
      </RetroModal>
    </>
  );
};

export default RetroConnectButton;
