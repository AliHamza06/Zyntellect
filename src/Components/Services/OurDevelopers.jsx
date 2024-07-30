import React from 'react'
import Machine from '../../assets/images/icon/our7.svg';
import DataAnalysis from '../../assets/images/icon/our8.svg';
import DomainSpecific from '../../assets/images/icon/our9.svg';
import AISolutions from '../../assets/images/icon/our10.svg';
import AIIntegration from '../../assets/images/icon/our11.svg';
import UpgradeMaintenance from '../../assets/images/icon/our12.svg';
import IncreasedAutomation from '../../assets/images/icon/our13.svg';
import IncreasedProductivity from '../../assets/images/icon/our14.svg';
import EnhancedCreativity from '../../assets/images/icon/our15.svg';
import CostOptimization from '../../assets/images/icon/our16.svg';
import ProcessOur from '../../assets/images/Process-Our-Engineers-Follow-cropped.svg'
import ProcessOur2 from '../../assets/images/Developers-Follow.svg'

import { Link } from 'react-router-dom';

const insights = [
    {
        title: "Requirement Assessment",
        description: "Identify and document the specific needs, objectives, and constraints of the project. Understanding what stakeholders expect from the final product or system is crucial.",
        img: Machine,
    },
    {
        title: "Strategy Building",
        description: "Develop a strategic plan outlining the generative AI model selection, training approach, resource allocation, and deployment strategy tailored to the project’s goals.",
        img: DataAnalysis,
    },
    {
        title: "Design and Development",
        description: "Detailed specifications and architectural designs for the solution are crafted, followed by its development using a fine-tuned model, ensuring its alignment with the client’s unique requirements.",
        img: DomainSpecific,
    },
    {
        title: "Testing",
        description: "Rigorously test the generative AI solution, improving it through iterative cycles to ensure better output quality and minimize biases.",
        img: AISolutions,
    },
    {
        title: "Deployment and Optimization",
        description: "The generative AI solution is deployed into the production environment, and continuous optimization efforts are undertaken to enhance its performance and output quality.",
        img: AIIntegration,
    },
    {
        title: "Integration and Support",
        description: "Integrate the generative AI solution into the client’s existing ecosystem, followed by ongoing support and maintenance to ensure its alignment with evolving requirements.",
        img: UpgradeMaintenance,
    },
];
const developmentServices = [
    {
        title: "Increased Automation",
        description: "Our generative AI development services empower you to stay ahead of the competition by significantly increasing automation across various aspects of your business. With AI-driven processes handling repetitive tasks, you can allocate your workforce more strategically, focusing on innovation and growth.",
        img: IncreasedAutomation,
    },
    {
        title: "Increased Productivity",
        description: "Our services boost your productivity by harnessing the power of generative AI to augment your team’s capabilities. This translates to quicker decision-making, improved resource allocation, and streamlined workflows, enabling you to achieve more in less time and gain a competitive edge.",
        img: IncreasedProductivity,
    },
    {
        title: "Enhanced Creativity",
        description: "Leveraging generative AI allows you to foster innovation and creativity within your organization. Our build solutions that can generate content, ideas, and roadmaps that inspire new directions for your products or services, helping you stay ahead of the curve and captivate your audience.",
        img: EnhancedCreativity,
    },
    {
        title: "Cost Optimization",
        description: "By automating tasks, improving efficiency, and reducing the scope of errors, you can significantly cut operational costs while maintaining or even improving the quality of your products or services, ensuring a competitive advantage in today’s dynamic market.",
        img: CostOptimization,
    },
];
export default function OurDevelopers() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>The Process Our Developers Follow to Build Generative AI Solutions</h2>
                    <img src={ProcessOur} className='w-100 d-sm-block d-none' alt="" />
                    <img src={ProcessOur2} className='w-100 d-sm-none d-block' alt="" />
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {insights.map((insight, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                    <img src={insight.img} alt={insight.title} />
                                    <h4>{insight.title}</h4>
                           
                                <p>{insight.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>How You Can Lead the Competition With Our Generative AI Development Services</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {developmentServices.map((developmentService, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <Link to='#'>
                                    <img src={developmentService.img} alt={developmentService.title} />
                                </Link>
                                <Link to='#'>
                                    <h4>{developmentService.title}</h4>
                                </Link>
                                <p>{developmentService.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
