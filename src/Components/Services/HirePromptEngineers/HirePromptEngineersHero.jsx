import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/Hire-Prompt-Engineers-1-1.png'
export default function HirePromptEngineersHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Hire Prompt Engineers</h2>
                        <p>
                        As experts in developing, training, and deploying generative models, we provide top-notch prompt engineering services to help you unlock the full potential of your generative AI models. Our dedicated prompt engineers have extensive experience in tailoring prompts for a variety of models, such as OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion. With our expertise, we help you achieve the best possible results for your generative AI projects.
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
