import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        href="mailTo:businesssupport@lotusbetaanalytics.com"
        className={styles.btn}
      >
        Let's get Started
      </a>
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
