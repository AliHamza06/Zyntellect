import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/Generative-AI-integration-1.png'
export default function GenerativeIntegrationHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Generative AI Integration Services</h2>
                        <p>
                        We build robust generative AI-powered solutions tailored to your unique business requirements and seamlessly integrate them into your existing workflows. Streamline your processes, drive innovation, and maximize productivity through the limitless potential of generative AI.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Discuss your project</Button>
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
