import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <div>
    <header>
      <nav>https://connections-api.goit.global/docs/#/</nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);
