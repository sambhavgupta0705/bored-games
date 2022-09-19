import React from "react";
import styles from "./Card.module.css";
import { useHistory } from "react-router-dom";

function Card({ title, image }) {
  let history = useHistory();
  return (
    <div>
      <div className={styles.card}>
        <img className={styles.image} src={image} height="auto" width="200px" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.action}>
        <button
          className={`${styles.play} ${styles.button}`}
          onClick={() =>
            history.push(`/${title.toLowerCase().split(" ").join("-")}`)
          }
        >
          Play
        </button>
        {/* <button className={`${styles.info} ${styles.button}`}>Read More</button> */}
      </div>
    </div>
  );
}

export default Card;
