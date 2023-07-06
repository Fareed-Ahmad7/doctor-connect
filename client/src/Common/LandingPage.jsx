import React from 'react'
import '../Styles/LandingPage.css'
import landingimg from '../assets/landing-img.jpg'
const LandingPage = () => {
  return (
    <div className='landing-main'>
        <div className="landing-content">
        <div className="landing-text">
        <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        </div>
        <img className='landing-img' src={landingimg} alt="" />
        </div>
    </div>
  )
}

export default LandingPage