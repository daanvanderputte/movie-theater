import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const MovieReview = () => {
  const [movieReview, setMovieReview] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/346698/reviews?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        const response = await axios.get(url);
        setMovieReview(response.data.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };

    fetchMovieReview();
  }, []);

  return (
    <div className="review-container">
      {movieReview.map((review) => (
        <div key={review.id} className="review-card">
          <div>Author: {review.author}</div>
          <div>Rating: {review.author_details.rating}</div>
          <div>Content: {review.content}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieReview;
