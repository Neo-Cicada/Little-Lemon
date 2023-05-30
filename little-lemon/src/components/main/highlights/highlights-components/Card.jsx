import React from 'react'

const styleCard= {
    heigh: '439px',
    width: '264px',
    border: '1px solid red',
    backgroundColor: '#EDEFEE'
}

export default function Card() {
  return (
    <>
        <div style={styleCard}>
            <div className='img'>

            </div>
            <div className="nameAndPrice">

            </div>
            <div className="foodDescription">

            </div>
        </div>
    </>
  )
}
