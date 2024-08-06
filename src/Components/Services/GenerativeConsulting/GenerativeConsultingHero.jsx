import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/Generative-AI-consulting-company-1.png'
export default function GenerativeConsultingHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Generative AI Consulting Company</h2>
                        <p>
                            We offer comprehensive generative AI consulting services enabling you to harness the potential of generative AI for improved operations and enhanced product offerings. We combine our deep AI expertise in technologies like GANs, VAEs, and autoencoders with a strong ethical foundation to ensure that the AI solutions we deliver are not only technologically advanced but also aligned with ethical and responsible AI practices.
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
