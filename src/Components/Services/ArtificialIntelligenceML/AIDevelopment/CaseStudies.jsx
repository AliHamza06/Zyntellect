import React from 'react';
import ListImg1 from '../../../../assets/images/llm.png';
import ListImg2 from '../../../../assets/images/Ai-Doctor.png';
import ListImg3 from '../../../../assets/images/LLM3.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'LLM App for Wine Recommendation – Achieved a 60% increase in accuracy for personalized wine recommendations',
        text: 'AI development , GenAI development',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'AI-powered Medical Assistant – 2x faster decision-making',
        text: 'AI development, GenAI development',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'LLM-powered App for Compliance and Security Access – 60% faster information access',
        text: 'AI development',
        linkTo: '#'
    },
];

export default function CaseStudies() {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                Artificial Intelligence Case studies
                </h2>
            </div>
            <div className="row mt-sm-3 mt-1">
                {cardData.map((card, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                        <Link href={card.linkTo} style={{ textDecoration : "none" }}>
                        <div className="insightListCard insighCard insighCardsHe" style={{ minHeight : "auto" }}>
                            <div className=''>
                                    <img src={card.imgSrc} alt={card.title} />
                                <p>{card.text}</p>
                                    <h6>{card.title}</h6>
                            </div>
                            <Button 
                                variant='contained' 
                                className='readMoreBtn'
                                href={card.linkTo}
                            >
                                Read more
                            </Button>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
