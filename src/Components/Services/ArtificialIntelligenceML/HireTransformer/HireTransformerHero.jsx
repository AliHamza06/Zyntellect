import { Button } from '@mui/material'
import React from 'react'
import companyImg from '../../../../assets/images/Hire-Action-Transformer-ACT-1-Developers-Banner.png'
export default function HireTransformerHero() {
    return (
        <>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <div className='herosection2'>
                        <h2>Hire Action Transformer Developers</h2>
                        <p>
                        Leverage our AI expertise to build powerful Action Transformer-powered solutions and apps that can perform diverse tasks based on user inputs. From securing an optimal property deal to scheduling a dental appointment, this multifunctional tool is designed to take any high-level user request and implement it. Our AcT developers’ proficiency in multiple AI subsets, including ML, NLP and deep learning, ensures exceptional development output.
                        </p>
                        <div className='ourServicesContent h-auto'>
                            <Button variant='outlined' className='mt-3'>Hire developers</Button>
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
