import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleAddtoWatchlist , handleRemoveFromWatchlist , watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=38539bcc78dbb94e7cd7313d2ddcb672&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      })
      .catch(function (error) {
        console.error("Error fetching movies:", error);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 bg-black text-white font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              movieObj={movieObj}
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>

      <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
}

export default Movies;