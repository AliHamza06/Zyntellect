import React from 'react';
import ListImg1 from '../../../assets/images/Customer-service-agent.png';
import ListImg2 from '../../../assets/images/ai-agents-in-finance.png';
import ListImg3 from '../../../assets/images/AI-in-Lending-Process.png';
import ListImg4 from '../../../assets/images/credit-risk-model-02.png';
import ListImg5 from '../../../assets/images/Build-an-AI-model-for-financial-document-processing.png';
import ListImg6 from '../../../assets/images/AI-in-Investment-Analysis.png';
import ListImg7 from '../../../assets/images/AI-in-financial-fraud-detection-1.png';
import ListImg8 from '../../../assets/images/ai-use-cases-in-wealth-management.png';
import ListImg9 from '../../../assets/images/ai-in-financial-planning-02-1.png';
import { Button, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const cardData = [
    {
        imgSrc: ListImg1,
        title: 'AI agent for customer service: Key capabilities, use cases, benefits and implementation',
    },
    {
        imgSrc: ListImg2,
        title: 'AI Agents for finance: Capabilities, applications and use cases, implementation, and benefits',
    },
    {
        imgSrc: ListImg3,
        title: 'AI in lending: Transforming financial decision-making',
    },
    {
        imgSrc: ListImg4,
        title: 'How to build credit risk models using machine learning?',
    },
    {
        imgSrc: ListImg5,
        title: 'AI for financial document processing: Enhancing accuracy and speed',
    },
    {
        imgSrc: ListImg6,
        title: 'AI in investment analysis: Optimizing investment decisions with AI-driven analytics',
    },
    {
        imgSrc: ListImg7,
        title: 'Financial fraud detection using machine learning models',
    },
    {
        imgSrc: ListImg8,
        title: 'AI in wealth management: Redefining financial planning',
    },
    {
        imgSrc: ListImg9,
        title: 'AI for financial planning: Use cases, benefits and development',
    },
];

export default function MarketingInsights() {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Related Insights
                </h2>
            </div>
            <div className="row mt-sm-3 mt-1">
                {cardData.map((card, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                        <div className="insightListCard insighCard relatedInsightCard">
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
