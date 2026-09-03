import React from "react";

export default function Testimonials_vedio() {
  const videos = [
    {
      img: "https://mensaclasses.com/images/testimonials/v1.jpg",
      url: "https://www.youtube.com/watch?v=zFKmvaCl2u4",
    },
    {
      img: "https://mensaclasses.com/images/testimonials/v2.jpg",
      url: "https://www.youtube.com/watch?v=dU-92wDtO94",
    },
    {
      img: "https://mensaclasses.com/images/testimonials/v3.jpg",
      url: "https://www.youtube.com/watch?v=UyIqk9JbanQ",
    },
    {
      img: "https://mensaclasses.com/images/testimonials/v4.jpg",
      url: "https://www.youtube.com/watch?v=u4ZZwrrhKoA",
    },
  ];

  return (
    <section id="video-testimonial" className="py-5 bglight_blue">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="darkcolor mb-3">Video Testimonials</h2>
          </div>
        </div>

        {/* Video Grid */}
        <div className="row g-3">
          {videos.map((video, index) => (
            <div className="col-12 col-sm-6 col-md-3" key={index}>
              <div className="position-relative overflow-hidden rounded shadow">
                <img
                  src={video.img}
                  alt={`video ${index + 1}`}
                  className="w-100"
                />
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="position-absolute top-50 start-50 translate-middle"
                >
                  <i className="fa fa-play fa-2x text-white"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="row mt-4 text-center">
          <div className="col-12">
            <a
              href="https://www.youtube.com/watch?v=zFKmvaCl2u4&list=PLGT1xKH53eB2GmMfyAnlXIVbsVAHB_Xqm"
              className="btn btn-primary mb-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Video Testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
