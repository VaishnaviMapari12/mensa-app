// // WhyChoose.jsx
// import React from "react";
// import "./Navbar.css"; // ensure this includes .whychoose_icon

// export default function WhyChoose() {
//   return (
//     <section className="whychoose_area mb-4">
//       <div className="container">
//         {/* Heading */}
//         <div className="row">
//           <div className="col-12 text-center">
//             <h1 className="display-4 mt-5">
//               An Investment in Knowledge<br />
//               pays the Best Interest
//             </h1>
//           </div>
//         </div>

//         {/* Top row: Left 3 cards, Center image, Right 3 cards */}
//         <div className="row mt-4">
//           {/* Left Column - 3 cards */}
//           <div className="col-md-4">
//             {[1, 2, 3].map((item, idx) => (
//               <div className="card card-body border-0 mb-3 mt-3" key={idx}>
//                 <div className="row align-items-center">
//                   <div className="col-8 text-end">
//                     <h3>Average of 43<br />students per batch</h3>
//                   </div>
//                   <div className="col-4 text-center">
//                     <div className="whychoose_icon">
//                       <img
//                         src="https://mensaclasses.com/images/keys/students.png"
//                         alt="Students"
//                         style={{ width: "50px", height: "50px", marginTop: "10px" }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Middle Column - Image */}
//           <div className="col-md-4 text-center my-3">
//             <div className="card card-body border-0 ">
//               <img
//                 src="https://mensaclasses.com/images/33-years.jpg"
//                 alt="33 years"
//                 className="img-fluid rounded"
//               />
//             </div>
//           </div>

//           {/* Right Column - 3 cards */}
//           <div className="col-md-4">
//             {[1, 2, 3].map((item, idx) => (
//               <div className="card card-body border-0 mb-3 mt-3" key={idx}>
//                 <div className="row align-items-center">
//                   <div className="col-4 text-center">
//                     <div className="whychoose_icon">
//                       <img
//                         src="https://mensaclasses.com/images/keys/rankings.png"
//                         alt="Students"
//                         style={{ width: "50px", height: "50px", marginTop: "10px" }}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-8 text-start">
//                     <h3>Average of 43<br />students per batch</h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom row: 3 cards centered */}
//         <div className="row mt-4 justify-content-center">
//           {[1, 2, 3].map((item, idx) => (
//             <div className="col-md-4 mb-3 d-flex justify-content-center" key={idx}>
//               <div className="card card-body border-0 mt-3" style={{ maxWidth: "320px" }}>
//                 <div className="row align-items-center">
//                   <div className="col-4 text-center">
//                     <div className="whychoose_icon">
//                       <img
//                         src="https://mensaclasses.com/images/keys/students.png"
//                         alt="Students"
//                         style={{ width: "50px", height: "50px", marginTop: "10px" }}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-8 text-start">
//                     <h3>Average of 43<br />students per batch</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// WhyChoose.jsx
import React from "react";
import "./Navbar.css"; // Make sure this includes .whychoose_icon styles

export default function WhyChoose() {
  return (
    <section className="whychoose_area mb-4">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 mt-5">
              An Investment in Knowledge<br />
              pays the Best Interest
            </h1>
          </div>
        </div>

        {/* Top Row: Left 3 cards, Center Image, Right 3 cards */}
        <div className="row mt-4">
          {/* Left Column - 3 cards */}
          <div className="col-md-4">
            <div className="card card-body border-0 mb-3 mt-3">
              <div className="row align-items-center">
                <div className="col-8 text-end">
                  <h3>Average of 43<br />students per batch</h3>
                </div>
                <div className="col-4 text-center">
                  <div className="whychoose_icon">
                    <img
                      src="https://mensaclasses.com/images/keys/students.png"
                      alt="Students"
                      style={{ width: "50px", height: "50px", marginTop: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-body border-0 mb-3 mt-3">
              <div className="row align-items-center">
                <div className="col-8 text-end">
                  <h3>Experienced Faculty<br />for Guidance</h3>
                </div>
                <div className="col-4 text-center">
                  <div className="whychoose_icon">
                    <img
                      src="https://mensaclasses.com/images/keys/student-teacher.png"
                      alt="Faculty"
                      style={{ width: "50px", height: "50px", marginTop: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-body border-0 mb-3 mt-3">
              <div className="row align-items-center">
                <div className="col-8 text-end">
                  <h3>Interactive<br />Sessions</h3>
                </div>
                <div className="col-4 text-center">
                  <div className="whychoose_icon">
                    <img
                      src="https://mensaclasses.com/images/keys/experience.png"
                      alt="Interactive"
                      style={{ width: "50px", height: "50px", marginTop: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Image */}
          <div className="col-md-4 text-center my-3">
            <div className="card card-body border-0">
              <img
                src="https://mensaclasses.com/images/33-years.jpg"
                alt="33 years"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Right Column - 3 cards */}
          <div className="col-md-4">
            <div className="card card-body border-0 mb-3 mt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center">
                  <div className="whychoose_icon">
                    <img
                      src="https://mensaclasses.com/images/keys/rankings.png"
                      alt="Rankings"
                      style={{ width: "50px", height: "50px", marginTop: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-8 text-start">
                  <h3>Top Rankings<br />Achieved</h3>
                </div>
              </div>
            </div>

            <div className="card card-body border-0 mb-3 mt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center">
                  <div className="whychoose_icon">
                    <img
                      src="https://mensaclasses.com/images/keys/experience.png"
                      alt="Results"
                      style={{ width: "50px", height: "50px", marginTop: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-8 text-start">
                  <h3>Excellent Results<br />Every Year</h3>
                </div>
              </div>
            </div>

            <div className="card card-body border-0 mb-3 mt-3">
              <div className="row align-items-center">
                <div className="col-4 text-center">
                  <div className="whychoose_icon">
                    <img
                      src="https://mensaclasses.com/images/keys/experience.png"
                      alt="Achievements"
                      style={{ width: "50px", height: "50px", marginTop: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-8 text-start">
                  <h3>Notable Achievements<br />Every Year</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 cards centered, all different images */}
        <div className="row mt-4 justify-content-center">
          {[1, 2, 3].map((item, idx) => {
            const images = [
              "https://mensaclasses.com/images/keys/experience.png",
              "https://mensaclasses.com/images/keys/experience.png",
              "https://mensaclasses.com/images/keys/experience.png"
            ];
            const titles = [
              "Large Library<br />Resources",
              "Certified Courses<br />Recognition",
              "24/7 Support<br />For Students"
            ];
            return (
              <div className="col-md-4 mb-3 d-flex justify-content-center" key={idx}>
                <div className="card card-body border-0 mt-3" style={{ maxWidth: "320px" }}>
                  <div className="row align-items-center">
                    <div className="col-4 text-center">
                      <div className="whychoose_icon">
                        <img
                          src={images[idx]}
                          alt={`Icon ${idx}`}
                          style={{ width: "50px", height: "50px", marginTop: "10px" }}
                        />
                      </div>
                    </div>
                    <div className="col-8 text-start">
                      <h3 dangerouslySetInnerHTML={{ __html: titles[idx] }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
