import React from "react";
import styles from "../styles/CallToAction.module.css";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.heading}>Ready for Privacy?</h2>
      <p className={styles.subheading}>
        Take the first step towards financial anonymity on Ethereum.
      </p>
      <Link href="/deposit" passHref>
        <button className={styles.ctaButton}>Launch App</button>
      </Link>
    </section>
  );
};

export default CallToAction;
