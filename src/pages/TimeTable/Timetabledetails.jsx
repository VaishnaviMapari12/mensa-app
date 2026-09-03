import React from "react";

export default function Timetabledetails() {
  return (
    <>
      <section className="pt-4 pb-4" style={{ background: "#e3f3ff" }}>
        <div className="container mt-5">

          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4">Demo Lecture</h1>
            </div>

            <div className="col-12">
              <h2>Demo Lecture Link</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>BK XI th (F.Y.J.C.)</th>
                    <th>Maths XI th (F.Y.J.C.)</th>
                    <th>BK XII th (S.Y.J.C.)</th>
                    <th>CA Foundation Accounts</th>
                  </tr>
                </thead>
                <tbody>
                    
                  <tr>
                    
                    <td>BK Demo Lecture 1</td>
                    <td>Maths Demo Lecture 1</td>
                    <td>BK Demo Lecture 1 / Accounts Demo Lecture</td>
                    <td>Advanced Accounts Demo Lecture / BK Demo Lecture 2 / Maths Demo Lecture 2</td>
                  </tr>
                  <tr>
                    <td>BK Demo Lecture 2</td>
                    <td>Maths Demo Lecture 2</td>
                    <td>BK Demo Lecture 2 / Accounts Demo Lecture</td>
                    <td>Advanced Accounts Demo Lecture / BK Demo Lecture 2 / Maths Demo Lecture 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
