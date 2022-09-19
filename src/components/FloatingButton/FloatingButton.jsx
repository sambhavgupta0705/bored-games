import React from "react";
import styles from "./FloatingButton.module.css";
import { Link } from "react-router-dom";

function FloatingButton() {
  return (
    <Link className={styles.link} to="/home">
      <div className={styles.float}>
        <p className={styles.text}>BORED.</p>
      </div>
    </Link>
  );
}

export default FloatingButton;
