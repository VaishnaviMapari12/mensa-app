import React from "react";
import Testimonials_vedio from "./Testimonials_vedio";
import Testimonials_slider from "./Testimonials_slider";

export default function Testimonials() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 about-bg text-start py-5">
            <h1 className="text-white display-4">Testimonials</h1>
          </div>
        </div>
      </div>

      <Testimonials_vedio />
      <Testimonials_slider />
    </>
  );
}
