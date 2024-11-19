import React from 'react'
import Sstyle from './service.module.css'
import serviceImg from "../../assets/serviceIcon.jpg"
import Image from 'next/image'
import serviceIcon from "../../assets/servicesIcon.png"

export default function Service() {
  return (
    <div className={Sstyle.servicesection} id='service'>
        <div className={Sstyle.container}>
            <div className={Sstyle.servicesitems}>
                <div className={Sstyle.serviceimgbox}>
                    <Image src={serviceImg} alt='serviceimg' className={Sstyle.serviceimg}/>
                </div>
                <div className={Sstyle.servicetext}>
                    <h2 className={Sstyle.servicesheading}>
                    Our Services
                    </h2>
                    <p className={Sstyle.servicestext}>Share your services or specializations here, then list them down as bullet points for mobile-friendly easy reading. </p>
                    <div className={Sstyle.servicebuilets}>
                        <Image src={serviceIcon} alt='serviceIcon' className={Sstyle.serviceIcon}/>
                        <p className={Sstyle.iconText}>Add as many bullets
                        as you need</p>
                    </div>
                    <div className={Sstyle.servicebuilets}>
                        <Image src={serviceIcon} alt='serviceIcon' className={Sstyle.serviceIcon}/>
                        <p className={Sstyle.iconText}>Add as many bullets
                        as you need</p>
                    </div>
                    <div className={Sstyle.servicebuilets}>
                        <Image src={serviceIcon} alt='serviceIcon' className={Sstyle.serviceIcon}/>
                        <p className={Sstyle.iconText}>Add as many bullets
                        as you need</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
