import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/ai-copilot-dev.png'
export default function GenerativeCopilotHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>AI Copilot Development Company</h2>
                        <p>
                        We leverage AI technologies like ML and NLP to develop intelligent AI copilots that streamline your business operations and drive innovation. These AI systems provide real-time assistance for tasks like code generation, error detection, and content creation, automating repetitive processes and freeing your teams for high-value activities. With personalized customer support and data-driven insights, our AI copilots enhance customer experiences and boost efficiency. This intelligent, AI-driven solution is designed to boost productivity with next-gen automation, resulting in enhanced productivity and efficiency for businesses of all sizes.
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
