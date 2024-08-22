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

const ourGeneratives = [
    {
        title: "AI Agent Strategy Consulting",
        description: "Enhance customer interactions and satisfaction through AI-driven support and personalized recommendations.",
        img: Machine,
        listDesc: [
            "Customer Support Agents",
            "Personalized Recommendation Agents",
            "Customer Feedback Analysis Agents"
        ]
    },
    {
        title: "Human Resources (HR)",
        description: "Streamline HR processes, from recruitment to employee management, with intelligent AI solutions.",
        img: DataAnalysis,
        listDesc: [
            "Talent Acquisition and Recruitment Agents",
            "Employee Onboarding Agents",
            "HR Support Agents",
            "Scheduling and Calendar Management Agents"
        ]
    },
    {
        title: "Finance and Accounting",
        description: "Automate financial tasks, enhance fraud detection and improve financial planning with AI.",
        img: DomainSpecific,
        listDesc: [
            "Financial Analysis and Reporting Agents",
            "Fraud Detection in Transactions Agents",
            "Automated Bookkeeping Agents",
            "Invoice Processing Agents"
        ]
    },
    {
        title: "Marketing and Sales",
        description: "Boost marketing strategies and sales performance through data-driven AI insights and automation.",
        img: AISolutions,
        listDesc: [
            "Automated Email Marketing Agents",
            "Lead Generation and Scoring Agents",
            "Sales Forecasting and Reporting Agents",
            "Market Research and Trend Analysis Agents"
        ]
    },
    {
        title: "Information Technology (IT)",
        description: "Optimize IT operations, enhance security, and streamline software development with AI.",
        img: DomainSpecific2,
        listDesc: [
            "Task Automation Agents",
            "IT Helpdesk Support Agents",
            "DevOps Automation Agents",
            "Software Testing Agents"
        ]
    },
    {
        title: "Research and Development (R&D)",
        description: "Drive innovation and product development with advanced AI analytics and predictive insights.",
        img: AISolutions2,
        listDesc: [
            "Data Analysis and Insights Agents",
            "Predictive Analytics Agents",
            "Product R&D Agents",
            "Competitive Analysis Agents"
        ]
    },
    {
        title: "Operations and Logistics",
        description: "Enhance operational efficiency and logistics management through AI-driven automation and optimization.",
        img: Machine2,
        listDesc: [
            "Workflow Automation Agents",
            "Inventory Management Agents",
            "Supply Chain Optimization Agents",
            "Transportation and Logistics Planning Agents"
        ]
    },
    {
        title: "Legal and Compliance",
        description: "Improve compliance and legal processes with AI-powered analysis and monitoring tools.",
        img: DataAnalysis2,
        listDesc: [
            "Document Review and Summarization Agents",
            "Contract Analysis and Review Agents",
            "Regulatory Compliance Monitoring Agents",
            "Legal Research Agents"
        ]
    }
    ,
    {
        title: "Security",
        description: "Enhance organizational security through AI-based threat detection and incident response systems.",
        img: DomainSpecific3,
        listDesc: [
            "Fraud Detection and Prevention Agents",
            "Cybersecurity Threat Detection Agents",
            "Compliance Monitoring Agents",
            "Incident Response and Management Agents"
        ]
    }
];

const hireZyntellect = [
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
export default function AgentsDepartments() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>AI Agents We Develop for Departments Across Industries</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard ourGenerativeLiCard">
                                <img src={ourGenerative.img} alt={ourGenerative.title} />
                                <h4>{ourGenerative.title}</h4>
                                <p>{ourGenerative.description}</p>
                                {ourGenerative.listDesc.length > 0 && (
                                    <ul className='extractCardUl'>
                                        {ourGenerative.listDesc.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
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
                                <p>Elevate your business with custom AI agent development. Zyntellect's AI solutions streamline processes and automate tasks. Let's discuss your project.</p>
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
