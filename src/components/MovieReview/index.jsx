import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

const MovieReview = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [movieReview, setMovieReview] = useState([]);
  const { movieId } = useParams();

  const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
  const reviewUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(detailUrl);
        setMovieDetail(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchMovieReview = async () => {
      try {
        const response = await axios.get(reviewUrl);
        setMovieReview(response.data.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };

    fetchMovieDetail();
    fetchMovieReview();
  }, [movieId]);

  return (
    <div>
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
        <div>{movieDetail.title}</div>
        <div>Release Date: {movieDetail.release_date}</div>
        <div>{movieDetail.overview}</div>
      </div>
      <div className="reviews">
        {movieReview.map((review) => (
          <div key={review.id} className="review-card">
            <div>Author: {review.author}</div>
            <div>Rating: {review.author_details.rating}</div>
            <div>Content: {review.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReview;
