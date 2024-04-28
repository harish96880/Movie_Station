import React from "react";

export default function SingleWatchedList({
  id,
  name,
  date,
  poster,
  handleClick,
  watchedList,
  handleDeleteWatchedListMovie,
}) {
  const posterImage = { ...poster };

  return (
    <li className="list-group-item " style={{ cursor: "pointer" }}>
      <div className="list-group-grid">
        <div
          className="image-one bg-transparent"
          onClick={() => handleClick(id)}
        >
          <img
            src={posterImage.imageUrl}
            className=""
            width="30px"
            height="35px"
          />
        </div>
        <div className="title-one" onClick={() => handleClick(id)}>
          {name}
        </div>
        {date && (
          <div className="desc-one" onClick={() => handleClick(id)}>
            🗓️ {date}
          </div>
        )}
        {watchedList.find((movie) => movie.id === id) && (
          <div>
            <button
              className="btn btn-danger p-1"
              onClick={() => handleDeleteWatchedListMovie(id)}
            >
              X
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
