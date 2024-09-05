import React from 'react'
import OurMLOServices from './OurMLOServices'
import MLOpsImplementation from './MLOpsImplementation'
import HaveExpertiseIn from '../../HaveExpertiseIn'
import MLOpsTechStack from './MLOpsTechStack'
import OurEngagement from '../../../Services/OurEngagement'
import GetStarted from '../../../Services/GetStarted'
import ConversationFilling from '../../../Services/ConversationFilling'
import MLOpsInsights from './MLOpsInsights'
export default function MLOpsConsultingContent() {
  return (
    <div className='marginSet'>
        <OurMLOServices/>
        <MLOpsImplementation/>
        <HaveExpertiseIn/>
        <MLOpsTechStack/>
        <OurEngagement/>
        <GetStarted/>
        <ConversationFilling/>
        <MLOpsInsights/>
    </div>
  )
}
