import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Container from "../rock-paper-scissors/Container/Container";

function RockPaperScissors() {
  return (
    <React.Fragment>
      <Navbar logo="ROCK PAPER SCISSORS" />
      <Container />
    </React.Fragment>
  );
}

export default RockPaperScissors;
