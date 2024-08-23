import React from 'react'
import StartConversationForm from '../Components/Services/StartConversationForm'
import ContactUsContent from '../Components/ContactUs/ContactUsContent'

export default function ContactUs() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <div className="mainHeroSection">
                    <h2 className='mb-2'>Contact Us</h2>
                    <p className='text-center mb-1'>
                        Complete the form below and we will contact you to discuss your project.
                    </p>
                    <p className='text-center'>
                        Your information will be kept confidential.
                    </p>
                </div>
                <StartConversationForm />
            </div>
            <ContactUsContent />
        </>
    )
}
