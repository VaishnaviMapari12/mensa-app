import React from "react";

export default function Courses() {
  return (
    <>
      <section className="courses-section py-5 mb-5">
        <div className="container">

          <div className="row mb-5">
            <div className="col-12 text-center mb-4">
              <h3 className="display-4">Courses</h3>
              <h1 className="h3 mt-1">
                Pendrive Lectures for all Courses are also available. For more details contact office.
              </h1>
            </div>
          </div>

          <div className="courses-row">

            {/* Card 1 */}
            <div className="course-col">
              <div className="about-card card1 shadow rounded text-center p-4">
                <img src="https://mensaclasses.com/images/courses/graduate.png" alt="Graduate" />
                <h4 className="mt-3">X11 X12+</h4>
                <p>Junior College</p>
                <button className="btn top_menu_btn">Know More Courses</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="course-col">
              <div className="about-card card2 shadow rounded text-center p-4">
                <img src="https://mensaclasses.com/images/courses/CA.png" alt="CA" />
                <h4 className="mt-3">X11 X12+</h4>
                <p>Junior College</p>
                <button className="btn top_menu_btn">Know More Courses</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="course-col">
              <div className="about-card card3 shadow rounded text-center p-4">
                <img src="https://mensaclasses.com/images/courses/MAH.png" alt="MAH" />
                <h4 className="mt-3">X11 X12+</h4>
                <p>Junior College</p>
                <button className="btn top_menu_btn">Know More Courses</button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="course-col second-row">
              <div className="about-card card4 shadow rounded text-center p-4">
                <img src="https://mensaclasses.com/images/courses/cs.png" alt="CS" />
                <h4 className="mt-3">X11 X12+</h4>
                <p>Junior College</p>
                <button className="btn top_menu_btn">Know More Courses</button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="course-col second-row">
              <div className="about-card card5 shadow rounded text-center p-4">
                <img src="https://mensaclasses.com/images/courses/MHT.png" alt="MHT" />
                <h4 className="mt-3">X11 X12+</h4>
                <p>Junior College</p>
                <button className="btn top_menu_btn">Know More Courses</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
