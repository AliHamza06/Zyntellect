import React from 'react'
import PercentageCounter from '../PercentageCounter'
import EngineeringServices from './EngineeringServices'
import HaveExpertiseIn from '../../../Components/Services/HaveExpertiseIn'
import PromptTeckStack from './PromptTeckStack'
import IntelligencePortfolio from '../../../Components/Services/IntelligencePortfolio'
export default function HirePromptEngineersContent() {
    return (
        <>
            <div className="marginSet">
                <PercentageCounter />
            </div>
            <div className="marginSet">
                <EngineeringServices />
                <HaveExpertiseIn/>
                <PromptTeckStack/>
                <IntelligencePortfolio/>
            </div>
        </>
    )
}
