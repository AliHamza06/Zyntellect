import React from 'react'
import OurLanguageServices from './OurLanguageServices'
import HaveExpertiseIn from '../../../Components/Services/HaveExpertiseIn'
import OurAIStack from './OurAIStack'
import OurEngagement from '../../Services/OurEngagement'
import GetStarted from '../../Services/GetStarted'
import ConversationFilling from '../../Services/ConversationFilling'
import LanguageInsights from './LanguageInsights'
export default function LargeLanguageModelContent() {
    return (
        <div className="marginSet">
            <OurLanguageServices/>
            <HaveExpertiseIn/>
            <OurAIStack/>
            <OurEngagement/>
        <GetStarted/>
        <ConversationFilling/>
        <LanguageInsights/>
        </div>
    )
}
