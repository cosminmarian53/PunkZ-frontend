import React from 'react';
import styles from '../styles/RetroText.module.css';

/**
 * Example component showing how to use the different retro text styles
 * You can import this component in any page where you need retro text effects
 */
const RetroTextExample: React.FC = () => {
  return (
    <div className="p-10 overflow-hidden">
      <h2 className={styles.dreams}>Dreams</h2>
      
      <div className={styles['vectro']}>
        <span className={styles['vectro-body']}>VEC</span>
        <span className={styles['vectro-red']}>T</span>
        <span className={styles['vectro-green']}>R</span>
        <span className={styles['vectro-blue']}>O</span>
      </div>
      
      <div className={styles['chrome']} data-text="CHROME">CHROME</div>
      
      <div className={styles['street-machine']}>
        <h2 className={styles['street']}>STREET</h2>
        <p className={styles['machine']}>machine</p>
      </div>
      
      <h2 className={styles['victory']}>
        <span className={styles['victory-v']}>V</span>ICTORY
      </h2>
      
      <div className={styles['future-cop']}>
        <p className={styles['future']}>Future</p>
        <p className={styles['cop']}>COP</p>
      </div>
    </div>
  );
};

export default RetroTextExample;
