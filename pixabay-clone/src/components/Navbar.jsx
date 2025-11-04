import React, { useContext } from "react";
import PixabayContext from "../context/PixbayContext";

const Navbar = () => {
  const { fetchDataByCategory, setSearchQuery } = useContext(PixabayContext);

  return (
    <>
      <div className="full-container">
        <div className="brand-name">
          <h1>UBAID-KHAN</h1>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for free images"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="overall-buttons">
          {[
            "nature",
            "fashion",
            "science",
            "education",
            "health",
            "people",
            "business",
            "sports",
            "food",
            "computer",
            "animals",
            "buildings",
            "places",
          ].map((cat) => (
            <button key={cat} onClick={() => fetchDataByCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
