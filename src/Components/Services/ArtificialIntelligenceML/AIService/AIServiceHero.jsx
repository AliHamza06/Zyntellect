import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../../assets/images/AI-as-a-service.png'
export default function AIServiceHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>AI-as-a-Service</h2>
                        <p>
                        Unlock the power of AI with our comprehensive AI-as-a-Service offerings. From chatbots that enhance customer support to information retrieval & analysis tools that extract valuable insights from your enterprise’s data corpus, our AIaaS platforms enable you to build powerful applications without the need for in-house expertise. With easy integration into your existing systems, these apps streamline your operations, boost efficiency, and deliver a competitive edge.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Discuss your project</Button>
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
