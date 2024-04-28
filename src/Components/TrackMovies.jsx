import React, { useEffect } from "react";
import SingleWatchedList from "./SingleWatchedList";
import StarRating from "./StarRating";
import { useState } from "react";

export default function TrackMovies({
  clickStatus,
  singleMovie,
  setClickStatus,
  handleAddWatch,
  watchedList,
  setWatchedList,
  handleClick,
  isWatch,
}) {
  const [rate, setRate] = useState(0);
  const [tempRate, setTempRating] = useState(0);
  // useEffect(() => {
  //   document.addEventListener(
  //     "keydown",
  //     (callback = (e) => {
  //       if (e.code === "Escape") {
  //         () => setClickStatus(false);
  //       }
  //     }),
  //   );
  //   return () => document.removeEventListener("keydown", callback);
  // }, [setClickStatus]);
  const imageObj = singleMovie && { ...singleMovie.i };
  const onHandleDeleteWatchedListMovie = (id) => {
    setWatchedList(() => watchedList.filter((movie) => movie.id !== id));
  };
  if (clickStatus && singleMovie)
    return (
      <div className="main-div grid-col-2 mt-2 ">
        <div className="film-container list-group text-white p-3">
          <div className="header-list list-group-item">
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
              }}
              onClick={() => setClickStatus(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
            </button>
            <p className="fw-bold h4">{singleMovie.l}</p>
            <img
              src={imageObj.imageUrl}
              width={"50%"}
              className="img-fluid m-2 rounded-lg"
            />
            <p>{singleMovie.s}</p>
            {!watchedList.find((item) => item.id === singleMovie.id) && (
              <>
                <StarRating
                  size={15}
                  maxRating={5}
                  key={singleMovie.id}
                  rate={rate}
                  setRate={setRate}
                  tempRate={tempRate}
                  setTempRating={setTempRating}
                />
                <button
                  className="btn btn-primary border-0 rounded-pill mt-4 shadow"
                  style={{ backgroundColor: "3d0872" }}
                  onClick={() =>
                    handleAddWatch({
                      ...singleMovie,
                      isWatched: isWatch,
                      rate: rate,
                    })
                  }
                >
                  Add to list
                </button>
              </>
            )}
            {watchedList.find((item) => item.id === singleMovie.id) && (
              <p>
                You rate{" "}
                {watchedList.find((item) => item.id === singleMovie.id).rate} ⭐
              </p>
            )}
          </div>
        </div>
      </div>
    );
  return (
    <div className="main-div grid-col-2 mt-2">
      <ul className="main-list list-group text-white p-3">
        <li className="header-list list-group-item">
          <p className="fw-bold">MOVIES YOU WATCHED</p>
          {watchedList.length === 0 ? (
            <p className="w-100">Watch movies and add✌️</p>
          ) : (
            <p className="w-100">
              <span>📽️ {watchedList.length} Movies</span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span>
                ⭐{" "}
                {Math.round(
                  watchedList.reduce((acc, obj) => acc + obj.rate, 0) /
                    watchedList.length,
                )}
              </span>
            </p>
          )}
        </li>
        {watchedList.map((movie, i) => (
          <li
            className="list-group-item"
            style={{ border: "none" }}
            key={movie.id}
          >
            <SingleWatchedList
              id={movie.id}
              name={movie.l}
              date={movie.y}
              poster={movie.i}
              handleClick={handleClick}
              watchedList={watchedList}
              handleDeleteWatchedListMovie={() =>
                onHandleDeleteWatchedListMovie(movie.id)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
