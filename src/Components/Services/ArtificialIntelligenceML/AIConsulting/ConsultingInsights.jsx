import React from 'react';
import ListImg1 from '../../../../assets/images/AI-change-management-1.png';
import ListImg2 from '../../../../assets/images/GENERATIVE-ADVERSARIAL-NETWORKS-GANS-svg.svg';
import ListImg3 from '../../../../assets/images/Generative-AI-Use-Cases-and-Applications-feature.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        imgSrc: ListImg1,
        title: 'AI in change management: Use Cases, applications, implementation and benefits',
        text: 'Integrating AI in change management processes has emerged as a game-changer, offering organizations unprecedented capabilities to navigate and thrive amidst transformational endeavors.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg2,
        title: 'Generative Adversarial Networks (GANs): Architecture and training process',
        text: 'Although the architecture and training process of Generative Adversarial Networks are complex, it is essential to understand them to optimize their performance for specific applications.',
        linkTo: '#'
    },
    {
        imgSrc: ListImg3,
        title: 'Generative AI: Use cases, applications, solutions and implementation',
        text: 'Generative AI demonstrates versatile applications across diverse industries, leveraging its capacity to create novel content, simulate human behavior, and generate innovative outputs based on learned patterns.',
        linkTo: '#'
    },
];

export default function ConsultingInsights() {
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
