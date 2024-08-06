import React from 'react'
import Machine from '../../../assets/images/icon/potential1.svg';
import DataAnalysis from '../../../assets/images/icon/potential2.svg';
import DomainSpecific from '../../../assets/images/icon/potential3.svg';
import AISolutions from '../../../assets/images/icon/potential4.svg';
import AIIntegration from '../../../assets/images/icon/potential5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/potential6.svg';
import CreativeDesign from '../../../assets/images/icon/potential7.svg';
import WorkflowAutomation from '../../../assets/images/icon/potential8.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const potentialBusines = [
    {
        title: "Enhance Efficiency",
        description: "By leveraging generative AI in your workflows, you can automate repetitive tasks, streamline processes, and optimize resource allocation, ultimately improving operational efficiency.",
        img: Machine,
    },
    {
        title: "Personalize Customer Experiences",
        description: "Generative AI enables you to tailor customer experiences by creating personalized recommendations, targeted marketing campaigns, and customized products or services.",
        img: DataAnalysis,
    },
    {
        title: "Gain Competitive Advantage",
        description: "Integrating generative AI empowers you to stay ahead of the competition by harnessing the power of advanced algorithms to analyze data, extract insights, and make data-driven decisions.",
        img: DomainSpecific,
    },
    {
        title: "Boost Decision-making",
        description: "Generative AI can process and analyze large volumes of data quickly, enabling faster and more informed decision-making, leading to improved outcomes and business growth.",
        img: AISolutions,
    },
    {
        title: "Improve Accuracy and Precision",
        description: "Generative AI algorithms can provide precise and accurate results, reducing human errors and increasing the reliability of your processes and outputs.",
        img: AIIntegration,
    },
    {
        title: "Optimize Resource Utilization",
        description: "Integrating generative AI helps optimize resource allocation, ensuring that your workforce, time, and assets are utilized efficiently, resulting in cost savings and improved productivity.",
        img: UpgradeMaintenance,
    },
    {
        title: "Enable Data-driven Insights",
        description: "Generative AI can uncover hidden patterns, trends, and correlations within your data, providing valuable insights that can drive strategic decision-making and business growth.",
        img: CreativeDesign,
    },
    {
        title: "Scalability",
        description: "With enhanced automation, faster decision-making, improved efficiency, personalized experiences and intelligent resource allocation, this technology empowers your business to grow and adapt in a rapidly evolving landscape.",
        img: WorkflowAutomation,
    },
];
export default function PotentialBusiness() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>The Potential Business Outcomes</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {potentialBusines.map((potential, index) => (
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
            <div className='d-flex justify-content-center showAllInsight'>
                <Button variant='contained' className='learnMoreBtn2'>Start a conversation</Button>
            </div>
        </>
    )
}
