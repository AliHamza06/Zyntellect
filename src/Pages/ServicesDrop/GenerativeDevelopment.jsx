import React from 'react'
import GenerativeDevelopmentContent from '../../Components/Services/GenerativeDevelopmentContent'
import CompanyLogo from '../../Components/Services/CompanyLogo'
import GenerativeHeroSection from '../../Components/Services/GenerativeHeroSection'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import AsMentioned from '../../Components/Services/AsMentioned'
import OurEngagement from '../../Components/Services/OurEngagement'
import GetStarted from '../../Components/Services/GetStarted'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import GenerativeFaq from '../../Components/Services/GenerativeFaq'
import ExploreOurServices from '../../Components/Services/ExploreOurServices'
import InsightsCont from '../../Components/Services/InsightsCont'

export default function GenerativeDevelopment() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeHeroSection />
            </div>
            <div className='marginSet'>
                <CompanyLogo />
            </div>
            <div className="manageWidth">
                <GenerativeDevelopmentContent />
            </div>
            <BrandsTrustUs />
            <AsMentioned />
            <div className="manageWidth">
                <OurEngagement />
                <GetStarted />
                <ConversationFilling />
                <GenerativeFaq />
                <ExploreOurServices />
                <InsightsCont />
            </div>
        </>
    )
}
