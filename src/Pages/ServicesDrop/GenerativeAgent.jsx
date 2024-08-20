import React from 'react'
import GenerativeAgentHero from '../../Components/Services/GenerativeAgent/GenerativeAgentHero'
import GenerativeAgentContent from '../../Components/Services/GenerativeAgent/GenerativeAgentContent'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import AsMentioned from '../../Components/Services/AsMentioned'
import OurEngagement from '../../Components/Services/OurEngagement'
import GetStarted from '../../Components/Services/GetStarted'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import GenerativeFaq from '../../Components/Services/GenerativeFaq'
import ExploreOurServices from '../../Components/Services/ExploreOurServices'
import InsightsCont from '../../Components/Services/InsightsCont'
import IntelligencePortfolio from '../../Components/Services/IntelligencePortfolio'
import AgentFaqs from '../../Components/Services/GenerativeAgent/AgentFaqs'
export default function GenerativeAgent() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeAgentHero />
            </div>
            <div className="manageWidth">
                <GenerativeAgentContent />
            </div>
            <BrandsTrustUs />
            <div className="manageWidth">
                <IntelligencePortfolio />
            </div>
            <AsMentioned />
            <div className="manageWidth">
                <OurEngagement />
                <GetStarted />
                <ConversationFilling />
                <AgentFaqs/>
                <ExploreOurServices />
                <InsightsCont />
            </div>
        </>
    )
}
