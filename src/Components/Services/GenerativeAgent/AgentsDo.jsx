import React from 'react'
import Machine from '../../../assets/images/icon/customer1.svg';
import DataAnalysis from '../../../assets/images/icon/customer2.svg';
import DomainSpecific from '../../../assets/images/icon/customer3.svg';
import AISolutions from '../../../assets/images/icon/customer4.svg';
import DomainSpecific2 from '../../../assets/images/icon/customer5.svg';
import AISolutions2 from '../../../assets/images/icon/customer6.svg';
import Machine2 from '../../../assets/images/icon/customer7.svg';
import DataAnalysis2 from '../../../assets/images/icon/customer8.svg';
import DomainSpecific3 from '../../../assets/images/icon/customer9.svg';
import AISolutions3 from '../../../assets/images/icon/customer1.svg';
import DomainSpecific4 from '../../../assets/images/icon/customer1.svg';
import AISolutions4 from '../../../assets/images/icon/customer1.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const personalized = [
    {
        title: "Deliver Automated Customer Support",
        description: "Leverage our AI agents to deliver automated customer support. Our systems are capable of handling inquiries, troubleshooting, and providing personalized assistance 24/7. Integrated with NLP capabilities, these conversable agents ensure efficient and responsive customer service interactions, enhancing user satisfaction and loyalty.",
        img: Machine,
    },
    {
        title: "Offer Personalized Recommendations",
        description: "We build robust AI agents that can offer personalized recommendations based on a user’s preferences and behavior. By analyzing user interactions, preferences, feedback, and historical data, these adaptive learning agents suggest relevant content, products, or services to users, driving engagement and conversion rates.",
        img: DataAnalysis,
    },
    {
        title: "Business Analysis and Decision-making",
        description: "We build AI agents that can analyze vast datasets, revealing trends, forecasting market dynamics, and offering crucial insights to stakeholders. These agents help businesses orchestrate intricate analyses, streamline reporting, and enhance strategic decision-making.",
        img: DomainSpecific,
    },
    {
        title: "Strategy Development and Consulting",
        description: "Our expert generative AI engineers offer strategy building and consulting services to help you make informed decisions about your AI endeavors. From assessing technologies and crafting implementation roadmaps to mitigating risks and ensuring scalability, we cover everything to empower your business with strategic insights, all while staying attuned to evolving trends and your business needs.",
        img: AISolutions,
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
export default function AgentsDo() {
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
                            <div className="extractCard ourGenerativeCard">
                                <img src={personalize.img} alt={personalize.title} />
                                <h4>{personalize.title}</h4>
                                <p>{personalize.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="marginSet">
                <div className="driveInnovation driveInnovation4">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 d-lg-block d-none"></div>
                        <div className="col-xl-4 col-lg-4 col-md-7">
                            <div className='driveInnovationDesc'>
                                <p>Elevate your business with custom AI agent development. LeewayHertz's AI solutions streamline processes and automate tasks. Let's discuss your project.</p>
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
