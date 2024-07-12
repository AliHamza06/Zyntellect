import React from 'react';
import Banking from '../../assets/images/industries/01.jpg.svg';
import Technology from '../../assets/images/industries/02.jpg.svg';
import StartUps from '../../assets/images/industries/03.jpg.svg';
import HealthCare from '../../assets/images/industries/08.jpg.svg';
import Retail from '../../assets/images/industries/04.jpg.svg';
import FreightLogistics from '../../assets/images/industries/05.jpg.svg';
import Manufacturing from '../../assets/images/industries/06.jpg.svg';
import ConsumerElectronics from '../../assets/images/industries/07.jpg.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { IconButton, Button } from '@mui/material';

const cardData = [
    { image: Banking, title: 'Banking and Finance' },
    { image: Technology, title: 'Technology' },
    { image: StartUps, title: 'Start-ups' },
    { image: HealthCare, title: 'Health care' },
    { image: Retail, title: 'Retail and E-commerce' },
    { image: FreightLogistics, title: 'Freight & Logistics' },
    { image: Manufacturing, title: 'Manufacturing' },
    { image: ConsumerElectronics, title: 'Consumer Electronics' },
];

const Card = ({ image, title }) => (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-md-5 mt-4">
        <div className="industriesCard">
            <img src={image} alt={title} />
            <div className="cardFooter">
                <h4>{title}</h4>
                <IconButton>
                    <ArrowOutwardIcon />
                </IconButton>
            </div>
        </div>
    </div>
);

export default function IndustriesCreative() {
    return (
        <div className="manageWidth">
            <div className="mainHeading">
                <h2>Industries</h2>
                <p>Redefining Industries with Creative Software Solutions</p>
            </div>
            <div className="row mt-sm-4 mt-3">
                {cardData.map((card, index) => (
                    <Card key={index} image={card.image} title={card.title} />
                ))}
            </div>
            <div className='ourServicesContent align-items-center mt-sm-5 mt-4 '>
                <Button>See more</Button>
            </div>
        </div>
    );
}
