import React from "react";
import "./Navbar.css";

export default function Imparting() {
  return (
    <section className="imparting_section">
      <div className="container imparting_container">
        {/* Left: Image */}
        <div className="imparting_left">
          <img
            src="https://mensaclasses.com/images/imparting-knowledge-new.jpg"
            alt="Imparting Knowledge"
            className="imparting_img"
          />
        </div>

        {/* Right: Description */}
        <div className="imparting_right">
          <h1>Imparting Knowledge</h1>
          <p>
            Mensa Commerce Classes was established in 1994 by two professionals, Prof. Narayan S. Iyer, a Chartered Accountant 
            and Prof. Shiva Muthuswamy, a Cost Accountant.
          </p>
          <p>
            Mensa Commerce Classes is a leading educational institute catering exclusively to the needs of commerce students. 
            We shoulder the responsibility of transforming young minds into world-class citizens. Our objective is not only to provide 
            conceptual exam-oriented coaching but also to develop skills among our student fraternity to enhance their employability 
            and entrepreneurial traits.
          </p>
          <button className="top_menu_btn">Read More</button>
        </div>
      </div>
    </section>
  );
}
