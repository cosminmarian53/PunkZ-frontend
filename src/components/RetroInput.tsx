import React from 'react';
import styles from '../styles/RetroInput.module.css';

interface RetroInputProps {
  label: string;
  placeholder: string;
  isTextArea?: boolean;
}

const RetroInput: React.FC<RetroInputProps> = ({ label, placeholder, isTextArea = false }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      {isTextArea ? (
        <textarea className={`${styles.input} ${styles.textarea}`} placeholder={placeholder}></textarea>
      ) : (
        <input type="text" className={styles.input} placeholder={placeholder} />
      )}
    </div>
  );
};

export default RetroInput;
