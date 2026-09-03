import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get("http://localhost:1000/admin/aboutus_api");
        if (res.data && res.data.length > 0) {
          setAboutData(res.data[0]); // assume single about section
        } else {
          setAboutData(null);
        }
      } catch (error) {
        console.log("API Error:", error);
        setAboutData(null);
      }
    };
    loadData();
  }, []);

  // Decide which background to show
  const bgImage = aboutData?.image
    ? `http://localhost:1000/uploads/${aboutData.image}` // uploaded image
    : "/assets/about.jpeg"; // default fallback

  const title = aboutData?.title || "About Us";
  const description =
    aboutData?.description ||
    "Mensa Commerce Classes – Professionals Makes Professionals";

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        className="about-section position-relative text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
        <div className="overlay"></div>

        <div className="container position-relative">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4">{title}</h1>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTER CARDS SECTION */}
      <section className="about_counter mb-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-4">
              <div
                className="about-card shadow rounded text-center p-4"
                style={{ background: "#fff7e6" }}
              >
                <i className="fa fa-user about-icon"></i>
                <h1 className="mt-3">33+</h1>
                <h3 className="mt-2">Years of Experienced Tutors</h3>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="about-card shadow rounded text-center p-4"
                style={{ background: "#ffece6" }}
              >
                <i className="fa fa-book about-icon"></i>
                <h1 className="mt-3">50+</h1>
                <h3 className="mt-2">Certified Courses</h3>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="about-card shadow rounded text-center p-4"
                style={{ background: "#e6f3ff" }}
              >
                <i className="fa fa-users about-icon"></i>
                <h1 className="mt-3">5000+</h1>
                <h3 className="mt-2">Happy Students</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
