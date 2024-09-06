import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../../assets/images/Group-693@2x.png'
export default function AIChatbotHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>AI Chatbot Development Company</h2>
                        <p>
                        We develop custom AI chatbots that act as intelligent assistants, ensuring 24/7 support and rapid query resolution. Our chatbots maximize engagement and productivity, guiding your employees and customers to the information they need and enabling your team to focus on core business imperatives. Partner with us to unlock the power of AI-powered conversations.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Request a consultation</Button>
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
