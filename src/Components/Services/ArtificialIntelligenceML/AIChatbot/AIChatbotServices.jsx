import React from 'react'
import Machine from '../../../../assets/images/icon/technology1.svg';
import DataAnalysis from '../../../../assets/images/icon/technology2.svg';
import DomainSpecific from '../../../../assets/images/icon/technology3.svg';
import AISolutions from '../../../../assets/images/icon/technology4.svg';
import AIIntegration from '../../../../assets/images/icon/technology5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/technology6.svg';
import CreativeDesign from '../../../../assets/images/icon/technology7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/technology8.svg';
import AIIntegration2 from '../../../../assets/images/icon/technology9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/technology10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/technology11.svg';
import Machine2 from '../../../../assets/images/icon/technology12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/technology13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/technology14.svg';
import AISolutions2 from '../../../../assets/images/icon/technology15.svg';
import AIIntegration3 from '../../../../assets/images/icon/technology16.svg';
import CreativeDesign3 from '../../../../assets/images/icon/adaptive18.svg';
import IntegratProcess from '../../../../assets/images/how-to-build-a-generative-ai-application.svg';
import { Link } from 'react-router-dom';

const unlockStrategic = [
    {
        title: "Technology Consulting and Strategy Building",
        description: "Our team of technology consultants will provide you with the knowledge and guidance needed for AI adoption. We assess your unique business needs, recommend the most suitable chatbot type, and develop a comprehensive strategy for seamless implementation. With our expertise, you will be able to harness the full potential of conversational AI to enhance customer interactions and streamline operations.",
        img: Machine,
    },
    {
        title: "Chatbot Design and Development",
        description: "We specialize in creating custom chatbot solutions tailored to your business’s unique needs. Our design and development team collaborates closely with you to understand your brand, objectives, challenges and customer requirements. We then design and build chatbots that not only engage users with context-aware responses but also align with your brand’s personality, ensuring a memorable and efficient user experience.",
        img: DataAnalysis,
    },
    {
        title: "Chatbot Integration",
        description: "Integrating a chatbot seamlessly into your existing systems and platforms is crucial for its effectiveness. Our integration process ensures that your chatbot boosts operational efficiency, maintains data consistency, and provides an enhanced and cohesive customer experience across all touchpoints. We also make sure that the chatbot is seamlessly integrated into your systems without any disruptions in your day-to-day operations.",
        img: DomainSpecific,
    },
    {
        title: "Maintenance and Support",
        description: "Post-deployment, we offer ongoing maintenance and support to keep your chatbot running smoothly. Our team monitors performance, resolves issues, and ensures your chatbot remains up-to-date with the latest technology advancements and trends. We are here to provide round-the-clock support, allowing you to focus on your core business while we manage your chatbot’s overall performance.",
        img: AISolutions,
    },
    
];
const supports = [
    {
        title: "GPT-based Chatbots",
        description: "Harness the unparalleled natural language understanding and generation capabilities of our GPT-powered chatbots to elevate customer engagement, streamline automation, and provide support across all departments of your organization.",
        img: AIIntegration,
    },
    {
        title: "Customized AI Voice Assistants",
        description: "We create AI voice assistants that understand and respond to user queries accurately, offering instant, reliable assistance and thereby transforming the way your business interacts with its customers and employees.",
        img: UpgradeMaintenance,
    },
    {
        title: "Custom CRM/ERP/CM Bots",
        description: "We create intelligent bots that seamlessly integrate with your CRM, ERP and CM systems, automating routine tasks, providing real-time data insights, and optimizing workflow efficiency, empowering your organization to drive operational excellence.",
        img: CreativeDesign,
    },
    {
        title: "Social Media-focused Chatbots",
        description: "Our comprehensive chatbot development service is tailored to your unique needs, building customized conversational and messaging bots compatible for integration across a range of social media platforms, including Facebook and Twitter.",
        img: WorkflowAutomation,
    },
    {
        title: "Transactional Chatbots",
        description: "Our transactional chatbots are designed to facilitate specific transactions, such as processing orders, booking reservations, or handling payments. They are ideal for use in e-commerce and customer service applications.",
        img: AIIntegration2,
    },
    {
        title: "Retrieval-based Chatbot Solutions",
        description: "We design and develop efficient retrieval-based chatbots for consistent and timely interactions. Designed to choose from predefined responses, these chatbots ensure accuracy and quick turnarounds, making them ideal for customer support, FAQs, and more.",
        img: UpgradeMaintenance2,
    },
    
];
const approachs = [
    {
        title: "Extensive Development Expertise",
        description: "Backed by a solid track record in developing powerful, intelligent chatbot solutions, LeewayHertz capitalizes on its wealth of experience and a proficient developer team to deliver tailor-made, highly performant chatbot applications aligned with clients’ specific business needs.",
        img: CreativeDesign2,
    },
    {
        title: "Experience Building Diverse Chatbots",
        description: "Whether it’s customer service chatbots, e-commerce assistants, virtual health advisors, or any other type of chatbot, we have an extensive experience and proven track record of delivering tailored and effective solutions that cater to various industry needs.",
        img: Machine2,
    },
    {
        title: "Use of Advanced Technologies",
        description: "By harnessing the power of advanced technologies like Natural Language Processing (NLP) and Machine Learning (ML), we develop sophisticated chatbots capable of understanding natural human language and interacting efficiently with users.",
        img: DataAnalysis2,
    },
    {
        title: "Customization and Personalization",
        description: "We specialize in building customized chatbot solutions that will cater to your unique business requirements. Whether it’s customer support, lead generation, or any other objective, we deliver tailored solutions aligned with your industry, brand, and target audience.",
        img: DomainSpecific2,
    },
    {
        title: "Scalable Chatbot Solutions",
        description: "We build scalable chatbots that empower your business to grow and adapt effortlessly. With our expertise, you can confidently deploy chatbots that evolve with your business needs, driving efficiency and customer satisfaction while future-proofing your digital ecosystem.",
        img: AISolutions2,
    },
    {
        title: "We Prioritize Security",
        description: "We specialize in crafting secure chatbots that prioritize user data protection and trust. Our comprehensive approach encompasses robust encryption, stringent authentication and authorization protocols, regular security audits, and strict compliance with data privacy regulations.",
        img: AIIntegration3,
    },
    
];
export default function AIChatbotServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>AI Chatbot Development Services We Offer</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {unlockStrategic.map((unlockStrate, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard  h-100">
                                <img src={unlockStrate.img} alt={unlockStrate.title} />
                                <h4>{unlockStrate.title}</h4>
                                <p>{unlockStrate.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>AI Chatbots We Develop</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard  h-100">
                                <img src={support.img} alt={support.title} />
                                <h4>{support.title}</h4>
                                <p>{support.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Why Choose LeewayHertz for Custom AI Chatbot Development?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {approachs.map((approach, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard gatheringCard approachCard" style={{ height : "100%", minHeight : "auto" }}>
                                <img src={approach.img} alt={approach.title} />
                                <div>
                                    <h4>{approach.title}</h4>
                                    <p>{approach.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
