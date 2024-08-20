import React from 'react'
import Machine from '../../../assets/images/icon/agent1.svg';
import DataAnalysis from '../../../assets/images/icon/agent2.svg';
import DomainSpecific from '../../../assets/images/icon/agent3.svg';
import AISolutions from '../../../assets/images/icon/agent4.svg';
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
        title: "AI Agent Strategy Consulting",
        description: "From evaluating your current setup to identifying AI agent implementation opportunities, we provide tailored consulting for successful collaboration. Our AI agent consulting encompasses determining the ideal AI agent type for your needs, selecting the appropriate LLM, identifying the required prompt engineering technique, defining the necessary tech stack, assessing integration options, and more.",
        img: Machine,
    },
    {
        title: "Custom AI Agent Development",
        description: "Leveraging advanced tools like AutoGen Studio and crewAI, we craft custom AI agents tailored to your unique business needs. Whether you need virtual assistance, task automation, or decision-making support, our team creates AI agents that are not only tailored to your current needs but are also flexible enough to adapt to future changes in your business landscape.",
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
    }
];

export default function AgentAIServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>AI Agent Development Services We Offer</h2>
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
