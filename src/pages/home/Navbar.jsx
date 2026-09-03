// import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import "./Navbar.css";

// function Header() {
//   return (
//     <>
//       {/* --------- TOP BAR ---------- */}
//       <div className="top-bar py-2 px-4 d-flex justify-content-between align-items-center">
//         <div className="left-icons d-flex gap-3">
//           <i className="fab fa-facebook"></i>
//           <i className="fab fa-youtube"></i>
//           <i className="fab fa-whatsapp"></i>
//           <i className="fab fa-instagram"></i>
//           <i className="far fa-envelope"></i>
//         </div>

//         <div className="right-section d-flex align-items-center gap-3">
//           <button className="btn admission-btn">Admission Form</button>
//           <span className="text-dark fw-bold">
//             Need Help? <span className="help-number">+91 98215 16121</span>
//           </span>
//         </div>
//       </div>

//       {/* --------- MAIN NAVBAR (CENTER LOGO) --------- */}
//       <Navbar expand="lg" className="main-navbar py-3 shadow-sm">
//         <Container className="d-flex justify-content-between align-items-center">

//           {/* LEFT MENU */}
//           <Nav className="menu-left d-none d-lg-flex">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/aboutus">About Us</Nav.Link>
//             <Nav.Link href="/timetable">Time Table</Nav.Link>
//             <Nav.Link href="/StudentCorner">Student's Corner</Nav.Link>
//           </Nav>

//           {/* CENTER LOGO */}
//           <Navbar.Brand href="#" className="mx-auto">
//             <img
//               src="https://mensaclasses.com/images/logo-mensa.png"
//               alt="Mensa Logo"
//               className="logo-img"
//             />
//           </Navbar.Brand>

//           {/* RIGHT MENU */}
//           <Nav className="menu-right d-none d-lg-flex">
            
//             <Nav.Link href="/testimonials">Testimonials</Nav.Link>
//             <Nav.Link href="/Results">Results</Nav.Link>
//             <Nav.Link href="/courses" className="active-menu">Courses</Nav.Link>
//             <Nav.Link href="/contactus">ContactUs</Nav.Link>
//           </Nav>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;





import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Button, Form } from "react-bootstrap";
import "./Navbar.css";

function Header() {
  // Modal open/close state
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* --------- TOP BAR ---------- */}
      <div className="top-bar py-2 px-4 d-flex justify-content-between align-items-center">
        <div className="left-icons d-flex gap-3">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-instagram"></i>
          <i className="far fa-envelope"></i>
        </div>

        <div className="right-section d-flex align-items-center gap-3">
          {/* Admission Button */}
          <button className="btn admission-btn" onClick={handleOpenModal}>
            Admission Form
          </button>
          <span className="text-dark fw-bold">
            Need Help? <span className="help-number">+91 98215 16121</span>
          </span>
        </div>
      </div>

      {/* --------- MAIN NAVBAR (CENTER LOGO) --------- */}
      <Navbar expand="lg" className="main-navbar py-3 shadow-sm">
        <Container className="d-flex justify-content-between align-items-center">

          {/* LEFT MENU */}
          <Nav className="menu-left d-none d-lg-flex">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/timetable">Time Table</Nav.Link>
            <Nav.Link href="/StudentCorner">Student's Corner</Nav.Link>
          </Nav>

          {/* CENTER LOGO */}
          <Navbar.Brand href="#" className="mx-auto">
            <img
              src="https://mensaclasses.com/images/logo-mensa.png"
              alt="Mensa Logo"
              className="logo-img"
            />
          </Navbar.Brand>

          {/* RIGHT MENU */}
          <Nav className="menu-right d-none d-lg-flex">
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/Results">Results</Nav.Link>
            <Nav.Link href="/courses" className="active-menu">Courses</Nav.Link>
            <Nav.Link href="/contactus">ContactUs</Nav.Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>

      {/* --------- ADMISSION FORM MODAL --------- */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Admission Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;