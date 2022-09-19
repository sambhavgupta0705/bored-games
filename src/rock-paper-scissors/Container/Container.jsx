import React, { useEffect, useState } from "react";
import styles from "../Container/Container.module.css";
import Score from "../Score/Score";
import PlayAgainButton from "../PlayAgainButton/PlayAgainButton";
import {
  FaRegHandPaper,
  FaRegHandScissors,
  FaRegHandRock,
} from "react-icons/fa";

function Container() {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
  const choices = ["rock", "paper", "scissors"];

  useEffect(() => {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("HUMAN WINS ✨");
      setScore((score) => score + 1);
    } else if (
      (computerChoice === "rock" && userChoice === "scissors") ||
      (computerChoice === "paper" && userChoice === "rock") ||
      (computerChoice === "scissors" && userChoice === "paper")
    ) {
      setResult("COMPUTER WINS 🥺");
    } else if (userChoice === computerChoice) {
      setResult("IT'S A TIE 🤝");
    }
  }, [computerChoice, userChoice]);

  function handleClick(value) {
    setOpen(true);
    setUserChoice(value);
    setComputerChoice();
    setResult();
    setTimeout(() => getComputerChoice(), 200);
  }

  function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function playAgain() {
    setOpen(false);
    setResult();
    setComputerChoice(null);
    setUserChoice();
    setScore(0);
  }
  return (
    <div className={styles.root}>
      <div className={styles.score_card}>
        <Score score={score} />
        <PlayAgainButton playAgain={playAgain} />
      </div>
      <h1> {result}</h1>
      {open && (
        <div className={styles.players}>
          <div className={styles.user_turns}>
            <button className={styles.choices}>
              {userChoice === "rock" && <FaRegHandRock />}
              {userChoice === "paper" && <FaRegHandPaper />}
              {userChoice === "scissors" && <FaRegHandScissors />}
            </button>
            <h2>Human</h2>
          </div>
          <div className={styles.user_turns}>
            <button className={styles.choices}>
              {computerChoice === "rock" && <FaRegHandRock />}
              {computerChoice === "paper" && <FaRegHandPaper />}
              {computerChoice === "scissors" && <FaRegHandScissors />}
            </button>
            <h2>Computer</h2>
          </div>
        </div>
      )}

      <div className={styles.buttons}>
        <button
          className={`${styles.choices} ${styles.rock}`}
          onClick={() => handleClick(choices[0])}
        >
          <FaRegHandRock />
        </button>
        <button
          className={`${styles.choices} ${styles.paper}`}
          onClick={() => handleClick(choices[1])}
        >
          <FaRegHandPaper />
        </button>
        <button
          className={`${styles.choices} ${styles.scissors}`}
          onClick={() => handleClick(choices[2])}
        >
          <FaRegHandScissors />
        </button>
      </div>
    </div>
  );
}

export default Container;
