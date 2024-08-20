import React from 'react';
import ListImg1 from '../../../assets/images/AI-TRiSM-feature.png';
import ListImg2 from '../../../assets/images/AI-Agents-for-Legal-Documents-feature.png';
import ListImg3 from '../../../assets/images/AI-Agent-for-Knowledge-Management-feature.png';
import { Button, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const cardData = [
    {
        imgSrc: ListImg1,
        title: 'Exploring AI TRiSM: Need, pillars, framework, use cases, implementation, and future scope',
        text: 'AI TRiSM helps understand and mitigate the risks associated with AI, ensuring compliance with evolving regulations and maintaining the integrity and security of AI systems.',
    },
    {
        imgSrc: ListImg2,
        title: 'AI agents for legal document management: Key components, applications and use cases, benefits, and implementation',
        text: 'AI agents offer a multitude of benefits for legal document management, transforming how legal professionals handle tasks such as document review, drafting, compliance checks, and legal research.',
    },
    {
        imgSrc: ListImg3,
        title: 'AI agent for knowledge management: Key capabilities, use cases and applications, benefits and implementation',
        text: 'AI agents in knowledge management are pivotal tools designed to transform how organizations handle and utilize information and expertise.',
    },
];

export default function HireInsight() {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Insights
                </h2>
            </div>
            <div className="row mt-sm-3 mt-1">
                {cardData.map((card, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                        <div className="insightListCard insighCard insighCard2">
                            <div className=''>
                                <img src={card.imgSrc} alt="" />
                                <h6>{card.title}</h6>
                                <p>{card.text}</p>
                            </div>
                            <Button variant='contained' className='readMoreBtn'>Read more</Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='d-flex justify-content-center showAllInsight'>
                <Button variant='contained' className='learnMoreBtn2'>Show all insights</Button>
            </div>
        </div>
    );
}
