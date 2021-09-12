import { useState, useEffect, useCallback } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //using useCallback hook (passing movieId as dependency), 
  //to invoke the fetchMovie function only when moveId changes,
  //other wise it will be triggered with every render, creating an infinity loop
  //As we don't need it this way we will call it from the use effect directly
  /*
  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      //Get directors only
      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );

      setState({
        ...movie,
        actors: credits.cast,
        directors,
      });

      setLoading(false);
    } catch (error) {
      setError(true);
    }
  },[movieId]) ;
*/
  useEffect(() => {
        const fetchMovie = async () => {
          try {
            setLoading(true);
            setError(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            //Get directors only
            const directors = credits.crew.filter(
              (member) => member.job === "Director"
            );

            setState({
              ...movie,
              actors: credits.cast,
              directors,
            });

            setLoading(false);
          } catch (error) {
            setError(true);
          }
        };

        fetchMovie();
      }, [movieId]);

      //Calling fetchMovie() from inside of useEffect, (remember useCallbackHook to avoid infitiy loops)
   // fetchMovie();
  // }, callbackDependecyExample [movieId, fetchMovie]
 

  return { state, loading, error };
};
