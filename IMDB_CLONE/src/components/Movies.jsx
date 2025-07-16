import { useState } from "react";
import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=38539bcc78dbb94e7cd7313d2ddcb672&language=en-US&page=1"
      )
      .then(function (res) {
        setMovies(res.data.results);
      })
      .catch(function (error) {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 bg-black text-white font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title}/>;
        })}
      </div>
    </div>
  );
}

export default Movies;