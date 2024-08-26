import React from 'react'
import StableDiffusionHero from '../../Components/Services/StableDiffusionDevelopers/StableDiffusionHero'
import StableDiffusionContent from '../../Components/Services/StableDiffusionDevelopers/StableDiffusionContent'

export default function StableDiffusionDevelopers() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <StableDiffusionHero />
            </div>
            <div className="manageWidth">
                <StableDiffusionContent/>
            </div>
        </>
    )
}
