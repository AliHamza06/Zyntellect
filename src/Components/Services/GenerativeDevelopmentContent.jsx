import React from 'react'

import PercentageCounter from './PercentageCounter'
import OurGenerative from './OurGenerative'
import OurDevelopers from './OurDevelopers'
import HaveExpertiseIn from './HaveExpertiseIn'
import ArrayOfIndustries from './ArrayOfIndustries'
import DevelopmentTechnologyStack from './DevelopmentTechnologyStack'
import AlliancesPartners from './AlliancesPartners'

export default function GenerativeDevelopmentContent() {
    return (
        <>
            <div className='marginSet'>
                <PercentageCounter />
            </div>
            <OurGenerative />
            <OurDevelopers />
            <HaveExpertiseIn />
            <ArrayOfIndustries />
            <DevelopmentTechnologyStack />
            <AlliancesPartners />
        </>
    )
}
