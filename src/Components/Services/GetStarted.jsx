import React from 'react';

// Image imports (commented out as they are not used directly here)
// import Machine from '../../assets/images/icon/Dedicated-Team.svg';
// import DataAnalysis from '../../assets/images/icon/Team-Extention.svg';
// import DomainSpecific from '../../assets/images/icon/Project-Based-Model.svg';
// import Kickoff from '../../assets/images/icon/Project-Based-Model.svg';

const GetStartedData = [
    {
        title: "1. Contact Us",
        description: "Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.",
        img: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/10/27020801/Contact-Us.svg",
    },
    {
        title: "2. Get a Consultation",
        description: "Get on a call with our team to know the feasibility of your project idea.",
        img: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/10/27020802/Get-a-Consultation.svg",
    },
    {
        title: "3. Get a Cost Estimate",
        description: "Based on the project requirements, we share a project proposal with budget and timeline estimates.",
        img: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/10/27020803/Get-aCost-Estimation.svg",
    },
    {
        title: "4. Project Kickoff",
        description: "Once the project is signed, we bring together a team from a range of disciplines to kick start your project.",
        img: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/10/27020804/Project-Kick-off.svg",
    }
];

export default function GetStarted() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0">
                    <h2 className='mb-3'>Get Started Today</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {GetStartedData.map((item, index) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard contactUsCard">
                                <object data={item.img} type="image/svg+xml" role="none"></object>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
