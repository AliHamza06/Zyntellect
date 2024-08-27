import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../assets/images/Large-Language-Model-Development-Company-Banner.png'
export default function LargeLanguageModelHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-6 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Large Language Model Development Company</h2>
                        <p>
                        At LeewayHertz, we offer a comprehensive suite of LLM development services tailored to meet your industry-specific needs. Our expertise encompasses both the creation of LLMs from scratch and the fine-tuning of pre-trained models to align seamlessly with your domain requirements. Whether starting from the ground up or optimizing existing models, our AI experts ensure a customized solution that enhances accuracy, efficiency, and productivity, ultimately improving your workflows and driving operational excellence.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Discuss your project</Button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <img src={companyImg} alt="" className='w-100' />
                </div>
            </div>
        </>
    )
}
