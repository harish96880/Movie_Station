import React from "react";

export default function SingleList({ id, name, date, poster, handleClick }) {
  const posterImage = { ...poster };

  return (
    <li
      className="list-group-item "
      style={{ cursor: "pointer" }}
      onClick={() => handleClick(id)}
    >
      <div className="list-group-grid">
        <div className="image-one bg-transparent">
          <img
            src={posterImage.imageUrl}
            className=""
            width="30px"
            height="35px"
          />
        </div>
        <div className="title-one">{name}</div>
        {date && <div className="desc-one">🗓️ {date}</div>}
      </div>
    </li>
  );
}
