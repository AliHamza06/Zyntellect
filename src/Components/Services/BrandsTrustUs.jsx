import React from 'react'
import graphClients from '../../assets/images/graph-clients-image.png'
export default function BrandsTrustUs() {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Big Brands Trust Us
                </h2>
            </div>
            <div className='graphImgSec'>
                <img src={graphClients} alt="" className='w-100' />
            </div>
        </div>
    )
}
