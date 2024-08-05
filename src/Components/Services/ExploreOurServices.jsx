import React from 'react'
import Machine from '../../assets/images/icon/our7.svg';
import DataAnalysis from '../../assets/images/icon/our8.svg';
import DomainSpecific from '../../assets/images/icon/our9.svg';
import AISolutions from '../../assets/images/icon/our10.svg';
import AIIntegration from '../../assets/images/icon/our11.svg';
import UpgradeMaintenance from '../../assets/images/icon/our12.svg';
import IncreasedAutomation from '../../assets/images/icon/our13.svg';
import IncreasedProductivity from '../../assets/images/icon/our14.svg';
import EnhancedCreativity from '../../assets/images/icon/our15.svg';
import CostOptimization from '../../assets/images/icon/our16.svg';
import ProcessOur from '../../assets/images/Process-Our-Engineers-Follow-cropped.svg'
import ProcessOur2 from '../../assets/images/Developers-Follow.svg'

import { Link } from 'react-router-dom';

const explores = [
    {
        title: "AI Development",
        description: "Explore –>",
    },
    {
        title: "AI Consulting",
        description: "Explore –>",
    },
    {
        title: "Generative AI Consulting",
        description: "Explore –>",
    },
    {
        title: "Enterprise AI Development",
        description: "Explore –>",
    },
    {
        title: "Machine Learning Development",
        description: "Explore –>",
    },
    {
        title: "ChatGPT Developers",
        description: "Explore –>",
    },
];

export default function ExploreOurServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0">
                    <h2 className='mb-3'>Explore Our Services</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {explores.map((explore, index) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard exploreCard">
                                <Link to="#"><h4>{explore.title}</h4></Link>
                                <Link to="#"><p>{explore.description}</p></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
