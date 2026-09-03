// import React from "react";
// import { Carousel } from "react-bootstrap";
// import "./Navbar.css";


// function footer(){
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-4">
//                     <h3>Quick Links</h3>
//                     <ul className="text-white">
//                         <li>Batch Schedule</li>
//                         <li>Student's Corner</li>
//                         <li>Courses</li>
//                         <li>Admission Form</li>
//                         <li>Contact Us</li>
                      
//                     </ul>
//                     </div>
//                 <div className="col-md-4">
//                     <ul className="text-white">
//                         <li>Batch Schedule</li>
//                         <li>Student's Corner</li>
//                         <li>Courses</li>
//                         <li>Admission Form</li>
//                         <li>Contact Us</li>
                      
//                     </ul>
//         </div>
//         </div>
//         </div>

//        <div className="col-md-12">

//        </div>

//     )
// }

// export default footer;
               
// import React from "react";
//  import "./Navbar.css";

// const Footer = () => {
//   return (
//     <footer className="mensa-footer">
//       <div className="footer-container">
        
//         {/* Logo + Quick Links */}
//         <div className="footer-section">
//           <img color="white"
//             src="https://mensaclasses.com/images/logo-mensa.png"
//             alt="Mensa Logo"
//             className="footer-logo"
//           />

//           <h3>Quick Links</h3>
//           <ul>
//             <li><i className="fa-solid fa-play"></i> Batch Schedule</li>
//             <li><i className="fa-solid fa-play"></i> Student's Corner</li>
//             <li><i className="fa-solid fa-play"></i> Courses</li>
//             <li><i className="fa-solid fa-play"></i> Admission Form</li>
//             <li><i className="fa-solid fa-play"></i> Contact Us</li>
//             <li><i className="fa-solid fa-play"></i> Home</li>
//             <li><i className="fa-solid fa-play"></i> About Us</li>
//             <li><i className="fa-solid fa-play"></i> Time Table</li>
//             <li><i className="fa-solid fa-play"></i> Results</li>
//             <li><i className="fa-solid fa-play"></i> Testimonials</li>
//           </ul>
//         </div>

//         {/* Head Office */}
//         <div className="footer-section">
//           <h3>Head Office</h3>
//           <p>2nd Floor, Keshav Bhuvan, M.G.Road, Mulund(W), Mumbai - 400080.</p>

//           <p><i className="fa-solid fa-phone"></i> +91 98215 16121 / +91 85914 16619</p>
//           <p><i className="fa-solid fa-envelope"></i> mensaclasses@yahoo.co.in</p>

//           <h3>Thane Branch</h3>
//           <p>2nd Floor, Shreeji Ashish, Lohar Ali Lane, Thane (West) - 400602.</p>

//           <p><i className="fa-solid fa-phone"></i> +91 96648 09390 / +91 85914 16619</p>
//           <p><i className="fa-solid fa-envelope"></i> mensacommerceclasses@gmail.com</p>
//         </div>

//         {/* Courses */}
//         <div className="footer-section">
//           <h3>Courses</h3>
//           <ul>
//             <li><i className="fa-solid fa-play"></i> F.Y.J.C</li>
//             <li><i className="fa-solid fa-play"></i> S.Y.J.C</li>
//             <li><i className="fa-solid fa-play"></i> CA (CAFC, CA Inter, CA Final)</li>
//             <li><i className="fa-solid fa-play"></i> CS</li>
//           </ul>
//         </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>© 2025 Mensa Commerce Classes. All rights reserved.</p>

//         <div className="social-icons">
//           <i className="fa-brands fa-facebook"></i>
//           <i className="fa-brands fa-youtube"></i>
//           <i className="fa-brands fa-whatsapp"></i>
//           <i className="fa-brands fa-instagram"></i>
//           <i className="fa-solid fa-envelope"></i>
//         </div>

//         <p>Designed By iTGS</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import "./Navbar.css";

const Footer = () => {
  return (
    <footer className="mensa-footer">
      <div className="footer-container">

        {/* Left Section : Logo + Two Quick Links Columns */}
        <div className="footer-section quicklinks-double">

          <img
            src="https://mensaclasses.com/images/logo-mensa.png"
            alt="Mensa Logo"
            className="footer-logo"
          />

          <div className="ql-wrapper">
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li>Batch Schedule</li>
                <li>Student's Corner</li>
                <li>Courses</li>
                <li>Admission Form</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              
              <ul className="right-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Time Table</li>
                <li>Results</li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Head Office */}
        <div className="footer-section">
          <h3>Head Office</h3>
          <p>2nd Floor, Keshav Bhuvan, M.G.Road, Mulund(W), Mumbai - 400080.</p>
          <p>+91 98215 16121 / +91 85914 16619</p>
          <p>mensaclasses@yahoo.co.in</p>

          <h3>Thane Branch</h3>
          <p>2nd Floor, Shreeji Ashish, Lohar Ali Lane, Thane (West) - 400602.</p>
          <p>+91 96648 09390 / +91 85914 16619</p>
          <p>mensacommerceclasses@gmail.com</p>
        </div>

        {/* Courses */}
        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li>F.Y.J.C</li>
            <li>S.Y.J.C</li>
            <li>CA (CAFC, CA Inter, CA Final)</li>
            <li>CS</li>
            <li>banking</li>
            <li>Coding</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Mensa Commerce Classes. All rights reserved.</p>
        <p>Designed By iTGS</p>
      </div>
    </footer>
  );
};

export default Footer;
