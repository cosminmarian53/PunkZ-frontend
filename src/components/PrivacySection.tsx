import React from "react";
import styles from "../styles/PrivacySection.module.css";
import PrivacyIcon from "./icons/PrivacyIcon";

const PrivacySection = () => {
  return (
    <section className={styles.privacySection}>
      <div className={styles.graphicContainer}>
        <div className={styles.graphic}>
          <PrivacyIcon />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>How PunkZ Achieves Privacy</h2>
        <p className={styles.description}>
          PunkZ uses a smart contract that accepts deposits that can be withdrawn by a different address. Whenever an asset is withdrawn by the new address, there is no way to link the withdrawal to the deposit, ensuring complete privacy.
        </p>
        <p className={styles.description}>
          The magic behind this is zero-knowledge proofs, with circuits written in the powerful and safe <a href="https://noir-lang.org/" target="_blank" rel="noopener noreferrer" className={styles.link}>Noir</a> language. This ensures that the link between deposit and withdrawal is cryptographically broken.
        </p>
        <p className={styles.description}>
          To further improve privacy, users should wait some amount of time after a deposit before they withdraw. A user's anonymity is stronger when there are more deposits in the smart contract.
        </p>
      </div>
    </section>
  );
};

export default PrivacySection;
