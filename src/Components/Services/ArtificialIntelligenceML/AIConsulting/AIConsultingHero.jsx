import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../../assets/images/ai-consulting-services-company.png'
export default function AIConsultingHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>AI Consulting Company</h2>
                        <p>
                        Our comprehensive AI consulting services help you harness the transformative power of AI, enhancing your operational capabilities and product offerings. Our experts partner with you to understand your unique challenges and objectives, creating customized AI strategies and solutions that yield tangible results. We are also proficient in generative AI, with expertise in leveraging advanced models like GPT, Gemini, Llama, PaLM, and Mistral to build innovative solutions for diverse use cases. From enhancing operations through intelligent automation to exploring the creative potential of generative AI, we guide you through every step of your AI journey.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Schedule a consulting</Button>
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
