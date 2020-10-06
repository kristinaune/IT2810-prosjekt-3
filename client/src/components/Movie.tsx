import React from "react";

import "./Movie.css";

const Movie = (props: any) => {
  return (
    <div className="movie">
      <div className="poster">
        <img alt="poster" src={props.poster} />
      </div>
      <div className="title">
        <h5>
          {props.title} ({props.year})
        </h5>
        <p>{props.actors.join(", ")}</p>
      </div>
    </div>
  );
};

export default Movie;
