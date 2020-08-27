import React, { useState, useEffect } from "react";
import requests from "./request";

function Banner() {
  const baseURL = "https://api.themoviedb.org/3";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${baseURL}${requests.fetchNetflixOriginals}`
      );
      const data = await response.json();
      console.log(
        data.results[Math.floor(Math.random() * data.results.length)]
      );
      setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
    }
    fetchData();
  }, []);
  // console.log(movie);
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
      className="banner"
    >
      {/*background image*/}
      {/* {title} */}
      <div className="contents">
        <h1 className="title">{movie?.name || movie?.title}</h1>

        <div className="banner_btns">
          <button className="banner_btn">Play</button>

          <button className="banner_btn">My List</button>
        </div>
        <p className="description">{truncateString(movie.overview, 150)}</p>

        {/* <form action="">
          <input type="email" required />
          <button>GET STARTED</button>
        </form> */}
      </div>
      {/* { 2 button} */}
      {/* {description} */}
    </header>
  );
}
export default Banner;
