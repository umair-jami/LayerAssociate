import React from "react";
import "./about.css";
import aboutImg from "../../assets/about.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className="about-section bg-yellow" id="about">
      <div className="container about-items">
        {/* Info Section */}
        <div className="info">
          <div className="info-items">
            <h1 className="about-heading text-blue ls-1">
              How we deal with <br /> the law
            </h1>
            <p className="about-text text-blue">
              Our clients' bottom line is our top priority. We are in constant
              communication with the people we serve and are committed to
              advancing the immediate needs and wants of our clients. Our team
              works around the clock to provide the necessary services and
              support that each client needs from us.
            </p>
            <button className="btn text-blue">Get in Touch</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="img-section">
          <div className="info-items">
            <Image src={aboutImg} alt="About Us" className="aboutImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
