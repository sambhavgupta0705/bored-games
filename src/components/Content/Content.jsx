import React from "react";
import styles from "./Content.module.css";
import Card from "../Card/Card";
// import rockpaperscissors from "../../../img/pic1.png";
// import tictactoe from "../../../img/pic2.png";
// import quiz from "../../../img/pic3.png";
// import mathsWizard from "../../../img/pic4.png";
import rockpaperscissors from "../../img/pic1.png"
import tictactoe from "../../img/pic2.png"
import quiz from "../../img/pic3.png"
import mathsWizard from "../../img/pic4.png"

function Content() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Card title="Rock Paper Scissors" image={rockpaperscissors} />
        <Card title="Tic Tac Toe" image={tictactoe} />
        <Card title="Trivia Quiz" image={quiz} />
        <Card title="Maths Wizard" image={mathsWizard} />
        {/* <Card title="Matching Cards" /> */}
        {/* <Card title="Hangman" /> */}
      </div>
    </React.Fragment>
  );
}

export default Content;
