import React from 'react'
import './service.css'
import serviceImg from "../../assets/services.jpg"
import Image from 'next/image'
import serviceIcon from "../../assets/servicesIcon.png"

export default function Service() {
  return (
    <div className='service-section bg-yellow' id='service'>
        <div className="container">
            <div className="services-items">
                <div className="service-img-box">
                    <Image src={serviceImg} alt='service-img' className='service-img'/>
                </div>
                <div className="service-text">
                    <h2 className="services-headign text-blue">
                    Our Services
                    </h2>
                    <p className="services-text text-blue">Share your services or specializations here, then list them down as bullet points for mobile-friendly easy reading. </p>
                    <div className="service-builets">
                        <Image src={serviceIcon} alt='serviceIcon' className='serviceIcon'/>
                        <p className='iconText text-blue'>Add as many bullets
                        as you need</p>
                    </div>
                    <div className="service-builets">
                        <Image src={serviceIcon} alt='serviceIcon' className='serviceIcon'/>
                        <p className='iconText text-blue'>Add as many bullets
                        as you need</p>
                    </div>
                    <div className="service-builets">
                        <Image src={serviceIcon} alt='serviceIcon' className='serviceIcon'/>
                        <p className='iconText text-blue'>Add as many bullets
                        as you need</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
