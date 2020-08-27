import React, { useState, useEffect } from "react";
// import axios from "./axios";
import "./row.css";

export default function Row({ title, fetchUrl, isLargePoster }) {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://api.themoviedb.org/3";
  const base_Url = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`${baseURL}${fetchUrl}`);
      const data = await response.json();
      // console.log(data);
      setMovies(data.results);
    };
    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargePoster && "large-row"}`}
            src={`${base_Url}${
              isLargePoster ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}
