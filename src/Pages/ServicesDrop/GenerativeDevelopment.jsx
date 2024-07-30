import React from 'react'
import GenerativeDevelopmentContent from '../../Components/Services/GenerativeDevelopmentContent'
import CompanyLogo from '../../Components/Services/CompanyLogo'
import GenerativeHeroSection from '../../Components/Services/GenerativeHeroSection'

export default function GenerativeDevelopment() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeHeroSection/>
            </div>
            <div className='marginSet'>
                <CompanyLogo />
            </div>
            <div className="manageWidth">
                <GenerativeDevelopmentContent />
            </div>
        </>
    )
}
