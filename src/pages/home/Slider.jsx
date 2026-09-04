import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

export default function Slider() {
  const [sliderData, setSliderData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const res = await axios.get(
        "https://mensa-app.onrender.com/admin/slider_api"
      );

      console.log("API DATA:", res.data);

      if (res.data && res.data.length > 0) {
        setSliderData(res.data[0]);
      }

      setLoading(false);
    } catch (error) {
      console.log("API Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!sliderData) {
    return <h3>No Slider Data</h3>;
  }

  const rightImages = [
    sliderData.right_image1,
    sliderData.right_image2,
    sliderData.right_image3,
    sliderData.right_image4,
  ].filter((img) => img && img.trim() !== "");

  return (
    <section className="slider-section">

      {/* LEFT IMAGE */}
      <div className="left-fixed-img">
        <img
          src={`https://mensa-app.onrender.com/uploads/${encodeURIComponent(
            sliderData.left_image
          )}`}
          className="left-img"
          alt="Left"
        />
      </div>

      {/* RIGHT SLIDER */}
      <div className="right-slider">
        <div
          id="rightSlider"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2500"
        >

          {/* SLIDER IMAGES */}
          <div className="carousel-inner">

            {rightImages.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""
                  }`}
              >
                <img
                  src={`https://mensa-app.onrender.com/uploads/${encodeURIComponent(
                    img
                  )}`}
                  className="slider-img"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}

          </div>

          {/* PREVIOUS BUTTON */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#rightSlider"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          {/* NEXT BUTTON */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#rightSlider"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>

    </section>
  );
}
