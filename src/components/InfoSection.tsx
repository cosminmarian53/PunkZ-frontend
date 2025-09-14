import React from "react";
import styles from "../styles/InfoSection.module.css";
import HowItWorks from "./HowItWorks";
import PrivacySection from "./PrivacySection";
import DecentralizationSection from "./DecentralizationSection";
import CallToAction from "./CallToAction";
import AnimatedSection from "./AnimatedSection";

const InfoSection = () => {
  return (
    <div className={styles.infoSection}>
      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>
      <AnimatedSection>
        <PrivacySection />
      </AnimatedSection>
      <AnimatedSection>
        <DecentralizationSection />
      </AnimatedSection>
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </div>
  );
};

export default InfoSection;
