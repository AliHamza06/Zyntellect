import React from 'react'
import GenerativeConsultingHero from '../../Components/Services/GenerativeConsulting/GenerativeConsultingHero'
import CompanyLogo from '../../Components/Services/CompanyLogo'
import GenerativeConsultingContent from '../../Components/Services/GenerativeConsulting/GenerativeConsultingContent'
import BrandsTrustUs from '../../Components/Services/BrandsTrustUs'
import AsMentioned from '../../Components/Services/AsMentioned'
import OurEngagement from '../../Components/Services/OurEngagement'
import GetStarted from '../../Components/Services/GetStarted'
import ConversationFilling from '../../Components/Services/ConversationFilling'
import ConsultingFaq from '../../Components/Services/GenerativeConsulting/ConsultingFaq'
import ConsultingInsights from '../../Components/Services/GenerativeConsulting/ConsultingInsights'
export default function GenerativeConsulting() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeConsultingHero/>
            </div>
            <div className="manageWidth">
                <GenerativeConsultingContent/>
            </div>
            <BrandsTrustUs/>
            <AsMentioned/>
            <div className="manageWidth">
                <OurEngagement/>
                <GetStarted/>
                <ConversationFilling/>
                <ConsultingFaq/>
                <ConsultingInsights/>
            </div>
        </>
    )
}
