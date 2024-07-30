import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../AccordionCom/AccordionCom';
import { serviceData } from './DropdownContent'
import { useNavigate } from 'react-router-dom';
const ServiceDropdown = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Generative');

    const handleMouseOver = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="tab-container">
                <div className="tab">
                    <div onClick={() => (navigate('/generative-ai-development-company'))}
                        className={`tablinks ${activeTab === 'Generative' ? 'active' : ''}`}
                        data-type="Generative"
                        onMouseOver={() => handleMouseOver('Generative')}
                    >
                            Generative AI
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Artificial' ? 'active' : ''}`}
                        data-type="Artificial"
                        onMouseOver={() => handleMouseOver('Artificial')}
                    >
                        Artificial Intelligence & ML
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Engineering' ? 'active' : ''}`}
                        data-type="Engineering"
                        onMouseOver={() => handleMouseOver('Engineering')}
                    >
                        Data Engineering
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Web3' ? 'active' : ''}`}
                        data-type="Web3"
                        onMouseOver={() => handleMouseOver('Web3')}
                    >
                        Web3
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Blockchain' ? 'active' : ''}`}
                        data-type="Blockchain"
                        onMouseOver={() => handleMouseOver('Blockchain')}
                    >
                        Blockchain
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'SoftwareDevelopment' ? 'active' : ''}`}
                        data-type="SoftwareDevelopment"
                        onMouseOver={() => handleMouseOver('SoftwareDevelopment')}
                    >
                        Software Development
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'HireDevelopers' ? 'active' : ''}`}
                        data-type="HireDevelopers"
                        onMouseOver={() => handleMouseOver('HireDevelopers')}
                    >
                        Hire Developers
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'IoT' ? 'active' : ''}`}
                        data-type="IoT"
                        onMouseOver={() => handleMouseOver('IoT')}
                    >
                        Internet of Things (IoT)
                    </div>
                </div>
                <div id="Generative" className={`tabcontent ${activeTab === 'Generative' ? 'active' : ''}`}>
                    <div className="row">
                        {serviceData.Generative.map((item, index) => (
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

                <div id="Artificial" className={`tabcontent ${activeTab === 'Artificial' ? 'active' : ''}`}>
                    <h3>Artificial Intelligence & ML</h3>
                    <p>Pending</p>
                </div>

                <div id="Engineering" className={`tabcontent ${activeTab === 'Engineering' ? 'active' : ''}`}>
                    <h3>Data Engineering</h3>
                    <p>Pending</p>
                </div>

                <div id="Web3" className={`tabcontent ${activeTab === 'Web3' ? 'active' : ''}`}>
                    <h3>Web3</h3>
                    <p>Pending</p>
                </div>
                <div id="Blockchain" className={`tabcontent ${activeTab === 'Blockchain' ? 'active' : ''}`}>
                    <h3>Blockchain</h3>
                    <p>Pending</p>
                </div>

                <div id="SoftwareDevelopment" className={`tabcontent ${activeTab === 'SoftwareDevelopment' ? 'active' : ''}`}>
                    <h3>Software Development</h3>
                    <p>Pending</p>
                </div>
                <div id="HireDevelopers" className={`tabcontent ${activeTab === 'HireDevelopers' ? 'active' : ''}`}>
                    <h3>Hire Developers</h3>
                    <p>Pending</p>
                </div>
                <div id="IoT" className={`tabcontent ${activeTab === 'IoT' ? 'active' : ''}`}>
                    <h3>Internet of Things (IoT)</h3>
                    <p>Pending</p>
                </div>

            </div>
            <div className="accordionContainer">
                <Accordion />
            </div>

        </>
    );
};

export default ServiceDropdown;
