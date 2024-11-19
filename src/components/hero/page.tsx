import React from "react";
import hstyle from "./hero.module.css"

export default function Hero() {
  return (
    <div className={hstyle.herosection} id="hero">
      <div className={hstyle.container}>
        <h1 className={hstyle.heroheading}>
          Top-notch legal services
        </h1>
        <p className={hstyle.herotext}>
          We take pride in helping people from all walks of life achieve the
          justice and peace they deserve.
        </p>
        <button className={hstyle.btn}>Learn More</button>
      </div>
    </div>
  );
}
