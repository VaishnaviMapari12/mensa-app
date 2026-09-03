import React from "react";
import "./Navbar.css";

export default function WhyCommerce() {
  return (
    <section className="whycommerce_section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Description */}
          <div className="col-md-6">
            <h2 className="mb-3">Why Commerce?</h2>
            <p>
              The subjects in commerce are well designed to meet the requisites of corporate governance. To it briefly:
            </p>
            <ul className="whycommerce_list">
              <li><strong>Book-Keeping & Accountancy:</strong> Learn to record, analyzing & interpretation of business transactions…</li>
              <li><strong>Economics:</strong> Fiscal Policies, Monetary Policies, Consumer Behaviour, Demand Analysis, Producer Behaviour, Price Determination, Money and Capital Market, Banking, Budget …</li>
              <li><strong>Mathematics:</strong> Commercial Maths, Logistics Operation, Management Maths, Statistics, Calculus …</li>
              <li><strong>Financial Management:</strong> Share market, Debt market, Forex, Capital Budgeting, Dividend policy, Cash management …</li>
            </ul>
          </div>

          {/* Right: Video */}
          <div className="col-md-6 text-center">
            <div className="video_wrapper">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/2PRpfua2COM"
                title="Why Commerce"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
