import React from 'react'

const styleCard= {
    heigh: '439px',
    width: '264px',
    border: '1px solid red',
    backgroundColor: '#EDEFEE'
}

export default function Card(props) {
  return (
    <>
        <div style={styleCard}>
            <div className='img'>
              <img src={props.image} alt='product name' />
            </div>
            <div className="nameAndPrice">

            </div>
            <div className="foodDescription">
              <p>{props.description}</p>
            </div>
        </div>
    </>
  )
}
