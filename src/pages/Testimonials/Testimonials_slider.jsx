// Testimonials.jsx
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./Test.css"; // Ensure Test.css exists in the same folder

export default function Testimonials() {
  return (
    <>
      <div className="col-12">
        <h1 className="fw-lighter text-center" style={{ fontSize: "70px" }}> What People Say</h1>
      </div>
      <div className="col-12">
        <div id="scroll" className="row">
          <div className="col-md-6 ps-5 pe-5">
            <div id="bg" className="mb-3">
              <FaQuoteRight className="text-light fs-3 pt-1" />
            </div>
            <div id="text" className="text-center mb-4 p-4 rounded-4">
              <h5 className="mt-5 mb-5 fw-normal">
                Hey, Kalp Here. I am studying in FYJC. I decided to choose commerce since I want to pursue CA. I got to know about mensa from the ex-students, from their feedback, I joined mensa. This was not at all a bad decision as teachers here are very well-qualified and friendly. We enjoy detail explanation of every concept with personal attention on students. I would - definitely recommend you to join Mensa.
              </h5>
            </div>
            <div className="text-center">
              <div id="userlogo" className="mb-2">
                <FaUser style={{ fontSize: "70px" }} />
              </div>
              <h4>Kalp Lodariya</h4>
              <p>CAFC May 2023</p>
            </div>
          </div>

          {/* Copy all other testimonial divs exactly the same as above */}
          {/* Diya Shrimarkar */}
          <div className="col-md-6 ps-5 pe-5">
            <div id="bg" className="mb-3">
              <FaQuoteRight className="text-light fs-3 pt-1" />
            </div>
            <div id="text" className="text-center mb-4 p-4 rounded-4">
              <h5 className="mt-5 mb-5 fw-normal">
                I joined Mensa commerce class for my CA FOUNDATION COURSE. The teachers over here are highly knowledgeable and give one to one attention to each student. The students are even imparted with the basic knowledge of 11th and 12th and even the notes given are exhaustive and very helpful. The challenge most students have to face for CAFC is how can we complete our paper in time? For that regular test are taken and after the test each paper is discussed in detail. Even the admin staff is really helpful and cooperative.
              </h5>
            </div>
            <div className="text-center">
              <div id="userlogo" className="mb-2">
                <FaUser style={{ fontSize: "70px" }} />
              </div>
              <h4>Diya Shrimarkar</h4>
              <p>CAFC Nov 2023</p>
            </div>
          </div>
           {/* Copy all other testimonial divs exactly the same as above */}
          {/* Diya Shrimarkar */}
          <div className="col-md-6 ps-5 pe-5">
            <div id="bg" className="mb-3">
              <FaQuoteRight className="text-light fs-3 pt-1" />
            </div>
            <div id="text" className="text-center mb-4 p-4 rounded-4">
              <h5 className="mt-5 mb-5 fw-normal">
                I joined Mensa commerce class for my CA FOUNDATION COURSE. The teachers over here are highly knowledgeable and give one to one attention to each student. The students are even imparted with the basic knowledge of 11th and 12th and even the notes given are exhaustive and very helpful. The challenge most students have to face for CAFC is how can we complete our paper in time? For that regular test are taken and after the test each paper is discussed in detail. Even the admin staff is really helpful and cooperative.
              </h5>
            </div>
            <div className="text-center">
              <div id="userlogo" className="mb-2">
                <FaUser style={{ fontSize: "70px" }} />
              </div>
              <h4>Diya Shrimarkar</h4>
              <p>CAFC Nov 2023</p>
            </div>
          </div>
           {/* Copy all other testimonial divs exactly the same as above */}
          {/* Diya Shrimarkar */}
          <div className="col-md-6 ps-5 pe-5">
            <div id="bg" className="mb-3">
              <FaQuoteRight className="text-light fs-3 pt-1" />
            </div>
            <div id="text" className="text-center mb-4 p-4 rounded-4">
              <h5 className="mt-5 mb-5 fw-normal">
                I joined Mensa commerce class for my CA FOUNDATION COURSE. The teachers over here are highly knowledgeable and give one to one attention to each student. The students are even imparted with the basic knowledge of 11th and 12th and even the notes given are exhaustive and very helpful. The challenge most students have to face for CAFC is how can we complete our paper in time? For that regular test are taken and after the test each paper is discussed in detail. Even the admin staff is really helpful and cooperative.
              </h5>
            </div>
            <div className="text-center">
              <div id="userlogo" className="mb-2">
                <FaUser style={{ fontSize: "70px" }} />
              </div>
              <h4>Diya Shrimarkar</h4>
              <p>CAFC Nov 2023</p>
            </div>
          </div>

          {/* Repeat remaining 4 testimonials exactly same */}
          {/* Amey, Tisha, Abhishek */}
          {/* Copy the structure without any changes */}
        </div>
      </div>
    </>
  );
}
