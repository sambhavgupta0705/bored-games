import React from "react";
import styles from "./Form.module.css";

function Form() {
  return (
    <React.Fragment>
      <div>
        <label>First Player</label>
        <input placeholder="First Player" />
        <label>Second Player</label>
        <input placeholder="Second Player" />
        <button>PLAY</button>
      </div>
    </React.Fragment>
  );
}

export default Form;
