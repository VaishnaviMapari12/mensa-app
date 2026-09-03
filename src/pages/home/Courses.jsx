// // Courses.jsx
// import React from "react";
// import "./Navbar.css";

// export default function Courses() {
//   return (
//     <>
//       {/* COURSES SECTION */}
//       <section className="courses-section py-5 mb-5">
//         <div className="container">
//           {/* Heading */}
//           <div className="row mb-5">
//             <div className="col-12 text-center">
//               <h3 className="display-4">Courses</h3>
//               <p className="mt-3">
//                 Pendrive Lectures for all Courses are also available. For more
//                 details contact office.
//               </p>
//               <button className="btn top_menu_btn mb-3">
//                 View All Online Courses
//               </button>
//             </div>
//           </div>
          

//           {/* Cards */}
//           <div className="courses-row">
//             {/* Card 1 */}
//             <div className="course-col">
//               <div className="about-card shadow rounded text-center p-4">
//                 <img
//                   src="https://mensaclasses.com/images/courses/graduate.png"
//                   alt="Graduate"
//                   style={{ height: "60px" ,background: "#ffece6"}}
//                 />
//                 <h4 className="mt-3">X11 X12+</h4>
//                 <p>Junior College</p>
//                 <button className="btn top_menu_btn">Know More Courses</button>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="course-col">
//               <div className="about-card shadow rounded text-center p-4">
//                 <img
//                   src="https://mensaclasses.com/images/courses/CA.png"
//                   alt="Graduate"
//                   style={{ height: "60px", background: "#7aa8e4ff" }}
//                 />
//                 <h4 className="mt-3">X11 X12+</h4>
//                 <p>Junior College</p>
//                 <button className="btn top_menu_btn">Know More Courses</button>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="course-col">
//               <div className="about-card shadow rounded text-center p-4">
//                 <img
//                   src="https://mensaclasses.com/images/courses/MAH.png"
//                   alt="Graduate"
//                   style={{ height: "60px", background: "#c2f378ff" }}
//                 />
//                 <h4 className="mt-3">X11 X12+</h4>
//                 <p>Junior College</p>
//                 <button className="btn top_menu_btn">Know More Courses</button>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className="course-col second-row">
//               <div className="about-card shadow rounded text-center p-4">
//                 <img
//                   src="https://mensaclasses.com/images/courses/cs.png"
//                   alt="Graduate"
//                   style={{ height: "60px",background: "#5589d3ff" }}
//                 />
//                 <h4 className="mt-3">X11 X12+</h4>
//                 <p>Junior College</p>
//                 <button className="btn top_menu_btn">Know More Courses</button>
//               </div>
//             </div>

//             {/* Card 5 */}
//             <div className="course-col second-row">
//               <div className="about-card shadow rounded text-center p-4">
//                 <img
//                   src="https://mensaclasses.com/images/courses/MHT.png"
//                   alt="Graduate"
//                   style={{ height: "60px", background: "#ffece6" }}
//                 />
//                 <h4 className="mt-3">X11 X12+</h4>
//                 <p>Junior College</p>
//                 <button className="btn top_menu_btn">Know More Courses</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// Courses.jsx
import React from "react";
import "./Navbar.css";

export default function Courses() {
  return (
    <>
      <section className="courses-section py-5 mb-5">
        <div className="container">

          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="display-4">Courses</h3>
              <p className="mt-3">
                Pendrive Lectures for all Courses are also available. For more
                details contact office.
              </p>
              <button className="btn top_menu_btn mb-3">
                View All Online Courses
              </button>
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

