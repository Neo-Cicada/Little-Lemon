import React from 'react'
import './reservation-style/reservation.css'
export default function Reservation() {
    return (
        <>
            <div className='reservation-container'>
                <div className='insider-box'>
                    <div className='reservation-title'>
                        <h1>
                            Little Lemon
                        </h1>
                        <h2>Reservation</h2>
                    </div>

                    <form action="#">
                        <div className='first-field'>
                            <div>
                                <input type="text" name="firstname" id="firstname" placeholder='First Name' />
                            </div>
                            <div>
                                <input type="text" name='lastname' id='lastname' placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='second-field'>
                            <div>
                                <input type="datetime-local" name="time and date" id='tnd' />
                            </div>
                            <div>
                                <input type="number" name="quantity" id="quantity" placeholder='Number of people' />
                            </div>

                        </div>

                        <div className='third-field'>
                            <div>
                                <textarea type="text" name="request" id="request" placeholder='Special request' />
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="checkbox" name="email" id="email" />
                                </div>
                                <div>
                                    <label htmlFor="sms">SMS</label>
                                    <input type="checkbox" name="sms" id="sms" />

                                </div>
                            </div>
                            <div className='btn-area'>
                                <button>Book now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
