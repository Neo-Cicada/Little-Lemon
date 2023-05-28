import React from 'react'
import './main-styles/main.css'
import image from './main-assets/restaurant chef B.jpg'
export default function Main() {
  return (
    <>
      <div className='hero'>
        <div className='heroBox'>

          <div className='insideBox'>
            <h1>Little Lemon</h1>
            <p className='location'>Chicago</p>

            <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, et similique.</p>

            <button>Reserve a table</button>
          </div>

          <div className='imageBox'>
            <img src={image} alt="restaurant chef" />
          </div>


        </div>
      </div>






      <div className='highlights'>

      </div>
      <div className='testimonials'>

      </div>
      <div className='about'>
        
      </div>
    </>
  )
}
