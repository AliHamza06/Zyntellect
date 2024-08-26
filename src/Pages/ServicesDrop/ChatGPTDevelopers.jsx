import React from 'react'
import GenerativeChatGPTHero from '../../Components/Services/ChatGPTDevelopers/GenerativeChatGPTHero'
import ChatGPTDevelopersContent from '../../Components/Services/ChatGPTDevelopers/ChatGPTDevelopersContent'

export default function ChatGPTDevelopers() {
    return (
        <>
            <div className='manageWidth layoutContainer2'>
                <GenerativeChatGPTHero />
            </div>
            <div className="manageWidth">
                <ChatGPTDevelopersContent/>
            </div>
        </>
    )
}
