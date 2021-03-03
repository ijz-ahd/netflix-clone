import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const baseImageUrl = "https://image.tmdb.org/t/p/original";
const options = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // console.log(movie?.name);
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies &&
          movies.map((movie) => (
            <img
              className={`poster ${isLargeRow && "posters_large"}`}
              onClick={() => handleClick(movie)}
              key={movie.id}
              id={movie.id}
              src={`${baseImageUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={`${baseImageUrl}${movie.original_title}`}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
  );
}

export default Row;
