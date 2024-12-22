import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => (
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> | <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);
