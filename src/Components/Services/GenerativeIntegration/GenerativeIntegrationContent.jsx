import React from 'react'
import PercentageCounter from '../PercentageCounter'
import HaveExpertiseIn from '../HaveExpertiseIn'
import GenerativeAIServices from './GenerativeAIServices'
import BenefitYourBusiness from './BenefitYourBusiness'
export default function GenerativeIntegrationContent() {
    return (
        <div>
            <div className="marginSet">
                <PercentageCounter />
            </div>
            <GenerativeAIServices/>
            <BenefitYourBusiness/>
            <HaveExpertiseIn />
        </div>
    )
}
