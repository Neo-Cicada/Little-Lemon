import React from 'react'
import './reservation-style/reservation.css'
export default function Reservation() {
    return (
        <>
            <div className='reservation-container'>
                <div className='reservation-header'>
                    <h1>Little Lemon</h1>
                    <h3>Reservation</h3>
                </div>

                <div className='reservation-body'>
                    <div>
                        <div>
                            <label htmlFor="">First Name</label>
                            <input type="name" />
                        </div>

                        <div>
                            <label htmlFor="">Last Name</label>
                            <input type="name" />
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            <label htmlFor="">Time and Date</label>
                            <input type="time" />
                        </div>
                        <div>
                            <label htmlFor="">Number of People</label>
                            <input type="number" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Special Request:</label>
                        <input type="text" />
                    </div>
                </div>

                <div className='reservation-footer'>
                    <h4>Confirmation and Reminder</h4>
                    <div>
                        <div>
                            inbox image
                        </div>
                        <div>
                            email image
                        </div>
                    </div>
                    <div><button>Book now</button></div>
                </div>
            </div>
        </>
    )
}
