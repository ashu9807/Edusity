import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About({setPlaystate}) {
    return (
        <div className='about'>
          <div className='about-left'>
            <img src={about_img} alt="" className='about-left-img' />
            <img src={play_icon} alt="" className='about-left-icon' onClick={()=>{setPlaystate(true)}}/>
          </div>
          <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2> Nurturing Tomorrow's Leaders Today </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum quae. Deleniti architecto recusandae expedita quisquam, omnis saepe doloremque non consequuntur cumque beatae veniam aliquam provident magnam facilis? Maxime, ex!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum quae. Deleniti architecto recusandae expedita quisquam, omnis saepe doloremque non consequuntur cumque beatae veniam aliquam provident magnam facilis? Maxime, ex!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum quae. Deleniti architecto recusandae expedita quisquam, omnis saepe doloremque non consequuntur cumque beatae veniam aliquam provident magnam facilis? Maxime, ex!</p>
          </div>
        </div>
    )
}

export default About
