import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/ConnectButton.module.css';

interface SimpleRetroConnectButtonProps {
  isMobile?: boolean;
}

/**
 * A simple wrapper around RainbowKit's ConnectButton that adds retro styling
 */
const SimpleRetroConnectButton: React.FC<SimpleRetroConnectButtonProps> = ({ 
  isMobile = false 
}) => {
  return (
    <div className={styles.retro_wrapper}>
      <div className={styles.retro_glow_border}>
        <ConnectButton 
          accountStatus={isMobile ? "avatar" : "full"}
          chainStatus={isMobile ? "icon" : "full"} 
          showBalance={!isMobile}
          // Customizing the layout to have a more unified look
          label="CONNECT"
        />
      </div>
      <div className={styles.scanlines}></div>
    </div>
  );
};

export default SimpleRetroConnectButton;
