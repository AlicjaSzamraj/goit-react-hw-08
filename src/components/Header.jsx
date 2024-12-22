import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/operations"; // Upewnij się, że ścieżka jest poprawna
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.user?.email); // Pobieranie e-maila użytkownika z Redux

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/register" className={styles.link}>
          Register
        </Link>
        <Link to="/login" className={styles.link}>
          Login
        </Link>
        <Link to="/contacts" className={styles.link}>
          Contacts
        </Link>
        {userEmail && (
          <span className={styles.welcome}>Welcome, {userEmail}</span>
        )}
        <button onClick={handleLogout} className={styles.button}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
