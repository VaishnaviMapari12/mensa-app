// // import React from "react";
// // export default function Results() {
    
// //   return (
// //     <>
// //       <div className="container-fluid p-0">
// //         <div className="row">
// //           <div className="col-12 about-bg text-start py-5">
// //             <h1 className="text-white display-4">Wall of Fame</h1>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// // <section className="py-0">
// //     <div className="container">
// //         <div className="row">
// //             <h1>Our All India 1st Rank holders</h1>
// //             <img src="https://mensaclasses.com/images/Walloffame/Mandar-Dixit.jpg">
// //             </img>
// //         </div>
// //     </div>
// // </section>
// // Results.jsx
// import React from "react";
// import "./Results.css";

// const topRankers = [
//   { name: "Mandar Dixit", exam: "CA-PE-1 (May '04)", img: "https://mensaclasses.com/images/Walloffame/Mandar-Dixit.jpg" },
//   { name: "Praseeda Pandit", exam: "CA-CPT (June '09)", img: "https://mensaclasses.com/images/Walloffame/Praseeda-Pandit.jpg" },
// ];

// const students = [
//   { name: "Dhruv Rane", rank: "All India Rank 41", exam: "CA Inter May 2025", img: "https://mensaclasses.com/images/Walloffame/dhruv-rane-25.jpg" },
//   { name: "Devesh Deshmukh", rank: "All India Rank 5", exam: "CA Inter May 2025", img: "https://mensaclasses.com/images/Walloffame/Hardik-Patel.jpg" },
//   { name: "Hardik Patel", rank: "All India Rank 8", exam: "CA Final Nov 2019", img: "https://mensaclasses.com/images/Walloffame/devesh-deshmukh-25.jpg" },
//   { name: "Kishan Marvania", rank: "11 Rank", exam: "CA Final May 2019", img: "https://mensaclasses.com/images/Walloffame/Yogen-Sanghvi-(CA-Final-May-2017-All-India-24th-Rank).jpg" },
//   { name: "Yogen Sanghvi", rank: "24 Rank", exam: "CA Final May 2017", img: "https://mensaclasses.com/images/Walloffame/Karishma-Rane-Middle-Girl.jpg" },
//   { name: "Manali Gudhka", rank: "All India Rank 35", exam: "CA Final Nov 2019", img: "https://mensaclasses.com/images/Walloffame/Manali-Gudhka.jpg" },
//   { name: "Varun Sanghvi", rank: "41 Rank", exam: "CA Final May 2019", img: "https://mensaclasses.com/images/Walloffame/chinmay-dharap.jpg" },
//   { name: "Karishma Rane", rank: "42 Rank", exam: "CA Final May 2014", img: "https://mensaclasses.com/images/Walloffame/Kartik-Shetty.jpg" },
//   { name: "Chinmay Dharap", rank: "43 Rank", exam: "CA Final May 2016", img: "https://mensaclasses.com/images/Walloffame/Chinmay-Dharap.jpg" },
//   { name: "Khushboo Gudhka", rank: "47 Rank", exam: "CA Final Nov 2013", img: "https://mensaclasses.com/images/Walloffame/Mishika-Poddar.jpg" },
//   { name: "Kartik Shetty", rank: "48 Rank", exam: "CA Final Nov 2014", img: "https://mensaclasses.com/images/Walloffame/Kartik-Shetty.jpg" },
//   { name: "Jinesh Jobalia", rank: "49 Rank", exam: "CA Final May 2014", img: "https://mensaclasses.com/images/Walloffame/Tanvee-Mehta.jpg" },
//   { name: "Shreyas P", rank: "30 Rank", exam: "CA Final May 2017", img: "https://mensaclasses.com/images/Walloffame/Ashwini-Pavagi.jpg" },
//   { name: "Paarth Gangwani", rank: "AIR 37 Rank", exam: "CA Intermediate May 2023", img: "https://mensaclasses.com/images/Walloffame/Paarth-Gangwani.jpg" },
//   { name: "Jainam Sheth", rank: "46 Rank", exam: "CA Intermediate May 2018", img: "https://mensaclasses.com/images/Walloffame/Jainam-Sheth.jpg" },
//   { name: "Shreyas P", rank: "48 Rank", exam: "IPCC May 2014", img: "https://mensaclasses.com/images/Walloffame/Krina-Pasad.jpg" },
// ];

// export default function Results() {
//   return (
//     <>
//       {/* Wall of Fame Header */}
//       <div className="container-fluid p-0">
//         <div className="row">
//           <div className="col-12 about-bg text-start py-5">
//             <h1 className="text-white display-4">Wall of Fame</h1>
//           </div>
//         </div>
//       </div>

//       {/* Top 1st Rankers */}
//       <section className="py-5">
//         <div className="container text-center">
//           <h2 className="mb-4">Our All India 1st Rank holders</h2>
//           <div className="row justify-content-center">
//             {topRankers.map((student, index) => (
//               <div key={index} className="col-md-6 mb-4">
//                 <img src={student.img} alt={student.name} className="img-fluid border-white" />
//                 <h5 className="mt-2">{student.name}</h5>
//                 <p>{student.exam}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Imparting Excellence Section */}
//       <section className="py-5 bg-light">
//         <div className="container text-center">
//           <h2>Imparting Educational Excellence Since 1994</h2>
//           <p>All CA Final IPCC / CA Intermediate CPT / CA Foundation CS Foundation HSC</p>

//           <div className="row justify-content-center mt-4">
//             {students.map((student, index) => (
//               <div key={index} className="col-md-3 col-sm-6 mb-4 text-center">
//                 <img src={student.img} alt={student.name} className="img-fluid border-white rounded" />
//                 <h6 className="mt-2">{student.name}</h6>
//                 <p>{student.rank}</p>
//                 <p>{student.exam}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Results.css";

// Static students (16 images remain unchanged)
const students = [
  { name: "Dhruv Rane", rank: "All India Rank 41", exam: "CA Inter May 2025", img: "https://mensaclasses.com/images/Walloffame/dhruv-rane-25.jpg" },
  { name: "Devesh Deshmukh", rank: "All India Rank 5", exam: "CA Inter May 2025", img: "https://mensaclasses.com/images/Walloffame/Hardik-Patel.jpg" },
  { name: "Hardik Patel", rank: "All India Rank 8", exam: "CA Final Nov 2019", img: "https://mensaclasses.com/images/Walloffame/devesh-deshmukh-25.jpg" },
  { name: "Kishan Marvania", rank: "11 Rank", exam: "CA Final May 2019", img: "https://mensaclasses.com/images/Walloffame/Yogen-Sanghvi-(CA-Final-May-2017-All-India-24th-Rank).jpg" },
  { name: "Yogen Sanghvi", rank: "24 Rank", exam: "CA Final May 2017", img: "https://mensaclasses.com/images/Walloffame/Karishma-Rane-Middle-Girl.jpg" },
  { name: "Manali Gudhka", rank: "All India Rank 35", exam: "CA Final Nov 2019", img: "https://mensaclasses.com/images/Walloffame/Manali-Gudhka.jpg" },
  { name: "Varun Sanghvi", rank: "41 Rank", exam: "CA Final May 2019", img: "https://mensaclasses.com/images/Walloffame/chinmay-dharap.jpg" },
  { name: "Karishma Rane", rank: "42 Rank", exam: "CA Final May 2014", img: "https://mensaclasses.com/images/Walloffame/Kartik-Shetty.jpg" },
  { name: "Chinmay Dharap", rank: "43 Rank", exam: "CA Final May 2016", img: "https://mensaclasses.com/images/Walloffame/Chinmay-Dharap.jpg" },
  { name: "Khushboo Gudhka", rank: "47 Rank", exam: "CA Final Nov 2013", img: "https://mensaclasses.com/images/Walloffame/Mishika-Poddar.jpg" },
  { name: "Kartik Shetty", rank: "48 Rank", exam: "CA Final Nov 2014", img: "https://mensaclasses.com/images/Walloffame/Kartik-Shetty.jpg" },
  { name: "Jinesh Jobalia", rank: "49 Rank", exam: "CA Final May 2014", img: "https://mensaclasses.com/images/Walloffame/Tanvee-Mehta.jpg" },
  { name: "Shreyas P", rank: "30 Rank", exam: "CA Final May 2017", img: "https://mensaclasses.com/images/Walloffame/Ashwini-Pavagi.jpg" },
  { name: "Paarth Gangwani", rank: "AIR 37 Rank", exam: "CA Intermediate May 2023", img: "https://mensaclasses.com/images/Walloffame/Paarth-Gangwani.jpg" },
  { name: "Jainam Sheth", rank: "46 Rank", exam: "CA Intermediate May 2018", img: "https://mensaclasses.com/images/Walloffame/Jainam-Sheth.jpg" },
  { name: "Shreyas P", rank: "48 Rank", exam: "IPCC May 2014", img: "https://mensaclasses.com/images/Walloffame/Krina-Pasad.jpg" },
];

export default function Results() {
  const [topRankers, setTopRankers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/admin/result_api")
      .then((res) => {
        let top2 = res.data.slice(0, 2); // fetch top 2 from DB

        // fallback if admin deleted some rankers
        if (top2.length < 2) {
          const fallback = [
            { name: "Placeholder Ranker 1", exam: "CA Example", image: "https://mensaclasses.com/images/Walloffame/Mandar-Dixit.jpg" },
            { name: "Placeholder Ranker 2", exam: "CA Example", image: "https://mensaclasses.com/images/Walloffame/Kartik-Shetty.jpg" },
          ];
          top2 = [...top2, ...fallback.slice(0, 2 - top2.length)];
        }

        setTopRankers(top2);
      })
      .catch((err) => console.error("Error fetching top rankers:", err));
  }, []);

  return (
    <>
      {/* Wall of Fame Header */}
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 about-bg text-start py-5">
            <h1 className="text-white display-4">Wall of Fame</h1>
          </div>
        </div>
      </div>

      {/* Top 1st Rankers (Dynamic with fallback) */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our All India 1st Rank holders</h2>
          <div className="row justify-content-center">
            {topRankers.map((student, idx) => (
              <div key={idx} className="col-md-6 mb-4">
                <img
                  src={
                    student.image.startsWith("http")
                      ? student.image
                      : `http://localhost:1000/uploads/${student.image}`
                  }
                  alt={student.name}
                  className="img-fluid border-white"
                />
                <h5 className="mt-2">{student.name}</h5>
                <p>{student.exam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Static Students Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2>Imparting Educational Excellence Since 1994</h2>
          <p>All CA Final IPCC / CA Intermediate CPT / CA Foundation CS Foundation HSC</p>

          <div className="row justify-content-center mt-4">
            {students.map((student, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4 text-center">
                <img src={student.img} alt={student.name} className="img-fluid border-white rounded" />
                <h6 className="mt-2">{student.name}</h6>
                <p>{student.rank}</p>
                <p>{student.exam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



