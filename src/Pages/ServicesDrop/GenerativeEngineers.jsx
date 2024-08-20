import React from 'react'
import CompanyLogo from '../../Components/Services/CompanyLogo'
import GenerativeEngineersHero from '../../Components/Services/GenerativeEngineers/GenerativeEngineersHero'
import GenerativeEngineersContent from '../../Components/Services/GenerativeEngineers/GenerativeEngineersContent'
import EngineeringIndustry from '../../Components/Services/GenerativeEngineers/EngineeringIndustry'
import OurEngagement from '../../Components/Services/OurEngagement'
import GetStarted from '../../Components/Services/GetStarted'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import AsMentioned from '../../Components/Services/AsMentioned'
import HaveExpertiseIn from '../../Components/Services/HaveExpertiseIn'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import EngineersFaqs from '../../Components/Services/GenerativeEngineers/EngineersFaqs'
import EngineeringTechStack from '../../Components/Services/GenerativeEngineers/EngineeringTechStack'
import IntelligencePortfolio from '../../Components/Services/IntelligencePortfolio'
import EngineeringInsight from '../../Components/Services/GenerativeEngineers/EngineeringInsight'
export default function GenerativeEngineers() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeEngineersHero />
            </div>
            <div className="manageWidth">
                <GenerativeEngineersContent />
            </div>
            <BrandsTrustUs />
            <AsMentioned />
            <div className="manageWidth">
                <HaveExpertiseIn />
                <EngineeringIndustry />
                <EngineeringTechStack />
                <IntelligencePortfolio />
            </div>
            <div className="manageWidth">
                <OurEngagement />
                <GetStarted />
                <ConversationFilling />
                <EngineersFaqs />
                <EngineeringInsight />
            </div>
        </>
    )
}
