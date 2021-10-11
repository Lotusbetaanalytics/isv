import React from "react";
import styles from "./styles.module.css";
import woman from "../assets/woman.jpg";
const Contents = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.contentGrid}>
        <div className={styles.card}>
          <h1>
            Lotus <span>Upcore</span>
          </h1>
          <p>The Next Best Choice for your Business!</p>
          <p>
            Are you a tech start-up? Do you have a team of developers? Do you
            render services in Africa and beyond? Then, your business qualifies
            for the Lotus Upcore support offer. We highly recommend that you opt
            in for the Lotus Upcore support program today...
          </p>
        </div>
        <div className={`${styles.card} ${styles.bg}`}>
          <img src={woman} alt="MS ISV" />
        </div>
      </div>
    </div>
  );
};

export default Contents;
