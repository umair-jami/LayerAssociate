import React from "react";
import style from "./contact.module.css";
import locationIcon from "../../assets/map.png";
import Image from "next/image";
import phoneImage from "../../assets/phone.png";
import emailImage from "../../assets/email.png";
import fbIcon from "../../assets/fb.png";
import x from "../../assets/x.png";
import insta from "../../assets/insta.png";
import logo from "../../assets/logo.png";

export default function Contact() {
  return (
    <div className={`${style.contactSection} bg-white`} id="contact">
      <div className="container">
        <div className={style.contactText}>
          <h2 className={`${style.contactHeading} text-blue`}>Conatct Us</h2>
          <div className={style.infoDetail}>
            <Image src={locationIcon} alt="map" className={style.img} />
            <p className={`${style.infoText} text-blue`}>
              123 Anywhere St. Any City, ST 12345
            </p>
          </div>
          <div className={style.infoDetail}>
            <Image src={phoneImage} alt="map" className={style.img} />
            <p className={`${style.infoText} text-blue`}>+923000000000</p>
          </div>
          <div className={style.infoDetail}>
            <Image src={emailImage} alt="map" className={style.img} />
            <p className={`${style.infoText} text-blue`}>
              hello@reallygreatsite.com
            </p>
          </div>
        </div>
        <div className={style.officeInfo}>
          <h2 className="text-blue">Office Hours</h2>
          <p className="text-yellow">Monday to Friday</p>
          <p className="text-blue">9:00 am to 6:00 pm</p>
          <p className="text-yellow">Saturday</p>
          <p className="text-blue">9:00 am to 12 noon</p>
        </div>
        <div className={style.social}>
          <div className={style.socialHeading}>
            <h1 className="text-blue">Follow us online</h1>
          </div>
          <div className={style.socialLinks}>
            <Image src={fbIcon} alt="fb" className={style.iconImg} />
            <Image src={x} alt="x" className={style.iconImg} />
            <Image src={insta} alt="insta" className={style.iconImg} />
          </div>
        </div>
        <div className={style.socialText}>
          <p className="text-blue">
            This is an accessible workplace. Persons with <br /> disabilities
            are welcome to apply.{" "}
          </p>
          <div className={`${style.webLogo} nav-heading text-yellow ls-1 text-uppercase`}>
            <Image src={logo} alt="logo" className={style.ContactIcon} />
            <p className="text-blue">myron law associates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
