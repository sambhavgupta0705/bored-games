import React, { useState } from "react";
import styles from "./Container.module.css";

import { questions } from "../questions";

function Container() {
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreCard, setScoreCard] = useState(false);

  function handleClick(isCorrect) {
    if (isCorrect) {
      setScore((score) => score + 1);
    }
    const next = questionCount + 1;
    if (next < questions.length) {
      setQuestionCount(next);
    } else {
      setScoreCard(true);
    }
    console.log(isCorrect);
  }
  function playAgain() {
    setQuestionCount(0);
    setScore(0);
    setScoreCard(false);
  }
  return (
    <React.Fragment>
      <div className={styles.root}>
        {scoreCard ? (
          <div className={styles.scoreCard}>
            You got {score} out of {questions.length} questions correct.
          </div>
        ) : (
          <div className={styles.questions}>
            <h2>Question: {questionCount + 1}</h2>
            <h2 className={styles.question_text}>
              {questions[questionCount].questionText}
            </h2>
            <div className={styles.answers}>
              {questions[questionCount].answerOptions.map((options, index) => (
                <button
                  className={styles.options}
                  key={index}
                  onClick={() => handleClick(options.isCorrect)}
                >
                  {options.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={styles.playAgainDiv}>
        {scoreCard && (
          <button className={styles.playAgain} onClick={playAgain}>
            Play Again
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export default Container;
