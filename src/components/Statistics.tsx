import React from 'react';
import styles from '../styles/Statistics.module.css';

const latestDeposits = [
  { id: 39605, time: '2 hours ago' },
  { id: 39604, time: '7 hours ago' },
  { id: 39603, time: '15 hours ago' },
  { id: 39602, time: '15 hours ago' },
  { id: 39601, time: '18 hours ago' },
  { id: 39600, time: '18 hours ago' },
  { id: 39599, time: '18 hours ago' },
  { id: 39598, time: '18 hours ago' },
  { id: 39597, time: '18 hours ago' },
  { id: 39596, time: '21 hours ago' },
];

const Statistics: React.FC = () => {
  return (
    <div className={styles.statsContainer}>
      <h2 className={styles.title}>Statistics</h2>
      <div className={styles.anonymitySet}>
        <span className={styles.anonymitySetLabel}>Anonymity set</span>
        <span className={styles.anonymitySetValue}>39605</span>
        <p>equal user deposits</p>
      </div>
      <div className={styles.latestDeposits}>
        <h3 className={styles.latestDepositsTitle}>Latest deposits</h3>
        <div className={styles.depositsGrid}>
          {latestDeposits.map((deposit) => (
            <div key={deposit.id} className={styles.depositItem}>
              <span>{deposit.id}.</span>
              <span>{deposit.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
