import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../Dropdown/DropdownContent';
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
                        Finance 
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Insurance' ? 'active' : ''}`}
                        data-type="Insurance"
                        onMouseOver={() => handleMouseOver('Insurance')}
                    >
                        Insurance
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Manufacturing' ? 'active' : ''}`}
                        data-type="Manufacturing"
                        onMouseOver={() => handleMouseOver('Manufacturing')}
                    >
                        Manufacturing
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Logistics' ? 'active' : ''}`}
                        data-type="Logistics"
                        onMouseOver={() => handleMouseOver('Logistics')}
                    >
                        Logistics
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Hospitality' ? 'active' : ''}`}
                        data-type="Hospitality"
                        onMouseOver={() => handleMouseOver('Hospitality')}
                    >
                        Hospitality
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Retail' ? 'active' : ''}`}
                        data-type="Retail"
                        onMouseOver={() => handleMouseOver('Retail')}
                    >
                        Retail
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Healthcare' ? 'active' : ''}`}
                        data-type="Healthcare"
                        onMouseOver={() => handleMouseOver('Healthcare')}
                    >
                        Healthcare
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'ConsumerElectronics' ? 'active' : ''}`}
                        data-type="ConsumerElectronics"
                        onMouseOver={() => handleMouseOver('ConsumerElectronics')}
                    >
                        Consumer Electronics
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Startup' ? 'active' : ''}`}
                        data-type="Startup"
                        onMouseOver={() => handleMouseOver('Startup')}
                    >
                        Startup
                        <span className="mega-indicator" data-has-click-event="true"></span>
                    </div>
                </div>
                <div id="Finance" className={`tabcontent ${activeTab === 'Finance' ? 'active' : ''}`}>
                    <div className="row">
                        {industriesData.Finance && industriesData.Finance.map((item, index) => (
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
                    <h3>Insurance</h3>
                    <p>Explore our Insurance solutions and services.</p>
                </div>

                <div id="Manufacturing" className={`tabcontent ${activeTab === 'Manufacturing' ? 'active' : ''}`}>
                    <h3>Manufacturing</h3>
                    <p>Discover our Manufacturing services and solutions.</p>
                </div>

                <div id="Logistics" className={`tabcontent ${activeTab === 'Logistics' ? 'active' : ''}`}>
                    <h3>Logistics</h3>
                    <p>Learn about our Logistics offerings.</p>
                </div>

                <div id="Hospitality" className={`tabcontent ${activeTab === 'Hospitality' ? 'active' : ''}`}>
                    <h3>Hospitality</h3>
                    <p>Explore our Hospitality services.</p>
                </div>

                <div id="Retail" className={`tabcontent ${activeTab === 'Retail' ? 'active' : ''}`}>
                    <h3>Retail</h3>
                    <p>See our Retail solutions.</p>
                </div>

                <div id="Healthcare" className={`tabcontent ${activeTab === 'Healthcare' ? 'active' : ''}`}>
                    <h3>Healthcare</h3>
                    <p>Learn about our Healthcare services.</p>
                </div>

                <div id="ConsumerElectronics" className={`tabcontent ${activeTab === 'ConsumerElectronics' ? 'active' : ''}`}>
                    <h3>Consumer Electronics</h3>
                    <p>Discover our Consumer Electronics solutions.</p>
                </div>

                <div id="Startup" className={`tabcontent ${activeTab === 'Startup' ? 'active' : ''}`}>
                    <h3>Startup</h3>
                    <p>Supporting startups with technology solutions.</p>
                </div>
            </div>

            <div className="accordionContainer">
                <IndustriesAccordion/>
            </div>
        </>
    );
};

export default IndustriesDropdown;
