import React from 'react';
import styles from './Popup.module.css'; // Import CSS module for styling

const Popup = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null; // Return null if the popup is not open

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;