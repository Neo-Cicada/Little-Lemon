import React from 'react'
import './testimonials-styles/testimonial.css'
import Card from './testimonial-component/Cardmonial'
export default function Testimonials() {
  return (
    <>
      <div className="testimonial-container">
        <div className="title"><h1>Testimonials</h1></div>
        <div className="testimonial-body">
          <div className="content">
            <Card
              rating='5 Star'
              name='Neo'
              review='the food there were great when I ate'
            />
          </div>
          <div className="content">
            <Card
              rating='5 Star'
              name='Neo'
              review='the food there were great when I ate'
            />
          </div>
          <div className="content">
            <Card
              rating='5 Star'
              name='Cris'
              review='Would eat there again'
            />
          </div>
          <div className="content">
            <Card
              rating='5 Star'
              name='Crystal'
              review='They have the best dish in the area'
            />
          </div>

        </div>
      </div>
    </>
  )
}
