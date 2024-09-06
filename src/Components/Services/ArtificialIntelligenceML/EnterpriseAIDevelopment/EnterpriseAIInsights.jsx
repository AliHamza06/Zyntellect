import React from 'react';
import ListImg1 from '../../../../assets/images/H2O-driverless-AI-platform.png';
import ListImg2 from '../../../../assets/images/LLM-for-structured-data.png';
import ListImg3 from '../../../../assets/images/causalens-ai.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'How AutoML is transforming AI: The Concept of ‘AI Creating AI’',
        text: 'AI creating AI” through AutoML is transforming the field, expanding beyond human-led processes to make AI development more accessible and efficient.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'Structured outputs in LLMs: Definition, techniques, applications, benefits',
        text: 'Structured outputs in large language models (LLMs) refer to the ability of these models to generate responses in specific, predefined formats rather than just free-form text.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'Causal AI: Importance, use cases, benefits, challenges and implementation strategies',
        text: 'Causal AI is a branch of artificial intelligence focused on understanding and determining cause-and-effect relationships rather than merely identifying patterns or correlations.',
        linkTo: '#'
    },
];

export default function EnterpriseAIInsights() {
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
