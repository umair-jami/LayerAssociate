"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";
import menuImage from "../../assets/menu.png";
import closeImage from "../../assets/close.png";
import navStyle from './navbar.module.css'

export default function Navbar() {
  let [menu, setMenu] = useState(false);
  return (
    <div className={navStyle.navcontainer}>
      <nav className={`${navStyle.container} ${navStyle.nav}`} id="navbar">
        <div className={navStyle.navheading}>
          <Image src={logo} alt="logo" className={navStyle.logo} />
          <p>myron law associates</p>
        </div>
        <div className={navStyle.navitems}>
          <Link href="#hero" className={navStyle.navitem}>
            Home
          </Link>
          <Link href="#about" className={navStyle.navitem}>
            About
          </Link>
          <Link href="#practices" className={navStyle.navitem}>
            Practises
          </Link>
          <Link href="#service" className={navStyle.navitem}>
            Services
          </Link>
          <Link href="#feedback" className={navStyle.navitem}>
            Testimonials
          </Link>
          <Link href="#contact" className={navStyle.navitem}>
            Contact
          </Link>
        </div>
      </nav>
      <div className={navStyle.menu}>
        <div className={navStyle.navheading}>
          {menu ? (
            <Image
              src={closeImage}
              alt="closeImage"
              className={navStyle.logo}
              onClick={() => setMenu(!menu)}
            />
          ) : (
            <Image
              src={menuImage}
              alt="logo"
              className={navStyle.logo}
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
        {menu ? (
          <div className={navStyle.Menunavitems}>
            <Link href="#hero" className={navStyle.Menunavitem}>
              Home
            </Link>
            <Link href="#about" className={navStyle.Menunavitem}>
              About
            </Link>
            <Link href="#practices" className={navStyle.Menunavitem}>
              Practises
            </Link>
            <Link href="#service" className={navStyle.Menunavitem}>
              Services
            </Link>
            <Link href="#feedback" className={navStyle.Menunavitem}>
              Testimonials
            </Link>
            <Link href="#contact" className={navStyle.Menunavitem}>
              Contact
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
