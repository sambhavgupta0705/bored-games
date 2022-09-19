import React from "react";
import styles from "./PlayAgainButton.module.css";
import { MdReplay } from "react-icons/md";

function PlayAgainButton({ playAgain }) {
  return (
    <button onClick={playAgain} className={styles.play_again}>
      <MdReplay />
    </button>
  );
}

export default PlayAgainButton;
