import React from "react";
import styles from "./styles.module.css";
import computer from "../assets/computer.jpg";
const Story = () => {
  return (
    <div className={styles.contents}>
      <h1 style={{ textAlign: "center" }}>The Story SO Far</h1>
      <div className={styles.contentGrid}>
        <div className={`${styles.card} ${styles.bg}`}>
          <img src={computer} alt="MS ISV" />
        </div>
        <div className={styles.card}>
          <br />
          <br />
          <br />
          <p>
            Cloud computing has drastically altered the ISV industry and
            customer expectations. As a result, building and scaling your apps
            on a reliable, secure cloud is critical for customer acquisition and
            retention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
