import React from 'react';
import ListImg1 from '../../../../assets/images/Decision-Transformer-Model-2.svg';
import ListImg2 from '../../../../assets/images/vision-transformer-model-1.png';
import ListImg3 from '../../../../assets/images/ACTION-TRANSFORMER-THE-NEXT-FRONTIER-IN-AI-DEVELOPMENT-SVG.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'Decision Transformer Model: Architecture, Use Cases, Applications and Advancements',
        text: 'Decision Transformers stand as a beacon of progress in the reinforcement learning landscape, poised to reshape how intelligent agents are trained and interact with their environments.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'How is a Vision Transformer model (ViT) built and implemented?',
        text: 'Unlike Convolutional Neural Networks (CNNs), ViT uses self-attention processes to extract information from pictures, making it an excellent tool for image identification and segmentation.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'Action Transformer Model: What is it, its applications, implementation, and a case study',
        text: 'AI-powered Action Transformers will revolutionize how we approach breakthroughs in drug design, engineering, and other fields by working with humans as teammates, making us more efficient, energized, and creative.',
        linkTo: '#'
    },
];

export default function HireTransformerInsights() {
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
