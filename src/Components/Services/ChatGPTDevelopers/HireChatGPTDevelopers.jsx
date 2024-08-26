import React from 'react'
import Machine from '../../../assets/images/icon/deep1.svg';
import DataAnalysis from '../../../assets/images/icon/deep2.svg';
import DomainSpecific from '../../../assets/images/icon/deep3.svg';
import AISolutions from '../../../assets/images/icon/deep4.svg';
import AIIntegration from '../../../assets/images/icon/deep5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/deep6.svg';
import CreativeDesign from '../../../assets/images/icon/deep7.svg';
import WorkflowAutomation from '../../../assets/images/icon/deep8.svg';
import AIIntegration2 from '../../../assets/images/icon/deep9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/deep10.svg';
import CreativeDesign2 from '../../../assets/images/icon/deep11.svg';
import Machine2 from '../../../assets/images/icon/deep12.svg';
import DataAnalysis2 from '../../../assets/images/icon/adaptive13.svg';
import DomainSpecific2 from '../../../assets/images/icon/adaptive14.svg';
import AISolutions2 from '../../../assets/images/icon/adaptive15.svg';
import AIIntegration3 from '../../../assets/images/icon/adaptive16.svg';
import UpgradeMaintenance3 from '../../../assets/images/icon/adaptive17.svg';
import CreativeDesign3 from '../../../assets/images/icon/adaptive18.svg';
import IntegratProcess from '../../../assets/images/Development-process.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Deep Expertise",
        description: "Our developers possess specialized knowledge in developing and optimizing OpenAI model-powered solutions like chatbots that are intelligent, responsive and capable of effectively understanding and processing natural language, ensuring user queries are addressed accurately.",
        img: Machine,
    },
    {
        title: "Experience Working With OpenAI Models",
        description: "With a track record of successfully deploying OpenAI model-powered solutions, our accomplished developers have consistently showcased their proficiency in delivering top-tier chatbot solutions that meet businesses’ diverse needs, ensuring enhanced user engagement and satisfaction.",
        img: DataAnalysis,
    },
    {
        title: "We Build Custom Solutions",
        description: "We build tailored OpenAI model-powered solutions designed to align with your goals and specific business requirements. Our developers ensure that the chatbots developed are robust, scalable, adaptable and future-ready to ensure they remain well-aligned with our clients’ evolving business needs.",
        img: DomainSpecific,
    },
    {
        title: "Agile Development and Quick Deployment",
        description: "Leveraging agile methodologies, we ensure the swift and efficient development and deployment of GPT-powered solutions, allowing for continuous improvements and adjustments based on feedback and changing requirements, ensuring the delivery of optimal solutions on time.",
        img: AISolutions,
    },
    {
        title: "We Ensure Seamless Integration",
        description: "Our ChatGPT developers enable you to elevate your business with technology that seamlessly fits into your operations. We ensure that the solutions we build seamlessly blend with your existing infrastructure and workflows, minimizing disruptions and maximizing efficiency.",
        img: AIIntegration,
    },
    {
        title: "Continuous Support and Optimization",
        description: "Our commitment goes beyond the initial implementation of GPT-powered solutions. We offer ongoing support and optimization services to guarantee the continued excellence of your solution. Our dedicated team promptly addresses any issues that may arise, ensuring uninterrupted performance.",
        img: UpgradeMaintenance,
    },
];
const supports = [
    {
        title: "Requirement Assessment",
        description: "We identify and document the specific needs, objectives and constraints of the project. Understanding what stakeholders expect from the final product or system is crucial.",
        img: CreativeDesign,
    },
    {
        title: "Strategy Building",
        description: "We devise a strategic plan that takes into account GPT model selection, fine-tuning methods, resource allocation, and a deployment strategy tailored to the project’s objectives.",
        img: WorkflowAutomation,
    },
    {
        title: "Design and Development",
        description: "Detailed specifications and architectural designs for the solution are crafted, followed by its development using the fine-tuned model, ensuring its alignment with the client’s unique requirements.",
        img: AIIntegration2,
    },
    {
        title: "Testing",
        description: "Rigorously test the GPT model-powered solution, improving it through iterative cycles to ensure better output quality and minimize biases.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Deployment and Optimization",
        description: "The GPT model-powered solution is deployed into the production environment, and continuous optimization efforts are undertaken to enhance its performance and output quality.",
        img: CreativeDesign2,
    },
    {
        title: "Integration and Support",
        description: "Integrate the solution into the client’s existing ecosystem, followed by ongoing support and maintenance to ensure its alignment with evolving requirements.",
        img: Machine2,
    }
];
export default function HireChatGPTDevelopers() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Why Hire Zyntellect ChatGPT Developers?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
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
                    <h2 className='mb-3'>Our OpenAI Model-powered Solutions Development Process</h2>
                </div>
                <img src={IntegratProcess} className='w-100' alt="" />
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
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
