import React from 'react'
import GenerativeIntegrationHero from '../../Components/Services/GenerativeIntegration/GenerativeIntegrationHero'
import CompanyLogo from '../../Components/Services/CompanyLogo'
import GenerativeIntegrationContent from '../../Components/Services/GenerativeIntegration/GenerativeIntegrationContent'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import AsMentioned from '../../Components/Services/AsMentioned'
import OurEngagement from '../../Components/Services/OurEngagement'
import GetStarted from '../../Components/Services/GetStarted'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import InsightsCont from '../../Components/Services/InsightsCont'
import IntegrationFaqs from '../../Components/Services/GenerativeIntegration/IntegrationFaqs'
export default function GenerativeIntegration() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeIntegrationHero />
            </div>
            <div className='manageWidth'>
                <GenerativeIntegrationContent />
            </div>
            <BrandsTrustUs/>
            <AsMentioned/>
            <div className="manageWidth">
                <OurEngagement/>
                <GetStarted/>
                <ConversationFilling/>
                <IntegrationFaqs/>
                <InsightsCont/>
            </div>
        </>
    )
}
