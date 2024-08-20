import React from 'react'
import HirePromptEngineersHero from '../../Components/Services/HirePromptEngineers/HirePromptEngineersHero'
import HirePromptEngineersContent from '../../Components/Services/HirePromptEngineers/HirePromptEngineersContent'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import AsMentioned from '../../Components/Services/AsMentioned'
import OurEngagement from '../../Components/Services/OurEngagement'
import GetStarted from '../../Components/Services/GetStarted'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import HireFaqs from '../../Components/Services/HirePromptEngineers/HireFaqs'
import HireInsight from '../../Components/Services/HirePromptEngineers/HireInsight'
export default function HirePromptEngineers() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <HirePromptEngineersHero />
            </div>
            <div className="manageWidth">
                <HirePromptEngineersContent />
            </div>
            <BrandsTrustUs />
            <AsMentioned />
            <div className="manageWidth">
                <OurEngagement />
                <GetStarted />
                <ConversationFilling />
                <HireFaqs/>
                <HireInsight/>
            </div>
        </>
    )
}
