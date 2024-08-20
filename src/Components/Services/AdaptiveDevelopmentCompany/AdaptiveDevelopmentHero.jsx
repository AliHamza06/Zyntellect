import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/Adaptive-AI-Development-company.png'
export default function AdaptiveDevelopmentHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Adaptive AI Development Company</h2>
                        <p>
                        Harness the power of adaptive AI to transform your business operations and improve customer satisfaction. With deep expertise in machine learning, deep learning, neural networks, NLP and other AI subsets, our adaptive AI developers build highly performant custom adaptive AI solutions.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Get in touch</Button>
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
