import React from "react";
import styles from "./styles.module.css";

const Powerup = () => {
  return (
    <div className={styles.powerup}>
      <h1>
        Lotus Upcore
        <span> Power-Ups </span>
        for
        <br /> your Business!
      </h1>
      <br />
      <br />
      <div className={styles.core}>
        <div className={styles.title}>Dev-Ops Infrastructure-</div>
        <ul>
          <li>
            Get your workforce trained and certified on Microsoft Azure
            platforms
          </li>
          <li>
            Modernize & Migrate Solution with Lotus Upcore Pro Support Team
          </li>
          <li>
            Build Cloud Native/Cloud Friendly Solutions with technical guidance
          </li>
        </ul>
      </div>

      <div className={styles.core}>
        <div className={styles.title}>Collaboration-</div>
        <ul>
          <li>
            Support workforce with Microsoft Teams at Zero cost for 60 days
          </li>
          <li>
            Support workforce with Microsoft office emails at Zero cost for 60
            days
          </li>
          <li>
            Support workforce with Microsoft Word, PowerPoint & Excel at Zero
            cost for 60 days
          </li>
        </ul>
      </div>

      <div className={styles.core}>
        <div className={styles.title}>Marketing-</div>
        <ul>
          <li>Define right Go-To-Market Strategy</li>
          <li>
            Prepare you to be co-sell ready and obtain the required competency
            levels
          </li>
          <li>
            Access Lotus Upcore Market to promote your solutions reaching more
            customers all over the world.
          </li>
        </ul>
      </div>

      <div className={styles.core}>
        <div className={styles.title}>Sales-</div>
        <ul>
          <li>
            Leverage Co-sell program supported by internal Lotus Upcore sales
            team
          </li>
          <li>
            Become Lotus Upcore Cloud Vendor and benefit from our automated
            transaction management system.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Powerup;
