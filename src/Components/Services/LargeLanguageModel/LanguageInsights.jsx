import React from 'react';
import ListImg1 from '../../../assets/images/Large-Multimodal-Models-1.png';
import ListImg2 from '../../../assets/images/Group-94.svg';
import ListImg3 from '../../../assets/images/AI-in-financial-fraud-detection-1.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'Large Multimodal Models: Transforming AI with cross-modal integration',
        text: 'Large multimodal models (LMMs) represent a significant advancement in artificial intelligence, enabling AI systems to process and comprehend multiple types of data modalities such as text, images, audio, and video.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'How to use LLMs for creating a content-based recommendation system for entertainment platforms?',
        text: 'Content-based recommendation systems leverage the intrinsic features of items (such as movies, songs, or books) to make personalized suggestions.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'Financial fraud detection using machine learning models',
        text: 'As we navigate the complexities of financial fraud, the role of machine learning emerges not just as a tool but as a transformative force, reshaping the landscape of fraud detection and prevention.',
        linkTo: '#'
    },
];

export default function LanguageInsights() {
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
