import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Scene3D from "../components/Scene3D";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PunkFi</title>
        <meta
          content="Aave style protocol with a neon 80's retro look"
          name="description"
        />
        <link href="/logo.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div className={styles.sceneContainer}>
          <Scene3D />
        </div>
      </main>
    </div>
  );
};

export default Home;
