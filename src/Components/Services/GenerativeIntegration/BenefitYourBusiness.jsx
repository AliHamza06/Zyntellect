import React from 'react'
import Machine from '../../../assets/images/icon/benefit1.svg';
import DataAnalysis from '../../../assets/images/icon/benefit2.svg';
import DomainSpecific from '../../../assets/images/icon/benefit3.svg';
import AISolutions from '../../../assets/images/icon/benefit4.svg';
import AIIntegration from '../../../assets/images/icon/benefit5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/benefit6.svg';
import CreativeDesign from '../../../assets/images/icon/benefit7.svg';
import WorkflowAutomation from '../../../assets/images/icon/benefit8.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ourGeneratives = [
    {
        title: "Customer Support Automation",
        description: "Provide instant and accurate responses to customer queries, reducing the workload on support teams, improving customer satisfaction and saving customer support costs.",
        img: Machine,
    },
    {
        title: "Content Generation",
        description: "Automate creating engaging and personalized content such as blog articles, social media posts, and product descriptions, saving time and effort while maintaining quality and consistency.",
        img: DataAnalysis,
    },
    {
        title: "Data Analysis and Insights",
        description: "Utilize generative AI to analyze large datasets and extract valuable insights to make data-driven decisions more efficiently and effectively.",
        img: DomainSpecific,
    },
    {
        title: "Virtual Training and Simulations",
        description: "Develop interactive training modules and simulations using generative AI, allowing employees to enhance their skills and knowledge in a virtual environment, leading to improved performance and reduced training costs.",
        img: AISolutions,
    },
    {
        title: "Natural Language Processing (NLP)",
        description: "Automate diverse NLP-based tasks like sentiment analysis, summarizing and language translation, driving efficiency and productivity within your organization.",
        img: AIIntegration,
    },
    {
        title: "Fraud Detection and Prevention",
        description: "Utilize generative AI to analyze patterns and detect anomalies in financial transactions, helping enterprises proactively identify and prevent fraudulent activities, safeguarding their assets and maintaining trust.",
        img: UpgradeMaintenance,
    },
    {
        title: "Creative Design and Art",
        description: "Explore generative AI in the field of creative design, allowing businesses to generate unique visuals, artwork, and graphic designs, opening up new possibilities for branding and marketing campaigns.",
        img: CreativeDesign,
    },
    {
        title: "Workflow Automation",
        description: "Integrate generative AI into company workflows to automate repetitive tasks, streamline processes, and increase operational efficiency, freeing up employees to focus on more strategic and complex activities.",
        img: WorkflowAutomation,
    },
];
export default function BenefitYourBusiness() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>How Can Generative AI Integration Benefit Your Business?</h2>
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
        </>
    )
}
