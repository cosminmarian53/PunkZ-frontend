import React, { useEffect, useRef } from "react";
import styles from "../styles/PresentationSection.module.css";
import Image from "next/image";

interface StatItem {
  label: string;
  value: string;
}

interface RetroFeatureProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  stats?: StatItem[];
  isActive?: boolean;
}

const RetroFeature: React.FC<RetroFeatureProps> = ({
  title,
  description,
  icon,
  color,
  stats,
  isActive = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add hover effect with tilt
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element

      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.featureCard} ${
        styles[`feature${color.charAt(0).toUpperCase() + color.slice(1)}`]
      } ${isActive ? styles.activeFeature : ""}`}
    >
      <div className={styles.featureIcon}>
        <Image src={icon} alt={`${title} icon`} width={64} height={64} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>

      {stats && stats.length > 0 && (
        <div className={styles.featureStats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.featureGlow}></div>
    </div>
  );
};

export default RetroFeature;
