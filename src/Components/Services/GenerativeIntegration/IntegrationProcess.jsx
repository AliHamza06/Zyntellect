import React from 'react'
import Machine from '../../../assets/images/icon/needs1.svg';
import DataAnalysis from '../../../assets/images/icon/needs2.svg';
import DomainSpecific from '../../../assets/images/icon/needs3.svg';
import AISolutions from '../../../assets/images/icon/needs4.svg';
import AIIntegration from '../../../assets/images/icon/needs5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/needs6.svg';
import CreativeDesign from '../../../assets/images/icon/needs7.svg';
import WorkflowAutomation from '../../../assets/images/icon/needs8.svg';
import IntegratProcess from '../../../assets/images/Generative-AI-Integration-Process.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const integrationProcess = [
    {
        title: "Understanding Client Needs",
        description: "We collaborate closely with our clients to gain a deep understanding of their specific business requirements, challenges, and objectives. This includes identifying the tasks, processes, or areas where generative AI can bring value and enhance efficiency.",
        img: Machine,
    },
    {
        title: "Model Selection",
        description: "Based on the identified needs, we select the most suitable pre-trained generative AI model or a combination of models. This could range from popular models like GPT-3, GPT-4, or specialized image-based generative models.",
        img: DataAnalysis,
    },
    {
        title: "Data Integration",
        description: "We integrate the client’s data sources, whether text, images, or other forms of data, into the generative AI system. This can be achieved through seamless data import from various sources such as databases, cloud storage, APIs, or real-time data streams.",
        img: DomainSpecific,
    },
    {
        title: "Fine-tuning",
        description: "We customize and fine-tune the selected model to align with the client’s business needs and domain-specific data. Fine-tuning involves training the model with relevant datasets provided by the client to enhance its performance and adapt it to specific use cases.",
        img: AISolutions,
    },
    {
        title: "Testing and Evaluation",
        description: "Before full deployment, thorough testing and evaluation of the integrated generative AI system are conducted. This ensures its performance, accuracy, and compatibility with the client’s workflows, as well as the generation of high-quality outputs.",
        img: AIIntegration,
    },
    {
        title: "Workflow Integration",
        description: "Our team collaborates with the client’s IT and development teams to integrate the generative AI solution into their existing workflows and systems. This includes developing APIs, connectors, or custom interfaces to enable smooth communication and interaction between the generative AI system and other tools or applications used by the client.",
        img: UpgradeMaintenance,
    },
    {
        title: "Deployment and Monitoring",
        description: "Once the generative AI system is tested and approved, it is deployed into the client’s production environment. Continuous monitoring and performance evaluation are carried out to ensure optimal functioning, reliability, and scalability of the solution.",
        img: CreativeDesign,
    },
    {
        title: "Support and Maintenance",
        description: "We provide ongoing support, maintenance, and updates to the generative AI integration, ensuring it remains up-to-date, efficient, and aligned with any changing business requirements or technological advancements.",
        img: WorkflowAutomation,
    },
];
export default function IntegrationProcess() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Generative AI Integration Process</h2>
                </div>
                <img src={IntegratProcess} className='w-100' alt="" />
            </div>
            <div className="matginSet">
                <div className="row mt-lg-2 mt-sm-2 mt-1">
                    {integrationProcess.map((potential, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={potential.img} alt={potential.title} />
                                <h4>{potential.title}</h4>
                                <p>{potential.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="marginSet">
                <div className="driveInnovation driveInnovation2">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 d-lg-block d-none"></div>
                        <div className="col-xl-4 col-lg-4 col-md-7">
                            <div className='driveInnovationDesc'>
                                <p>Want to integrate Generative AI into your business? Integrate Generative AI with LeewayHertz's custom solutions to optimize workflows and drive innovation.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-5">
                            <div className="driveInnovationButton">
                                <Button variant='contained' className='getStartedBtn'>Get Started Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
