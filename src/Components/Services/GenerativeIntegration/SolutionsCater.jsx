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
import UpgradeMaintenance2 from '../../../assets/images/icon/banking10.svg';
import CreativeDesign2 from '../../../assets/images/icon/banking11.svg';
import WorkflowAutomation2 from '../../../assets/images/icon/banking12.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Banking and Finance",
        description: "In the banking and finance sector, our generative AI solutions provide advanced data analytics, fraud detection, and personalized customer experiences. This helps financial institutions optimize their operations, manage risk effectively, and offer tailored financial products and services.",
        img: Machine,
    },
    {
        title: "Retail",
        description: "For the retail industry, our GenAI solutions enhance customer engagement, inventory management, and demand forecasting. This leads to improved customer satisfaction, reduced costs, and increased profitability by leveraging data-driven insights.",
        img: DataAnalysis,
    },
    {
        title: "Healthcare",
        description: "In healthcare, our solutions aid in medical diagnosis, treatment recommendations, and patient management. By harnessing AI, healthcare providers can enhance patient care, streamline administrative processes, and drive medical advancements.",
        img: DomainSpecific,
    },
    {
        title: "Supply Chain and Logistics",
        description: "Our AI solutions optimize supply chain and logistics operations by improving route planning, inventory management, and demand forecasting. This results in reduced operational costs, increased efficiency, and better customer service.",
        img: AISolutions,
    },
    {
        title: "Insurance",
        description: "In the insurance sector, our solutions support underwriting, claims processing, and risk assessment. This enables insurance companies to offer more accurate pricing, faster claims processing, and improved customer experiences.",
        img: AIIntegration,
    },
    {
        title: "Travel",
        description: "For the travel industry, our AI solutions enhance customer support, recommendation engines, and pricing strategies. This leads to better customer experiences, increased bookings, and improved revenue for travel companies across the board.",
        img: UpgradeMaintenance,
    },
    {
        title: "Automotive",
        description: "Our generative AI solutions can transform your automotive business through enhanced vehicle design, process automation, advanced research and development, and superior quality control. These innovations drive operational efficiency, reduce downtime, and boost customer satisfaction and safety.",
        img: CreativeDesign,
    },
    {
        title: "Hospitality",
        description: "Our GenAI solutions for hospitality businesses can aid in personalizing guest experiences, streamlining operations, and refining marketing strategies. This enables businesses to maximize resource efficiency and ensure guest loyalty, boosting overall satisfaction and profitability.",
        img: WorkflowAutomation,
    },
    {
        title: "Real Estate",
        description: "Our generative AI solutions transform property valuation, market analysis, and client interactions, empowering real estate professionals to make informed decisions, enhance recommendations, and streamline transactions, thus boosting client satisfaction and operational efficiency.",
        img: AIIntegration2,
    },
    {
        title: "Manufacturing",
        description: "In the manufacturing sector, our generative AI solutions streamline production processes, enhance quality control, and accelerate product development. Integrating GenAI boosts efficiency and drives innovation, giving companies a competitive edge.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Media and Entertainment",
        description: "In the media and entertainment industry, our GenAI solutions enhance content creation, optimize distribution and personalize customer experiences, enabling media companies to engage audiences more effectively and drive continuous innovation.",
        img: CreativeDesign2,
    },
    {
        title: "Legal",
        description: "In the legal sector, our GenAI solutions support diverse tasks like case analysis, case prediction, and legal research. This enables law firms to streamline their workflows, improve case strategies, and boost the efficiency of services, benefiting both practitioners and clients.",
        img: WorkflowAutomation2,
    },
];
export default function SolutionsCater() {
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
