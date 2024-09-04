import React from 'react'
import TransformerServices from './TransformerServices'
import HaveExpertiseIn from '../../HaveExpertiseIn'
import AcTPoweredStack from './AcTPoweredStack'
import TransformerWideRange from './TransformerWideRange'
import OurEngagement from '../../../Services/OurEngagement'
import GetStarted from '../../../Services/GetStarted'
import ConversationFilling from '../../../Services/ConversationFilling'
import HireTransformerInsights from './HireTransformerInsights'
export default function HireTransformerContent() {
  return (
    <div className='marginSet'>
        <TransformerServices/>
        <HaveExpertiseIn/>
        <AcTPoweredStack/>
        <TransformerWideRange/>
        <OurEngagement/>
        <GetStarted/>
        <ConversationFilling/>
        <HireTransformerInsights/>
    </div>
  )
}
