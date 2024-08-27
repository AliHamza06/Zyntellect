import React from 'react';
import ListImg1 from '../../../assets/images/Group-340.png';
import ListImg2 from '../../../assets/images/ai-for-product-design.png';
import ListImg3 from '../../../assets/images/synthetic-data.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'Generative AI in travel: Navigating the future of tailored tourism',
        text: 'Generative AI allows travel companies to provide real-time updates and personalized recommendations to travelers, guiding them through the complex world of travel information.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'AI for product design: Transforming the journey from data to design',
        text: 'While product design fundamentally remains a creative process fueled by human insights and ingenuity, designers are now harnessing the power of AI to elevate their creative processes and production methods.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'What is synthetic data and how to create it?',
        text: 'Synthetic data refers to artificially generated data that replicates the statistical properties and characteristics of real data without containing any identifiable or sensitive information.',
        linkTo: '#'
    },
];

export default function StableInsights() {
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
