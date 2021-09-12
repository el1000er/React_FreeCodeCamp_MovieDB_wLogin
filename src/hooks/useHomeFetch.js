//Custom hooks are named camelcase, and with use at the beginning
import {useState,useEffect,useRef} from "react";
//Api
import API from "../API";

const initialState={
    page:0,
    results:[],
    total_pages:0,
    total_results:0
}

export const useHomeFetch=()=>{
    const [searchTerm,setSearchTerm]=useState('');
    const [state, setState] = useState(initialState);
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
  
    //initial render and search
    //as this array is empty, this will be trigger once onMount
    useEffect(() => {
      //whiping out the previous state
      setState(initialState);

      fetchMovies(1,searchTerm);
    }, [searchTerm]);

    
    //EC6 simplify, this object will have state:state,loading:loading,error:error
    console.log(state);
    return{state,loading,error,searchTerm,setSearchTerm};
};

  