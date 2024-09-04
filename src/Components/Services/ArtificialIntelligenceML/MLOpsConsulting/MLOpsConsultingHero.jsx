import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../../assets/images/MLOps-Consulting.png'
export default function MLOpsConsultingHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>MLOps Consulting Services</h2>
                        <p>
                        We optimize your business’s machine learning operations for improved productivity and efficiency by automating ML pipelines and implementing AutoML platforms. Our MLOps expertise ensures improved planning and development, reproducibility in model training and deployment, scalability with hotkey access to necessary tools and resources, and continuity in the entire production flow leading to smooth machine learning operations.
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
