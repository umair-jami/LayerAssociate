import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-section" id="hero">
      <div className="container">
        <h1 className="hero-heading text-yellow ls-1 fw-6">Top-notch legal services</h1>
        <p className="hero-text text-white ls-2">
          We take pride in helping people from all walks of life achieve the
          justice and peace they deserve.
        </p>
        <button className="btn text-uppercase">Learn More</button>
      </div>
    </div>
  );
}
