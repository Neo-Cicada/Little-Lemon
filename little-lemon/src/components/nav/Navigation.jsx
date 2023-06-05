import React from 'react'
import './nav-style/nav.css'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/" role="button">About</Link></li>
                <li><Link to="Menu" role="button">Menu</Link></li>
                <li><Link to="Reservation" role="button">Reservation</Link></li>
                <li><Link to="/" role="button">Order Online</Link></li>
                <li><Link to="/" role="button">Login</Link></li>

            </ul>
        </nav>
    </>
  )
}
