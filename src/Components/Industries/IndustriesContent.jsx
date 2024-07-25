import React from 'react'
import SearchImg from '../../assets/images/search.svg'
import List1 from '../../assets/images/list1.svg'
import List2 from '../../assets/images/list2.svg'
import DevelopmentServices from './DevelopmentServices'
import TypesSolution from './TypesSolution'
import WhyChoose from './WhyChoose'
export default function IndustriesContent() {
  return (
    <div>
      <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-12">
          <div className="industriesTitle">
            <h3>Industries</h3>
            <h2>SAAS Development Company</h2>
            <p>
              Our team of experts is equipped with the knowledge and tools to create scalable, secure, and highly adaptive SaaS solutions. Whether you are looking to launch a new product or optimize an existing one, we ensure the end product delivers a seamless, user-friendly experience for your customers while maintaining rigorous security standards. Our experienced developers excel in both single-tenant and multi-tenant architectures, allowing them to craft a solution that meets your precise needs for security, scalability and cost-effectiveness.
            </p>
          </div>
        </div>
        <div className="col-xl-7 col-lg-6 col-md-12 mt-lg-0 mt-4">
          <div className="developmentCompany">
            <div className="row">
              <div className="col-6 searchCol">
                <div className="searchCard">
                  <img src={SearchImg} alt="" className='searchImg' />
                </div>
              </div>
              <div className="col-6 listCardCol">
                <div className="searchCard listCard">
                  <img src={List1} alt="" />
                </div>
                <div className="searchCard listCard mb-0">
                  <img src={List2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marginSet">
        <DevelopmentServices />
      </div>
      <div className="marginSet">
        <TypesSolution />
      </div>
      <div className="marginSet">
        <WhyChoose />
      </div>
    </div>

  )
}
