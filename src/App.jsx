import "./styles.css";
import Navbar from "./Components/Navbar";
import MoviesList from "./Components/MoviesList";
import TrackMovies from "./Components/TrackMovies";
import Logo from "./Components/Logo";
import Results from "./Components/Results";
import Search from "./Components/Search";
import SingleList from "./Components/SingleList";
import Main from "./Components/Main";
import { useState } from "react";
import { UseMovies } from "./Hooks/UseMovies.jsx";

export default function App() {
  // States
  const [clickMovie, setClickMovie] = useState(false);
  const [selectMovie, setSelectMovie] = useState(0);
  const [query, setQuery] = useState("");
  const [watch, isWatch] = useState(false);
  const [watchedList, setWatchedList] = useState([]);

  const handleAddWatch = (movie) => {
    setWatchedList((watchedList) => [...watchedList, movie]);
  };

  const { isLoad, error, listItems } = UseMovies(query);
  const handleClickMovie = (id) => {
    setClickMovie(true);
    setSelectMovie(id);
  };

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Results count={listItems.length} />
      </Navbar>
      <Main>
        <MoviesList listItems={listItems} load={isLoad} error={error}>
          {listItems.map((item) => (
            <SingleList
              key={item.id}
              id={item.id}
              name={item.l}
              date={item.y}
              poster={item.i}
              handleClick={handleClickMovie}
              watchedList={watchedList}
            />
          ))}
        </MoviesList>
        <TrackMovies
          clickStatus={clickMovie}
          setClickStatus={setClickMovie}
          singleMovie={listItems.find((item) => item.id === selectMovie)}
          handleAddWatch={handleAddWatch}
          watchedList={watchedList}
          handleClick={handleClickMovie}
          isWatch={watch}
          setWatchedList={setWatchedList}
        />
      </Main>
    </>
  );
}
