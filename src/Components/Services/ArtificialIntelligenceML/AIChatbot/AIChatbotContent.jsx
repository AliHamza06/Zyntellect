import React from 'react'
import AIChatbotServices from './AIChatbotServices'
import ChatbotsCapabilities from './ChatbotsCapabilities'
import HaveExpertiseIn from '../../HaveExpertiseIn'
import AIChatbotTechStack from './AIChatbotTechStack'
import OurEngagement from '../../../Services/OurEngagement'
import GetStarted from '../../../Services/GetStarted'
import ConversationFilling from '../../../Services/ConversationFilling'
export default function AIChatbotContent() {
  return (
    <div className='marginSet'>
      <AIChatbotServices/>
      <ChatbotsCapabilities/>
      <HaveExpertiseIn/>
      <AIChatbotTechStack/>
      <OurEngagement/>
        <GetStarted/>
        <ConversationFilling/>
    </div>
  )
}
