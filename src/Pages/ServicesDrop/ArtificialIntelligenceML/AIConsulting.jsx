import React from 'react'
import AIConsultingHero from '../../../Components/Services/ArtificialIntelligenceML/AIConsulting/AIConsultingHero'
import AIConsultingContent from '../../../Components/Services/ArtificialIntelligenceML/AIConsulting/AIConsultingContent'
export default function AIConsulting() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <AIConsultingHero />
            </div>
            <div className="manageWidth">
                <AIConsultingContent/>
            </div>
        </>
    )
}
