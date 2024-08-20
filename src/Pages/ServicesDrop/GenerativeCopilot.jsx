import React from 'react'
import GenerativeCopilotHero from '../../Components/Services/GenerativeCopilot/GenerativeCopilotHero'
import GenerativeCopilotContent from '../../Components/Services/GenerativeCopilot/GenerativeCopilotContent'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import AsMentioned from '../../Components/Services/AsMentioned'
import OurEngagement from '../../Components/Services/OurEngagement'
import GetStarted from '../../Components/Services/GetStarted'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import GenerativeFaq from '../../Components/Services/GenerativeFaq'
import ExploreOurServices from '../../Components/Services/ExploreOurServices'
import InsightsCont from '../../Components/Services/InsightsCont'
export default function GenerativeCopilot() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeCopilotHero />
            </div>
            <div className='manageWidth'>
                <GenerativeCopilotContent />
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
