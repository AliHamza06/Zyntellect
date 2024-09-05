import React from 'react';
import ListImg1 from '../../../../assets/images/AI-in-Investment-Analysis.png';
import ListImg2 from '../../../../assets/images/AI-Copilot.png';
import ListImg3 from '../../../../assets/images/visionOS-app-development.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'AI in investment analysis: Optimizing investment decisions with AI-driven analytics',
        text: 'AI in investment analysis transforms traditional approaches with its ability to process vast amounts of data, identify patterns, and make predictions.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'How to build an AI copilot for enterprises: A step-by-step guide',
        text: 'AI copilots simplify complex tasks and offer indispensable guidance and support, enhancing the overall user experience and propelling businesses towards their objectives effectively.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'Embracing spatial computing: visionOS app development for Vision Pro',
        text: 'visionOS is the operating system that the Apple Vision Pro runs on, and it is a derivative of iOS designed specifically for extended reality applications.',
        linkTo: '#'
    },
];

export default function MLOpsInsights() {
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
