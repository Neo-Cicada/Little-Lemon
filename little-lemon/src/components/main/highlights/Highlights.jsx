import React from 'react'
import './highlights-styles/highlights.css'
import Card from './highlights-components/Card'
export default function Highlights() {
  return (
    <>
      <div className='highContainer'>
        <div className='headContainer'>
          <h1>Specials</h1>

          <button>Online Menu</button>

        </div>
        <div className='bodyLights'>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  )
}
