import React, { useState } from 'react';
import styles from '../styles/Mixer.module.css';
import TokenSelector, { tokens, Token } from './TokenSelector';
import AmountSelector from './AmountSelector';
import { useAccount } from 'wagmi';
import UnifiedWalletButton from './UnifiedWalletButton';
import RetroInput from './RetroInput';

const Mixer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit');
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState(0.1);
  const [selectedToken, setSelectedToken] = useState<Token>(tokens[0]);

  return (
    <div className={styles.mixerContainer}>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === 'deposit' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('deposit')}
        >
          Deposit
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'withdraw' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('withdraw')}
        >
          Withdraw
        </button>
      </div>
      <div className={styles.contentContainer}>
        {activeTab === 'deposit' && (
          <div>
            <TokenSelector selectedToken={selectedToken} onSelect={setSelectedToken} />
            <AmountSelector onSelect={setAmount} tokenSymbol={selectedToken.name} />
            {isConnected ? (
              <button className={styles.actionButton}>Deposit</button>
            ) : (
              <UnifiedWalletButton />
            )}
          </div>
        )}
        {activeTab === 'withdraw' && (
          <div>
            <RetroInput
              label="Note"
              placeholder="Please enter your note"
              isTextArea={true}
            />
            <RetroInput
              label="Recipient Address"
              placeholder="Please paste address here"
            />
            <button className={styles.actionButton}>Withdraw</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mixer;
