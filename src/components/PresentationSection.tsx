import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/PresentationSection.module.css";
import RetroFeature from "./RetroFeature";

const PresentationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const featureGridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Enhanced feature data with more details
  const features = [
    {
      id: 1,
      title: "Borrow Crypto Assets",
      description:
        "Access liquidity instantly by borrowing from our protocol with competitive rates and flexible terms.",
      icon: "/assets/images/features/borrow.svg",
      color: "blue",
      stats: [
        { label: "Interest Rate", value: "1.2% - 3.5%" },
        { label: "Collateral Factor", value: "Up to 80%" },
        { label: "Available Assets", value: "12+" },
      ],
    },
    {
      id: 2,
      title: "Lend & Earn Interest",
      description:
        "Supply your crypto assets and earn passive income through our decentralized lending protocol.",
      icon: "/assets/images/features/lend.svg",
      color: "pink",
      stats: [
        { label: "Annual Yield", value: "3.2% - 8.5%" },
        { label: "PUNK Rewards", value: "2% bonus" },
        { label: "Liquidity", value: "$42M+" },
      ],
    },
    {
      id: 3,
      title: "Stake PUNK Tokens",
      description:
        "Earn protocol rewards and governance rights by staking your PUNK tokens.",
      icon: "/assets/images/features/stake.svg",
      color: "purple",
      stats: [
        { label: "APR", value: "14.8%" },
        { label: "Lock Period", value: "Flexible" },
        { label: "Total Staked", value: "2.8M PUNK" },
      ],
    },
    {
      id: 4,
      title: "Governance",
      description:
        "Shape the future of PunkFi by participating in our decentralized governance system.",
      icon: "/assets/images/features/governance.svg",
      color: "green",
      stats: [
        { label: "Voting Power", value: "1 PUNK = 1 Vote" },
        { label: "Active Proposals", value: "3" },
        { label: "Treasury", value: "$12.5M" },
      ],
    },
  ];

  // Add scroll-triggered animations
  useEffect(() => {
    // Use vanilla JS animations for simplicity and to avoid issues with gsap dependencies
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              headingRef.current.style.opacity = "1";
              headingRef.current.style.transform = "translateY(0)";
            }

            if (entry.target === featureGridRef.current) {
              const cards = document.querySelectorAll(`.${styles.featureCard}`);
              cards.forEach((card, index) => {
                setTimeout(() => {
                  (card as HTMLElement).style.opacity = "1";
                  (card as HTMLElement).style.transform = "translateY(0)";
                }, index * 200);
              });
            }

            if (entry.target === ctaRef.current) {
              ctaRef.current.style.opacity = "1";
              ctaRef.current.style.transform = "scale(1)";
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Initial styles for animation
    if (headingRef.current) {
      headingRef.current.style.opacity = "0";
      headingRef.current.style.transform = "translateY(50px)";
      headingRef.current.style.transition =
        "opacity 1.2s ease, transform 1.2s ease";
      observer.observe(headingRef.current);
    }

    if (featureGridRef.current) {
      const cards = document.querySelectorAll(`.${styles.featureCard}`);
      cards.forEach((card) => {
        (card as HTMLElement).style.opacity = "0";
        (card as HTMLElement).style.transform = "translateY(80px)";
        (card as HTMLElement).style.transition =
          "opacity 1s ease, transform 1s ease";
      });
      observer.observe(featureGridRef.current);
    }

    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "scale(0.9)";
      ctaRef.current.style.transition =
        "opacity 1s ease, transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      observer.observe(ctaRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle tab switching
  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  // Typewriter effect text
  const [text, setText] = useState("");
  const fullText =
    "Reshaping DeFi with style, innovation, and cutting-edge technology.";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section ref={sectionRef} className={styles.presentationSection}>
      <div className={styles.neonGrid}></div>

      <div className={styles.sectionGrid}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIntro} ref={headingRef}>
            <h2 className={styles.sectionTitle}>
              DeFi with <span>Style</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              PunkFi combines the best of decentralized finance with a nostalgic
              retro aesthetic. Experience the future of finance with a blast
              from the past.
            </p>
            <div className={styles.typewriter}>
              {text}
              <span className={styles.cursor}>|</span>
            </div>
          </div>

          <div className={styles.tabsContainer}>
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`${styles.tabButton} ${
                  activeTab === feature.id ? styles.activeTab : ""
                } ${
                  styles[
                    `tab${
                      feature.color.charAt(0).toUpperCase() +
                      feature.color.slice(1)
                    }`
                  ]
                }`}
                onClick={() => handleTabChange(feature.id)}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        <div ref={featureGridRef} className={styles.featureGrid}>
          {features.map((feature) => (
            <RetroFeature
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              stats={feature.stats}
              isActive={activeTab === feature.id}
            />
          ))}
        </div>

        <div className={styles.metricsSection}>
          <div className={styles.metricBox}>
            <span className={styles.metricValue}>$42M+</span>
            <span className={styles.metricLabel}>Total Value Locked</span>
          </div>
          <div className={styles.metricBox}>
            <span className={styles.metricValue}>18K+</span>
            <span className={styles.metricLabel}>Active Users</span>
          </div>
          <div className={styles.metricBox}>
            <span className={styles.metricValue}>5</span>
            <span className={styles.metricLabel}>Supported Chains</span>
          </div>
        </div>

        <div className={styles.ctaContainer} ref={ctaRef}>
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>Ready to Jump In?</h3>
            <p className={styles.ctaText}>
              Launch the app and start your retro-futuristic DeFi journey today.
              Our protocol offers the best rates in the market with the coolest
              UI.
            </p>
            <div className={styles.ctaButtonGroup}>
              <button className={styles.ctaButton}>Launch App</button>
              <button className={styles.ctaButtonSecondary}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
