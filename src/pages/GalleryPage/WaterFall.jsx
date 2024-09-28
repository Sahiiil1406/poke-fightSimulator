import React, { useState } from "react";
import Waterfall from "waterfalljs-layout/react";

const categoryImages = {
  All: [
    "https://picsum.photos/640/200/?random",
    "https://picsum.photos/360/640/?random",
    "https://picsum.photos/480/720/?random",
    "https://picsum.photos/480/640/?random",
    "https://picsum.photos/360/?random",
    "https://picsum.photos/360/520/?random",
    "https://picsum.photos/520/360/?random",
    "https://picsum.photos/520/360/?random",
  ],
  INCUB8: [
    "https://picsum.photos/600/200/?random",
    "https://picsum.photos/400/600/?random",
    "https://picsum.photos/500/800/?random",
  ],
  StartupFoolies: [
    "https://picsum.photos/450/300/?random",
    "https://picsum.photos/300/450/?random",
    "https://picsum.photos/700/500/?random",
  ],
};

const customStyle = `#react-waterfall-comps li>div {
  border-radius: 2px;
  font-size: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
  padding: 6px;
  background: rgb(255, 255, 255);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
#react-waterfall-comps li>div:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
}
#react-waterfall-comps li>div>img {
  width: 100%; /* Ensure images take the full width */
  height: auto; /* Maintain aspect ratio */
}`;

export default function WaterFall({ selectedCategory }) {
  const [images] = useState(categoryImages[selectedCategory]); // Get images for selected category
  const [enlargedImage, setEnlargedImage] = useState(null); // State to track enlarged image

  const handleImageClick = (src) => {
    if (enlargedImage === src) {
      setEnlargedImage(null); // Clicked again, return to normal
    } else {
      setEnlargedImage(src); // Enlarge the clicked image
    }
  };

  const handleBackgroundClick = () => {
    setEnlargedImage(null); // Click elsewhere to return to normal
  };

  return (
    <div
      style={{
        display: "flex", // Enable flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        minHeight: "100vh", // Minimum height to fill the viewport
        width: "100%", // Full width of the viewport
        overflow: "hidden" // Disable scrolling
      }}
      onClick={handleBackgroundClick} // Clicks on background return image to normal
    >
      <div style={{ maxWidth: "800px", width: "100%" }}> {/* Limit the width */}
        <Waterfall
          columnWidth={240} // Adjusted column width for a better fit
          columnCount={3} // Three columns
          columnGap={10} // Reduced gap for tighter layout
          rowGap={10} // Reduced row gap
          customStyle={customStyle}
        >
          {images.map((item, index) => {
            return (
              <li key={index}>
                <div onClick={(e) => { e.stopPropagation(); handleImageClick(item); }}>
                  <img src={item} alt="" style={{
                    transform: enlargedImage === item ? "scale(1.5)" : "scale(1)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer"
                  }} />
                </div>
              </li>
            );
          })}
        </Waterfall>
      </div>
      {enlargedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000 // Ensure overlay is on top
          }}
          onClick={handleBackgroundClick}
        >
          <img
            src={enlargedImage}
            alt=""
            style={{
              maxHeight: "80%", // Limit the max height of enlarged image
              maxWidth: "80%", // Limit the max width of enlarged image
              borderRadius: "1px"
            }}
          />
        </div>
      )}
    </div>
  );
}