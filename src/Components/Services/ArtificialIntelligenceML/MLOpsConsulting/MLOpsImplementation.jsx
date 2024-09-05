import React from 'react'
import Machine from '../../../../assets/images/icon/aligning1.svg';
import DataAnalysis from '../../../../assets/images/icon/aligning2.svg';
import DomainSpecific from '../../../../assets/images/icon/aligning3.svg';
import AISolutions from '../../../../assets/images/icon/aligning4.svg';
import DomainSpecific2 from '../../../../assets/images/icon/aligning5.svg';
import AISolutions2 from '../../../../assets/images/icon/aligning6.svg';
import Machine2 from '../../../../assets/images/icon/elevate1.svg';
import DataAnalysis2 from '../../../../assets/images/icon/diverse9.svg';
import DomainSpecific3 from '../../../../assets/images/icon/elevate3.svg';
import AISolutions3 from '../../../../assets/images/icon/diverse11.svg';
import DomainSpecific4 from '../../../../assets/images/icon/diverse5.svg';
import AISolutions4 from '../../../../assets/images/icon/elevate6.svg';
import MLOpsProcess from '../../../../assets/images/MLOps-Process.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ourGeneratives = [
    {
        title: "Aligning Machine Learning Objectives With Business Goals",
        img: Machine,
        listDesc: [
            "Understanding the business goals and objectives of the organization.",
            "Defining the problem statement that needs to be solved using machine learning.",
            "Identifying the data sources and the data required for the machine learning model.",
            "Developing a plan for the building, testing, deploying, and monitoring of the machine learning model."
        ]
    },
    {
        title: "Data Preparation and Management",
        img: DataAnalysis,
        listDesc: [
            "Developing a program for performing offline extraction or batch fetching from the desired data source.",
            "Implementing an automated data validation process to ensure data cleanliness and adherence to a predefined schema.",
            "Utilizing an auto-distribution mechanism to split the validated data into separate training and validation datasets.",
            "Establishing a feature store as a repository for storing and organizing pre-existing features."
        ]
    },
    {
        title: "Model Training",
        img: DomainSpecific,
        listDesc: [
            "Choosing a lineup of storage-agnostic version control systems suitable for machine learning workflows.",
            "Integrating the chosen version control systems into the platform and configuring them appropriately.",
            "Verifying that metadata generated from new training runs are automatically committed to the appropriate version control system.",
            "Creating a metadata store to capture relevant information for further analysis."
        ]
    },
    {
        title: "Model Evaluation",
        img: AISolutions,
        listDesc: [
            "Establishing a framework for model monitoring and validation utilizing the selected toolkit.",
            "Enabling automated capturing of all essential performance data from each model run.",
            "Recording and storing all relevant details to facilitate easy reproducibility of results.",
            "Defining specific triggers for launching pre-training when the model performs below expectation."
        ]
    },
    {
        title: "Model Serving",
        img: DomainSpecific2,
        listDesc: [
            "Determining the most suitable framework for wrapping the model as an API service.",
            "Alternatively, selecting and configuring a container service for deployment.",
            "Establishing a production-ready repository for models.",
            "Creating a model registry to store all relevant metadata associated with each model."
        ]
    },
    {
        title: "Model Monitoring",
        img: AISolutions2,
        listDesc: [
            "Selecting the best-suited agent for real-time model monitoring.",
            "Configuring the agent to capture anomalies, detect concept drift and monitor model accuracy.",
            "Incorporating additional measures for estimating model resource consumption.",
            "Defining re-training triggers and configuring alerts accordingly."
        ]
    },

];

const hireZyntellect = [
    {
        title: "Banking and Finance",
        description: "Enhance your finance and banking business with our MLOps consulting services, elevating risk management, compliance oversight, fraud detection, and operational efficiency. Our tailored solutions leverage machine learning to drive smarter decision-making and improved financial outcomes.",
        img: Machine2,
        linkTo : "#"
    },
    {
        title: "Retail",
        description: "Efficiently deploy and oversee machine learning models to elevate customer interactions and streamline business operations. MLOps can offer tailored shopping experiences, better inventory control and optimized supply chain processes.",
        img: DataAnalysis2,
        linkTo : "#"
    },
    {
        title: "Healthcare",
        description: "Seamlessly integrate and manage machine learning models for enhanced patient care and operational efficiency. With MLOps, healthcare entities can elevate patient care outcomes, medical imaging accuracy, remote patient surveillance and proactive disease outbreak forecasting.",
        img: DomainSpecific3,
        linkTo : "#"
    },
    {
        title: "Supply Chain and Logistics",
        description: "Harness the power of ML to drive cost efficiency and elevate client satisfaction. With MLOps, experience transformative solutions in predictive demand analysis, efficient route planning, strategic supplier evaluation and advanced quality assurance.",
        img: AISolutions3,
        linkTo : "#"
    },
    {
        title: "Insurance",
        description: "Utilize our MLOps expertise to elevate your insurance business, optimizing risk evaluation, curbing expenses, and enriching client interactions. MLOps seamlessly improve areas like claim resolutions, product design and fraud detection.",
        img: DomainSpecific4,
        linkTo : "#"
    },
    {
        title: "Manufacturing",
        description: "Streamline the integration of machine learning models into existing manufacturing systems, boosting efficiency and reducing downtime. LeewayHertz helps you harness MLOps for optimizing predictive maintenance, quality control, demand forecasting and autonomous production in the manufacturing industry.",
        img: AISolutions4,
        linkTo : "#"
    }
];
export default function MLOpsImplementation() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our MLOps Implementation Process</h2>
                </div>
                <img src={MLOpsProcess} alt="" className='w-100'/>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard ourGenerativeLiCard">
                                <img src={ourGenerative.img} alt={ourGenerative.title} />
                                <h4>{ourGenerative.title}</h4>
                                <p>{ourGenerative.description}</p>
                                {ourGenerative.listDesc.length > 0 && (
                                    <ul className='extractCardUl'>
                                        {ourGenerative.listDesc.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Industries We Serve</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {hireZyntellect.map((item, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard  h-100">
                                <img src={item.img} alt={item.title} />
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <Link to={item.linkTo} className='leranMoreHref'>Learn More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
