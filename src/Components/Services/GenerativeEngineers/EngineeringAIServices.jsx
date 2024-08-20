import React from 'react'
import Machine from '../../../assets/images/icon/analysis1.svg';
import DataAnalysis from '../../../assets/images/icon/analysis2.svg';
import DomainSpecific from '../../../assets/images/icon/analysis3.svg';
import AISolutions from '../../../assets/images/icon/analysis4.svg';
import DomainSpecific2 from '../../../assets/images/icon/analysis5.svg';
import AISolutions2 from '../../../assets/images/icon/analysis6.svg';
import Machine2 from '../../../assets/images/icon/solving1.svg';
import DataAnalysis2 from '../../../assets/images/icon/solving2.svg';
import DomainSpecific3 from '../../../assets/images/icon/solving3.svg';
import AISolutions3 from '../../../assets/images/icon/solving4.svg';
import DomainSpecific4 from '../../../assets/images/icon/solving5.svg';
import AISolutions4 from '../../../assets/images/icon/solving6.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ourGeneratives = [
    {
        title: "Data Analysis",
        description: "LeewayHertz’s versatile generative AI engineers are proficient in data analytics and machine learning model training. Leverage their expertise to fully unravel the possibilities within your data. With expertise spanning statistics, programming, and data visualization, our GenAI engineers empower enterprises to navigate complex data, extract insights, and refine data strategies effortlessly.",
        img: Machine,
    },
    {
        title: "Domain-specific LLM Development",
        description: "Experience AI that speaks your business language with domain-specific LLMs. We start by understanding your specific domain, data and business requirements. Our experts then fine-tune a foundation model with your proprietary data, ensuring it grasps the intricacies of your industry’s language and provides unmatched relevance in understanding and generating content within your domain.",
        img: DataAnalysis,
    },
    {
        title: "Generative AI Solution Development",
        description: "Whether you aim to streamline intricate workflows, tailor your engagement strategies, or enhance your customer-facing systems, our generative AI solutions can cater to your needs. Our generative AI development process encompasses everything from conceptualization and design to extensive testing and deployment, all aimed at ensuring that the solution meets your specific needs.",
        img: DomainSpecific,
    },
    {
        title: "Strategy Development and Consulting",
        description: "Our expert generative AI engineers offer strategy building and consulting services to help you make informed decisions about your AI endeavors. From assessing technologies and crafting implementation roadmaps to mitigating risks and ensuring scalability, we cover everything to empower your business with strategic insights, all while staying attuned to evolving trends and your business needs.",
        img: AISolutions,
    },
    {
        title: "Integration and Optimization",
        description: "Our generative AI engineers meticulously weave genAI solutions into your existing workflow, ensuring a seamless fit within your organization’s processes. Moreover, their expertise goes beyond integration, as they optimize the solutions for peak performance and maximum value, delivering an all-encompassing approach to enhance your organization’s efficiency and productivity.",
        img: DomainSpecific2,
    },
    {
        title: "Performance Monitoring and Maintenance",
        description: "Our experts specialize in the ongoing care and optimization of the GenAI systems we build for our clients. We provide comprehensive services that encompass regular model updates, fine-tuning, and performance monitoring to keep your GenAI systems at their peak efficiency. This enables them to remain a valuable asset for your business, delivering high-quality results and adaptability to meet your evolving needs.",
        img: AISolutions2,
    }
];
const hireLeewayHertz = [
    {
        title: "Collaborative Excellence & Problem-solving Skills",
        description: "Hire our generative AI engineers for their collaborative excellence and adept problem-solving skills, ensuring innovative solutions and seamless teamwork for your project’s success.",
        img: Machine2,
    },
    {
        title: "Knowledge of ML and Other Relevant Technologies",
        description: "Our generative AI engineers have deep knowledge of technologies like ML, deep learning, and neural network architectures to create genAI models/solutions that can generate creative and contextually relevant content.",
        img: DataAnalysis2,
    },
    {
        title: "Proficiency in Key Generative AI Tools",
        description: "With expertise in Python, frameworks like TensorFlow and PyTorch, and advanced models like DALL-E, Midjourney and ChatGPT, our generative AI engineers build top-notch generative AI solutions and custom models.",
        img: DomainSpecific3,
    },
    {
        title: "Expertise in Generative AI Algorithms",
        description: "Our generative AI engineers possess profound expertise in key machine learning algorithms, including GANs, VAEs, and RNNs, guaranteeing solutions meticulously customized to your specific requirements.",
        img: AISolutions3,
    },
    {
        title: "Knowledge of Data Mining and Analytics",
        description: "Our generative AI engineers exhibit a robust grasp of mathematical fundamentals, encompassing linear algebra, calculus, probability, and statistics, pivotal for proficient data mining and analytics.",
        img: DomainSpecific4,
    },
    {
        title: "Commitment to Excellence",
        description: "Driven by a passion for innovation and excellence, our generative AI engineers are dedicated to ensuring optimal outcomes for every generative AI project from its inception to completion.",
        img: AISolutions4,
    }
];
export default function EngineeringAIServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Generative AI Engineering Services</h2>
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
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Why Hire LeewayHertz for Generative AI Engineers?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {hireLeewayHertz.map((hireLeewayHert, index) => (
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
            {/* <div className="marginSet">
                <div className="driveInnovation driveInnovation3">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 d-lg-block d-none"></div>
                        <div className="col-xl-4 col-lg-4 col-md-7">
                            <div className='driveInnovationDesc'>
                                <p>Enhance your team with skilled Generative AI engineers from LeewayHertz. Elevate your projects and drive efficiency with our specialized AI talent.</p>
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
