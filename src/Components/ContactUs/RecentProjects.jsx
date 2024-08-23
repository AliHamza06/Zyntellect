import React from 'react';
import Forbes from '../../assets/images/Scrut-ourwork-image.png';
import Insight from '../../assets/images/LLM-App-workpage-image.png';
import Entrepreneur from '../../assets/images/Geospatial-Data-Analysis-feature.png';
import Generative from '../../assets/images/San_Francisco.png';
import NewYork from '../../assets/images/NewYork_Location-1.png';
import Chicago from '../../assets/images/Chicago.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const projectData = [
    {
        image: Forbes,
        title: 'AI App for Compliance and Security Access',
        description: 'GenAI · App',
        buttonText: 'Read More',
        link: '#',
    },
    {
        image: Insight,
        title: 'AI Application for Safer Machinery Troubleshooting',
        description: 'GenAI · App',
        buttonText: 'Read More',
        link: '#',
    },
    {
        image: Entrepreneur,
        title: 'Geospatial Data Analysis',
        description: 'Data Analysis',
        buttonText: 'Read More',
        link: '#',
    },
];
const ourOffices = [
    {
        image: Generative,
        title: 'San Francisco',
        description: '95 Third Street',
        location: "San Francisco, CA 94103",
    },
    {
        image: NewYork,
        title: 'New York',
        description: '330 Muttontown Eastwood Rd',
        location: "Syosset, NY 11791",
    },
    {
        image: Chicago,
        title: 'Chicago',
        description: '825 S. Waukegan Road',
        location: "Lake Forest, IL 60045",
    },
];
export default function RecentProjects() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Recent Projects</h2>
                </div>
            </div>
            <div className="marginSet">
                <div className="">
                    <div className="row">
                        {projectData.map((project, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4" key={index}>
                                <div className="projectCard">
                                    <Link to={project.link}>
                                        <img src={project.image} alt="News Image" className='w-100' />
                                    </Link>
                                    <div className='newsCardContent'>
                                        <p className='mb-2'>{project.description}</p>
                                        <Link to={project.link}><h6>{project.title}</h6></Link>
                                        <div className='newsCardFooter'>
                                            <Link to={project.link}>
                                                <Button variant='contained'>{project.buttonText}</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Offices</h2>
                </div>
            </div>
            <div className="marginSet">
                <div className="">
                    <div className="row">
                        {ourOffices.map((ourOffice, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-4" key={index}>
                                <div className="projectCard">
                                    <img src={ourOffice.image} alt="News Image" className='w-100' />
                                    <div className='newsCardContent'>
                                        <h6>{ourOffice.title}</h6>
                                        <p className='mb-2'>{ourOffice.description}</p>
                                        <p>{ourOffice.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
