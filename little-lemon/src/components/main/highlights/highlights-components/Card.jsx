import React from 'react'

const styleCard= {
    borderRadius: '16px 16px 0px 0px',
    backgroundColor: '#EDEFEE',
    minHeight: '25em',
    maxHeight: '15em'
}

const img = {
  width: '100%',
  height: '100%',
  borderRadius: '16px 16px 0px 0px',

}
const nameAndPrice = {
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '10%',
  marginRight: '10%',
  marginTop: '5%'
}
const name = {

  fontFamily: 'Markazi Text',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.2rem',
  lineHeight: '90%',
  color: '#000000'
}

const price = {

  fontFamily: 'Karla',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1.2rem',
  lineHeight: '19px',

  color: '#EE9972',
}
const description = {
  marginLeft: '10%',
  marginRight: '10%',
  marginTop: '5%',
  height: '30%',



}
export default function Card(props) {
  return (
    <>
        <div style={styleCard}>
          <div className="imgContainer" style={{height: '12em'}}>
            <img src={props.image} alt='product name' style={img} />
          </div>

            <div className="nameAndPrice" style={nameAndPrice}>
              <div style={name}>{props.name}</div>
              <div style={price}>{props.price}</div>
            </div>
            <div className="foodDescription">
              <p style={description}>{props.description}</p>
            </div>
            <div style={{marginLeft:'10%', marginTop: '5%' }}>
              <p style={{color: '#333333', fontWeight: '700'}}> Order a delivery</p>
            </div>
        </div>
    </>
  )
}
