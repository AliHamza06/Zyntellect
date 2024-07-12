import React from 'react'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { IconButton } from '@mui/material';
import Hero from '../../assets/images/heromob.png'
export default function HomeHeroSection() {
    return (
        <div className='heroMainSection'>
            <div className="row mx-0 flex-lg-row flex-column-reverse">
                <div className="col-xl-5 col-lg-6 col-md-10">
                    <div className='heroSectionContent'>
                        <h2>AI development company enabling innovation and rapid development </h2>
                        <div className='edgeContent'>
                            <p>We build cutting-edge AI solutions for startups and enterprises</p>
                        </div>
                        <div className='getToSection'>
                            <IconButton>
                                <PlayCircleFilledIcon />
                            </IconButton>
                            <p>Get to know us better</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 p-0">
                    <img src={Hero} alt="" className='homeImg1' />
                </div>
            </div>
            <div className='bottomSection'>
                <div className='heroSectionContent'>
                    <h2>AI development company enabling innovation and rapid development </h2>
                    <div className='edgeContent'>
                        <p>We build cutting-edge AI solutions for startups and enterprises</p>
                    </div>
                    <div className='getToSection'>
                        <IconButton>
                            <PlayCircleFilledIcon />
                        </IconButton>
                        <p>Get to know us better</p>
                    </div>
                </div>
                <img src={Hero} alt="" className='homeImg2' />
            </div>
        </div>
    )
}
