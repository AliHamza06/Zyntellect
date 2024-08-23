import React from 'react'
import ClientNetwork from './ClientNetwork'
import OurCustomersSay from './OurCustomersSay'
import InTheNews from './InTheNews'
import RecentProjects from './RecentProjects'
export default function ContactUsContent() {
  return (
    <div className='manageWidth'>
      <ClientNetwork />
      <OurCustomersSay />
      <InTheNews />
      <RecentProjects/>
    </div>
  )
}
