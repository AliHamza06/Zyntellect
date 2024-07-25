import React from 'react';
import Building from '../../assets/images/icon/icon14.svg';
import Custom from '../../assets/images/icon/icon15.svg';
import Machine from '../../assets/images/icon/icon16.svg';
import Migration from '../../assets/images/icon/icon17.svg';
const weChooses = [
    {
        title: " SaaS Architecture",
        description: "We excel in building solutions with both multi-tenant and single-tenant architectures, optimizing security, cost-efficiency, and scalability.",
        img: Building,
    },
    {
        title: "Customized Solutions",
        description: "We understand that every business is unique, so we take a tailored approach to SaaS development.",
        img: Custom,
    },
    {
        title: "End-to-end Services",
        description: "From ideation and design to development, testing, and integration, we offer comprehensive end-to-end services.",
        img: Machine,
    },
    {
        title: "Post-launch Support",
        description: "Our commitment to your success doesn’t end with the launch of your SaaS solution. ",
        img: Migration,
    }
];

export default function WhyChoose() {
    return (
        <>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                Why Choose Zyntellect for Your Next SaaS <br className='d-sm-block d-none'/> Development Project?
                </h2>
            </div>
            <div className="row mt-sm-3 mt-1">
                {weChooses.map((weChoose, index) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-sm-5 mt-4" key={index}>
                        <div className="extractCard">
                            <img src={weChoose.img} alt={weChoose.title} />
                            <h4>{weChoose.title}</h4>
                            <p>{weChoose.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    );
}
