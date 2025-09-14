import React from "react";
import styles from "../styles/DecentralizationSection.module.css";
import HexagonCard from "./HexagonCard";
import { Shield, Code, Users, GitBranch, Database, Globe } from "lucide-react";

const features = [
  {
    icon: <Shield />,
    title: "Trustless",
    description: "PunkZ is a fully decentralized protocol that operates without intermediaries.",
  },
  {
    icon: <Code />,
    title: "Open Source",
    description: "The source code is available for public review and contributions.",
  },
  {
    icon: <Users />,
    title: "Community Governed",
    description: "The protocol is governed by its community of users and token holders.",
  },
  {
    icon: <GitBranch />,
    title: "Non-Custodial",
    description: "Users have full control over their assets at all times.",
  },
  {
    icon: <Database />,
    title: "Permissionless",
    description: "Anyone can access the protocol without permission from any central authority.",
  },
  {
    icon: <Globe />,
    title: "Censorship Resistant",
    description: "The protocol is resistant to censorship from any single entity.",
  },
];

const DecentralizationSection = () => {
  return (
    <section className={styles.decentralizationSection}>
      <h2 className={styles.heading}>Decentralization & Trustlessness</h2>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <HexagonCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default DecentralizationSection;
