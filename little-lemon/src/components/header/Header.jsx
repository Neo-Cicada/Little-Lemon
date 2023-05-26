import React from 'react'
import logo from './headerAssets/Logo.svg'
import NavBar from '../nav/Navigation'
export default function Header() {
  return (
    <>

      <div style={{display: 'flex', border: '1px solid red'}} >
        <img src={logo} alt="little lemon logo" />
        <NavBar/>
      </div>

    </>
  )
}
