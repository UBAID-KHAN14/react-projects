import React, { useContext } from "react";
import PixabayContext from "../context/PixbayContext";

const Image = () => {
  const { imageData, loading } = useContext(PixabayContext);

  // 🧠 Function to handle image download
  const handleDownload = (url, id) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `pixabay-image-${id}.jpg`; // file name suggestion
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading images...</p>
      </div>
    );
  }

  if (imageData.length === 0) {
    return <p className="no-results">No images found.</p>;
  }

  return (
    <div className="pixabay-grid">
      {imageData.map((image) => (
        <div key={image.id} className="image-container">
          <div className="item">
            <img src={image.largeImageURL} alt={image.tags} />
          </div>
          <div className="overlay">
            <span>❤️ {image.likes}</span>
            <span
              className="download-btn"
              onClick={() => handleDownload(image.largeImageURL, image.id)}
              title="Download Image"
            >
              ⬇ {image.downloads}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Image;
