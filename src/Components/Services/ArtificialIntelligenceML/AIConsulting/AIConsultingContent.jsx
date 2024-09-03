import React from 'react'
import AIConsultingServices from './AIConsultingServices'
import HaveExpertiseIn from '../../HaveExpertiseIn'
import DiverseIndustries from './DiverseIndustries'
import ConsultingTeckStack from './ConsultingTeckStack'
import OurEngagement from '../../../Services/OurEngagement'
import GetStarted from '../../../Services/GetStarted'
import ConversationFilling from '../../../Services/ConversationFilling'
import ExploreUseCases from './ExploreUseCases'
import ConsultingInsights from './ConsultingInsights'
export default function AIConsultingContent() {
  return (
    <div className='marginSet'>
        <AIConsultingServices/>
        <HaveExpertiseIn/>
        <DiverseIndustries/>
        <ConsultingTeckStack/>
        <OurEngagement/>
        <GetStarted/>
        <ConversationFilling/>
        <ExploreUseCases/>
        <ConsultingInsights/>
    </div>
  )
}
