import { useState } from "react";
import styles from "../../pages/UsePopcorn.module.css";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.box}>
      <button
        className={styles.btnToggle}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
