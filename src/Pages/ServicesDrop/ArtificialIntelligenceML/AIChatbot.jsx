import React from 'react'
import AIChatbotHero from '../../../Components/Services/ArtificialIntelligenceML/AIChatbot/AIChatbotHero'
import AIChatbotContent from '../../../Components/Services/ArtificialIntelligenceML/AIChatbot/AIChatbotContent'

export default function AIChatbot() {
  return (
    <>
            <div className='manageWidth layoutContainer2'>
              <AIChatbotHero/>
            </div>
            <div className="manageWidth">
              <AIChatbotContent/>
            </div>
        </>
  )
}
