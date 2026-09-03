// import React from "react";
// import "./Navbar.css"; // Ensure gallery styles are included

// export default function Gallery() {
//   return (
//     <section className="gallery_section py-5">
//       <div className="container">
//         <div className="row text-center">
//             <h1 className="font-size-lg">Felicitation</h1>

//           {/* Row 1 */}
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2025_1.jpg" alt="Student 1" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2025_2.jpg" alt="Student 2" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2025_3.jpg" alt="Student 3" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2025_5.jpg" alt="Student 4" className="img-fluid gallery_img" />
//           </div>

//           {/* Row 2 */}
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2025_5.jpg" alt="Student 5" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2025_6.jpg" alt="Student 6" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2025_8.jpg" alt="Student 7" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2025_9.jpg" alt="Student 8" className="img-fluid gallery_img" />
//           </div>

//           {/* Row 3 */}
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2024_1.jpg" alt="Student 9" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2024_2.jpg" alt="Student 10" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2024_3.jpg" alt="Student 11" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2024_2.jpg" alt="Student 12" className="img-fluid gallery_img" />
//           </div>

//           {/* Row 4 */}
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2024_4.jpg" alt="Student 13" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2023_1.jpg" alt="Student 14" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2023_2.jpg" alt="Student 15" className="img-fluid gallery_img" />
//           </div>
//           <div className="col-6 col-md-3 mb-4">
//             <img src="https://mensaclasses.com/images/gallery/felicitation2023_3.jpg" alt="Student 16" className="img-fluid gallery_img" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import "./Navbar.css"; // Ensure gallery styles are included

export default function Gallery() {
  const images = [
    "https://mensaclasses.com/images/gallery/felicitation2025_1.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2025_2.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2025_3.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2025_5.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2025_5.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2025_6.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2025_8.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2025_9.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2024_1.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2024_2.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2024_3.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2024_2.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2024_4.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2023_1.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2023_2.jpg",
    "https://mensaclasses.com/images/gallery/felicitation2023_3.jpg",
  ];

  return (
    <section className="gallery_section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="gallery_title">Felicitation</h1>
        </div>
        <div className="row g-3 justify-content-center">
          {images.map((src, idx) => (
            <div className="col-6 col-md-3 mb-4" key={idx}>
              <div className="gallery_card">
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="img-fluid gallery_img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
