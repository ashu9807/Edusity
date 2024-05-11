import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
    return (
       <div className='hero'>
        <div className='hero-text'>
           <h1>We Ensure better <span className='hero-text-word'>Education</span> for a better world</h1>
           </div>
           <div className='hero-para'>
           <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education</p>
           </div>
           {/* <div className='hero-btn'>
           
           <button className='btn'>  <div>Explore More</div> 
           <div><img src={dark_arrow} alt="" className='arrow'/></div></button>
        </div> */}
       </div> 
    )
}

export default Hero
