import React from 'react';
import ListImg1 from '../../../assets/images/Generative-AI-in-supply-chain.svg';
import ListImg2 from '../../../assets/images/Generative-AI-in-Asset-Management-1.png';
import ListImg3 from '../../../assets/images/GENERATIVE-AI-A-COMPREHENSIVE.png';
import { Button, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const cardData = [
    {
        imgSrc: ListImg1,
        title: 'Generative AI in supply chain: Use cases, benefits and development',
        text: 'Incorporating generative AI promises to be a game-changer for supply chain management, propelling it into an era of unprecedented innovation.',
    },
    {
        imgSrc: ListImg2,
        title: 'Generative AI in asset management: Redefining decision-making in finance',
        text: 'Generative AI is reshaping asset management by incorporating advanced predictive capabilities, fundamentally altering decision-making in finance for more informed investments.',
    },
    {
        imgSrc: ListImg3,
        title: 'Generative AI tech stack: Frameworks, infrastructure, models and applications',
        text: 'A well-implemented generative AI tech stack can help businesses streamline their workflows, reduce costs, and improve overall efficiency.',
    },
];

export default function EngineeringInsight() {
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
                        <div className="insightListCard insighCard insighCard2">
                            <div className=''>
                                <img src={card.imgSrc} alt="" />
                                <h6>{card.title}</h6>
                                <p>{card.text}</p>
                            </div>
                            <Button variant='contained' className='readMoreBtn'>Read more</Button>
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
