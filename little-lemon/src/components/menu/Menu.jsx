import React from 'react'
import './menu-styles/menu.css'
import food from '../main/main-assets/restauranfood.jpg'
import Card from './menu-component/CardMenu'
export default function Menu() {
  return (
    <>
      <div className="menu-container">
        <div className="menu-hero">
          <div className='menu-title'>Little Lemon <span>Chicago</span></div>
          <div className='little-hero-mobile'>
            <div className='menu-context'>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <button>Reserve Table</button>
            </div>
            <div className='menu-image'>
                <img src={food} alt="" />
            </div>
          </div>
        </div>
        <div className='menu-category'>
          <div className='category-container'>
            <h2>Order for Delivery</h2>
          </div>
          <div className='list-category'>
            <ul id='slider'>
              <li>Lunch</li>
              <li>Mains</li>
              <li>Desserts</li>
              <li>ALaCarte</li>
              <li>Special</li>
            </ul>
          </div>
        </div>
        <div className="menu-content">
          <Card image={food}/>
          <Card image={food}/>
          <Card image={food}/>
        </div>
      </div>
    </>
  )
}
