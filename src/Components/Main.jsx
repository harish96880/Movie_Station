import React from "react";

export default function Main({ children }) {
  return (
    <div className="container container-fluid w-100 h-100">
      <div className="grid-row">{children}</div>
    </div>
  );
}
