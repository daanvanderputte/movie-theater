import React from "react";

const MovieBookmark = ({
  movieBookmark,
  movieNowPlaying,
  handleMovieCardClick,
}) => {
  const getMovieBookmarkById = (movieId) => {
    return movieNowPlaying.find((movie) => movie.id === movieId);
  };

  return (
    <div>
      <div className="title">Bookmarked Movies</div>
      <div className="movie-cards-container">
        {movieBookmark.map((movieId) => {
          const movie = getMovieBookmarkById(movieId);
          if (movie) {
            return (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => handleMovieCardClick(movie.id)}
              >
                <div className="movie-image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="movie-title">{movie.title}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default MovieBookmark;
