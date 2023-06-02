import React from 'react'
import './main-styles/main.css'
import image from './main-assets/restaurant chef B.jpg'
import restauranFood from './main-assets/restauranfood.jpg'
import Hero from './hero/Hero'
import Highlights from './highlights/Highlights'
import Testimonials from './testimonials/Testimonials'
import About from './about/About'
export default function Main() {
  return (
    <>
      <div className='hero'>
        <Hero/>
      </div>

      <div className='highlights'>
        <Highlights/>
      </div>
      <div className='testimonials'>
        <Testimonials/>
      </div>
      <div className='about'>
        <About/>
      </div>
    </>
  )
}
