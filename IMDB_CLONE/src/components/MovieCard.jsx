import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[45vh] w-[180px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
      }}
    >
      <div className="text-white text-xl font-bold w-full p-2 text-center bg-gray-900/15">
        {name}
      </div>

      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="mx-2 my-1 flex justify-center h-8 w-8 items-center rounded-2xl bg-gray-900"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="mx-2 my-1 flex justify-center h-8 w-8 items-center rounded-2xl bg-gray-900"
        >
          &#10084;
        </div>
      )}
    </div>
  );
}

export default MovieCard;
