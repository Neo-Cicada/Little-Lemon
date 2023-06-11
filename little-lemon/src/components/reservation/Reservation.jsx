import React from 'react'
import './reservation-style/reservation.css'
export default function Reservation() {
    return (
        <>
            <div className='reservation-container'>
                <div>
                    <h1>
                        Little Lemon
                    </h1>
                    <h2>Reservation</h2>
                </div>

                <form action="#">
                    <div>
                        <div>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" id="firstname" />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name='lastname' id='lastname' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="tnd">Time and Date</label>
                            <input type="datetime-local" name="time and date" id='tnd'/>
                        </div>
                        <div>
                            <label htmlFor="quantity">Number of people</label>
                            <input type="number" name="quantity" id="quantity" />
                        </div>

                    </div>

                    <div>
                        <div>
                            <label htmlFor="request">Special Request</label>
                            <input type="text" name="request" id="request" />
                        </div>
                        <div>
                            <div>confirmation</div>
                        </div>
                        <div>
                            <button>Book now</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
