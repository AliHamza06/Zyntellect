import React from 'react'
import Machine from '../../../assets/images/icon/Custom1.svg';
import DataAnalysis from '../../../assets/images/icon/Custom2.svg';
import DomainSpecific from '../../../assets/images/icon/Custom3.svg';
import AISolutions from '../../../assets/images/icon/Custom4.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ourGeneratives = [
    {
        title: "Custom Generative AI Application Development",
        description: "Empower your business with our custom-built generative AI applications like chatbots and question-answering tools. Designed to cater to your organization’s specific requirements, our custom apps help incorporate generative AI into your existing infrastructure, workflows, and systems with minimal disruption, allowing you to leverage the power of AI effortlessly.",
        img: Machine,
    },
    {
        title: "Generative AI Consultings",
        description: "We conduct a thorough evaluation of your existing systems, meticulously identify the optimal solutions, and offer our technical expertise to ensure seamless implementation and utilization of generative AI solutions. We provide valuable insights, best practices, and hands-on assistance to streamline the integration process and maximize the benefits of generative AI for your business.",
        img: DataAnalysis,
    },
    {
        title: "Generative AI Integration Into Workflows",
        description: "We help you streamline your business operations by seamlessly integrating your preferred generative AI applications into your workflows. Not sure which generative AI applications are best suited for your business? Our experienced team carefully analyzes your unique business requirements, providing expert recommendations on the most suitable generative AI tools to integrate into your systems.",
        img: DomainSpecific,
    },
    {
        title: "Ongoing Maintenance and Support",
        description: "Our commitment doesn’t end with the integration of generative AI tools into your business workflows. We provide unmatched maintenance and support services to ensure that your investment continues to deliver optimal value. Our responsive support and proactive maintenance approach, including regular system checks, performance monitoring, and issue resolution, keep your generative AI-powered workflows running smoothly.",
        img: AISolutions,
    }
];
export default function GenerativeAIServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Generative AI Integration Services</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={ourGenerative.img} alt={ourGenerative.title} />
                                <h4>{ourGenerative.title}</h4>
                                <p>{ourGenerative.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="driveInnovation driveInnovation2">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 d-lg-block d-none"></div>
                        <div className="col-xl-4 col-lg-4 col-md-7">
                            <div className='driveInnovationDesc'>
                                <p>Want to integrate Generative AI into your business? Integrate Generative AI with LeewayHertz's custom solutions to optimize workflows and drive innovation.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-5">
                            <div className="driveInnovationButton">
                                <Button variant='contained' className='getStartedBtn'>Get Started Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
