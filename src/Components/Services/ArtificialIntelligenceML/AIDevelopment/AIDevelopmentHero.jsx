import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../../assets/images/AI-Development-Company-image-1.png'
export default function AIDevelopmentHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>AI Development Company</h2>
                        <p>
                        Maximize your business potential with our AI development services, designed to streamline your business workflows and amplify operational efficiency. From AI consulting to building custom AI apps and seamlessly integrating them into your workflows, we offer a comprehensive suite of AI services.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Consult our AI experts</Button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <img src={companyImg} alt="" className='w-100' />
                </div>
            </div>
        </>
    )
}
