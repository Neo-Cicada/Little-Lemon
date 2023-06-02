import React from 'react'
import './about-styles/about.css'
import image1 from './about-assets/marioA.jpg'
import image2 from './about-assets/marioB.jpg'
export default function About() {
  return (
    <>
      <div className="container-about">
        <div className='first-box'>
          <div className="title">
            Little Lemon <span>Chicago</span>
          </div>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
           Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className="second-box">
          <div className="image one">
            <img src={image1} alt="mario" />
          </div>
          <div className="image two">
            <img src={image2} alt="mario" />
          </div>
        </div>

      </div>
    </>
  )
}
