import React from 'react';
import styles from '../styles/PresentationSection.module.css';
import RetroFeature from './RetroFeature';

const PresentationSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Borrow Crypto Assets",
      description: "Access liquidity instantly by borrowing from our protocol with competitive rates and flexible terms.",
      icon: "/assets/images/features/borrow.svg",
      color: "blue"
    },
    {
      id: 2,
      title: "Lend & Earn Interest",
      description: "Supply your crypto assets and earn passive income through our decentralized lending protocol.",
      icon: "/assets/images/features/lend.svg",
      color: "pink"
    },
    {
      id: 3,
      title: "Stake PUNK Tokens",
      description: "Earn protocol rewards and governance rights by staking your PUNK tokens.",
      icon: "/assets/images/features/stake.svg",
      color: "purple"
    },
    {
      id: 4,
      title: "Governance",
      description: "Shape the future of PunkFi by participating in our decentralized governance system.",
      icon: "/assets/images/features/governance.svg",
      color: "green"
    }
  ];

  return (
    <section className={styles.presentationSection}>
      <div className={styles.sectionGrid}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>DeFi with <span>Style</span></h2>
            <p className={styles.sectionSubtitle}>
              PunkFi combines the best of decentralized finance with a nostalgic retro aesthetic. 
              Experience the future of finance with a blast from the past.
            </p>
          </div>
        </div>
        
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <RetroFeature 
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>
        
        <div className={styles.ctaContainer}>
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>Ready to Jump In?</h3>
            <p className={styles.ctaText}>
              Launch the app and start your retro-futuristic DeFi journey today.
            </p>
            <button className={styles.ctaButton}>Launch App</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
