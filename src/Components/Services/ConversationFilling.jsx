import React from 'react'
import StartConversationForm from './StartConversationForm'

export default function ConversationFilling() {
    return (
        <div className='marginSet'>
            <div className="mainHeroSection mt-0">
                <h2 className="mb-3">Start a conversation by filling the form</h2>
                <p className="text-center">Once you let us know your requirement, our technical expert will schedule a call and discuss your idea in detail post sign of an NDA.</p>
                <h6 className='keptDesc'>All information will be kept confidential.</h6>
            </div>
            <StartConversationForm />
        </div>
    )
}
