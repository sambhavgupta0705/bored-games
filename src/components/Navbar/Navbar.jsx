import React from "react";
import styles from "./Navbar.module.css";

function Navbar({ logo }) {
  return (
    <React.Fragment>
      <div className={styles.nav}>
        <h3 className={styles.logo}>{logo}</h3>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
