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
    <div className={`${style.contactSection}`} id="contact">
      <div className="container">
        <div className={style.contactText}>
          <h2 className={`${style.contactHeading}`}>Conatct Us</h2>
          <div className={style.infoDetail}>
            <Image src={locationIcon} alt="map" className={style.img} />
            <p className={`${style.infoText}`}>
              123 Anywhere St. Any City, ST 12345
            </p>
          </div>
          <div className={style.infoDetail}>
            <Image src={phoneImage} alt="map" className={style.img} />
            <p className={`${style.infoText}`}>+923000000000</p>
          </div>
          <div className={style.infoDetail}>
            <Image src={emailImage} alt="map" className={style.img} />
            <p className={`${style.infoText}`}>
              hello@reallygreatsite.com
            </p>
          </div>
        </div>
        <div className={style.officeInfo}>
          <h2>Office Hours</h2>
          <p className={style.officeDays}>Monday to Friday</p>
          <p className={style.timing}>9:00 am to 6:00 pm</p>
          <p className={style.officeDays}>Saturday</p>
          <p className={style.timing}>9:00 am to 12 noon</p>
        </div>
        <div className={style.social}>
          <div className={style.socialHeading}>
            <h1>Follow us online</h1>
          </div>
          <div className={style.socialLinks}>
            <Image src={fbIcon} alt="fb" className={style.iconImg} />
            <Image src={x} alt="x" className={style.iconImg} />
            <Image src={insta} alt="insta" className={style.iconImg} />
          </div>
        </div>
        <div className={style.socialText}>
          <p>
            This is an accessible workplace. Persons with <br /> disabilities
            are welcome to apply.{" "}
          </p>
          <div className={`${style.webLogo} ${style.navheading}`}>
            <Image src={logo} alt="logo" className={style.ContactIcon} />
            <p>myron law associates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
