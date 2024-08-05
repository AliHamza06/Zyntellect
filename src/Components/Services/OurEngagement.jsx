import React from 'react'
import Machine from '../../assets/images/icon/Dedicated-Team.svg';
import DataAnalysis from '../../assets/images/icon/Team-Extention.svg';
import DomainSpecific from '../../assets/images/icon/Project-Based-Model.svg';


const EngagementModels = [
    {
        title: "Dedicated Development Team",
        description: "Our developers leverage cutting-edge cognitive technologies to deliver high-quality services and tailored solutions to our clients.",
        img: Machine,
    },
    {
        title: "Team Extension",
        description: "Our team extension model is designed to assist clients seeking to expand their teams with the precise expertise needed for their projects.",
        img: DataAnalysis,
    },
    {
        title: "Project-based Model",
        description: "Our project-oriented approach, supported by our team of software development specialists, is dedicated to fostering client collaboration and achieving specific project objectives.",
        img: DomainSpecific,
    }
];

export default function OurEngagement() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0">
                    <h2 className='mb-3'>Our Engagement Models</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {EngagementModels.map((EngagementModel, index) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={EngagementModel.img} alt={EngagementModel.title} />
                                <h4>{EngagementModel.title}</h4>

                                <p>{EngagementModel.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
