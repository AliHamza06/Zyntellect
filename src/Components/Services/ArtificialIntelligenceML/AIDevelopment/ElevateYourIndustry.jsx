import React from 'react'
import Machine from '../../../../assets/images/icon/elevate1.svg';
import DataAnalysis from '../../../../assets/images/icon/elevate2.svg';
import DomainSpecific from '../../../../assets/images/icon/elevate3.svg';
import AISolutions from '../../../../assets/images/icon/elevate4.svg';
import AIIntegration from '../../../../assets/images/icon/elevate5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/elevate6.svg';
import CreativeDesign from '../../../../assets/images/icon/elevate7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/elevate8.svg';
import AIIntegration2 from '../../../../assets/images/icon/elevate9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/elevate10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/elevate11.svg';
import WorkflowAutomation2 from '../../../../assets/images/icon/elevate12.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const ourGeneratives = [
    {
        title: "Banking and Finance",
        description: "Leverage AI’s potential to reconstruct financial apps, automate finance analysis, plan budgets and enhance decision-making based on predictive analysis.",
        img: Machine,
    },
    {
        title: "Retail",
        description: "Analyze customer behavior, improve inventory management, reduce customer churn and enable customized recommendations with the power of AI-based applications.",
        img: DataAnalysis,
    },
    {
        title: "Healthcare",
        description: "Use AI Analytics to ensure efficient diagnosis, make data-based recommendations and predictions and enable personalized treatment to ensure life-saving treatment.",
        img: DomainSpecific,
    },
    {
        title: "Supply Chain and Logistics",
        description: "Facilitate receipt and invoice processing, automate tedious data-related tasks and enhance customer experience with AI’s capability.",
        img: AISolutions,
    },
    {
        title: "Insurance",
        description: "Automate claims management, leverage AI chatbots to improve user interactions, identify and mitigate risks and provide customer-focused services.",
        img: AIIntegration,
    },
    {
        title: "Manufacturing",
        description: "Leverage AI to streamline quality control, predictive maintenance, and supply chain optimization for unparalleled operational excellence in your manufacturing business.",
        img: UpgradeMaintenance,
    },
    {
        title: "Automotive",
        description: "Empower your automotive business with our AI-powered solutions for vehicle design, safety, route optimization and predictive maintenance to reduce downtime.",
        img: CreativeDesign,
    },
    {
        title: "Hospitality",
        description: "We build robust solutions for hospitality businesses that help them personalize guest experiences, streamline operations, and refine marketing strategies.",
        img: WorkflowAutomation,
    },
    {
        title: "Real Estate",
        description: "Our real estate AI solutions help optimize property pricing, enhance customer interactions, and drive strategic decisions for real estate businesses.",
        img: AIIntegration2,
    },
    {
        title: "Media & Entertainment",
        description: "Transform and innovate content creation, personalize viewer experiences, and optimize distribution with our advanced AI analytics tools, recommendation systems and other solutions.",
        img: UpgradeMaintenance2,
    },
    {
        title: "E-commerce",
        description: "Enhance customer service, streamline inventory management, boost sales conversions and increase operational efficiency with AI-driven personalization and predictive analytics.",
        img: CreativeDesign2,
    },
    {
        title: "Legal",
        description: "AI solutions help legal businesses, from compliance and risk management to legal research, case management, workflow optimization and client engagement.",
        img: WorkflowAutomation2,
    },
];
export default function ElevateYourIndustry() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Elevate Your Industry to the Next Level With Our AI Development Solutions</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <Link to="#" style={{ textDecoration: 'none' }}>
                                <div className="extractCard ourGenerativeCard CaterCard">
                                    <img src={ourGenerative.img} alt={ourGenerative.title} />
                                    <h4>{ourGenerative.title}</h4>
                                    <p>{ourGenerative.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='ourServicesContent h-auto justify-content-center d-flex flex-row mt-5'>
                <Link to="#">
                <Button variant='outlined' className='mt-3'>Start a Conversation</Button></Link>
            </div>
        </>
    )
}
