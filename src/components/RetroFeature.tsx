import React from 'react';
import styles from '../styles/PresentationSection.module.css';
import Image from 'next/image';

interface RetroFeatureProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const RetroFeature: React.FC<RetroFeatureProps> = ({ title, description, icon, color }) => {
  return (
    <div className={`${styles.featureCard} ${styles[`feature${color.charAt(0).toUpperCase() + color.slice(1)}`]}`}>
      <div className={styles.featureIcon}>
        <img src={icon} alt={`${title} icon`} width={64} height={64} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <div className={styles.featureGlow}></div>
    </div>
  );
};

export default RetroFeature;
