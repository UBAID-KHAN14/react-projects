import React, { useEffect, useState } from "react";
import PixabayContext from "./PixbayContext";

const PixabayState = (props) => {
  // image data
  const [imageData, setImageData] = useState([]);
  // for dynamic search
  const [searchQuery, setSearchQuery] = useState("london");
  // for loading spinner
  const [loading, setLoading] = useState(false);

  // Pixabay API key
  const api_key = "53070991-3fd047344b6ba4d2d26837168";

  // fetch data from API (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchApiData = async () => {
        try {
          setLoading(true);
          const api = await fetch(
            `https://pixabay.com/api/?key=${api_key}&q=${searchQuery}&image_type=photo&per_page=100`
          );
          const data = await api.json();
          setImageData(data.hits || []);
        } catch (err) {
          console.error("Error fetching data:", err);
        } finally {
          setLoading(false);
        }
      };
      if (searchQuery.trim() !== "") {
        fetchApiData();
      }
    }, 800); // ⏳ Debounce delay

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // fetch data via category
  const fetchDataByCategory = async (cat) => {
    try {
      setLoading(true);
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits || []);
    } catch (err) {
      console.error("Error fetching category data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PixabayContext.Provider
      value={{
        imageData,
        fetchDataByCategory,
        setSearchQuery,
        loading,
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
