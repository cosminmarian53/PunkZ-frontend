import React, { useState } from 'react';
import styles from '../styles/AmountSelector.module.css';

const amounts = [0.1, 1, 10, 100];

interface AmountSelectorProps {
  onSelect: (amount: number) => void;
  tokenSymbol: string;
}

const AmountSelector: React.FC<AmountSelectorProps> = ({ onSelect, tokenSymbol }) => {
    const [selectedAmount, setSelectedAmount] = useState(amounts[0]);

    const handleSelect = (amount: number) => {
        setSelectedAmount(amount);
        onSelect(amount);
    };

    return (
        <div className={styles.amountContainer}>
            <label className={styles.label}>Amount</label>
            <div className={styles.amountSelector}>
                {amounts.map((amount) => (
                    <button
                        key={amount}
                        className={`${styles.amountButton} ${selectedAmount === amount ? styles.selected : ''}`}
                        onClick={() => handleSelect(amount)}
                    >
                        {amount} {tokenSymbol}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AmountSelector;
