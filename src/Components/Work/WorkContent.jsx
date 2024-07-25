import { Button } from '@mui/material'
import React from 'react'
import ClientLog from '../../assets/images/client-logos2024.svg'
export default function WorkContent() {
    return (
        <>
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-10 mt-xl-3 mt-3">
                    <div className='heroSectionContent h-100 d-flex flex-column justify-content-center p-0'>
                        <h2>Our Work</h2>
                        <div className='edgeContent' style={{ maxWidth: '100%' }}>
                            <p>We have been helping technology startups, enterprises and Fortune 500 companies build innovative solutions for over the last 15 years. Learn why they have approached us and how we helped them transform their business operations.</p>
                        </div>
                        <div className='ourServicesContent h-auto'>
                            <Button>Get in touch</Button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12 mt-xl-3 mt-3">
                    <video class="work_video" autoplay="autoplay" loop="" muted="">
                        <source src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/19024619/our-works-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="col-12 mt-5">
                    <img src={ClientLog} alt="" className='w-100'/>
                </div>
            </div>
            
        </>
    )
}
