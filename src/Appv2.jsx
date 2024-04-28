import "./styles.css";
import Navbar from "./Components/Navbar";
import MoviesList from "./Components/MoviesList";
import TrackMovies from "./Components/TrackMovies";
import Logo from "./Components/Logo";
import Results from "./Components/Results";
import Search from "./Components/Search";
import SingleList from "./Components/SingleList";
import Main from "./Components/Main";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  // States

  const [clickMovie, setClickMovie] = useState(false);
  const [selectMovie, setSelectMovie] = useState(0);
  const [listItems, setListItems] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    setIsLoad(true);
    const options = {
      method: "GET",
      url: "https://mdblist.p.rapidapi.com/",
      params: { i: "157336" },
      headers: {
        "X-RapidAPI-Key": "7a61a436a3msh423d193f1a1ebcep1405b3jsn731a08af79c4",
        "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
      },
    };

    try {
      setError("");
      const response = await axios.request(options);
      console.log(response.data);
      // if (response.status != 200) {
      //   throw new Error("Failing to fetch the data");
      // }
      // if (response.data.d.length === 0) {
      //   throw new Error("Movie not found");
      // }
      setListItems(response.data.d);
      console.log(response.data.d);
    } catch (error) {
      console.error(error);
      setIsLoad(false);
      setError(error.message);
    }
    setIsLoad(false);
  };
  useEffect(() => {
    // if (query.length < 3) {
    //   setError("");
    //   setListItems([]);
    //   return;
    // }
    fetchData();
  }, []);

  const handleClickMovie = (id) => {
    setClickMovie(true);
    setSelectMovie(id);
  };

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Results count={0} />
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
            />
          ))}
        </MoviesList>
        <TrackMovies
          clickStatus={clickMovie}
          singleMovie={listItems.find((item) => item.id === selectMovie)}
        />
      </Main>
    </>
  );
}
