import React from "react";

export default function Institute() {
  return (
    <>
      <div className="container-fluid">

        {/* LIGHT BLUE BACKGROUND SECTION */}
        <div className="row" style={{ backgroundColor: "#E5F3FF" }}>
          
          {/* HEADING */}
          <div className="col-12 text-center py-5">
            <h1 className="fw-light">For CSEET</h1>
          </div>

          {/* MAIN CONTENT */}
          <div className="container pb-5">

            <div className="row justify-content-center">

              {/* CARD 1 */}
              <div className="col-md-5 p-4">
                <div
                  className="p-4"
                  style={{
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "18px",
                    minHeight: "450px",
                  }}
                >
                  <h3 className="fw-bold">
                    CS <span style={{
                      background: "#cfe3ff",
                      padding: "2px 6px",
                      borderRadius: "5px"
                    }}>Institute</span>
                  </h3>

                  <p className="mt-4">
                    13,56 &57 <br />
                    Jolly Maker Chambers No. 2 <br />
                    (1st & 5th Floor), <br />
                    Nariman Point, <br />
                    Mumbai - 400021 <br />
                    Phone No: (022) 22047580, 22047604 <br />
                    Email: wiro@icsi.edu, <br />
                    sudipto.pal@icsi.edu <br />
                    Website: www.icsi.edu
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-md-5 p-4">
                <div
                  className="p-4"
                  style={{
                    background: "#fff",
                    borderRadius: "18px",
                    minHeight: "450px",
                  }}
                >
                  <h3 className="fw-bold">CS Institute Thane Branch</h3>

                  <p className="mt-4">
                    201-202, <br />
                    Sai Plaza Complex, <br />
                    Above Vijay Sales, <br />
                    Opposite Cine Wonder Mall, <br />
                    Kapurbavdi Junction, <br />
                    Ghodbunder Road, <br />
                    Thane West <br />
                    Phone No: (022) 25893793.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
