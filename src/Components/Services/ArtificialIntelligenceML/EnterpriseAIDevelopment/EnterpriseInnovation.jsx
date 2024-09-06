import React from 'react';
import { Link } from 'react-router-dom';
import Machine from '../../../../assets/images/icon/finan1.svg';
import DataAnalysis from '../../../../assets/images/icon/finan2.svg';
import DomainSpecific from '../../../../assets/images/icon/finan3.svg';
import AISolutions from '../../../../assets/images/icon/finan4.svg';
import AIIntegration from '../../../../assets/images/icon/finan5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/finan6.svg';
import CreativeDesign from '../../../../assets/images/icon/finan7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/finan8.svg';
import AIIntegration2 from '../../../../assets/images/icon/finan9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/finan10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/finan11.svg';
import Machine2 from '../../../../assets/images/icon/finan12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/AIConsulting13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/AIConsulting14.svg';
import AISolutions2 from '../../../../assets/images/icon/AIConsulting15.svg';
import AIIntegration3 from '../../../../assets/images/icon/AIConsulting16.svg';
import UpgradeMaintenance3 from '../../../../assets/images/icon/AIConsulting17.svg';
import CreativeDesign3 from '../../../../assets/images/icon/adaptive18.svg';
import IntegratProcess from '../../../../assets/images/how-to-build-a-generative-ai-application.svg';
import { Button } from '@mui/material';
const unlockStrategic = [
    {
        title: "Banking",
        description: "Use our enterprise AI solutions for seamless customer identification and authentication, providing personalized assistance through chatbots and voice assistants. Further, streamline AML/KYC compliance and prevent fraud with our AI business solutions, enhancing trust and efficiency.",
        img: Machine,
        linkTo : "#" 
    },
    {
        title: "Retail",
        description: "Leverage the power of enterprise AI to improve customer engagement and optimize operations. You can use our computer vision technology-based AI solutions to personalize real-time promotions, while machine learning algorithms help manage and optimize inventory more effectively.",
        img: DataAnalysis,
        linkTo : "#"
    },
    {
        title: "Healthcare",
        description: "Our enterprise AI solutions, based on machine learning, deep learning, natural language processing, robotic process automation and AI analytics, help you ensure improved diagnosis, increased patient engagement, data-driven recommendations and forecasts, and facilitate personalized treatment.",
        img: DomainSpecific,
        linkTo : "#"
    },
    {
        title: "Supply Chain and Logistics",
        description: "Employ AI logistics simulation, automated inventory management, and AI-powered data analysis for diverse use cases in supply chain and logistics. Control material waste, improve overall quality control and track the sustainability of supply chains using our robust AI-powered software.",
        img: AISolutions,
        linkTo : "#"
    },
    {
        title: "Insurance",
        description: "Leverage the unparalleled capabilities of AI to redefine your market selection, underwriting, pricing and claims management operations. With our enterprise AI solutions, you can achieve faster time-to-market, more precise pricing and increased conversion rates.",
        img: AIIntegration,
        linkTo : "#"
    },
    {
        title: "Automotive",
        description: "Take your automotive business to the next level with our enterprise AI solutions. Leverage these solutions to optimize your production processes, trim costs, streamline operations, elevate customer experiences, enhance safety measures, and gain real-time insights that steer your success into the future.",
        img: UpgradeMaintenance,
        linkTo : "#"
    },
    {
        title: "E-commerce",
        description: "Leverage our robust enterprise AI solutions to offer accurate product recommendations and deliver personalized shopping experiences and dynamic pricing. Boost customer satisfaction and increase sales with intelligent algorithms that cater to individual preferences and buying behaviors.",
        img: CreativeDesign,
        linkTo : "#"
    },
    {
        title: "Manufacturing",
        description: "Embrace AI to optimize your manufacturing operations through predictive maintenance, automated quality control, and process optimization. Further, experience higher productivity, reduced downtime, and enhanced efficiency through continuous intelligent data analysis.",
        img: WorkflowAutomation,
        linkTo : "#"
    },
    {
        title: "Real Estate",
        description: "Leverage our advanced enterprise AI solutions for property data analysis, automated customer interactions, and virtual tours. Take your real estate business to the next level with insightful AI-driven evaluations, seamless customer engagement, and immersive virtual experiences for buyers and renters.",
        img: AIIntegration2,
        linkTo : "#"
    },
    {
        title: "Hospitality and Tourism",
        description: "Elevate guest experiences with our robust enterprise AI solutions. Whether you want to implement AI-powered chatbots for booking and customer support, offer personalized travel recommendations or optimize resource management for your hotel or resort, we have you covered with our solutions.",
        img: UpgradeMaintenance2,
        linkTo : "#"
    },
    {
        title: "Education",
        description: "Enhance student learning with our advanced enterprise AI solutions. Automate admin tasks and boost academic performance through intelligent tutoring solutions. Our enterprise AI tools bring innovation to the classroom, optimizing learning outcomes and creating engaging learning environments.",
        img: CreativeDesign2,
        linkTo : "#"
    },
    {
        title: "Private Equity and Principal Investment",
        description: "Our enterprise AI solutions, based on machine learning, deep learning, natural language processing, robotic process automation and AI analytics, help you ensure improved diagnosis, increased patient engagement, data-driven recommendations and forecasts, and facilitate personalized treatment.",
        img: Machine2,
        linkTo : "#"
    },
];

export default function EnterpriseInnovation() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Transform Your Enterprise with AI Innovation!</h2>
                    <p className='text-center'>Streamline your internal processes and optimize your customer-facing systems with our custom AI solutions crafted with precision by seasoned industry experts.</p>
                </div>
                <div className='d-flex justify-content-center showAllInsight'>
                    <Button variant='contained' className='learnMoreBtn2'>Get in touch</Button>
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Strengthen Foothold in Your Industry With Our Enterprise AI Solutions</h2>
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
