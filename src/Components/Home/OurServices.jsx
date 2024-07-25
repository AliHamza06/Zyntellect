import { Button } from '@mui/material'
import React from 'react'
import Software from '../../assets/images/our services/Softwear Developmet.svg'
import Development from '../../assets/images/our services/Ai Development7.svg'
import BlockChain from '../../assets/images/our services/Block chain logo.svg'
import Web3 from '../../assets/images/our services/Web 3 logo.svg'
import Strategy from '../../assets/images/our services/Ai Strategy logo.svg'
import SowtearConsulting from '../../assets/images/our services/Sowtear consulting logo.svg'
import AgentDevelopment from '../../assets/images/our services/AI Agent Development.svg'
import MachineDevelopment from '../../assets/images/our services/Machine Development logo.svg'
import DataEnginering from '../../assets/images/our services/Data Enginering logo.svg'
const servicesData = [
    {
        image: Software,
        title: 'Software Development',
        description: 'With a focus on functionality, scalability, and user experience, our team collaborates with you...'
    },
    {
        image: Development,
        title: 'AI Development',
        description: 'From natural language processing and computer vision applications to predictive analytics...'
    },
    {
        image: BlockChain,
        title: 'Block Chain Development',
        description: 'From crafting smart contracts and developing custom dApps to seamlessly integrating...'
    },
    {
        image: Web3,
        title: 'Web 3 Development',
        description: 'From DeFi platforms, DAOs, NFT marketplaces and metaverse spaces to crypto tokens... '
    },
    {
        image: Strategy,
        title: 'AI Strategy Consulting',
        description: 'We undertake a comprehensive assessment of your current capabilities, market trends...'
    },

];
const servicesConsultingData = [
    {
        image: SowtearConsulting,
        title: 'Software Consulting',
        description: 'Our software consulting services provide strategic guidance and technical expertise to help...'
    },
    {
        image: AgentDevelopment,
        title: 'AI Agents Development',
        description: 'Leveraging advanced AI agent development tools like crewAI and AutoGen Studio, we build intelligent...'
    },
    {
        image: MachineDevelopment,
        title: 'Machine Development',
        description: 'With our deep expertise in machine learning, deep learning, and data engineering, we craft robust ML... '
    },
    {
        image: DataEnginering,
        title: 'Data Engineering',
        description: 'Our data engineering services encompass the entire data lifecycle, from sourcing and... '
    }


];
export default function OurServices() {
    return (
        <div className="manageWidth">
            <div className='ourServices'>
                <div className="row flex-lg-row flex-column-reverse">
                    <div className="col-lg-4 col-md-12 mt-lg-0 mt-3">
                        <div className='ourServicesContent'>
                            <h1>Our services</h1>
                            <p>
                                With over 15 years of industry experience under our belt, we have helped startups as well as industry leading companies, we innovate and grow in the dynamic business landscape. Whether it’s crafting custom solutions or ensuring their seamless integration into business workflows, our expertise has consistently delivered results
                            </p>
                            <Button>See others</Button>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                {servicesData.map((service, index) => (
                                    <div key={index} className='ourServicesCard'>
                                        <img src={service.image} alt="" />
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className='servicesConsulting'>
                                    {servicesConsultingData.map((consulting, index) => (
                                        <div key={index} className='ourServicesCard'>
                                            <img src={consulting.image} alt="" />
                                            <h2>{consulting.title}</h2>
                                            <p>{consulting.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
