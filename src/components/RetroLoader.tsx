import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/RetroLoader.module.css';

const RetroLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // More realistic and smoother loading progression
    const duration = 2500; // 2.5 seconds total loading time
    const interval = 80; // Update interval in ms
    const steps = duration / interval;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      // Eased loading progression (slower at start, faster in the middle, slower at end)
      // This creates a more natural loading feel
      let progression;
      if (step < steps * 0.3) {
        // Slow start (first 30%)
        progression = (step / (steps * 0.3)) * 30;
      } else if (step < steps * 0.8) {
        // Faster middle (next 50%)
        const middleStep = step - steps * 0.3;
        progression = 30 + (middleStep / (steps * 0.5)) * 60;
      } else {
        // Slow finish (last 20%)
        const endStep = step - steps * 0.8;
        progression = 90 + (endStep / (steps * 0.2)) * 10;
      }
      
      const newProgress = Math.min(100, progression);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(timer);
        setIsComplete(true);
        
        // Add end animation to the progress bar
        if (progressBarRef.current) {
          progressBarRef.current.style.animation = 'end 1s ease-out';
        }
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.scanlines}></div>
      <div className={styles.loaderContent}>
        <div className={styles.future}>LOADING</div>
        <div className={styles.cop}>PUNKFI</div>
        <div className={styles.loadingBarContainer}>
          <div className={styles.loadingBar}>
            <div 
              ref={progressBarRef}
              className={styles.loadingBarProgress} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={styles.loadingPercentage}>
            {Math.floor(progress)}%
            {isComplete && <span className={styles.completeText}> - READY!</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroLoader;
