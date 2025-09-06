import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import retroStyles from "../styles/RetroText.module.css";
import Scene3D from "../components/Scene3D";
import { Suspense, useState, useEffect } from "react";
import RetroLoader from "../components/RetroLoader";
import PresentationSection from "../components/PresentationSection";

const ContentOverlay = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulate model loading completion with a delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${styles.fadeInOverlay}`}>
      <div className={styles.logoContainer}>
        <Image
          src="/assets/images/logo.png"
          alt="PunkFi Logo"
          width={300}
          height={100}
          className={styles.logo}
          priority
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h1 className={retroStyles.chrome} data-text="PUNKFI">
            PUNKFI
          </h1>
        </div>
        <h2 className={styles.tagline}>The Future of DeFi. Now.</h2>
      </div>
    </div>
  );
};

// The ProtocolFeatures component has been replaced by PresentationSection

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PunkFi</title>
        <meta
          content="Aave style protocol with a neon 80's retro look"
          name="description"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Add multiple favicon formats for better compatibility */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Import retro fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Mr+Dafoe|Titillium+Web:900|Righteous|Candal|Permanent+Marker|Monoton"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.heroSection}>
        <div className={styles.sceneContainer}>
          <Suspense fallback={<RetroLoader />}>
            <Scene3D />
            <ContentOverlay />
          </Suspense>
        </div>
      </div>

      <main className={styles.main}>
        <PresentationSection />
      </main>
    </div>
  );
};

export default Home;
