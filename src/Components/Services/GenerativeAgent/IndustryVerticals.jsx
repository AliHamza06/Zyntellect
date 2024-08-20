import React from 'react'
import Machine from '../../../assets/images/icon/chain1.svg';
import DataAnalysis from '../../../assets/images/icon/chain2.svg';
import DomainSpecific from '../../../assets/images/icon/chain3.svg';
import AISolutions from '../../../assets/images/icon/chain4.svg';
import AIIntegration from '../../../assets/images/icon/chain5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/chain6.svg';
import CreativeDesign from '../../../assets/images/icon/chain7.svg';
import WorkflowAutomation from '../../../assets/images/icon/chain8.svg';
import AIIntegration2 from '../../../assets/images/icon/chain9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/chain10.svg';
import CreativeDesign2 from '../../../assets/images/icon/chain11.svg';
import WorkflowAutomation2 from '../../../assets/images/icon/chain12.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const ourGeneratives = [
    {
        title: "Banking and Finance",
        description: "Our AI agents provide personalized financial advice, product recommendations, and investment strategies through natural language interactions. They enhance security by detecting risks, fraud, and money laundering attempts through data analysis. As conversational AI, they handle customer service, inquiries, and process automation. They also support predictive analytics, identify investment opportunities, and drive innovation.",
        img: Machine,
    },
    {
        title: "Retail",
        description: "We build AI agents that personalize shopping experiences, assist with inventory management, optimize targeted promotions, and streamline supply chain operations. Our AI agents excel in demand forecasting, sentiment analysis from social media, and offering personalized product recommendations. These capabilities drive increased sales and foster enhanced customer loyalty.",
        img: DataAnalysis,
    },
    {
        title: "Healthcare",
        description: "Our custom generative AI solutions and consulting service enable healthcare providers to offer enhanced patient care and ensure improved operational efficiency. With generative AI, healthcare providers can ensure diagnostic accuracy, predictive patient monitoring, and improved medical image interpretation, thwarting healthcare fraud considerably.",
        img: DomainSpecific,
    },
    {
        title: "Supply Chain and Logistics",
        description: "Achieve better visibility and performance in supply chain and logistics with our AI agents. They can assist with optimizing delivery routes, predicting demand fluctuations, managing inventory, and automating logistics processes. Use our AI agents for real-time shipment tracking, warehouse management, and preventative maintenance to enhance efficiency, reduce costs, and ensure timely deliveries.",
        img: AISolutions,
    },
    {
        title: "Insurance",
        description: "We build custom AI agents to automate claims processing, compliance management, underwriting, invoice processing, AML/KYC checks, document management and payment reconciliation. Our solutions analyze large datasets to detect fraud and accurately predict risks. This enables insurance companies to improve efficiency, reduce costs, and enhance customer satisfaction.",
        img: AIIntegration,
    },
    {
        title: "Manufacturing",
        description: "Implement our intelligent AI agents to collect, analyze, and interpret data from various factory floor components and subsystems for real-time monitoring, quality control, decision support, task automation, and predictive maintenance. With our AI agents, manufacturers can minimize downtime, ensure consistent product quality, reduce costs, and increase productivity.",
        img: UpgradeMaintenance,
    },
    {
        title: "Automotive",
        description: "Our AI agents transform the automotive industry by enhancing vehicle design, manufacturing, and customer service. These agents enable predictive maintenance, assist with design and more ensuring efficiency, safety, and exceptional customer satisfaction. By integrating AI, automotive companies can reduce costs, improve product quality, and deliver personalized customer support.",
        img: CreativeDesign,
    },
    {
        title: "E-commerce",
        description: "Our AI agents transform e-commerce by enhancing customer engagement, streamlining operations, and boosting sales. They offer real-time personalized shopping experiences, create content, and provide 24/7 support across multiple channels. By integrating our AI solutions, e-commerce businesses can increase conversion rates, reduce cart abandonment, and deliver customer-centric services.",
        img: WorkflowAutomation,
    },
    {
        title: "Real Estate",
        description: "We build AI agents to streamline real estate tasks, including market analysis, property valuation, and investment identification. These AI tools enhance customer relations with accurate, personalized services and boost operational efficiency. Integrating our AI agents into property research, marketing, and management helps real estate professionals make informed decisions and deliver exceptional client experiences.",
        img: AIIntegration2,
    },
    {
        title: "Media & Entertainment",
        description: "Our AI agents personalize content recommendations, automate certain media production processes, analyze audience behavior and answer viewer questions. These agents enable real-time curation, delivering tailored news and entertainment experiences while enhancing operational efficiency. By integrating our AI agents, media companies can streamline their processes and ensure better viewer retention and satisfaction.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Legal",
        description: "We build AI agents to assist in document analysis, legal research, case management and administrative tasks. Our AI agents help legal firms automate routine tasks, enhance decision-making processes and improve client service. With these custom solutions, legal professionals can improve accuracy and efficiency, reduce preparation time and minimize errors in their work.",
        img: CreativeDesign2,
    },
    {
        title: "Hospitality",
        description: "Our AI agents transform e-commerce by enhancing customer engagement, streamlining operations, and boosting sales. They offer real-time personalized shopping experiences, create content, and provide 24/7 support across multiple channels. By integrating our AI solutions, e-commerce businesses can increase conversion rates, reduce cart abandonment, and deliver customer-centric services.",
        img: WorkflowAutomation2,
    },
];
export default function IndustryVerticals() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Industry Verticals We Serve</h2>
                    <p className='text-center'>
                        Our generative AI consulting services cater to a wide range of industry verticals, helping businesses across diverse sectors harness the power of generative AI to drive innovation, optimize operations, and achieve their goals.
                    </p>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-4 col-lg-12 col-md-6 mt-sm-5 mt-4" key={index}>
                            <Link to="#" style={{ textDecoration: 'none' }}>
                                <div className="extractCard ourGenerativeCard ourDigitalCard">
                                    <img src={ourGenerative.img} alt={ourGenerative.title} />
                                    <h4>{ourGenerative.title}</h4>
                                    <p>{ourGenerative.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
