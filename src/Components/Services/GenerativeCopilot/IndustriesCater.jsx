import React from 'react'
import Machine from '../../../assets/images/icon/banking1.svg';
import DataAnalysis from '../../../assets/images/icon/banking2.svg';
import DomainSpecific from '../../../assets/images/icon/banking3.svg';
import AISolutions from '../../../assets/images/icon/banking4.svg';
import AIIntegration from '../../../assets/images/icon/banking5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/banking6.svg';
import CreativeDesign from '../../../assets/images/icon/banking7.svg';
import WorkflowAutomation from '../../../assets/images/icon/banking8.svg';
import AIIntegration2 from '../../../assets/images/icon/banking9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/elevate11.svg';
import CreativeDesign2 from '../../../assets/images/icon/banking11.svg';
import WorkflowAutomation2 from '../../../assets/images/icon/banking12.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Banking and Finance",
        description: "For banking and finance, our AI copilots can assist with tasks like data entry, document processing, and generating financial reports. They can help categorize transactions, extract key information from documents, provide document summaries and more.",
        img: Machine,
    },
    {
        title: "Retail",
        description: "In the retail sector, our AI copilots can handle tasks like inventory tracking, processing online orders, and generating basic product descriptions. They can also assist with customer service by answering frequently asked questions and directing inquiries to human representatives when needed.",
        img: DataAnalysis,
    },
    {
        title: "Healthcare",
        description: "For healthcare, our AI copilots can support administrative tasks like scheduling appointments, managing patient records, and transcribing notes. They can also provide health information and reminders to patients, while ensuring strict adherence to privacy and compliance regulations.",
        img: DomainSpecific,
    },
    {
        title: "Supply Chain and Logistics",
        description: "In supply chain and logistics, our AI copilots can track shipments, update inventory levels, generate reports on delivery status and more. They can also assist with route planning and optimizing delivery schedules based on predefined parameters.",
        img: AISolutions,
    },
    {
        title: "Insurance",
        description: "For the insurance industry, our AI copilots can help process claims by extracting relevant information from documents and forms. They can also generate policy documents, provide coverage information, and answer frequently asked questions from customers, among other tasks.",
        img: AIIntegration,
    },
    {
        title: "Manufacturing",
        description: "In manufacturing, our AI copilots can support tasks like product design, quality control and generating maintenance reports. They can also assist with inventory management, tracking raw materials, and generating purchase orders.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Automotive",
        description: "For the automotive industry, AI copilots can provide basic customer support, answering inquiries about vehicle features and maintenance. They can also assist with scheduling service appointments and generating simple repair reports.",
        img: CreativeDesign,
    },
    {
        title: "Hospitality",
        description: "In hospitality, our AI copilots can handle tasks like booking reservations, providing basic information about amenities and services, and answering frequently asked questions from guests.",
        img: WorkflowAutomation,
    },
    {
        title: "Real Estate",
        description: "For real estate, AI copilots can generate basic property listings, schedule viewings, and provide information about neighborhoods and local amenities. They can also assist with lead generation and follow-up tasks.",
        img: AIIntegration2,
    },
    {
        title: "E-commerce",
        description: "For e-commerce, our AI copilots can assist with tasks like processing orders, personalizing marketing copy and providing customer support. They can also help with product categorization and generating product descriptions.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Media and Entertainment",
        description: "Our AI copilot for media and entertainment businesses can enhance engagement through personalized content recommendations and assist in creative processes, market research, content optimization, and customer service, supporting creators, distributors, and marketers.",
        img: CreativeDesign2,
    },
    {
        title: "Legal",
        description: "In the legal industry, our AI copilots can support tasks like document organization, legal research assistance, and generating basic templates or forms. They can also assist with scheduling appointments and managing case files.",
        img: WorkflowAutomation2,
    },
];
export default function IndustriesCater() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Generative AI Solutions Cater to a Wide Array of Industries</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <Link to="#" style={{ textDecoration : 'none' }}>
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
        </>
    )
}
