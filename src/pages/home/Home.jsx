// import React from "react";
// import { Carousel } from "react-bootstrap";
// import "./Navbar.css";

// function Slider() {
//   return (
//     <Carousel
//       fade
//       interval={1000}   
//       controls={false} 
//       indicators={false} 
//       pause={false}     
//     >
//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="1.jpeg"
//           alt="Slide 1"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/slider/slider-25.jpg"
//           alt="Slide 2"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/slider/slider-24.jpg"
//           alt="Slide 3"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/slider/slider-24.jpg"
//           alt="Slide 4"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/website-slider-05.png"
//           alt="Slide 5"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/slider/slider-25.jpg"
//           alt="Slide 6"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/website-slider-07.png"
//           alt="Slide 7"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/website-slider-08.png"
//           alt="Slide 8"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/website-slider-09.png"
//           alt="Slide 9"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/slider/slider-26.jpg"
//           alt="Slide 10"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 slider-img"
//           src="https://mensaclasses.com/images/slider/slider-26.jpg"
//           alt="Slide 11"
//         />
//       </Carousel.Item>

//     </Carousel>
//   );
// }

// export default Slider;


import React from "react";
import Slider from "./Slider";
import About from "./about";
import Courese from "./Courses";
import Whychoose from "./Whychoose";
import Imparting from "./Imparting";

import WhyCommerce from "./WhyCommerce";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Testimonials from "./Testimonials";



export default function () {
  return (
  <>
  <Slider></Slider>
  <About></About>
  <Courese></Courese>
<Whychoose></Whychoose>
<Imparting></Imparting>
<WhyCommerce></WhyCommerce>
<Gallery></Gallery>
<Counter></Counter>
<Testimonials></Testimonials>

  </>
  )
}