import React from "react";
import styles from "./ResetButton.module.css";

function ResetButton({ reset }) {
  return (
    <button type="button" className={styles.btn} onClick={reset}>
      RESET BOARD
    </button>
  );
}

export default ResetButton;
