import React from 'react'
import flipcart from '../images/flipcart.jpg';
import Grocery from '../images/Grocery.jpg';

export default function Responsive() {
    return (
        <>
            <div className='row'>

                <div className='col-md-6 float-start' >
                    <img src={flipcart} width='100px' />
                </div>
                <div className='col-md-6 float-start'>
                    <img src={Grocery} width='100px' />
                </div>
            </div>
        </>
    )
}
