import React from "react";
import "./Navbar.css";


const CounterSection = () => {
  // Array to hold card data (assuming 4 cards)
  const cardData = [
    { id: 1, title: "CA Final AFM 2026", details: "11th October 2025 to 28th February 2026", bgColor: "purple" },
    { id: 2, title: "CA Final - Direct Tax (for May / Nov 2026)", details: "1st July 2025", bgColor: "dark-purple" },
    { id: 3, title: "CA Final - Indirect Tax (for May 26 / Sept 2026 / Jan 27)", details: "15th October 2025 to 31st January 2026", bgColor: "purple" },
    { id: 4, title: "CA Inter - Other Course", details: "Details here (Conceptual 4th Card)", bgColor: "light-purple" }, // Conceptual 4th card
  ];

  return (
    <section className="counter-section mt-5">
      <div className="container mt-5">
        {/* This row/grid holds the 4 cards */}
        <div className="counter-row mt-5"> 
          {cardData.map((card, index) => (
            <div 
              key={card.id} 
              className={`card-item card-${card.id}`}
            >
              <div className="card-content">
                {/*  - Optional visual enhancement */}
                <span className="card-icon">📅</span> 
                <h3 className="card-title">{card.title}</h3>
                <p className="card-details">{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;