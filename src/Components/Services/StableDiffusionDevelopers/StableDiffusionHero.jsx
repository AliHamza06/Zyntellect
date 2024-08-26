import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/app-development-with-stable-diffusion-model-1.png'
export default function StableDiffusionHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-6 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Stable Diffusion Developers</h2>
                        <p>
                        As specialists in creating Stable Diffusion model powered solutions, we bring your vision to reality through innovative solutions like LensaAI, an image-to-image generative AI application. Our team has extensive experience in building both text-to-image and image-to-image generative AI models, incorporating advanced technologies such as machine learning and natural language processing. This expertise enables us to deliver AI solutions tailored to your specific project requirements, helping you to achieve your AI goals with ease.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Request a proposal</Button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <img src={companyImg} alt="" className='w-100' />
                </div>
            </div>
        </>
    )
}
