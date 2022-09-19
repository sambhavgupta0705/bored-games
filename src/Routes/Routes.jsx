import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TicTacToe from "../pages/TicTacToe";
import MatchingCards from "../pages/MatchingCards";
import RockPaperScissors from "../pages/RockPaperScissors";
import Hangman from "../pages/Hangman";
import TriviaQuiz from "../pages/TriviaQuiz";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import MathsWizard from "../pages/MathsWizard";
import LandingPage from "../pages/LandingPage";

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={LandingPage} />
          <Route path="/tic-tac-toe" exact component={TicTacToe} />
          <Route path="/matching-cards" exact component={MatchingCards} />
          <Route
            path="/rock-paper-scissors"
            exact
            component={RockPaperScissors}
          />
          <Route path="/hangman" exact component={Hangman} />
          <Route path="/trivia-quiz" exact component={TriviaQuiz} />
          <Route path="/maths-wizard" exact component={MathsWizard} />
        </Switch>
        <FloatingButton />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Routes;
