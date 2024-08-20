import React from 'react'
import PercentageCounter from '../PercentageCounter'
import HaveExpertiseIn from '../HaveExpertiseIn'
import GenerativeAIServices from './GenerativeAIServices'
import BenefitYourBusiness from './BenefitYourBusiness'
import SolutionsCater from './SolutionsCater'
import PotentialBusiness from './PotentialBusiness'
import IntegrationProcess from './IntegrationProcess'
import IntegrationTechnologyStack from '../../../Components/Services/GenerativeIntegration/IntegrationTechnologyStack'
import OurArtificialIntelligence from './OurArtificialIntelligence'
export default function GenerativeIntegrationContent() {
    return (
        <div>
            <div className="marginSet">
                <PercentageCounter />
            </div>
            <GenerativeAIServices />
            <BenefitYourBusiness />
            <HaveExpertiseIn />
            <SolutionsCater />
            <PotentialBusiness />
            <IntegrationProcess />
            <IntegrationTechnologyStack />
            <OurArtificialIntelligence />
        </div>
    )
}
