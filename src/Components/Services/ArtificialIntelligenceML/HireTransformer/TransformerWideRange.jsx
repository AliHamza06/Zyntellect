import React from 'react';
import { Link } from 'react-router-dom';
import Machine from '../../../../assets/images/icon/wide1.svg';
import DataAnalysis from '../../../../assets/images/icon/wide2.svg';
import DomainSpecific from '../../../../assets/images/icon/wide3.svg';
import AISolutions from '../../../../assets/images/icon/wide4.svg';
import AIIntegration from '../../../../assets/images/icon/wide5.svg';
import Automotive from '../../../../assets/images/icon/wide6.svg';

export default function TransformerWideRange() {
    const industries = [
        { icon: Machine, title: 'Banking and Finance', link: '#' },
        { icon: DataAnalysis, title: 'Retail', link: '#' },
        { icon: DomainSpecific, title: 'Healthcare', link: '#' },
        { icon: AISolutions, title: 'Supply Chain and Logistics', link: '#' },
        { icon: AIIntegration, title: 'Insurance', link: '#' },
        { icon: Automotive, title: 'Automotive', link: '#' },
    ];

    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Action Transformer-based Development Services Cater to a Wide Range of Industries</h2>
                </div>
            </div>
            <div className="wide-array-industries marginSet">
                <div className="row justify-content-center">
                    {industries.map((industry, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                            <Link to={industry.link} className="industry-card text-center">
                                <img src={industry.icon} alt={industry.title} className="industry-icon" />
                                <h6 className="industry-title">{industry.title}</h6>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
