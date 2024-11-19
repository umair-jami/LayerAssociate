"use client";
import React, { useState } from "react";
import "./navbar.css";
import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";
import menuImage from "../../assets/menu.png";
import closeImage from "../../assets/close.png";

export default function Navbar() {
  let [menu, setMenu] = useState(false);
  return (
    <div className="nav-container">
      <nav className="container nav" id="navbar">
        <div className="nav-heading ls-1 text-uppercase">
          <Image src={logo} alt="logo" className="logo" />
          <p>myron law associates</p>
        </div>
        <div className="navitems">
          <Link href="#hero" className="navitem ls-1">
            Home
          </Link>
          <Link href="#about" className="navitem ls-1">
            About
          </Link>
          <Link href="#practices" className="navitem ls-1">
            Practises
          </Link>
          <Link href="#service" className="navitem ls-1">
            Services
          </Link>
          <Link href="#feedback" className="navitem ls-1">
            Testimonials
          </Link>
          <Link href="#contact" className="navitem ls-1">
            Contact
          </Link>
        </div>
      </nav>
      <div className="menu">
        <div className="nav-heading text-yellow ls-1 text-uppercase">
          {menu ? (
            <Image
              src={closeImage}
              alt="closeImage"
              className="logo"
              onClick={() => setMenu(!menu)}
            />
          ) : (
            <Image
              src={menuImage}
              alt="logo"
              className="logo"
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
        {menu ? (
          <div className="Menunavitems">
            <Link href="#hero" className="Menunavitem ls-1">
              Home
            </Link>
            <Link href="#about" className="Menunavitem ls-1">
              About
            </Link>
            <Link href="#practices" className="Menunavitem ls-1">
              Practises
            </Link>
            <Link href="#service" className="Menunavitem ls-1">
              Services
            </Link>
            <Link href="#feedback" className="Menunavitem ls-1">
              Testimonials
            </Link>
            <Link href="#contact" className="Menunavitem ls-1">
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
