import { useState, useEffect, useCallback } from "react";
//API
import API from "../API";
//Helpers
import { isPersistedState } from "../helpers";


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
        
        //Checking if we have some Movie Data already in the sessionStorage
        const sessionState=isPersistedState(movieId);

        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();
      }, [movieId]);

      //Calling fetchMovie() from inside of useEffect, (remember useCallbackHook to avoid infitiy loops)
   // fetchMovie();
  // }, callbackDependecyExample [movieId, fetchMovie]
 
 //useEffect to WRITE to the sessionStorage
 
 useEffect(()=>{
    sessionStorage.setItem(movieId,JSON.stringify(state));
 },[movieId,state]);


  return { state, loading, error };
};
