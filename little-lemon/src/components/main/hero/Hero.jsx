import React from 'react'
import restauranFood from '../main-assets/restauranfood.jpg'
import './hero-styles/hero.css'
export default function Hero() {
  return (
    <>
      <div className='heroBox'>

        <div className='insideBox'>
          <h1>Little Lemon</h1>
          <p className='location'>Chicago</p>

          <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, et similique.</p>

          <button>Reserve a table</button>
        </div>

        <div className='imageBox'>
          <img src={restauranFood} alt="restaurant chef" />
        </div>


      </div>
    </>
  )
}
