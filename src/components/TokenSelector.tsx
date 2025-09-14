import React, { useState } from 'react';
import styles from '../styles/TokenSelector.module.css';

export const tokens = [
    { name: 'ETH', icon: '/assets/icons/eth.png' },
    { name: 'DAI', icon: '/assets/icons/dai.png' },
    { name: 'cDAI', icon: '/assets/icons/cdai.png' },
    { name: 'USDC', icon: '/assets/icons/usdc.png' },
    { name: 'USDT', icon: '/assets/icons/usdt.png' },
    { name: 'WBTC', icon: '/assets/icons/wbtc.png' },
];

export type Token = typeof tokens[0];

interface TokenSelectorProps {
    selectedToken: Token;
    onSelect: (token: Token) => void;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ selectedToken, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (token: Token) => {
        onSelect(token);
        setIsOpen(false);
    };

    return (
        <div className={styles.tokenSelector}>
            <div className={styles.selectedToken} onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedToken.name}</span>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div className={styles.tokenList}>
                    {tokens.map((token) => (
                        <div key={token.name} className={styles.tokenOption} onClick={() => handleSelect(token)}>
                            {token.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TokenSelector;
