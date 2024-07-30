import React from 'react'
import ClientLogo from '../../assets/images/client-logos-desktop.svg'
export default function CompanyLogo() {
  return (
    <div className='clientLogo'>
        <img src={ClientLogo} alt="" className='w-100'/>
    </div>
  )
}
