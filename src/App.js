// import React from "react";
// import Header from "./pages/home/Navbar";
// // import Slider from "./pages/Home";
// import Footer from "./pages/home/footer";


// function App() {
//   return (
//     <>
//       <Header />
//       {/* <Slider /> */}
//       <Footer />
//     </>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/home/Navbar";
import Footer from "./pages/home/footer";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/aboutus";
import TimeTable from "./pages/TimeTable/TimeTable";
import ContactUs from "./pages/ContactUs/ContactUs";  // Component name should be single word
import StudentCorner from "./pages/StudentCorner/StudentCorner";
import Testimonials from "./pages/Testimonials/Testimonials";
import Courses from "./pages/Courses/Courses";
import Results from "./pages/Results/Results";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/contactus" element={<ContactUs />} />
<Route path="/testimonials" element={<Testimonials />} />
<Route path="/courses" element={<Courses />} />
<Route path="/results" element={<Results />} />
<Route path="/studentcorner" element={<StudentCorner />} />

      </Routes>

      <Footer />
    </Router>
    
  );
}

export default App;
