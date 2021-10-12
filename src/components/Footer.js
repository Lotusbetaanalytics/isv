import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/register" className={styles.btn}>
        Register
      </Link>
      <br />
      <br />
      <br />
      <p>
        Contact us via <br />
        <a href="mailTo:businesssupport@lotusbetaanalytics.com">
          businesssupport@lotusbetaanalytics.com
        </a>{" "}
        <br />
        or
        <br /> <a href="tel:+234 816 644 7596.">+234 816 644 7596.</a>
      </p>
    </div>
  );
};

export default Footer;
