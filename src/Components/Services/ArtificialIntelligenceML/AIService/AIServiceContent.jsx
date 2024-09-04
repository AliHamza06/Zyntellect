import React from 'react'
import BenefitsComplexity from './BenefitsComplexity'
import HaveExpertiseIn from '../../HaveExpertiseIn'
import AITechStack from './AITechStack'
import OurEngagement from '../../../Services/OurEngagement'
import GetStarted from '../../../Services/GetStarted'
import ConversationFilling from '../../../Services/ConversationFilling'
import ExploreUseCases from '../AIConsulting/ExploreUseCases'
import AIServiceInsights from './AIServiceInsights'
export default function AIServiceContent() {
  return (
    <div className='marginSet'>
      <BenefitsComplexity />
      <HaveExpertiseIn />
      <AITechStack />
      <OurEngagement />
      <GetStarted />
      <ConversationFilling />
      <ExploreUseCases/>
      <AIServiceInsights/>
    </div>
  )
}
