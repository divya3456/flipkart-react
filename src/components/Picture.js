import React from 'react'
import Im1 from '../images/Im1.jpeg';
import M1 from '../images/M1.jpg';
import M2 from '../images/M2.jpg';
import M3 from '../images/M3.jpg';
import M4 from '../images/M4.jpg';
import M5 from '../images/M5.jpg';
import M6 from '../images/M6.jpg';
import M7 from '../images/M7.jpg';

export default function Picture() {
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <img src={Im1} width='100%' height='250px' />
                </div>
            </div>
            <div className='row'>
                <h5>Best Mobiles</h5>

                <div className='col-md-1  logo'>
                    <img src={M2} />
                </div>
                <div className='col-md-1 logo'>
                    <img src={M1} />
                </div>
                <div className='col-md-1 logo'>
                    <img src={M3} />
                </div>
                <div className='col-md-1 logo'>
                    <img src={M4} />
                </div>
                <div className='col-md-1 bg-white logo'>
                    <img src={M5} />
                </div>
                <div className='col-md-1 bg-white logo'>
                    <img src={M6} />
                </div>
                <div className='col-md-2 bg-white logo'>
                    <img src={M7} />
                </div>
            </div>
        </>
    )
}
