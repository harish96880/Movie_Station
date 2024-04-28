import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Search({ query, setQuery }) {
  const [text, setText] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Enter movie name..."
        className="form-control border-0 rounded-pill"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
