import React from 'react';
import ListImg1 from '../../../assets/images/Build-a-generative-AI-solution.svg';
import ListImg2 from '../../../assets/images/HARNESSING-THE-CAPABILITIES-OF-CHATGPT-FOR-ENTERPRISE-SUCCESS-SVG.svg';
import ListImg3 from '../../../assets/images/Generative-AI-Use-Cases-and-Applications-feature.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'How to build a generative AI solution: A step-by-step guide',
        text: 'Generative AI has the potential to transform industries and bring about innovative solutions, making it a key differentiator for businesses looking to stay ahead of the curve.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'ChatGPT for enterprise: Use Cases and Solutions',
        text: 'This article delves into the ways in which enterprises are utilizing ChatGPT to optimize their business processes and streamline workflows.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'Generative AI: Use cases, applications, solutions and implementation',
        text: 'Generative AI demonstrates versatile applications across diverse industries, leveraging its capacity to create novel content, simulate human behavior, and generate innovative outputs based on learned patterns.',
        linkTo: '#'
    },
];

export default function ChatGptInsights() {
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
                        <div className="insightListCard insighCard insighCardsHe">
                            <div className=''>
                                <Link href={card.linkTo}>
                                    <img src={card.imgSrc} alt={card.title} />
                                </Link>
                                <Link href={card.linkTo}>
                                    <h6>{card.title}</h6>
                                </Link>
                                <p>{card.text}</p>
                            </div>
                            <Button 
                                variant='contained' 
                                className='readMoreBtn'
                                href={card.linkTo}
                            >
                                Read more
                            </Button>
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
