import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/ai-agent-development-company-1.png'
export default function GenerativeAgentHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>AI Agent Development Company</h2>
                        <p>
                        Amplify business outcomes with our intelligent AI agents designed to enhance operational efficiency by automating tasks and streamlining processes. We use premier tools like AutoGen Studio, Vertex AI agent builder, and crewAI to build task-focused, high-performing, and reliable AI agents tailored to your business requirements. Leveraging the advanced capabilities of LLMs and a comprehensive skills library, our AI agents excel in diverse tasks such as research, analysis, code generation, reviews, audits, online search and segmentation.
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
