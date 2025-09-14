import React from "react";
import styles from "../styles/HexagonCard.module.css";

interface HexagonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.hexagon}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default HexagonCard;
