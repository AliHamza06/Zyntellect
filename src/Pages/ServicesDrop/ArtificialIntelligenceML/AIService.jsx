import React from 'react'
import AIServiceHero from '../../../Components/Services/ArtificialIntelligenceML/AIService/AIServiceHero'
import AIServiceContent from '../../../Components/Services/ArtificialIntelligenceML/AIService/AIServiceContent'

export default function AIService() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <AIServiceHero />
            </div>
            <div className="manageWidth">
                <AIServiceContent/>
            </div>
        </>
    )
}
