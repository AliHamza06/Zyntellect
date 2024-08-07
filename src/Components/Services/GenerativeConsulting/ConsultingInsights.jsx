import React from 'react';
import ListImg1 from '../../../assets/images/Multimodal-Model-2.png';
import ListImg2 from '../../../assets/images/AI-in-IT.svg';
import ListImg3 from '../../../assets/images/Conversational-AI.svg';
import { Button, IconButton } from '@mui/material';
const cardData = [
    {
        imgSrc: ListImg1,
        title: 'The future of AI: How multimodal models are leading the way',
        text: 'The emergence of multimodal AI and the release of GPT-4 mark a significant turning point in the field of AI, enabling us to process and integrate inputs from multiple modalities.',
    },
    {
        imgSrc: ListImg2,
        title: 'AI use cases in information technology',
        text: 'AI redefines IT operations by automating tasks, optimizing workflows, & boosting efficiency. Also, it reshapes strategies with data insights & innovation.',
    },
    {
        imgSrc: ListImg3,
        title: 'Conversational AI: Use cases, types and solution',
        text: 'Conversational AI is a subset of artificial intelligence that enables human-like interactions between computers and humans using natural language.',
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
                        <div className="insightListCard insighCard">
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
