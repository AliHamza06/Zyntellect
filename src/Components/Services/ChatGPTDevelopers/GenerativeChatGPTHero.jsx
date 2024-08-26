import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/ChatGPT-Developers-banner.png'
export default function GenerativeChatGPTHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>ChatGPT Developers</h2>
                        <p>
                        Our skilled ChatGPT developers build custom OpenAI model-powered solutions that deliver exceptional conversational experiences, streamline information retrieval, enhance customer experience and drive engagement. Thus, whether it’s task automation or customer support, our solutions are designed to streamline your business processes, empowering your team to achieve more.
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
