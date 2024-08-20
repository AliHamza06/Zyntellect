import React from 'react'
import PercentageCounter from '../PercentageCounter'
import CopilotDevelopment from './CopilotDevelopment'
import OurCopilotProcess from './OurCopilotProcess'
import HaveExpertiseIn from '../../Services/HaveExpertiseIn'
import IndustriesCater from './IndustriesCater'
import AlliancesPartners from '../../Services/AlliancesPartners'
import IntelligencePortfolio from '../../Services/IntelligencePortfolio'
import StackAICopilot from './StackAICopilot'
export default function GenerativeCopilotContent() {
    return (
        <div className='marginSet'>
            <PercentageCounter />
            <CopilotDevelopment/>
            <OurCopilotProcess/>
            <HaveExpertiseIn/>
            <IndustriesCater/>
            <StackAICopilot/>
            <AlliancesPartners/>
            <IntelligencePortfolio/>
        </div>
    )
}
