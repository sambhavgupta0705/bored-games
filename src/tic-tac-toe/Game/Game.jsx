import React, { useState } from "react";
import Board from "../Board/Board";
import { calculateWinner } from "../helper.js";
import ResetButton from "../ResetButton/ResetButton";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(squares);

  function handleClick(i) {
    const copyBoard = [...squares];
    if (winner || copyBoard[i]) return;
    copyBoard[i] = xIsNext ? "X" : "O";
    setSquares(copyBoard);
    setXisNext(!xIsNext);
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setXisNext(true);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {winner ? (
          winner === "X" ? (
            <h1>Player 1 wins 🎉</h1>
          ) : (
            <h1>Player 2 wins 🎊</h1>
          )
        ) : (
          <>
            {squares.some((element) => element === null) ? (
              xIsNext ? (
                <h1>Player 1's turn</h1>
              ) : (
                <h1>Player 2's turn</h1>
              )
            ) : (
              <h1> It's a tie! 🤝 </h1>
            )}
          </>
        )}
        {console.log(squares)}
      </div>

      <Board squares={squares} onClick={handleClick} />
      <ResetButton reset={reset} />
    </div>
  );
}

export default Game;
