import React from 'react'
import AdaptiveDevelopmentHero from '../../Components/Services/AdaptiveDevelopmentCompany/AdaptiveDevelopmentHero'
import AdaptiveDevelopmentContent from '../../Components/Services/AdaptiveDevelopmentCompany/AdaptiveDevelopmentContent'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import AsMentioned from '../../Components/Services/AsMentioned'
import OurEngagement from '../../Components/Services/OurEngagement'
import GetStarted from '../../Components/Services/GetStarted'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import HireFaqs from '../../Components/Services/HirePromptEngineers/HireFaqs'
import HireInsight from '../../Components/Services/HirePromptEngineers/HireInsight'
import AdaptiveFaqs from '../../Components/Services/AdaptiveDevelopmentCompany/AdaptiveFaqs'
export default function AdaptiveDevelopmentCompany() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <AdaptiveDevelopmentHero/>
            </div>
            <div className="manageWidth">
                <AdaptiveDevelopmentContent/>
            </div>
            <BrandsTrustUs />
            <AsMentioned />
            <div className="manageWidth">
                <OurEngagement />
                <GetStarted />
                <ConversationFilling />
                <AdaptiveFaqs/>
                <HireInsight/>
            </div>
        </>
    )
}
