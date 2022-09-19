import React, { useState } from "react";
import styles from "./Container.module.css";

import Game from "../Game/Game";

function Container() {
  const [gameType, setGameType] = useState("");
  return (
    <React.Fragment>
      <div className={styles.root}>
        {/* <button
          className={styles.btn}
          onClick={() => {
            setGameType("Computer");
          }}
        >
          vs. Computer
        </button> */}
        <button
          className={styles.btn}
          onClick={() => {
            setGameType("TwoPlayer");
          }}
        >
          Two Player
        </button>
      </div>
      {/* {gameType === "Computer" && "Computer Game"} */}
      {gameType === "TwoPlayer" && <Game />}
    </React.Fragment>
  );
}

export default Container;
