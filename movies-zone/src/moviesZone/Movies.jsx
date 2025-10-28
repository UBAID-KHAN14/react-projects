import React, { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  // ✅ State to hold the currently displayed list of movies
  // Starts with the full dataset imported from data.js
  const [movieList, setMovieList] = useState(movies);

  // 🎯 Function to filter movies by category (e.g., Action, Thriller, etc.)
  const filterDataCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category === cat));
  };

  return (
    <>
      {/* 🔘 Category Filter Buttons Section */}
      <div
        style={{
          width: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1.5rem auto",
          flexWrap: "wrap",
        }}
      >
        {/* 🎬 Show All Movies */}
        <button
          type="button"
          onClick={() => setMovieList(movies)}
          className="btn btn-outline-primary mx-3"
        >
          All
        </button>

        {/* ⚡ Filter: Action */}
        <button
          type="button"
          onClick={() => filterDataCategory("Action")}
          className="btn btn-outline-secondary mx-3"
        >
          Action
        </button>

        {/* 🕵️ Filter: Thriller */}
        <button
          type="button"
          onClick={() => filterDataCategory("Thriller")}
          className="btn btn-outline-success mx-3"
        >
          Thriller
        </button>

        {/* 🧸 Filter: Animation */}
        <button
          type="button"
          onClick={() => filterDataCategory("Animation")}
          className="btn btn-outline-danger mx-3"
        >
          Animation
        </button>

        {/* 👻 Filter: Horror */}
        <button
          type="button"
          onClick={() => filterDataCategory("Horror")}
          className="btn btn-outline-warning mx-3"
        >
          Horror
        </button>

        {/* 🎭 Filter: Drama */}
        <button
          type="button"
          onClick={() => filterDataCategory("Drama")}
          className="btn btn-outline-info mx-3"
        >
          Drama
        </button>

        {/* 🚀 Filter: Sci-Fi */}
        <button
          type="button"
          onClick={() => filterDataCategory("Sci-Fi")}
          className="btn btn-outline-light mx-3"
        >
          Sci-Fi
        </button>
      </div>

      {/* 🖼️ Movie Cards Display Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "1200px",
          flexWrap: "wrap",
          textAlign: "center",
          margin: "20px auto",
          gap: "2rem",
        }}
      >
        {/* 🧩 Map through movieList and render each movie */}
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "250px" }}>
            {/* 🎞️ Movie Poster Container with Hover Effect */}
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt={data.title}
                style={{
                  width: "250px",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              />
            </div>

            {/* 🏷️ Movie Title */}
            <h5>{data.title}</h5>

            {/* 📅 Movie Release Date */}
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
