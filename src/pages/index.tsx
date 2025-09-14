import type { NextPage } from "next";
import Head from "next/head";
import Scene3D from "../components/Scene3D";
import { Suspense } from "react";
import RetroLoader from "../components/RetroLoader";
import ResponsiveRetroText from "../components/ResponsiveRetroText";
import styles from "../styles/Home.module.css";
import InfoSection from "../components/InfoSection";

const ContentOverlay = () => {
  return (
    <div className={styles.contentOverlay}>
      <div className={styles.titleContainer}>
        <ResponsiveRetroText
          text="PUNKZ"
          fontFamily="Monoton"
          fontSize="6vw"
          color="#ff00ff"
          glowColor="#ff00ff"
        />
      </div>
      <p className={styles.subtitle}>Unlock financial privacy.</p>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PunkZ - Private Transactions on Ethereum</title>
        <meta
          content="PunkZ is a decentralized, non-custodial privacy solution for Ethereum."
          name="description"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 4rem)",
        }}
      >
        <Suspense fallback={<RetroLoader />}>
          <Scene3D />
        </Suspense>
        <ContentOverlay />
      </div>
      <InfoSection />
    </div>
  );
};

export default Home;
