import React from 'react'
import LargeLanguageModelHero from '../../Components/Services/LargeLanguageModel/LargeLanguageModelHero'
import LargeLanguageModelContent from '../../Components/Services/LargeLanguageModel/LargeLanguageModelContent'

export default function LargeLanguageModel() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <LargeLanguageModelHero />
            </div>
            <div className="manageWidth">
                <LargeLanguageModelContent/>
            </div>
        </>
    )
}
