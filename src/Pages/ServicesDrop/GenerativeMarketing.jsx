import React from 'react'
import GenerativeMarketingHero from '../../Components/Services/GenerativeMarketing/GenerativeMarketingHero'
import GenerativeMarketingContent from '../../Components/Services/GenerativeMarketing/GenerativeMarketingContent'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import HaveExpertiseIn from '../../Components/Services/HaveExpertiseIn'
import IntelligencePortfolio from '../../Components/Services/IntelligencePortfolio'
import GetStarted from '../../Components/Services/GetStarted'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import MarketingFaq from '../../Components/Services/GenerativeMarketing/MarketingFaq'
import MarketingInsights from '../../Components/Services/GenerativeMarketing/MarketingInsights'
export default function GenerativeMarketing() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeMarketingHero />
            </div>
            <div className='manageWidth'>
                <GenerativeMarketingContent />
            </div>
            <BrandsTrustUs />
            <div className="manageWidth">
                <IntelligencePortfolio />
                <HaveExpertiseIn />
            </div>
            <div className="manageWidth">
                <GetStarted />
                <ConversationFilling />
                <MarketingFaq/>
                <MarketingInsights/>
            </div>
        </>
    )
}
