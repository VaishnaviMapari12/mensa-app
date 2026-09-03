// import React from "react";

// export default function AboutUs() {
//     return (

//         <div className="conatiner-filud">
//             <div className="row">
//                 <div className="col-12 about-bg">
//                     <h1>About Us</h1>

//                 </div>
//             </div>
//             <div className="row mt-3 mb-5">
//                 <div className="col-4">
//                     <img src="https://mensaclasses.com/images/about-1.jpg"className="w-100 rounded-2" ></img>
//                 </div>
//                 <div className="col-6">
//                     <h1 className="display-5 mt-5">Professionals Makes Professionals</h1>
//                     <p>Mensa Commerce Classes was established in 1994 by two professionals, Prof. Narayan S. Iyer, a Chartered Accountant and Prof. Shiva Muthuswamy, a Cost Accountant.
// </p>
// <p>Mensa Commerce Classes is a leading coaching institution EXCLUSIVELY catering to the needs of COMMERCE STUDENTS only. It has churned out thousands of students who are today having successful careers.Our objective is not only to provide conceptual exam oriented coaching but also to develop skills among our student fraternity to enhance their employability/ entrepreneurial traits.</p>


//                 </div>
//             </div>
//         </div>



import React from "react";

export default function AboutUs() {
  return (
    <div className="container-fluid">

      {/* Top Heading */}
      <div className="row">
        <div className="col-12 about-bg text-start py-5">
          <h1 className="text-white display-4">About Us</h1>
        </div>
      </div>

      {/* ---------- SECTION 1 (BIG IMAGE LEFT + TIGHT TEXT RIGHT) ---------- */}
      <div className="row align-items-center mt-1 mb-5">

        {/* LEFT BIG IMAGE */}
        <div className="col-12 col-md-6 p-0">   {/* 👉 p-0 = No padding = BIG Image */}
          <img
            src="https://mensaclasses.com/images/about-1.jpg"
            className="w-100 rounded-3 shadow"
            style={{ height: "520px", objectFit: "cover" }}   // 👉 BIG IMAGE HEIGHT
            alt="About Mensa Classes"
          />
        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="col-12 col-md-6 ps-md-4">   {/* 👉 ps-md-4 = slight close spacing */}
          <h1 className="display-5 mb-3 mt-3 mt-md-0">Professionals Makes Professionals</h1>

          <p>
            Mensa Commerce Classes was established in 1994 by two professionals,
            Prof. Narayan S. Iyer, a Chartered Accountant and Prof. Shiva
            Muthuswamy, a Cost Accountant.
          </p>

          <p>
            Mensa Commerce Classes is a leading coaching institution exclusively
            catering to the needs of commerce students only. It has produced
            thousands of successful students who are having excellent careers today.
          </p>
        </div>
      </div>

      {/* ---------- SECTION 2 (TEXT LEFT + BIG IMAGE RIGHT) ---------- */}
      <div className="row align-items-center mt-5 mb-5">

        {/* LEFT DESCRIPTION */}
        <div className="col-12 col-md-6 pe-md-4">
          <h1 className="display-5 mb-3 mt-3 mt-md-0">Our Mission & Vision</h1>

          <p>
            Our goal is to deliver conceptual, exam-oriented coaching along with
            skills that enhance employability and entrepreneurial ability of students.
          </p>

          <p>
            We are committed to shaping the future of commerce students by 
            providing high-quality education and guidance.
          </p>
        </div>

        {/* RIGHT BIG IMAGE */}
        <div className="col-12 col-md-6 p-0">
          <img
            src="https://mensaclasses.com/images/about.jpg"
            className="w-100 rounded-3 shadow"
            style={{ height: "520px", objectFit: "cover" }}   // 👉 BIG IMAGE HEIGHT
            alt="About Mensa Classes"
          />
        </div>
      </div>

    </div>
  );
}
