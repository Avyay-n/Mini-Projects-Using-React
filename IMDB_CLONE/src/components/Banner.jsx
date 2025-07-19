import React, { useEffect, useState } from 'react';
import axios from "axios";

function Banner({ watchlist, handleAddtoWatchlist, handleRemoveFromWatchlist }) {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=38539bcc78dbb94e7cd7313d2ddcb672&language=en-US&page=1`
            )
            .then(function (res) {
                const randomIndex = Math.floor(Math.random() * res.data.results.length);
                setMovie(res.data.results?.[randomIndex]);
            })
            .catch(function (error) {
                console.error("Error fetching movies:", error);
            });
    }, []);

    const doesBannerMovieContain = () => {
        if (!movie || !watchlist) return false;
        return watchlist.some(item => item.id === movie.id);
    };

    if (!movie) {
        return (
            <div className="h-[20vh] md:h-[90vh] bg-gray-800 text-3xl flex items-center justify-center text-white">
                Loading Banner...
            </div>
        );
    }

    const imageUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
        : movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : '';

    const movieTitle = movie.title || movie.name;

    const isMovieInWatchlist = doesBannerMovieContain();

    return (
        <div
            className="relative h-[20vh] md:h-[90vh] bg-center bg-cover"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute top-4 right-4 z-10">
                {isMovieInWatchlist ? (
                    <div
                        onClick={() => handleRemoveFromWatchlist(movie)}
                        className="flex justify-center h-10 w-10 items-center rounded-full bg-gray-900/70 text-white text-xl cursor-pointer hover:bg-gray-700 transition-colors"
                        title="Remove from Watchlist"
                    >
                        &#10060;
                    </div>
                ) : (
                    <div
                        onClick={() => handleAddtoWatchlist(movie)}
                        className="flex justify-center h-10 w-10 items-center rounded-full bg-gray-900/70 text-red-500 text-xl cursor-pointer hover:bg-gray-700 transition-colors"
                        title="Add to Watchlist"
                    >
                        &#10084;
                    </div>
                )}
            </div>

            <div className='absolute bottom-0 left-0 text-white text-center text-2xl md:text-4xl font-bold w-full bg-gray-900/80 p-3'>
                {movieTitle}
            </div>
        </div>
    );
}

export default Banner;