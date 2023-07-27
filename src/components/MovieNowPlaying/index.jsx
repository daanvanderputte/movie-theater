import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const MovieNowPlaying = () => {
  const [movieNowPlaying, setMovieNowPlaying] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchMovieNowPlaying = async () => {
      try {
        const response = await axios.get(url);
        setMovieNowPlaying(response.data.results);
      } catch (error) {
        console.error("Error fetching movies now playing:", error);
      }
    };

    fetchMovieNowPlaying();
  }, []);

  const formatedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <div className="title">Movies</div>
      <div className="movie-cards-container">
        {movieNowPlaying.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-image">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-title">{movie.title}</div>
            <div className="movie-release-date">
              {formatedDate(movie.release_date)}
            </div>
            <div className="movie-overview">{movie.overview}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieNowPlaying;
