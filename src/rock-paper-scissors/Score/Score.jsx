import React from "react";
import styles from "./Score.module.css";

function Score({ score }) {
  return <div className={styles.score_card}>Score : {score}</div>;
}

export default Score;
