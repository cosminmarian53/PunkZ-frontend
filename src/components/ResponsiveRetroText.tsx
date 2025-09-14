import React, { useState, useEffect } from "react";
import styles from "../styles/RetroText.module.css";

interface ResponsiveRetroTextProps {
  text: string;
  fontFamily: string;
  fontSize: string; // e.g., "15vw"
  color: string;
  glowColor: string;
}

const ResponsiveRetroText: React.FC<ResponsiveRetroTextProps> = ({
  text,
  fontFamily,
  fontSize,
  color,
  glowColor,
}) => {
  const [calculatedFontSize, setCalculatedFontSize] = useState("120px");

  useEffect(() => {
    const calculateSize = () => {
      const vwUnit = parseFloat(fontSize);
      const newSize = (window.innerWidth * vwUnit) / 100;
      setCalculatedFontSize(`${newSize}px`);
    };

    calculateSize();
    window.addEventListener("resize", calculateSize);
    return () => window.removeEventListener("resize", calculateSize);
  }, [fontSize]);

  const style: React.CSSProperties = {
    fontFamily: `'${fontFamily}', sans-serif`,
    fontSize: calculatedFontSize,
    color: color,
    textShadow: `
      0 0 5px ${glowColor},
      0 0 10px ${glowColor},
      0 0 20px ${glowColor},
      0 0 40px ${glowColor},
      0 0 80px ${glowColor}
    `,
  };

  return (
    <h1 className={styles.retroText} style={style}>
      {text}
    </h1>
  );
};

export default ResponsiveRetroText;
