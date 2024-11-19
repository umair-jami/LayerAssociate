import React from 'react'
import Fstyle from './feedback.module.css'

export default function Feedback() {
  return (
    <div className={Fstyle.feedbacksection} id='feedback'>
        <div className={Fstyle.container}>
            <div className={Fstyle.feedbacktext}>
                <h1 className={Fstyle.feedheading}>Feedback from Clients</h1>
                <p className={Fstyle.feedtext}>Why you should hire our firm.</p>
                <div className={Fstyle.boxes}>                
                <div className={`${Fstyle.box} ${Fstyle.box11}`}>
                    <p className={Fstyle.boxtext}>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <h3 className={Fstyle.NameText}>-Umair Jami</h3>
                </div>
                <div className={`${Fstyle.box} ${Fstyle.box21}`}>
                    <p className={Fstyle.boxtext}>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <h3 className={Fstyle.NameText}>-Umair Jami</h3>
                </div>
                <div className={`${Fstyle.box} ${Fstyle.box31}`}>
                    <p className={Fstyle.boxtext}>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <h3 className={Fstyle.NameText}>-Umair Jami</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
