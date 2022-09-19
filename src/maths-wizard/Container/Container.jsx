import React, { useEffect, useState } from "react";
import styles from "./Container.module.css";

function Container() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sign, setSign] = useState("+");
  const [correctAnswer, setCorrectAnswer] = useState();
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);
  useEffect(() => {
    setCorrectAnswer(Math.floor(eval(`${num} ${sign} ${num2}`)));
  }, [num, sign, num2]);

  function handleClick() {
    setNum(Math.floor(Math.random() * 100));
    setNum2(Math.floor(Math.random() * 100));
    setSign(getRandomSign());
    setOpen(true);
  }
  function getRandomSign() {
    const signs = ["+", "-", "*", "/"];
    const idx = Math.floor(Math.random() * signs.length);
    return signs[idx];
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (correctAnswer == answer) {
      setScore((score) => score + 1);
    }
    handleClick();
    setAnswer("");
  }

  return (
    <div className={styles.root}>
      {!open && (
        <button className={styles.start} onClick={handleClick}>
          {/* Start Game
           */}
           <p>start</p>
        </button>
      )}
      {open && (
        <>
          <h3 className={styles.score}>SCORE: {score}</h3>
          <h1 style={{ padding: "10px" }}>
            {num}
            {sign}
            {num2}
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.answer}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </form>
        </>
      )}
    </div>
  );
}

export default Container;
