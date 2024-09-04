import React from 'react'
import HireTransformerHero from '../../../Components/Services/ArtificialIntelligenceML/HireTransformer/HireTransformerHero'
import HireTransformerContent from '../../../Components/Services/ArtificialIntelligenceML/HireTransformer/HireTransformerContent'

export default function HireTransformer() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <HireTransformerHero />
            </div>
            <div className='manageWidth'>
                <HireTransformerContent/>
            </div>
        </>
    )
}
