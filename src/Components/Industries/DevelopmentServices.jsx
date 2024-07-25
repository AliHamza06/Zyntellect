import React from 'react';
import Building from '../../assets/images/icon/icon9.svg';
import Custom from '../../assets/images/icon/icon10.svg';
import Machine from '../../assets/images/icon/icon8.svg';
import Migration from '../../assets/images/icon/icon11.svg';
import DevelopmentIntegration from '../../assets/images/icon/icon12.svg';
import Maintenance from '../../assets/images/icon/icon13.svg';
const weOffers = [
    {
        title: "Consulting Building",
        description: "Navigate the complexities of AI integration with our expert consultation. We don’t just develop AI solutions; we strategize their alignment with your enterprise goals, ensuring optimal impact and sustainable growth.",
        img: Building,
    },
    {
        title: "Custom SaaS  Development",
        description: "We employ advanced tools and technologies to craft secure and future-ready SaaS solutions. With expertise in both multi-tenant and single-tenant architectures, we deliver solutions that are not only scalable but also tailored to meet clients’ specific needs.",
        img: Custom,
    },
    {
        title: "UI/UX Design",
        description: "Our comprehensive UI/UX design services encompass persona development, user journey mapping, wireframing, and usability testing for SaaS solutions. Our UX designers meticulously build intuitive experiences.",
        img: Machine,
    },
    {
        title: "Migration to SaaS",
        description: "We expertly convert your on-premise software into a robust and scalable subscription-based SaaS model, ensuring enhanced scalability and increased flexibility. Our expert team manages all facets of the software migration process.",
        img: Migration,
    },
    {
        title: "API Development Integration",
        description: "Our team builds robust APIs that seamlessly connect your SaaS product with external data sources and services, allowing you to extend functionalities, improve data exchange, and create a more connected user experience. ",
        img: DevelopmentIntegration,
    },
    {
        title: "Support and Maintenance",
        description: "Our dedicated team provides proactive maintenance to identify and rectify potential issues before they affect your users. We offer ongoing bug fixes, security updates, and performance optimizations to keep your SaaS application running smoothly and efficiently.",
        img: Maintenance,
    },
];

export default function DevelopmentServices() {
    return (
        <>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                SAAS Development Services <br className='d-sm-block d-none'/> We offer
                </h2>
            </div>
            <div className="row mt-sm-3 mt-1">
                {weOffers.map((weOffer, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                        <div className="extractCard">
                            <img src={weOffer.img} alt={weOffer.title} />
                            <h4>{weOffer.title}</h4>
                            <p>{weOffer.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    );
}
