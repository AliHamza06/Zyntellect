import React from 'react'
import MLOpsConsultingHero from '../../../Components/Services/ArtificialIntelligenceML/MLOpsConsulting/MLOpsConsultingHero'
import MLOpsConsultingContent from '../../../Components/Services/ArtificialIntelligenceML/MLOpsConsulting/MLOpsConsultingContent'

export default function MLOpsConsulting() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <MLOpsConsultingHero/>
            </div>
            <div className='manageWidth'>
                <MLOpsConsultingContent/>
            </div>
        </>
    )
}
