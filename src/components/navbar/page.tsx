import React from 'react'
import './navbar.css'
import Link from 'next/link'
import logo from '../../assets/logo.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='container nav bg-dark' id='navbar'>
        <div className='nav-heading text-yellow ls-1 text-uppercase'>
          <Image src={logo} alt="logo" className='logo'/>
            <p>myron law associates</p>
        </div>
        <div className='navitems'>
            <Link href="#hero" className='navitem ls-1'>Home</Link>
            <Link href="#about" className='navitem ls-1'>About</Link>
            <Link href="#practices" className='navitem ls-1'>Practises</Link>
            <Link href="#service" className='navitem ls-1'>Services</Link>
            <Link href="#feedback" className='navitem ls-1'>Testimonials</Link>
            <Link href="#contact" className='navitem ls-1'>Contact</Link>
        </div>
    </nav>
  )
}
