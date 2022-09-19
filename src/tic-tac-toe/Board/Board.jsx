import React from "react";
import styles from "./Board.module.css";

function Board({ squares, onClick }) {
  return (
    <div className={styles.board}>
      {squares.map((square, index) => (
        <button
          className={styles.square}
          onClick={() => onClick(index)}
          key={index}
        >
          <h1>{square}</h1>
        </button>
      ))}
    </div>
  );
}

export default Board;
