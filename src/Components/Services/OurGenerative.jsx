import React from 'react'
import Machine from '../../assets/images/icon/our1.svg';
import DataAnalysis from '../../assets/images/icon/our2.svg';
import DomainSpecific from '../../assets/images/icon/our3.svg';
import AISolutions from '../../assets/images/icon/our4.svg';
import AIIntegration from '../../assets/images/icon/our5.svg';
import UpgradeMaintenance from '../../assets/images/icon/our6.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ourGeneratives = [
    {
        title: "Generative AI Consulting",
        description: "We work closely with your team to develop a customized generative AI adoption strategy that aligns with your objectives. Our consultants bring deep technical knowledge of generative AI models and technologies to the table, ensuring that you implement the most suitable solution for your specific use case.",
        img: Machine,
    },
    {
        title: "Data Analysis",
        description: "Our data analysis service is designed to help businesses unlock valuable insights from their data. Whether you have structured data sets or unstructured text, our expert data analysts can extract, process, and analyze this information to uncover hidden patterns and provide actionable recommendations.",
        img: DataAnalysis,
    },
    {
        title: "Domain-specific Generative AI Model Development",
        description: "We build domain-specific generative AI models to ensure you can harness the full potential of AI in a way that is relevant and impactful to your business. Our process begins with a comprehensive assessment of your industry and business objectives, followed by the careful selection of a foundational model. We then fine-tune it by integrating it with your proprietary data and rigorously test it to ensure it meets your business requirements.",
        img: DomainSpecific,
    },
    {
        title: "Generative AI Solutions Development",
        description: "Whether you want a chatbot, an AI copilot, an AI agent, a recommendation system or a predictive analytics tool, we have you covered. We build innovative generative AI solutions using foundational models as building blocks. These models, such as GPT, Llama and PaLM, Gemini, Mistral and Claude, serve as the cornerstone for creating intelligent, creative, and adaptable generative AI systems that offer a transformative approach to solving complex challenges.",
        img: AISolutions,
    },
    {
        title: "Generative AI Integration",
        description: "We seamlessly incorporate generative AI solutions into your existing tech infrastructure, streamlining your internal workflows and customer-facing systems. We recognize the significance of a smooth transition and work diligently to ensure our integration process causes minimal disruption to your ongoing operations, empowering your organization to thrive in the rapidly evolving tech landscape.",
        img: AIIntegration,
    },
    {
        title: "Upgrade and Maintenance",
        description: "Your success is our priority, which is why we provide post-deployment maintenance and upgrade services, keeping in mind the dynamic nature of technology and your evolving business needs. With regular maintenance and timely upgrades, we ensure that your generative AI solutions continue to operate smoothly, delivering consistent value and innovation and helping you excel in the competitive business landscape.",
        img: UpgradeMaintenance,
    },
];
export default function OurGenerative() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our generative AI development services are your gateway to the boundless possibilities of AI-driven creativity and innovation</h2>
                    <p className='text-center'>
                        Drawing from a wealth of expertise in a wide range of AI technologies, including deep learning, machine learning, computer vision, reinforcement learning, and natural language processing, we engineer custom, domain-specific generative AI models and solutions.
                    </p>
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
                                <p>Drive innovation in your business with LeewayHertz's expert generative AI development services.</p>
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
