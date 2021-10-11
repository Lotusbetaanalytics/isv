import React from "react";
import styles from "./styles.module.css";
import { FaCloudversify, FaChartLine, FaHornbill } from "react-icons/fa";

const Plan = () => {
  return (
    <div className={styles.contents}>
      <h1 style={{ textAlign: "center" }}>
        The <span>Plan</span>
      </h1>
      <p style={{ textAlign: "center" }}>
        Lotus Upcore program intends to assist Independent Software
        <br /> businesses in;
      </p>
      <br />
      <br />
      <div className={styles.planGrid}>
        <div className={styles.plan}>
          <span>
            <FaHornbill />
          </span>
          <h4>Modernizing Legacy Solutions</h4>
        </div>
        <div className={styles.plan}>
          <span>
            <FaCloudversify />
          </span>
          <h4>Developing Cloud Applications </h4>
        </div>
        <div className={styles.plan}>
          <span>
            <FaChartLine />
          </span>
          <h4>Driving exponential revenue growth!</h4>
        </div>
      </div>
    </div>
  );
};

export default Plan;
