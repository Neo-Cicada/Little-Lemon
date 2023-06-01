import React from 'react'
const container = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',



}
export default function Cardmonial(props) {
    return (
        <>
            <div className='container' style={container}>
                <div style={{margin: '15%'}}>
                    <h3>{props.rating}</h3>
                    <h3>{props.name}</h3>
                    <p style={{marginTop: '10%'}}><i>{props.review}</i></p>
                </div>

            </div>
        </>
    )
}
