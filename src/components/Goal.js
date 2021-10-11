import React from "react";
import styles from "./styles.module.css";
import goal from "../assets/goal.jpg";
const Goal = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.contentGrid}>
        <div className={styles.card}>
          <h1>
            The <span>Lotus Upcore</span> Goal
          </h1>

          <p>
            Our goal is to provide support throughout the lifecycle of digital
            transformation, considering your business model, customer needs, and
            vision, so your company is in good hands.
          </p>
        </div>
        <div className={`${styles.card} ${styles.bg}`}>
          <img src={goal} alt="MS ISV" />
        </div>
      </div>
    </div>
  );
};

export default Goal;
