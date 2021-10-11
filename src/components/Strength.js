import React from "react";
import styles from "./styles.module.css";

const Strength = () => {
  return (
    <div className={styles.strength}>
      <h1 style={{ textAlign: "center" }}>Lotus Upcore Strength</h1>
      <div className={styles.sGrid}>
        <div className={styles.card}>
          <h3>GTM Strategy</h3>
          <br />
          <ul>
            <li>Positioning & Vision</li>
            <li>Brand Awareness</li>
            <li>Launch Events</li>
            <li>Cloud Communication</li>
            <li>Cloud Evangelism</li>
            <li>Portfolio Expansion</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Marketing</h3>
          <br />
          <ul>
            <li>Digital Web Presence</li>
            <li>Paid Media</li>
            <li>Content Creation</li>
            <li>Social Media & Blog</li>
            <li>Webinars</li>
            <li>Vendor Programs</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>GTM Account, Tech & ISV Teams</h3>
          <br />
          <ul>
            <li>Vendor Managers</li>
            <li>QBR’s & Dedicated Account </li>
            <li>Teams</li>
            <li>CRM Tools</li>
            <li>Sales Establishment </li>
            <li>Materials</li>
            <li>Tech Establishment </li>
            <li>Specialists</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Partner Enablement</h3>
          <br />
          <ul>
            <li>Reseller Communities</li>
            <li>Educational Bootcamps & Trainings</li>
            <li>Events & Roadshows</li>
            <li>Webinars</li>
            <li>Digital Marketing Materials</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Strength;
