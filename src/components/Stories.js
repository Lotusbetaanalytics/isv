import React from "react";
import styles from "./styles.module.css";
import computer from "../assets/computer.jpg";
const Stories = () => {
  return (
    <div className={styles.contents}>
      <h1 style={{ textAlign: "center" }}>Lotus Upcore Partner Stories</h1>
      <div className={styles.contentGrid}>
        <div className={styles.card}>
          <br />
          <br />
          <br />
          <p>
            “With the support, guidance, and end-to-end services provided by
            Lotus Upcore ISV support program, FinTrak was able to quickly become
            a certified Microsoft Azure partner, giving us access to new
            markets, the opportunity to grow our business, and the ability to
            transform our company into a truly global ISV. We are not where we
            used to be”
          </p>
          <p>
            <b>~FinTrack Software Ng</b>
          </p>
        </div>
        <div className={`${styles.card} ${styles.bg}`}>
          <img src={computer} alt="MS ISV" />
        </div>
      </div>
    </div>
  );
};

export default Stories;
