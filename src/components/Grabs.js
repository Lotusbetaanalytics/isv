import React from "react";
import styles from "./styles.module.css";
import {
  FaCoins,
  FaCreditCard,
  FaTv,
  FaStore,
  FaDropbox,
  FaServer,
} from "react-icons/fa";

const Grabs = () => {
  const Reuse = ({ Icon, title }) => {
    return (
      <div className={styles.grab}>
        <span>
          <Icon />
        </span>
        <p> {title}</p>
      </div>
    );
  };
  return (
    <div className={styles.contents}>
      <h1 style={{ textAlign: "center" }}>
        So much for <span> grabs </span> If <br />
        selected Today
      </h1>
      <br />
      <br />
      <div className={styles.grabGrid}>
        <Reuse
          Icon={FaCoins}
          title="Regular Cloud Credits of up to $1500 (as required)."
        />
        <Reuse
          Icon={FaCreditCard}
          title="Free Migration Credits (free cloud migration support for all workloads)"
        />
        <Reuse
          Icon={FaTv}
          title="Tech Workshops (introducing your teams to new Azure technologies))"
        />
        <Reuse
          Icon={FaStore}
          title="Listing or transacting offer on Azure Marketplace (Terms applicable)"
        />
        <Reuse
          Icon={FaDropbox}
          title="When you become large and have higher growth potential, you
          graduate to become a Managed Partner."
        />
        <Reuse
          Icon={FaServer}
          title="Azure IP co-sale (helping ISVs sell, first through our customers
            and then through Microsoft sales teams to Microsoft customers)"
        />
      </div>
    </div>
  );
};

export default Grabs;
