import React from 'react';
import { Link } from 'react-router-dom';
import Machine from '../../../../assets/images/icon/diverse1.svg';
import DataAnalysis from '../../../../assets/images/icon/diverse2.svg';
import DomainSpecific from '../../../../assets/images/icon/diverse3.svg';
import AISolutions from '../../../../assets/images/icon/diverse4.svg';
import AIIntegration from '../../../../assets/images/icon/diverse5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/diverse6.svg';
import CreativeDesign from '../../../../assets/images/icon/diverse7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/diverse8.svg';
import AIIntegration2 from '../../../../assets/images/icon/diverse9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/diverse10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/diverse11.svg';
import Machine2 from '../../../../assets/images/icon/diverse12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/AIConsulting13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/AIConsulting14.svg';
import AISolutions2 from '../../../../assets/images/icon/AIConsulting15.svg';
import AIIntegration3 from '../../../../assets/images/icon/AIConsulting16.svg';
import UpgradeMaintenance3 from '../../../../assets/images/icon/AIConsulting17.svg';
import CreativeDesign3 from '../../../../assets/images/icon/adaptive18.svg';
import IntegratProcess from '../../../../assets/images/how-to-build-a-generative-ai-application.svg';

const unlockStrategic = [
    {
        title: "Banking",
        description: "Hire our AI consulting services to intelligently leverage AI for combating fraudulent activities, planning budgets and streamlining workflows.",
        img: Machine,
        linkTo : "#" 
    },
    {
        title: "Manufacturing",
        description: "AI in manufacturing streamlines operations, predicts equipment malfunctions and boosts quality control for superior product standards.",
        img: DataAnalysis,
        linkTo : "#"
    },
    {
        title: "Marketing and Sales",
        description: "We help you leverage AI in creating impactful campaigns, predict marketing outcomes to improve lead generation and create roadmaps for growth.",
        img: DomainSpecific,
        linkTo : "#"
    },
    {
        title: "Automotive",
        description: "In the automotive sector, AI propels self-driving advancements, optimizes traffic flow, and predicts maintenance needs, driving efficiency and reducing costs.",
        img: AISolutions,
        linkTo : "#"
    },
    {
        title: "Insurance",
        description: "Use the power of AI to manage claims processing smartly, improve user interactions with AI chatbots and enable customer-focused services with machine learning and data science.",
        img: AIIntegration,
        linkTo : "#"
    },
    {
        title: "Hospitality",
        description: "AI in travel and hospitality boosts customer support via chatbots, offers personalized experiences, optimizes pricing, ensures transaction security and enhances overall guest satisfaction.",
        img: UpgradeMaintenance,
        linkTo : "#"
    },
    {
        title: "Real Estate",
        description: "In real estate, AI boosts agent efficiency, automates document processing, predicts market trends, and offers 24/7 chatbot support, transforming property management.",
        img: CreativeDesign,
        linkTo : "#"
    },
    {
        title: "Information Technology",
        description: "AI has brought reliability and innovative decision-making to the IT field by improving software development, automating testing, and offering unmatched data analytics insights.",
        img: WorkflowAutomation,
        linkTo : "#"
    },
    {
        title: "Retail",
        description: "Consult us, and we will help you leverage AI for your retail business, helping predict customer behavior, streamline in-store processes and enable personalized recommendations.",
        img: AIIntegration2,
        linkTo : "#"
    },
    {
        title: "Healthcare",
        description: "Implementing AI in healthcare ensures accurate diagnoses and personalized treatment, apart from facilitating predictive analysis and recommendations based on patient data.",
        img: UpgradeMaintenance2,
        linkTo : "#"
    },
    {
        title: "Supply Chain and Logistics",
        description: "Our consulting service helps you optimally use AI in supply chain and logistics processes, facilitating accurate demand forecasting, automating monotonous tasks and enhancing the customer experience.",
        img: CreativeDesign2,
        linkTo : "#"
    },
    {
        title: "Private Equity & Principal Investment",
        description: "AI reshapes private equity and principal investment by efficiently analyzing vast data for deal sourcing and due diligence, besides enabling data-driven insights and strategic investment planning.",
        img: Machine2,
        linkTo : "#"
    },
];

export default function DiverseIndustries() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our AI Consulting Services Cater to Diverse Industries</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {unlockStrategic.map((item, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <Link to={item.linkTo} style={{ textDecoration : "none" }}>
                                <div className="extractCard ourGenerativeCard h-100">
                                    <img src={item.img} alt={item.title} />
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
