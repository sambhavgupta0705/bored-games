import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Container from "../trivia-quiz/Container/Container";

function TriviaQuiz() {
  return (
    <React.Fragment>
      <Navbar logo="TRIVIA QUIZ" />
      <Container />
    </React.Fragment>
  );
}

export default TriviaQuiz;
