import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieNowPlaying from "./components/MovieNowPlaying";
import MovieReview from "./components/MovieReview";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MovieNowPlaying />} />
          <Route path="/reviews/:movieId" element={<MovieReview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
