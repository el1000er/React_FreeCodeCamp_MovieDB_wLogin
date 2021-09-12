import React from "react";

//this hook help us to get the param from the url
import { useParams } from "react-router-dom";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg";

//if it has no implicit return (if we have some logic), we put {}
const Movie = () => {

    //this is movieId is comming from the App components,where we specified route /:movieId,so has to have same name
    const {movieId}=useParams();

    const{state: movie, loading,error}=useMovieFetch(movieId);

    console.log(movie)
  return (
    <>
      <div>Movie</div>
    </>
  );
};
export default Movie;
