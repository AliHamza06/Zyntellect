import React from 'react';
import ListImg1 from '../../../../assets/images/HARNESSING-THE-CAPABILITIES-OF-CHATGPT-FOR-ENTERPRISE-SUCCESS-SVG.svg';
import ListImg2 from '../../../../assets/images/AI-in-fraud-detection.svg';
import ListImg3 from '../../../../assets/images/GenAI-for-Startups-Feature.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'ChatGPT for enterprise: Use Cases and Solutions',
        text: 'This article delves into the ways in which enterprises are utilizing ChatGPT to optimize their business processes and streamline workflows.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'AI in fraud detection: Fortifying businesses against ever-evolving threats',
        text: 'AI empowers fraud detection across industries, countering deception, ensuring secure transactions, and detecting complex fraudulent patterns.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'Generative AI for startups: Technologies, applications, benefits, implementation and development',
        text: 'With Generative AI, startups can infuse their products and services with fresh ideas, captivating their clients and setting themselves apart in a crowded market.',
        linkTo: '#'
    },
];

export default function AiDevelopInsights() {
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
                        <div className="insightListCard insighCard insighCardsHe" style={{ minHeight : "auto" }}>
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
