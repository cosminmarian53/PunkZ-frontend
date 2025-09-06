import React from 'react';
import styles from '../styles/RetroModal.module.css';

interface RetroModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const RetroModal: React.FC<RetroModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.retroOverlay} onClick={onClose}></div>
      <div className={styles.retroModalContainer}>
        <div className={styles.retroModalHeader}>
          {title}
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.retroModalContent}>
          {children}
        </div>
        <div className={styles.scanlines}></div>
      </div>
    </>
  );
};

export default RetroModal;
