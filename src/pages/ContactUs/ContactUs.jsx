// import React from "react";

// export default function ContactUs() {
//      return (
//     <>
//       <div className="container-fluid">

//         {/* Top Heading */}
//         <div className="row">
//           <div className="col-12 about-bg text-start py-5">
//             <h1 className="text-white display-4">Contact Us</h1>
//           </div>
//         </div>


//       </div>
//            {/*  ABOUT BANNER SECTION */}
//       <section className="about-section ">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-7 ">
//               <h1 className="display-4 mt-5"></h1>
//               <p className="mt-3"></p>
//             </div>
//           </div>
//         </div>
//       </section>

//       </>
//      )
//     }


import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="container-fluid">

        {/* Top Heading */}
        <div className="row">
          <div className="col-12 about-bg text-start py-5">
            <h1 className="text-white display-4">Contact Us</h1>
          </div>
        </div>

      </div>

      {/* ABOUT / CONTACT SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="row">

            {/* LEFT SIDE INFO */}
            <div className="col-md-6 mt-5">
              <h2>Get In Touch</h2>
              <p className="mt-3">
                Have any questions? Feel free to contact us. Our team will help you anytime.
              </p>

              <p><b>📍 Address:</b> 2nd Floor, Keshav Bhuvan, M.G.Road, Mulund(W), Mumbai - 400080</p>
              <p><b>📞 Phone:</b> +91 98215 16121</p>
              <p><b>📧 Email:</b> mensaclasses@yahoo.co.in</p>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-md-6 mt-5">
              <div className="card p-4 shadow">

                <h4 className="mb-3">Contact Form</h4>

                <form>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter Name" 
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Mobile Number" 
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email Address" 
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <textarea 
                      className="form-control" 
                      rows="4" 
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}