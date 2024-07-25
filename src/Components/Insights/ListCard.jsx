import React from 'react';
import ListImg1 from '../../assets/images/listImg1.svg';
import ListImg2 from '../../assets/images/ListImg2.svg';
import ListImg3 from '../../assets/images/ListImg3.svg';
import ListImg4 from '../../assets/images/ListImg4.svg';
import ListImg5 from '../../assets/images/ListImg5.svg';
import ListImg6 from '../../assets/images/ListImg6.svg';
import { Button, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const cardData = [
    {
        imgSrc: ListImg1,
        text: 'AI agents for retail and e-commerce: Capabilities, components, use cases, implementation, and benefits',
    },
    {
        imgSrc: ListImg2,
        text: 'Crafting an effective generative AI strategy: Steps, need, framework, best practices, and checklist',
    },
    {
        imgSrc: ListImg3,
        text: 'AI agents for insurance: Key components, applications and use cases, benefits, implementation and future trends',
    },
    {
        imgSrc: ListImg4,
        text: 'AI agent for sales: Key components, applications, capabilities, benefits and implementation',
    },
    {
        imgSrc: ListImg5,
        text: 'AI agents for hospitality: Components, capabilities, types, use cases, implementation, benefits and trends',
    },
    {
        imgSrc: ListImg6,
        text: 'GPT-4 Vision: Overview, capabilities, working models, use cases, applications and benefits',
    },
];

export default function ListCard() {
    return (
        <>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    List
                </h2>
            </div>
            <div className="row mt-sm-3 mt-1">
                {cardData.map((card, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                        <div className="insightListCard">
                            <div>
                                <img src={card.imgSrc} alt="" />
                                <p>{card.text}</p>
                            </div>
                            <Button variant='contained' className='readMoreBtn'>Read more</Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='next_prevBtnGroup'>
                <IconButton>
                    <ChevronLeftIcon className='chevronIcon'/>
                </IconButton>
                <IconButton className='btnActive'>
                    <ChevronRightIcon className='chevronIcon'/>
                </IconButton>
            </div>
        </>
    );
}
