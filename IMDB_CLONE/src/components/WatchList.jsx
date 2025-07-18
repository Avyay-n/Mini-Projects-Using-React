import React from "react";
import { useState } from "react";
import genreids from '../utilities/genre'

function WatchList({ watchlist, handleRemoveFromWatchlist, setWatchList }) {
  const [search, setSearch] = useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  let sortPopularityIncreasing = () => {
    let sortedPopularityIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchList([...sortedPopularityIncreasing]);
  };

  let sortPopularityDecreasing = () => {
    let sortedPopularityDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchList([...sortedPopularityDecreasing]);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-2 my-3 hover:scale-110 duration-300 hover:cursor-pointer">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-300 rounded-xl text-white font-bold mx-2 my-3 hover:scale-110 duration-300 hover:cursor-pointer">
          Horror
        </div>
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search For Movies"
          className="h-[3rem] w-[18rem] bg-gray-300 outline-none mt-5 px-4 font-bold"
        />
      </div>

      <div className="bg-gray-100 border border-gray-400 m-8 overflow-hidden rounded-lg">
        <table className="w-full text-black-100">
          <thead className="border-b-4 border-gray-500">
            <tr>
              <th className="text-left pl-4 py-3">Name</th>
              <th className="py-3">
                <div className="flex justify-center items-center">
                  <div onClick={sortDecreasing} className="p-1 cursor-pointer hover:text-blue-500">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-1">Ratings</div>
                  <div onClick={sortIncreasing} className="p-1 cursor-pointer hover:text-blue-500">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th className="py-3">
                <div className="flex justify-center items-center">
                  <div onClick={sortPopularityDecreasing} className="p-1 cursor-pointer hover:text-blue-500">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-1">Popularity</div>
                  <div onClick={sortPopularityIncreasing} className="p-1 cursor-pointer hover:text-blue-500">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th className="py-3">Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b border-gray-300 font-bold hover:bg-gray-200" key={movieObj.id}>
                    <td className="flex items-center p-4 text-left">
                      <img
                        className="h-[6rem] w-[10rem] object-cover rounded"
                        src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
                        alt={movieObj.title || movieObj.name}
                      />
                      <div className="ml-4">
                        {movieObj.title || movieObj.name}
                      </div>
                    </td>
                    <td className="text-center">{movieObj.vote_average.toFixed(1)}</td>
                    <td className="text-center">{movieObj.popularity.toFixed(1)}</td>
                    <td className="text-center">{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-center">
                      <button
                        className="text-red-600 hover:text-red-800 cursor-pointer font-bold"
                        onClick={() => handleRemoveFromWatchlist(movieObj)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;