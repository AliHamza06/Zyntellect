import React from 'react'
import Machine from '../../../assets/images/icon/vertical1.svg';
import DataAnalysis from '../../../assets/images/icon/vertical2.svg';
import DomainSpecific from '../../../assets/images/icon/vertical3.svg';
import AISolutions from '../../../assets/images/icon/vertical4.svg';
import Machine2 from '../../../assets/images/icon/vertical5.svg';
import DataAnalysis3 from '../../../assets/images/icon/vertical6.svg';
import DomainSpecific4 from '../../../assets/images/icon/vertical7.svg';
import AISolution5 from '../../../assets/images/icon/vertical8.svg';
import Machine6 from '../../../assets/images/icon/vertical9.svg';
import DataAnalysis7 from '../../../assets/images/icon/vertical10.svg';
import DomainSpecific8 from '../../../assets/images/icon/vertical11.svg';
import AISolution9 from '../../../assets/images/icon/vertical12.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const verticals = [
    {
        title: "Industry Verticals We Serve",
        description: "Our custom generative AI solutions and consulting service enable healthcare providers to offer enhanced patient care and ensure improved operational efficiency. With generative AI, healthcare providers can ensure diagnostic accuracy, predictive patient monitoring, and improved medical image interpretation, thwarting healthcare fraud considerably.",
        img: Machine,
    },
    {
        title: "Manufacturing",
        description: "Our generative AI consultancy service is designed to assist you in integrating generative AI into your manufacturing business. With generative AI solutions tailored to your unique needs, you can boost efficiency, productivity, customer satisfaction, and cost-effectiveness for your business, both internally and in your interactions with customers.",
        img: DataAnalysis,
    },
    {
        title: "Retail",
        description: "Our generative AI consulting for retail propels growth by personalizing customer experiences, optimizing inventory through AI, and creating unique in-store environments. Using predictive analytics, we help anticipate market trends to transform data into strategic action, enhancing efficiency, customer engagement, and sales for businesses.",
        img: DomainSpecific,
    },
    {
        title: "Supply Chain & Logistics",
        description: "As a specialized generative AI consultancy, we empower supply chain and logistics companies to optimize operations and drive efficiency. Our consultancy service focuses on data analysis, modeling, and algorithm selection, enabling real-time tracking, automated warehouse functions, and enhanced decision-making.",
        img: AISolutions,
    },
    {
        title: "Banking & Finance",
        description: "Our generative AI consulting services benefit banking and finance businesses by helping them adopt generative AI. With the right generative AI solutions, facilitating personalized financial advice, improved risk management, and automated customer support, paving the way for data-driven decisions and enhanced compliance.",
        img: Machine2,
    },
    {
        title: "Insurance",
        description: "Our generative AI consulting services enhance the insurance sector by automating underwriting, claims processing, and customer support and using real-time data analysis for effective decision-making, risk management, and improved compliance.",
        img: DataAnalysis3,
    },
    {
        title: "Travel & Tourism",
        description: "Our generative AI solutions offer a transformative advantage to businesses in the travel & tourism sector. Through personalized recommendations, instant customer support via chatbots, and data-driven insights, GenAI empowers companies to offer tailored travel packages, improve service quality, and make informed decisions.",
        img: DomainSpecific4,
    },
    {
        title: "Legal",
        description: "With our GenAI solutions, we empower law firms and legal professionals to streamline document generation, contract analysis, legal research, and do more. By enhancing accuracy, efficiency and productivity, our GenAI solutions enable legal practitioners to dedicate more time to strategic decision-making and client-focused activities.",
        img: AISolution5,
    },
    {
        title: "Hospitality",
        description: "Our generative AI solutions for hospitality enhance guest experiences and operational efficiency within the industry. Our specialized GenAI solutions offer a comprehensive range of capabilities from personalized recommendations to dynamic pricing and effective resource management, all designed to maximize profitability and deliver exceptional service.",
        img: Machine6,
    },
    {
        title: "Automotive",
        description: "With our GenAI solutions, we empower automotive businesses to optimize operations, enhance safety, and improve customer satisfaction. From faster vehicle design and predictive maintenance to supply chain optimization, our GenAI solutions will help drive efficiency, ensuring you stay ahead in this rapidly evolving industry.",
        img: DataAnalysis7,
    },
    {
        title: "E-commerce",
        description: "Our generative AI solutions for e-commerce drive sales and enhance customer experiences by personalizing product recommendations, optimizing pricing strategies, automating inventory management and more. With data-driven insights, we help businesses stay ahead in today’s competitive online marketplace.",
        img: DomainSpecific8,
    },
    {
        title: "Real Estate",
        description: "Our generative AI solutions provide a competitive edge for real estate businesses. From property valuation and market analysis to personalized property recommendations and virtual staging, our custom-built GenAI solutions help streamline operations, enhance customer experiences, and enable confident, data-driven decisions.",
        img: AISolution9,
    }
];

export default function IndustryVerticals() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Industry Verticals We Serve</h2>
                    <p className='text-center'>
                    Our generative AI consulting services cater to a wide range of industry verticals, helping businesses across diverse sectors harness the power of generative AI to drive innovation, optimize operations, and achieve their goals.
                    </p>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {verticals.map((vertical, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-4 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard VerticalsCard">
                                <img src={vertical.img} alt={vertical.title} />
                                <h4>{vertical.title}</h4>
                                <p>{vertical.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="marginSet">
                <div className="driveInnovation">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 d-lg-block d-none"></div>
                        <div className="col-xl-4 col-lg-4 col-md-7">
                            <div className='driveInnovationDesc'>
                                <p>Discover how generative AI can transform your operations. Drive innovation and productivity with Zyntellect's top-tier consulting and development services.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-5">
                            <div className="driveInnovationButton">
                                <Button variant='contained' className='getStartedBtn'>Get Started Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
