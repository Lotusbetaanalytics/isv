import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import styles from "./styles.module.css";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <>
      <Navigation />
      <Hero />
      <div className={styles.contents}>
        <form>
          <div className={styles.formGrid}>
            <div className={styles.formContainer}>
              <label>First Name</label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.vale)}
              />
            </div>
            <div className={styles.formContainer}>
              <label>Last Name</label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.vale)}
              />
            </div>
            <div className={styles.formContainer}>
              <label>Business Name</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.vale)}
              />
            </div>
            <div className={styles.formContainer}>
              <label>Job Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.vale)}
              />
            </div>
            <div className={styles.formContainer}>
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.vale)}
              />
            </div>
            <div className={styles.formContainer}>
              <label>Phone Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.vale)}
              />
            </div>
            <div className={styles.formContainer}>
              <button type="submit">Register</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
