import React, { useState, useEffect } from "react";
//Api
import API from "../API";
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMPAGE_BASE_URL } from "../config";
//Components

//Hook

//Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
     

      //here we are using spread operator, that  we will use to create a NEW OBJECT
      //with all the fetched movies, NOT CHANGING the state (state = movies) which is not recommended
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //initial render
  //as this array is empty, this will be trigger once onMount
  useEffect(() => {
    fetchMovies(1);
  }, []);

  console.log(state);

  return <div>Home Page</div>;
};

export default Home;