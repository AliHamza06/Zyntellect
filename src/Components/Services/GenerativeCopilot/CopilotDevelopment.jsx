import React from 'react'
import Machine from '../../../assets/images/icon/consulting1.svg';
import DataAnalysis from '../../../assets/images/icon/consulting2.svg';
import DomainSpecific from '../../../assets/images/icon/consulting3.svg';
import AISolutions from '../../../assets/images/icon/consulting4.svg';
import DomainSpecific2 from '../../../assets/images/icon/consulting5.svg';
import AISolutions2 from '../../../assets/images/icon/consulting6.svg';
import Machine2 from '../../../assets/images/icon/consulting7.svg';
import DataAnalysis2 from '../../../assets/images/icon/consulting8.svg';
import DomainSpecific3 from '../../../assets/images/icon/consulting9.svg';
import AISolutions3 from '../../../assets/images/icon/consulting10.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const personalized = [
    {
        title: "Strategy Development and Consulting",
        description: "Our approach begins with a comprehensive assessment of the challenges your organization is facing. From there, we identify the specific areas where AI assistants can make a meaningful impact, streamlining workflows, and boosting productivity. We then work with you to craft strategic plans for the seamless implementation of AI assistants, taking into account factors such as resource allocation, technology integration, and change management to ensure optimal outcomes.",
        img: Machine,
    },
    {
        title: "Data Analysis",
        description: "We conduct a thorough analysis of your proprietary data to identify patterns, trends, and unique challenges within your data, ensuring that the resulting copilot is finely tuned to address your specific needs. We meticulously examine your data to understand the intricacies of your domain, which enables us to design an AI copilot equipped not only to handle routine tasks but also to tackle specialized and complex functions with efficiency and accuracy.",
        img: DataAnalysis,
    },
    {
        title: "MVP and PoC Development",
        description: "We expedite the development process by swiftly prototyping and validating your AI Copilot concept. Whether it’s crafting a Minimum Viable Product (MVP) to showcase essential functionalities or creating a Proof of Concept (POC) to demonstrate feasibility and potential value, our skilled team ensures rapid iteration and refinement. By leveraging these early-stage solutions, we lay the groundwork for the full-scale implementation of your AI copilot.",
        img: DomainSpecific,
    },
    {
        title: "Custom AI Copilot Development",
        description: "We collaborate with you to assess your requirements and harness your proprietary datasets to craft an AI copilot adept at tackling the precise demands and challenges of your business, boosting operational efficiency. From conceptualization to system integration, we handle the entire process, ensuring every step aligns seamlessly with your vision. Our collaborative approach involves iterative refinement, where we continuously refine the AI assistant’s capabilities.",
        img: AISolutions,
    },
    {
        title: "AI Copilot Integration",
        description: "We prioritize the smooth incorporation of AI copilots into your existing infrastructure, ensuring minimal disruption and quick efficiency gains. Our approach is designed to complement and enhance your current systems and processes from the outset. Throughout the process, we uphold data security and regulatory compliance, guaranteeing a smooth transition with maximum impact.",
        img: DomainSpecific2,
    },
    {
        title: "Maintenance and Support",
        description: "We offer comprehensive maintenance and support services for the AI copilots we build, ensuring their smooth operation and continued reliability. Our dedicated team provides proactive monitoring, timely updates, and troubleshooting assistance to address any issues promptly. With our commitment to excellence, we strive to maintain the peak performance of AI Copilots, allowing our clients to focus on their core business operations with confidence.",
        img: AISolutions2,
    }
];
const hireZyntellect = [
    {
        title: "Tailored Approach",
        description: "We understand that no two businesses are alike, which is why our services are customized to fit your specific goals and workflows, ensuring a solution that is uniquely yours. Our tailored approach to building AI copilots highlights our commitment to understanding and addressing the unique needs of each client.",
        img: Machine2,
    },
    {
        title: "Expert AI Professionals",
        description: "With a thorough understanding of machine learning algorithms, natural language processing techniques, and data engineering principles, we are adept at designing intelligent AI copilots that that seamlessly handle diverse tasks and smoothly integrate into your workflows, boosting efficiency, productivity, and innovation.",
        img: DataAnalysis2,
    },
    {
        title: "Extensive Experience",
        description: "Our proficiency in building AI copilots stems from years of dedicated experience and a deep understanding of cutting-edge AI technologies. With a track record of successful implementations, our team has consistently demonstrated its ability to deliver innovative solutions that meet and exceed client expectations.",
        img: DomainSpecific3,
    },
    {
        title: "Security and Compliance Assurance",
        description: "We adopt a meticulous development approach that ensures the highest level of protection for your data and intellectual assets. Through continuous audits, state-of-the-art encryption, and strict access management, we safeguard the integrity and confidentiality of your information.",
        img: AISolutions3,
    }
];
export default function CopilotDevelopment() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>What Can Our Digital AI Agents Do?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {personalized.map((personalize, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard ourGenerativeLiCard">
                                <img src={personalize.img} alt={personalize.title} />
                                <h4>{personalize.title}</h4>
                                <p>{personalize.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Why Choose Zyntellect for AI Copilot Development?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {hireZyntellect.map((hireLeewayHert, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={hireLeewayHert.img} alt={hireLeewayHert.title} />
                                <h4>{hireLeewayHert.title}</h4>
                                <p>{hireLeewayHert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
