import React from "react";
import Astyle from "./about.module.css"
import aboutImg from "../../assets/about.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className={Astyle.aboutsection} id="about">
      <div className={`${Astyle.container} ${Astyle.aboutitems}`}>
        {/* Info Section */}
        <div className={Astyle.info}>
          <div className={Astyle.infoitems}>
            <h1 className={Astyle.aboutheading}>
              How we deal with <br /> the law
            </h1>
            <p className={Astyle.abouttext}>
              Our clients' bottom line is our top priority. We are in constant
              communication with the people we serve and are committed to
              advancing the immediate needs and wants of our clients. Our team
              works around the clock to provide the necessary services and
              support that each client needs from us.
            </p>
            <button className={Astyle.btn}>Get in Touch</button>
          </div>
        </div>

        {/* Image Section */}
        <div className={Astyle.imgsection}>
          <div className={Astyle.infoitems}>
            <Image src={aboutImg} alt="About Us" className={Astyle.aboutImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
