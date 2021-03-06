import React, { useContext } from "react";
//API
import API from "../../API";
import PropTypes from "prop-types";
//Components
import Thumb from "../Thumb";
import Rate from "../Rate";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//Image
import NoImage from "../../images/no_image.jpg";
//styles
import { Wrapper, Text, Content } from "./MovieInfo.styles";
//Context (GLOBAL STATE)
import { Context } from "../../context";

//Implicit Return
const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);

  //this value is the value from the range slider
  const handleRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId, movie.id, value);
    console.log(rate);
  };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>

          {user && (
            <div>
              <p>Rate Movie</p>
              <Rate callback={handleRating} />
            </div>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  //this object can be shaped to the shape of the desired object and every property
  movie: PropTypes.object,
};
export default MovieInfo;
