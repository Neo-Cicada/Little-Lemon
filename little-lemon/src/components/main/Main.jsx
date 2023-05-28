import React from 'react'
import './main-styles/main.css'
import image from './main-assets/restaurant chef B.jpg'
import restauranFood from './main-assets/restauranfood.jpg'
import Hero from './hero/Hero'
import Highlights from './highlights/Highlights'
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

      </div>
      <div className='about'>

      </div>
    </>
  )
}
