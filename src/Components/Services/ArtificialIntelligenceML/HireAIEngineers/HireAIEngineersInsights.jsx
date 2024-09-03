import React from 'react';
import ListImg1 from '../../../../assets/images/AI-in-IT.svg';
import ListImg2 from '../../../../assets/images/Workplace-AI.png';
import ListImg3 from '../../../../assets/images/Next-best-action-AI.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'AI use cases in information technology',
        text: 'AI redefines IT operations by automating tasks, optimizing workflows, & boosting efficiency. Also, it reshapes strategies with data insights & innovation.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'AI in the workplace: Use cases, applications, development and implementations',
        text: 'As AI continues to evolve, its integration into the workplace is not just about technological adoption but also about fostering a culture of continuous learning and adaptation.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'From insights to strategy: Next best action AI and its business impact',
        text: 'AI can consolidate various data sources into a single customer profile and use advanced analytics to determine the optimal response to individual behaviors, often referred to as the Next Best Action (NBA).',
        linkTo: '#'
    },
];

export default function HireAIEngineersInsights() {
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
