import React from 'react';
import ListImg1 from '../../../../assets/images/Generative-AI-2.png';
import ListImg2 from '../../../../assets/images/Generative-AI-in-Healthcare-1.svg';
import ListImg3 from '../../../../assets/images/HOW-TO-BUILD-A-GENERATIVE-AI-MODEL-FOR-IMAGE-SYNTHESIS-feature-1.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'Getting started with Generative AI: A beginner’s guide',
        text: 'By automating simple tasks, creating high-quality content, and even addressing complex medical issues, generative AI has already begun to revolutionize industries across the board.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'From diagnosis to treatment: Exploring the applications of generative AI in healthcare',
        text: 'Generative AI in healthcare refers to the application of generative AI techniques and models in various aspects of the healthcare industry.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'How to build a generative AI model for image synthesis?',
        text: 'With tools like Midjourney and DALL-E, image synthesis has become simpler and more efficient than before. Dive in deep to know more about the image synthesis process with generative AI.',
        linkTo: '#'
    },
];

export default function AIServiceInsights() {
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
