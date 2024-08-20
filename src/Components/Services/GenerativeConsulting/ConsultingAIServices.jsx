import React from 'react'
import Machine from '../../../assets/images/icon/feasibility1.svg';
import DataAnalysis from '../../../assets/images/icon/feasibility2.svg';
import DomainSpecific from '../../../assets/images/icon/feasibility3.svg';
import AISolutions from '../../../assets/images/icon/feasibility4.svg';
import Machine2 from '../../../assets/images/icon/feasibility5.svg';
import DataAnalysis3 from '../../../assets/images/icon/feasibility6.svg';
import DomainSpecific4 from '../../../assets/images/icon/feasibility7.svg';
import AISolution5 from '../../../assets/images/icon/feasibility8.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ourGeneratives = [
    {
        title: "Use Case Identification and Feasibility Evaluation",
        description: "Our team assists in identifying potential use cases for generative AI within your organization. We conduct feasibility studies to assess the viability and potential impact of implementing generative AI solutions, providing you with insights to make informed decisions.",
        img: Machine,
    },
    {
        title: "Technology Assessment and Selection",
        description: "We conduct in-depth assessment of diverse generative AI technologies and tools, including models such as GPT, Llama, PaLM, Gemini, Claude, Mistral and Mixtral, and analyze their capabilities and compatibility with your organization’s specific requirements to ensure optimal selection and implementation.",
        img: DataAnalysis,
    },
    {
        title: "Compliance and Security Consultation",
        description: "Leveraging our knowledge of critical regulations like GDPR, CCPA, and HIPAA, we preserve data privacy for your generative AI solution ensuring system compliance. This mitigates potential risks while maintaining utmost data integrity.",
        img: DomainSpecific,
    },
    {
        title: "Data Engineering",
        description: "We prepare your data for model training using advanced data engineering tools and techniques. And then by leveraging our ML expertise, we use this data to build meaningful custom models designed to perform specific tasks like predictive analysis.",
        img: AISolutions,
    },
    {
        title: "Custom LLM Development",
        description: "Our experts optimize LLMs specifically for your business. We start by selecting the right pre-trained model for your needs, prepare your proprietary data, and then employ fine-tuning techniques to train the model with your data, ensuring your custom LLM offers accurate domain-specific responses.",
        img: Machine2,
    },
    {
        title: "Generative AI Solution Development",
        description: "From recommendation systems to due diligence research tools, we build robust generative AI solutions for diverse domains. We also develop AI copilots and AI agents, empowering businesses to streamline processes, gain actionable insights and achieve unparalleled operational efficiency.",
        img: DataAnalysis3,
    },
    {
        title: "Generative AI Integration",
        description: "We work closely with your organization to ensure a smooth implementation of generative AI applications within your existing systems and processes. Our goal is to minimize disruptions and maximize the benefits of generative AI, enabling you to leverage its capabilities without obstacles or complications.",
        img: DomainSpecific4,
    },
    {
        title: "Maintenance and Support",
        description: "Our team ensures the continued functionality, performance optimization, and adaptation of your AI solutions to meet changing needs. Whether it’s addressing updates, fine-tuning algorithms, or providing responsive technical support, our goal is to ensure your GenAI solutions consistently operate at peak efficiency.",
        img: AISolution5,
    }
];
export default function ConsultingAIServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Generative AI Consulting Services</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={ourGenerative.img} alt={ourGenerative.title} />
                                <h4>{ourGenerative.title}</h4>
                                <p>{ourGenerative.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="marginSet">
                <div className="driveInnovation">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 d-lg-block d-none"></div>
                        <div className="col-xl-4 col-lg-4 col-md-7">
                            <div className='driveInnovationDesc'>
                                <p>Discover how generative AI can transform your operations. Drive innovation and productivity with LeewayHertz's top-tier consulting and development services.</p>
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
