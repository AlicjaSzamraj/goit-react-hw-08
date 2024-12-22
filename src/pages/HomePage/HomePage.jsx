import React from "react";
import "./HomePage.module.css";

const HomePage = () => (
  <div>
    <h1 className={styles.h1}>Welcome to the Contact Management App</h1>
    <p className={styles.p}>
      Please register or login to manage your contacts.
    </p>
  </div>
);

export default HomePage;
