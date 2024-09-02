import React from 'react'
import AIDevelopmentHero from '../../../Components/Services/ArtificialIntelligenceML/AIDevelopment/AIDevelopmentHero'
import AIDevelopmentContent from '../../../Components/Services/ArtificialIntelligenceML/AIDevelopment/AIDevelopmentContent'

export default function AIDevelopment() {
    return (
        <>
        <div className='manageWidth layoutContainer2'>
            <AIDevelopmentHero/>
        </div>
        <div className="manageWidth">
            <AIDevelopmentContent/>
        </div>
        </>
    )
}
