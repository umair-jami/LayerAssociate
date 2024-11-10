import React from 'react'
import './feedback.css'

export default function Feedback() {
  return (
    <div className='feedback-section bg-white' id='feedback'>
        <div className="container">
            <div className="feedback-text">
                <h1 className='feed-heading'>Feedback from Clients</h1>
                <p className="feed-text">Why you should hire our firm.</p>
                <div className="boxes">                
                <div className="box box11">
                    <p className="box-text text-white">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <h3 className="text-yellow">-Umair Jami</h3>
                </div>
                <div className="box box21">
                    <p className="box-text text-white">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <h3 className="text-yellow">-Umair Jami</h3>
                </div>
                <div className="box box31">
                    <p className="box-text text-white">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <h3 className="text-yellow">-Umair Jami</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
