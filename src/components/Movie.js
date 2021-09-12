import React from "react";

//this hook help us to get the param from the url
import { useParams } from "react-router-dom";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg";
import MovieInfo from "./MovieInfo";

//if it has no implicit return (if we have some logic), we put {}
const Movie = () => {

    //this is movieId is comming from the App components,where we specified route /:movieId,so has to have same name
    const {movieId}=useParams();

    const{state: movie, loading,error}=useMovieFetch(movieId);

 if(loading)return <Spinner/>
 if(error)return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}/>
      <MovieInfo movie={movie}></MovieInfo>
    </>
  );
};
export default Movie;
