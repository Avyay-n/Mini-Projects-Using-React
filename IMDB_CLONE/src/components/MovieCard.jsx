import React from "react";

function MovieCard({poster_path , name}) {
  return (
    <div
      className="h-[45vh] w-[180px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
      }}
    >

      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/15'>
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
