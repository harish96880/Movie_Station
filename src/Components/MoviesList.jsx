import React from "react";
import Loader from "./Loader";
export default function MoviesList({ children, load, error }) {
  return (
    <div className="grid-col-1 mt-2">
      {/* {load ? <Loader /> : <ul className="list-group">{children}</ul>} */}
      {load && <Loader />}
      {!load && !error && <ul className="list-group">{children}</ul>}
      {error && <p className="alert alert-danger">{error}</p>}
    </div>
  );
}
