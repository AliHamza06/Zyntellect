import React from 'react'
import EnterpriseAIDevelopmentHero from '../../../Components/Services/ArtificialIntelligenceML/EnterpriseAIDevelopment/EnterpriseAIDevelopmentHero'
import EnterpriseAIDevelopmentContent from '../../../Components/Services/ArtificialIntelligenceML/EnterpriseAIDevelopment/EnterpriseAIDevelopmentContent'

export default function EnterpriseAIDevelopment() {
  return (
    <>
            <div className='manageWidth layoutContainer2'>
                <EnterpriseAIDevelopmentHero/>
            </div>
            <div className="manageWidth">
                <EnterpriseAIDevelopmentContent/>
            </div>
        </>
  )
}
