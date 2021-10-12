import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { registration } from "../redux/actions/userActions";
import img from "../assets/loading.gif";
import img2 from "../assets/error.gif";
import img3 from "../assets/success.gif";
import { USER_REGISTER_RESET } from "../redux/constants/userConstants";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      registration(firstname, lastname, businessName, role, email, mobile)
    );
  };
  const isv = useSelector((state) => state.isv);
  const { loading, error, success } = isv;

  if (success || error) {
    setTimeout(() => {
      dispatch({ type: USER_REGISTER_RESET });
      setFirstname("");
      setLastname("");
      setBusinessName("");
      setRole("");
      setEmail("");
      setMobile("");
    }, 6000);
  }

  return (
    <>
      <Navigation />
      <Hero />
      <div className={styles.contents}>
        {success ? (
          <div className={styles.imgContainer}>
            <img src={img3} alt="Loading" />
            <h3> Your request has been sent successfully</h3>
          </div>
        ) : error ? (
          <div className={styles.imgContainer}>
            <img src={img2} alt="Loading" />
            <h3>{error}</h3>
          </div>
        ) : loading ? (
          <div className={styles.imgContainer}>
            <img src={img} alt="Loading" />
            <h3> Please wait while we submit your request</h3>
          </div>
        ) : (
          <form onSubmit={submitHandler}>
            <div className={styles.formGrid}>
              <div className={styles.formContainer}>
                <label>First Name</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <label>Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <label>Job Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <label>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <button type="submit">Register</button>
              </div>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
