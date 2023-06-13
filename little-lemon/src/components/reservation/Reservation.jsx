import React from 'react'
import { useState } from 'react';
import './reservation-style/reservation.css'
export default function Reservation() {
    const [formData, setFormData] = useState({});
    const handleInput = (event) =>{
        let newData = {[event.target.name]: event.target.value};
        setFormData({...formData, ...newData})
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            firstname: '',
            lastname: '',
            date:'',
        })
    }
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

                    <form action="#" onSubmit={handleSubmit}>
                        <div className='first-field'>
                            <div>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    placeholder='First Name'
                                    value={formData.firstname}
                                    onChange={(event) => handleInput(event)}
                                    required />
                            </div>
                            <div>
                                <input
                                type="text"
                                name='lastname'
                                id='lastname'
                                placeholder='Last Name'
                                onChange={(event) => handleInput(event)}

                                required />
                            </div>
                        </div>
                        <div className='second-field'>
                            <div>
                                <input
                                type="date"
                                name="date"
                                id='tnd'
                                onChange={(event) => handleInput(event)}

                                required />
                            </div>
                            <div>
                                <select
                                 name='res-time'
                                 id="res-time"
                                 onChange={(event) => handleInput(event)}
                                 placeholder='10:00'
                                 >
                                    <option value='10:00'>10:00</option>
                                    <option value='11:00'>11:00</option>
                                    <option value='12:00'>12:00</option>
                                    <option value='13:00'>13:00</option>
                                    <option value='17:00'>17:00</option>
                                    <option value='18:00'>18:00</option>
                                    <option value='19:00'>19:00</option>
                                    <option value='20:00'>20:00</option>
                                    <option value='21:00'>21:00</option>
                                    <option value='22:00'>22:00</option>
                                </select>
                            </div>

                        </div>
                        <div className='third-field'>
                            <div>
                                <input
                                 type="number"
                                 name="quantity"
                                 id="quantity"
                                 placeholder='Number of guests'
                                 min='1'
                                 max='10'
                                 onChange={(event) => handleInput(event)}

                                 required />
                            </div>
                            <div>
                                <textarea
                                type="text"
                                name="request"
                                id="request"
                                placeholder='Special request'
                                onChange={(event) => handleInput(event)}
                                />
                            </div>
                            <div className='btn-area'>
                                <button type='submit'>Book now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
