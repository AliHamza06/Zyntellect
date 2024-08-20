import React from 'react'
import PercentageCounter from '../PercentageCounter'
import AgentAIServices from './AgentAIServices'
import AgentsDepartments from './AgentsDepartments'
import OurDigitalAgents from './OurDigitalAgents'
import IndustryVerticals from './IndustryVerticals'
export default function GenerativeAgentContent() {
    return (
        <div>
            <div className="marginSet">
                <PercentageCounter />
                <AgentAIServices/>
                <AgentsDepartments/>
                <OurDigitalAgents/>
                <IndustryVerticals/>
            </div>
        </div>
    )
}
