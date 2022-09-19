import React from "react";
import styles from "./Footer.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className={styles.footer}>
      <a href="https://github.com/sambhavgupta0705" target="_blank">
        <IoLogoGithub className={styles.links} />
      </a>
      <a href="https://www.linkedin.com/in/sambhavgupta0705/" target="_blank">
        <IoLogoLinkedin className={styles.links} />
      </a>
      <a href="https://hashnode.com/@sam07codes" target="_blank">
        <IoIosLink className={styles.links} />
      </a>
      
      
       

    </div>
    <div className={styles.footer_2}>
           {/* <p>hello</p>
            */}
            <p>Made with <span>❤ </span>by Sambhav Gupta</p>
    </div>
    </>
  );
}

export default Footer;
