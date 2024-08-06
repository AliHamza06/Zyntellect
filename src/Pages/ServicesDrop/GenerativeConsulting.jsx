import React from 'react'
import GenerativeConsultingHero from '../../Components/Services/GenerativeConsulting/GenerativeConsultingHero'
import CompanyLogo from '../../Components/Services/CompanyLogo'
import GenerativeConsultingContent from '../../Components/Services/GenerativeConsulting/GenerativeConsultingContent'

export default function GenerativeConsulting() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeConsultingHero/>
            </div>
            <div className='marginSet'>
                <CompanyLogo/>
            </div>
            <div className="manageWidth">
                <GenerativeConsultingContent/>
            </div>
        </>
    )
}
