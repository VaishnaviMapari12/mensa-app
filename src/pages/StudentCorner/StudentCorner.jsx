// // import React, { useState } from "react";
// // import Institute from "./Institute";

// // export default function StudentCorner() {
// //   const [activeCard, setActiveCard] = useState(null);

// //   const cardStyle = (id) => ({
// //     backgroundColor: activeCard === id ? "#d0e8ff" : "#E5F3FF",
// //     borderRadius: "20px",
// //     minHeight: "380px",
// //     cursor: "pointer",
// //     transition: "all 0.3s ease",
// //     transform: activeCard === id ? "scale(1.03)" : "scale(1)",
// //     boxShadow:
// //       activeCard === id
// //         ? "0px 8px 20px rgba(0,0,0,0.25)"
// //         : "0px 4px 12px rgba(0,0,0,0.10)",
// //   });

// //   return (
// //     <>
// //       <div className="container-fluid">

// //         {/* Top Heading */}
// //         <div className="row">
// //           <div className="col-12 about-bg text-start py-5">
// //             <h1 className="text-white display-4">Student Corner</h1>
// //           </div>
// //         </div>

// //         {/* MAIN SECTION */}
// //         <div className="container my-5 mb-5">
// //           <h1 className="text-center mb-5">For CA</h1>

// //           <div className="row d-flex justify-content-center">

// //             {/* CARD 1 */}
// //             <div className="col-md-4 p-4 mb-5">
// //               <div
// //                 className="p-4 text-center"
// //                 onClick={() => setActiveCard(1)}
// //                 onMouseEnter={() => setActiveCard(1)}
// //                 onMouseLeave={() => setActiveCard(null)}
// //                 style={cardStyle(1)}
// //               >
// //                 <h3 className="fw-bold fs-3">CA Institute (WIRC)</h3>
// //                 <p className="mt-3 fs-5">
// //                   ICAI Tower, <br />
// //                   C-40, G Block, <br />
// //                   Opp. MCA Ground, <br />
// //                   Bandra Kurla Complex, <br />
// //                   Bandra East-400051. <br />
// //                   Phone: (022) 33671400/500.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* CARD 2 */}
// //             <div className="col-md-4 p-4">
// //               <div
// //                 className="p-4 text-center"
// //                 onClick={() => setActiveCard(2)}
// //                 onMouseEnter={() => setActiveCard(2)}
// //                 onMouseLeave={() => setActiveCard(null)}
// //                 style={cardStyle(2)}
// //               >
// //                 <h3 className="fw-bold fs-3">CA Institute Thane Branch</h3>
// //                 <p className="mt-3 fs-5">
// //                   Flat No. 1 & 2, Ground floor, <br />
// //                   Monica C.H Society, Dharmaveer Marg Cross Road, <br />
// //                   Dandekar Colony, Panchpakhadi, <br />
// //                   Opp. Gurukul Society, Thane, Maharashtra 400602 <br />
// //                   Phone No: 093215 22456 <br />
// //                   Email: thane@icai.org <br />
// //                   Website: www.icai.org
// //                 </p>
// //               </div>
// //             </div>

// //             {/* CARD 3 */}
// //             <div className="col-md-4 p-4">
// //               <div
// //                 className="p-4 text-center"
// //                 onClick={() => setActiveCard(3)}
// //                 onMouseEnter={() => setActiveCard(3)}
// //                 onMouseLeave={() => setActiveCard(null)}
// //                 style={cardStyle(3)}
// //               >
// //                 <h3 className="fw-bold fs-3">CA Institute Mulund Facilitation Centre</h3>
// //                 <p className="mt-3 fs-5">
// //                   ICAI Mulund Library, <br />
// //                   Maheshwari Vidyarthi Bhavan, <br />
// //                   Devidayal Road, <br />
// //                   Next to Karnataka Bank, <br />
// //                   Mulund West, Mumbai-400080 <br />
// //                   Landline No: (022) 25694220.
// //                 </p>
// //               </div>
// //             </div>

// //           </div>
// //         </div>

// //         {/* Institute component included correctly */}
// //         <Institute />

// //       </div>
// //     </>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function StudentCorner() {
//   const [activeCard, setActiveCard] = useState(null);
//   const [institutes, setInstitutes] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1000/admin/studentcorner_api")
//       .then((res) => setInstitutes(res.data))
//       .catch((err) => console.error("Error fetching institutes:", err));
//   }, []);

//   const cardStyle = (id) => ({
//     backgroundColor: activeCard === id ? "#d0e8ff" : "#E5F3FF",
//     borderRadius: "20px",
//     minHeight: "380px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     transform: activeCard === id ? "scale(1.03)" : "scale(1)",
//     boxShadow:
//       activeCard === id
//         ? "0px 8px 20px rgba(0,0,0,0.25)"
//         : "0px 4px 12px rgba(0,0,0,0.10)",
//     padding: "20px",
//     textAlign: "center",
//   });

//   return (
//     <>
//       <div className="container-fluid">

//         {/* Top Heading */}
//         <div className="row">
//           <div className="col-12 about-bg text-start py-5">
//             <h1 className="text-white display-4">Student Corner</h1>
//           </div>
//         </div>

//         {/* MAIN SECTION */}
//         <div className="container my-5 mb-5">
//           <h1 className="text-center mb-5">For CA</h1>
//           <div className="row d-flex justify-content-center">

//             {institutes.map((inst, index) => (
//               <div key={inst.id || index} className="col-md-4 p-4 mb-5">
//                 <div
//                   style={cardStyle(index)}
//                   onClick={() => setActiveCard(index)}
//                   onMouseEnter={() => setActiveCard(index)}
//                   onMouseLeave={() => setActiveCard(null)}
//                 >
//                   <h3 className="fw-bold fs-3">{inst.name}</h3>
//                   <p className="mt-3 fs-5">
//                     {inst.address.split("\n").map((line, i) => (
//                       <React.Fragment key={i}>
//                         {line} <br />
//                       </React.Fragment>
//                     ))}
//                     {inst.phone && <>Phone: {inst.phone} <br /></>}
//                     {inst.email && <>Email: {inst.email} <br /></>}
//                     {inst.website && <>Website: {inst.website} <br /></>}
//                   </p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import Institute from "./Institute"; // ✅ Import Institute section

export default function StudentCorner() {
  const [activeCard, setActiveCard] = useState(null);
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/admin/studentcorner_api")
      .then((res) => setInstitutes(res.data))
      .catch((err) => console.error("Error fetching institutes:", err));
  }, []);

  const cardStyle = (id) => ({
    backgroundColor: activeCard === id ? "#d0e8ff" : "#E5F3FF",
    borderRadius: "20px",
    minHeight: "380px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: activeCard === id ? "scale(1.03)" : "scale(1)",
    boxShadow:
      activeCard === id
        ? "0px 8px 20px rgba(0,0,0,0.25)"
        : "0px 4px 12px rgba(0,0,0,0.10)",
    padding: "20px",
    textAlign: "center",
  });

  return (
    <>
      <div className="container-fluid">

        {/* Top Heading */}
        <div className="row">
          <div className="col-12 about-bg text-start py-5">
            <h1 className="text-white display-4">Student Corner</h1>
          </div>
        </div>

        {/* STATIC 3 CARDS */}
        <div className="container my-5 mb-5">
          <h1 className="text-center mb-5">For CA</h1>
          <div className="row d-flex justify-content-center">

            {/* CARD 1 */}
            <div className="col-md-4 p-4 mb-5">
              <div
                style={cardStyle("static1")}
                onClick={() => setActiveCard("static1")}
                onMouseEnter={() => setActiveCard("static1")}
                onMouseLeave={() => setActiveCard(null)}
              >
                <h3 className="fw-bold fs-3">CA Institute (WIRC)</h3>
                <p className="mt-3 fs-5">
                  ICAI Tower, <br />
                  C-40, G Block, <br />
                  Opp. MCA Ground, <br />
                  Bandra Kurla Complex, <br />
                  Bandra East-400051. <br />
                  Phone: (022) 33671400/500.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-4 p-4 mb-5">
              <div
                style={cardStyle("static2")}
                onClick={() => setActiveCard("static2")}
                onMouseEnter={() => setActiveCard("static2")}
                onMouseLeave={() => setActiveCard(null)}
              >
                <h3 className="fw-bold fs-3">CA Institute Thane Branch</h3>
                <p className="mt-3 fs-5">
                  Flat No. 1 & 2, Ground floor, <br />
                  Monica C.H Society, Dharmaveer Marg Cross Road, <br />
                  Dandekar Colony, Panchpakhadi, <br />
                  Opp. Gurukul Society, Thane, Maharashtra 400602 <br />
                  Phone No: 093215 22456 <br />
                  Email: thane@icai.org <br />
                  Website: www.icai.org
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-md-4 p-4 mb-5">
              <div
                style={cardStyle("static3")}
                onClick={() => setActiveCard("static3")}
                onMouseEnter={() => setActiveCard("static3")}
                onMouseLeave={() => setActiveCard(null)}
              >
                <h3 className="fw-bold fs-3">CA Institute Mulund Facilitation Centre</h3>
                <p className="mt-3 fs-5">
                  ICAI Mulund Library, <br />
                  Maheshwari Vidyarthi Bhavan, <br />
                  Devidayal Road, <br />
                  Next to Karnataka Bank, <br />
                  Mulund West, Mumbai-400080 <br />
                  Landline No: (022) 25694220.
                </p>
              </div>
            </div>

          </div>

          {/* DYNAMIC API CARDS BELOW */}
          <div className="row d-flex justify-content-center">
            {institutes.map((inst, index) => (
              <div key={inst.id || index} className="col-md-4 p-4 mb-5">
                <div
                  style={cardStyle(`api${index}`)}
                  onClick={() => setActiveCard(`api${index}`)}
                  onMouseEnter={() => setActiveCard(`api${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <h3 className="fw-bold fs-3">{inst.name}</h3>
                  <p className="mt-3 fs-5">
                    {inst.address.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line} <br />
                      </React.Fragment>
                    ))}
                    {inst.phone && <>Phone: {inst.phone} <br /></>}
                    {inst.email && <>Email: {inst.email} <br /></>}
                    {inst.website && <>Website: {inst.website} <br /></>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INSTITUTE SECTION */}
        <Institute />

      </div>
    </>
  );
}
