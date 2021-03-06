//Custom hooks are named camelcase, and with use at the beginning
import { useState, useEffect, useRef } from "react";
//Api
import API from "../API";
//Helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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

  //Search and Initial Render
  //as this array is empty, this will be trigger once onMount
  useEffect(() => {
    //Check if we have something stored in sessionStorage before fetching from api, and if we are not searching
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");

      if (sessionState) {
        console.log("Grabbing Movies from sessionStorage");
        setState(sessionState);
        return;
      }
    }

    console.log("Grabbing Movies from API");

    //whiping out the previous state
    setState(initialState);

    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //Load More useEffect
  useEffect(() => {
    if (!isLoadingMore) return;

    //if Load More button is clicked we show one more page and search term if we are looking for something
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  //Write to sessionStorage
  //We have to JSON.stringify the json object as sessionStorage or localStorage can only be written with strings
  useEffect(()=>{
    if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(state))
  },[searchTerm,state]);


  //EC6 simplify, this object will have state:state,loading:loading,error:error
  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
