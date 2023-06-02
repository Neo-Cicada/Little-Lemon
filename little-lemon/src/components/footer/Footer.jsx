import React from 'react'
import './footer-styles/footer.css'
export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container-footer'>
          <div className="contact">
              <h2>Contact</h2>
              <ul>
                <li>Philippines, Manila</li>
                <li>+63091234567</li>
                <li>Email</li>
              </ul>
          </div>
          <div className="social-media">
            <h2>Social Media</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
