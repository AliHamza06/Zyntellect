import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/AI-Marketing-Agent-Development-1.png'
export default function GenerativeMarketingHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-4 mt-3">
                    <div className='herosection2'>
                        <h2>AI Marketing Agent Development</h2>
                        <p>
                        We build intelligent AI agents for marketing teams using advanced tools such as Crew AI, AutoGen Studio, and TaskWeaver. Our custom agents are designed to perform a wide range of tasks, including data analysis, content creation, customer segmentation, and personalized email marketing, enabling businesses to streamline their marketing operations, optimize efficiency, and drive impactful results.
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
