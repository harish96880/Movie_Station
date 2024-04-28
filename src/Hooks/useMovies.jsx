import {useState, useEffect} from "react"
import axios from 'axios'

export function UseMovies(query, callback) {

    const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState("");
  const [listItems, setListItems] = useState([]);
  callback?.()
    const fetchData = async (str) => {
        const controller = new AbortController();
        setIsLoad(true);
        const options = {
          method: "GET",
          url: "https://imdb8.p.rapidapi.com/auto-complete",
          params: { q: str },
          headers: {
            "X-RapidAPI-Key": "7a61a436a3msh423d193f1a1ebcep1405b3jsn731a08af79c4",
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          },
          signal: controller.signal,
        };
    
        try {
          setError("");
          const response = await axios.request(options);
          if (response.status != 200) {
            throw new Error("Failing to fetch the data");
          }
          if (response.data.d.length === 0) {
            throw new Error("Movie not found");
          }
          setListItems(response.data.d);
          console.log(response.data.d);
        } catch (error) {
          console.error(error);
          setIsLoad(false);
          setError(error.message);
        }
        setIsLoad(false);
        return () => controller.abort();
      };

      useEffect(() => {
        if (query.length < 3) {
          setError("");
          setListItems([]);
          return;
        }
        fetchData(query);
      }, [query]);

      return {isLoad, error, listItems}
}