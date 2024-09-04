import React from 'react'
import HireAIEngineersHero from '../../../Components/Services/ArtificialIntelligenceML/HireAIEngineers/HireAIEngineersHero'
import HireAiEngineersContent from '../../../Components/Services/ArtificialIntelligenceML/HireAIEngineers/HireAiEngineersContent'

export default function HireAIEngineers() {
  return (
    <>
      <div className='manageWidth layoutContainer2'>
        <HireAIEngineersHero />
      </div>
      <div className='manageWidth'>
        <HireAiEngineersContent />
      </div>
    </>
  )
}
