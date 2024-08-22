import React from 'react'
import GlobalImg from '../../assets/images/global.png'
export default function ClientNetwork() {
    return (
        <div className='marginSet'>
            <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                <h2>Our Global Client Network</h2>
                <p className='text-center'>
                    Our clients are located in key markets around the world, highlighting our broad reach and diverse partnerships.
                </p>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <img src={GlobalImg} alt="" className='globalImg' />
            </div>
        </div>
    )
}
