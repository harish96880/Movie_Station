import React from "react";

export default function Navbar({ children }) {
  return (
    <nav
      className="navbar--container w-100 d-flex text-white justify-content-between align-items-center p-2"
      style={{ backgroundColor: "rgb(40, 16, 86)" }}
    >
      {children}
    </nav>
  );
}
