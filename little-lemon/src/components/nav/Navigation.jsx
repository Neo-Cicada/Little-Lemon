import React from 'react'

export default function Navigation() {
  return (
    <>
        <nav>
            <ul style={{display: 'flex', textStyle: 'none', gap: '10px'}}>
                <li><a href="#" role="button">Home</a></li>
                <li><a href="#" role="button">About</a></li>
                <li><a href="#" role="button">Menu</a></li>
                <li><a href="#" role="button">Reservation</a></li>
                <li><a href="#" role="button">Order Online</a></li>
                <li><a href="#" role="button">Login</a></li>

            </ul>
        </nav>
    </>
  )
}
