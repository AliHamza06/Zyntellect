import React from 'react'
import Machine from '../../../assets/images/icon/problem1.svg';
import DataAnalysis from '../../../assets/images/icon/problem2.svg';
import DomainSpecific from '../../../assets/images/icon/problem3.svg';
import AISolutions from '../../../assets/images/icon/problem4.svg';
import AIIntegration from '../../../assets/images/icon/problem5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/problem6.svg';
import CreativeDesign from '../../../assets/images/icon/critical7.svg';
import WorkflowAutomation from '../../../assets/images/icon/critical8.svg';
import AIIntegration2 from '../../../assets/images/icon/critical9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/banking10.svg';
import CreativeDesign2 from '../../../assets/images/icon/banking11.svg';
import IntegratProcess from '../../../assets/images/Stable-Diffusion-Model.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Problem Definition and Requirements Gathering",
        description: "This stage involves understanding the problem that Stable diffusion is supposed to solve and gathering requirements from stakeholders, such as the desired features, functionality, and performance expectations.",
        img: Machine,
    },
    {
        title: "Design and Planning",
        description: "This stage involves designing and planning the Stable diffusion solution, including the architecture and algorithms that will be used. This may involve conducting research, prototyping, and testing different approaches to find the best solution.",
        img: DataAnalysis,
    },
    {
        title: "Implementation",
        description: "This stage involves implementing the Stable diffusion solution using a programming language and relevant tools and frameworks. This may involve writing code, configuring software components, and integrating different systems as needed.",
        img: DomainSpecific,
    },
    {
        title: "Testing and Validation",
        description: "This stage involves testing and validating the Stable diffusion solution to ensure that it is functioning as expected. This may involve creating a testing environment, running test cases, and identifying and addressing any issues that arise.",
        img: AISolutions,
    },
    {
        title: "Deployment",
        description: "This stage involves deploying the Stable diffusion solution to a production environment, such as a server or cloud-based platform. This may involve configuring and optimizing the system for performance, scalability, and security.",
        img: AIIntegration,
    },
    {
        title: "Monitoring and Maintenance",
        description: "This stage involves monitoring the Stable diffusion solution in production to ensure that it is functioning as expected and addressing any issues that arise. This may involve updating the system with new features or improvements, troubleshooting issues, and performing routine maintenance tasks.",
        img: UpgradeMaintenance,
    }
];
export default function DiffusionModelProcess() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Stable Diffusion Model-powered Solutions Development Process</h2>
                </div>
                <img src={IntegratProcess} className='w-100' alt="" />
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={ourGenerative.img} alt={ourGenerative.title} />
                                <h4>{ourGenerative.title}</h4>
                                <p>{ourGenerative.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
