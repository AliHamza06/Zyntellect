import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { industriesData, insuranceData, manufacturingData, logisticsData, hospitalityData, retailData, healthcareData, consumerElectronicsData, startupData } from '../Dropdown/DropdownContent';
import IndustriesAccordion from '../AccordionCom/IndustriesAccordion';

const IndustriesDropdown = () => {
    const [activeTab, setActiveTab] = useState('Finance');

    const handleMouseOver = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="tab-container">
                <div className="tab">
                    <div
                        className={`tablinks ${activeTab === 'Finance' ? 'active' : ''}`}
                        data-type="Finance"
                        onMouseOver={() => handleMouseOver('Finance')}
                    >
                        Finance <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Insurance' ? 'active' : ''}`}
                        data-type="Insurance"
                        onMouseOver={() => handleMouseOver('Insurance')}
                    >
                        Insurance <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Manufacturing' ? 'active' : ''}`}
                        data-type="Manufacturing"
                        onMouseOver={() => handleMouseOver('Manufacturing')}
                    >
                        Manufacturing <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Logistics' ? 'active' : ''}`}
                        data-type="Logistics"
                        onMouseOver={() => handleMouseOver('Logistics')}
                    >
                        Logistics <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Hospitality' ? 'active' : ''}`}
                        data-type="Hospitality"
                        onMouseOver={() => handleMouseOver('Hospitality')}
                    >
                        Hospitality <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Retail' ? 'active' : ''}`}
                        data-type="Retail"
                        onMouseOver={() => handleMouseOver('Retail')}
                    >
                        Retail <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Healthcare' ? 'active' : ''}`}
                        data-type="Healthcare"
                        onMouseOver={() => handleMouseOver('Healthcare')}
                    >
                        Healthcare <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'ConsumerElectronics' ? 'active' : ''}`}
                        data-type="ConsumerElectronics"
                        onMouseOver={() => handleMouseOver('ConsumerElectronics')}
                    >
                        Consumer Electronics <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Startup' ? 'active' : ''}`}
                        data-type="Startup"
                        onMouseOver={() => handleMouseOver('Startup')}
                    >
                        Startup <i className="bi bi-caret-right-fill caretRight"></i>
                        
                    </div>
                </div>
                <div id="Finance" className={`tabcontent ${activeTab === 'Finance' ? 'active' : ''}`}>
                    <div className="row">
                        {industriesData.Finance.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Insurance" className={`tabcontent ${activeTab === 'Insurance' ? 'active' : ''}`}>
                    <div className="row">
                        {insuranceData.Insurance.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Manufacturing" className={`tabcontent ${activeTab === 'Manufacturing' ? 'active' : ''}`}>
                    <div className="row">
                        {manufacturingData.Manufacturing.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Logistics" className={`tabcontent ${activeTab === 'Logistics' ? 'active' : ''}`}>
                    <div className="row">
                        {logisticsData.Logistics.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Hospitality" className={`tabcontent ${activeTab === 'Hospitality' ? 'active' : ''}`}>
                    <div className="row">
                        {hospitalityData.Hospitality.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Retail" className={`tabcontent ${activeTab === 'Retail' ? 'active' : ''}`}>
                    <div className="row">
                        {retailData.Retail.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Healthcare" className={`tabcontent ${activeTab === 'Healthcare' ? 'active' : ''}`}>
                    <div className="row">
                        {healthcareData.Healthcare.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="ConsumerElectronics" className={`tabcontent ${activeTab === 'ConsumerElectronics' ? 'active' : ''}`}>
                    <div className="row">
                        {consumerElectronicsData.Consumer.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="Startup" className={`tabcontent ${activeTab === 'Startup' ? 'active' : ''}`}>
                    <div className="row">
                        {startupData.StartUp.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-12 mb-3 DropCol">
                                <div className="dropCard">
                                    <Link to={item.linkTo}>
                                        <img src={item.imgSrc} alt={item.linkText} />
                                    </Link>
                                    <Link to={item.linkTo}>{item.linkText}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="accordionContainer">
                <IndustriesAccordion />
            </div>
        </>
    );
};

export default IndustriesDropdown;
