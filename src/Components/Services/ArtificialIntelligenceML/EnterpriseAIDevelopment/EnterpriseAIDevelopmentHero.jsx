import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../../assets/images/Enterprise-AI-Development-Company.png'
export default function EnterpriseAIDevelopmentHero() {
  return (
    <>
      <div className="row flex-lg-row flex-column-reverse">
        <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
          <div className='herosection2'>
            <h2>Enterprise AI Development Company</h2>
            <p>
            Eliminate workflow pain points and accelerate your digital transformation journey with our enterprise AI development services. We use advanced AI techniques like machine learning, predictive analytics, deep learning, and NLP to develop robust AI-powered solutions. Our solutions, deployable at scale, enable enterprises to handle diverse tasks from predictive maintenance and fraud detection to inventory optimization and improving customer services.
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
