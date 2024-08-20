import React from 'react'
import Machine from '../../../assets/images/icon/const1.svg';
import DataAnalysis from '../../../assets/images/icon/const2.svg';
import DomainSpecific from '../../../assets/images/icon/const3.svg';
import AISolutions from '../../../assets/images/icon/const4.svg';
import AIIntegration from '../../../assets/images/icon/const5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/const6.svg';
import CreativeDesign from '../../../assets/images/icon/const7.svg';
import WorkflowAutomation from '../../../assets/images/icon/const8.svg';
import AIIntegration2 from '../../../assets/images/icon/banking9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/banking10.svg';
import CreativeDesign2 from '../../../assets/images/icon/banking11.svg';
import WorkflowAutomation2 from '../../../assets/images/icon/banking12.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Strategy Consulting",
        description: "Unlock the full potential of AI agents in your marketing processes with our expert consulting services. We provide thorough guidance and insights to help you develop strategies for adopting and optimally using AI agents, ensuring they align with your business objectives, help optimize resource allocation, and maximize ROI.",
        img: Machine,
    },
    {
        title: "Custom AI Agent Development for Marketing",
        description: "Our team specializes in developing AI agents precisely tailored to meet your marketing requirements. From personalized content creation systems to automated customer engagement tools, we develop AI agents that streamline repetitive tasks, automate data analysis, improve operational efficiency, and seamlessly integrate into your marketing workflow.",
        img: DataAnalysis,
    },
    {
        title: "Integration",
        description: "With our expert integration services, you can seamlessly integrate AI agents into your existing marketing workflows. Whether you want to implement AI-powered chatbots, automate email marketing campaigns, or enhance content personalization, our team ensures the smooth integration of AI agents into your current systems for a seamless user experience.",
        img: DomainSpecific,
    },
    {
        title: "Maintenance and Support",
        description: "We build AI agents to streamline your company’s marketing processes; once deployed, we provide comprehensive maintenance and support to ensure their optimal performance. We ensure your AI agents are always up-to-date with the latest advancements and improvements, delivering the best possible performance and security.",
        img: AISolutions,
    }
];
const supports = [
    {
        title: "Personalization",
        description: "Our AI agents transform marketing operations by ensuring unparalleled personalization, tailoring every output to individual preferences and behaviors. From targeted messaging to customized content recommendations, our AI agents seamlessly adapt to each customer, improving customer engagement.",
        img: AIIntegration,
    },
    {
        title: "Efficient Content Creation",
        description: "For the travel industry, our AI solutions enhance customer support, recommendation engines, and pricing strategies. This leads to better customer experiences, increased bookings, and improved revenue for travel companies across the board.",
        img: UpgradeMaintenance,
    },
    {
        title: "Automated Processes",
        description: "Our AI agents transform marketing operations by automating repetitive tasks and streamlining data analysis for actionable insights. With advanced algorithms and real-time analytics, our AI agents optimize your marketing strategies, personalize customer experience, automate workflows and maximize ROI.",
        img: CreativeDesign,
    },
    {
        title: "Data Analysis",
        description: "Our AI agents provide valuable insights into the latest trends, audience behavior, and content performance, empowering businesses with real-time insights and predictive analytics. They sift through extensive datasets, uncover actionable insights, and empower businesses to elevate their marketing strategies with informed decisions.",
        img: WorkflowAutomation,
    }
];
export default function MarketingServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our AI Marketing Agent Development Services</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard CaterCard">
                                <img src={ourGenerative.img} alt={ourGenerative.title} />
                                <h4>{ourGenerative.title}</h4>
                                <p>{ourGenerative.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Why Implement Our AI Marketing Agents?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard CaterCard">
                                <img src={support.img} alt={support.title} />
                                <h4>{support.title}</h4>
                                <p>{support.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
