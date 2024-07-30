import React from 'react'
import Micro from '../../assets/images/Microsoft-partner.svg'
import Aws from '../../assets/images/aws-partner.svg'
import GoogleP from '../../assets/images/google-partner.svg'
import Azure from '../../assets/images/azure-partner.svg'
export default function AlliancesPartners() {
    return (
        <div className='marginSet'>
            <div className="mainHeroSection mt-0">
                <h2 className='mb-3'>Alliances & Partners</h2>
                <p className='text-center'>
                    We strategically collaborate with a diverse ecosystem of partners and platforms, ensuring unparalleled flexibility and swift outcomes while maintaining quality and excellence.
                </p>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-sm-5 mt-4">
                    <img src={Micro} alt="" className='w-100' />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-sm-5 mt-4">
                    <img src={Aws} alt="" className='w-100' />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-sm-5 mt-4">
                    <img src={GoogleP} alt="" className='w-100' />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-sm-5 mt-4">
                    <img src={Azure} alt="" className='w-100' />
                </div>
            </div>
        </div>
    )
}
