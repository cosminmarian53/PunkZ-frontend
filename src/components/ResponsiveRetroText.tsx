import React, { useState, useEffect } from "react";
import styles from "../styles/RetroText.module.css";

interface ResponsiveRetroTextProps {
  text: string;
  fontFamily: string;
  fontSize: string; // e.g., "15vw"
  color: string;
  glowColor: string;
  className?: string;
}

const ResponsiveRetroText: React.FC<ResponsiveRetroTextProps> = ({
  text,
  fontFamily,
  fontSize,
  color,
  glowColor,
  className,
}) => {
  const [calculatedFontSize, setCalculatedFontSize] = useState("120px");
  const [flickerIndex, setFlickerIndex] = useState<number | null>(null);

  useEffect(() => {
    const calculateSize = () => {
      const vwUnit = parseFloat(fontSize);
      const newSize = (window.innerWidth * vwUnit) / 100;
      setCalculatedFontSize(`${newSize}px`);
    };

    calculateSize();
    window.addEventListener("resize", calculateSize);

    let flickerTimeout: NodeJS.Timeout;

    const flicker = () => {
      const randomIndex = Math.floor(Math.random() * text.length);
      setFlickerIndex(randomIndex);

      setTimeout(() => {
        setFlickerIndex(null);
      }, Math.random() * 100 + 50); // Keep it off for a short, variable time

      // Schedule the next flicker at a random interval
      flickerTimeout = setTimeout(flicker, Math.random() * 4000 + 1000);
    };

    flickerTimeout = setTimeout(flicker, Math.random() * 4000 + 1000);

    return () => {
      window.removeEventListener("resize", calculateSize);
      clearTimeout(flickerTimeout);
    };
  }, [fontSize, text.length]);

  const style: React.CSSProperties = {
    fontFamily: `'${fontFamily}', sans-serif`,
    fontSize: calculatedFontSize,
    color: color,
  };

  return (
    <h1 className={`${styles.retroText} ${className || ""}`} style={style}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            opacity: flickerIndex === index ? 0.1 : 1,
            transition: "opacity 0.06s",
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default ResponsiveRetroText;
