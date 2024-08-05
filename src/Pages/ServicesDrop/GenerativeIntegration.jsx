import React from 'react'
import GenerativeIntegrationHero from '../../Components/Services/GenerativeIntegration/GenerativeIntegrationHero'
import CompanyLogo from '../../Components/Services/CompanyLogo'
import GenerativeIntegrationContent from '../../Components/Services/GenerativeIntegration/GenerativeIntegrationContent'

export default function GenerativeIntegration() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeIntegrationHero />
            </div>
            <div className='marginSet'>
                <CompanyLogo />
            </div>
            <div className='manageWidth'>
                <GenerativeIntegrationContent />
            </div>
        </>
    )
}
