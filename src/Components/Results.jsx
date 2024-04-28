import React from "react";

export default function Results({ count }) {
  return (
    <p>
      found{" "}
      <span className="p-1 pt-0 pb-0 rounded-circle text-dark bg-white fw-bold">
        {count}
      </span>{" "}
      results
    </p>
  );
}
