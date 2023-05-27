import React from 'react'
import logo from './headerAssets/Logo.svg'
import NavBar from '../nav/Navigation'
import './header-style/header.css'
export default function Header() {
  return (
    <>

      <div className='header'>
        <img src={logo} alt="little lemon logo" />

        <NavBar/>
      </div>

    </>
  )
}
