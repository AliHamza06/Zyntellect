import React from 'react'
import PercentageCounter from '../PercentageCounter'
import AdaptiveAIServices from './AdaptiveAIServices'
import HaveExpertiseIn from '../../../Components/Services/HaveExpertiseIn'
import PromptTeckStack from '../../../Components/Services/HirePromptEngineers/PromptTeckStack'
import IntelligencePortfolio from '../../../Components/Services/IntelligencePortfolio'
import AdaptiveAIStack from './AdaptiveAIStack'
import WideArrayIndustries from './WideArrayIndustries'
export default function AdaptiveDevelopmentContent() {
    return (
        <>
            <div className="marginSet">
                <PercentageCounter />
                <AdaptiveAIServices/>
                <HaveExpertiseIn/>
                <AdaptiveAIStack/>
                <IntelligencePortfolio/>
                <WideArrayIndustries/>
            </div>
        </>
    )
}
