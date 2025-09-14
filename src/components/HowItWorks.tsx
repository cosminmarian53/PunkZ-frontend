import React from "react";
import styles from "../styles/HowItWorks.module.css";
import DepositIcon from "./icons/DepositIcon";
import WaitIcon from "./icons/WaitIcon";
import WithdrawIcon from "./icons/WithdrawIcon";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.heading}>How it Works</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.icon}>
            <DepositIcon />
          </div>
          <h3 className={styles.stepTitle}>1. Deposit</h3>
          <p className={styles.stepDescription}>
            A user deposits assets from their wallet into a PunkZ smart contract.
          </p>
        </div>
        <div className={styles.connector}></div>
        <div className={styles.step}>
          <div className={styles.icon}>
            <WaitIcon />
          </div>
          <h3 className={styles.stepTitle}>2. Wait</h3>
          <p className={styles.stepDescription}>
            The user waits for a period of time to enhance their privacy. The more transactions, the better the anonymity.
          </p>
        </div>
        <div className={styles.connector}></div>
        <div className={styles.step}>
          <div className={styles.icon}>
            <WithdrawIcon />
          </div>
          <h3 className={styles.stepTitle}>3. Withdraw</h3>
          <p className={styles.stepDescription}>
            The user can withdraw their assets to a new, unlinked wallet address, ensuring financial privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
