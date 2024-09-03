import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../../assets/images/ai-engineer.png'
export default function HireAIEngineersHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Hire AI Engineers</h2>
                        <p>
                        Whether you want to initiate or advance your AI journey, trust our AI engineers to provide the expertise you need. With knowledge and experience spanning diverse AI domains such as machine learning, deep learning, natural language processing, computer vision, and data science, our AI engineers build custom AI models and solutions tailored to your unique business needs. We follow a comprehensive approach that goes beyond AI development, encompassing the seamless integration of AI solutions into your existing systems, and offering consulting services to guide you through the intricate AI landscape.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Request a proposal</Button>
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
