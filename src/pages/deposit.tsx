import type { NextPage } from 'next';
import Head from 'next/head';
import Mixer from "../components/Mixer";
import Statistics from "../components/Statistics";
import styles from "../styles/Deposit.module.css";

const Deposit: NextPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>App - PunkZ</title>
      </Head>
      <div className={styles.contentWrapper}>
        <Mixer />
        <Statistics />
      </div>
    </div>
  );
};

export default Deposit;
