import React from 'react'
import PercentageCounter from '../PercentageCounter'
import ConsultingAIServices from './ConsultingAIServices'
import HaveExpertisein from '../HaveExpertiseIn'
import ConsultingAIExpertise from './ConsultingAIExpertise'
import IndustryVerticals from './IndustryVerticals'
import TechStack from './TechStack'
import AlliancesPartners from '../AlliancesPartners'
import IntelligencePortfolio from '../IntelligencePortfolio'
export default function GenerativeConsultingContent() {
    return (
        <>
            <div className="marginSet">
                <PercentageCounter />
            </div>
            <ConsultingAIServices />
            <HaveExpertisein />
            <ConsultingAIExpertise />
            <IndustryVerticals />
            <TechStack/>
            <AlliancesPartners/>
            <IntelligencePortfolio/>
        </>
    )
}
