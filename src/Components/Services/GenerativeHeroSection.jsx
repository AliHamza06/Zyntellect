import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../assets/images/Generative-AI.png'
export default function GenerativeHeroSection() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Generative AI Development Company</h2>
                        <p>
                            From strategic consulting to solution development and ongoing support, our comprehensive generative AI services are specifically designed to propel advancements within your business. Our robust GenAI solutions powered by foundational models like GPT, Llama, PaLM, Mistral, Claude, and Gemini help businesses automate and streamline workflows for heightened productivity and efficiency.
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
