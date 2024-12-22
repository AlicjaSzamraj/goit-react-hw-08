import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/operations";
import styles from "./Header.module.css"; // Importowanie pliku CSS

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      {" "}
      // Używanie stylów CSS
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>
          Home
        </a>
        <a href="/register" className={styles.link}>
          Register
        </a>
        <a href="/login" className={styles.link}>
          Login
        </a>
        <a href="/contacts" className={styles.link}>
          Contacts
        </a>
        <button onClick={handleLogout} className={styles.button}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
