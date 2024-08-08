import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/Hire-generative-ai-engineers-1-1.png'
export default function GenerativeEngineersHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-4 mt-3">
                    <div className='herosection2'>
                        <h2>Hire Generative AI Engineers</h2>
                        <p>
                        Hire our team of expert generative AI engineers to unlock the full potential of generative AI for your business. Specializing in domain-specific models and advanced technologies like GANs, neural networks and LLMs, we provide seamless integration with your existing infrastructure and expert consultation to navigate your AI journey. Our deep expertise in foundational models like GPT-4, Llama 3, and Mistral enables us to fuse cutting-edge technology with human creativity. Enhance your operations with our industry-leading AI experts, who adhere to the highest standards and offer the flexibility to collaborate across time zones.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Schedule a call</Button>
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
