import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Welcome to the Contact Management App</h1>
    <p className={styles.text}>
      Please register or login to manage your contacts.
    </p>
  </div>
);

export default HomePage;
