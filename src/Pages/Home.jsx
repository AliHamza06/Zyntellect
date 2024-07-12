import React from 'react'

import GetFree from '../Components/Home/GetFree';
import OurServices from '../Components/Home/OurServices';
import IndustriesCreative from '../Components/Home/IndustriesCreative';
import NewsLetter from '../Components/Home/NewsLetter';
import OurEngagement from '../Components/Home/OurEngagement';
import GetStarted from '../Components/Home/GetStarted';
import HomeHeroSection from '../Components/Home/HomeHeroSection';
export default function Home() {
    return (
        <>
            <div className="manageWidth heroManage">
                <HomeHeroSection />
            </div>
            <div className='marginSet'>
                <GetFree />
            </div>
            <div className='marginSet'>
                <OurServices />
            </div>
            <div className='marginSet'>
                <IndustriesCreative />
            </div>
            <div className='marginSet'>
                <NewsLetter />
            </div>
            <div className='marginSet'>
                <OurEngagement />
            </div>
            <div className='marginSet'>
                <GetStarted />
            </div>
        </>
    )
}
