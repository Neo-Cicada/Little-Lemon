import React from 'react'
const container = {
    margin:'1em',
    height: '40%',

    overFlow: 'none'
}
const heading ={
    fontSize: '1.3rem',
    fontWeight: '600'
}
export default function CardMenu(props) {
    return (
        <>
            <div style={container}>
                <h1 style={heading}>Greek Salad</h1>
                <div style={{display: 'flex',height:'6.3em'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '50%',color: '#495E57'}}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, quisquam.</p>
                        <div style={{marginTop:'5%'}}>$12.99</div>
                    </div>
                    <div style={{height:'6em', width:'50%'}}>
                        <img src={props.image} alt="" style={{height: '100%', width:'100%', borderRadius:'10%'}}/>
                    </div>
                </div>
            </div>
        </>
    )
}
