import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../AccordionCom/AccordionCom';
import { serviceData, artificialMl, dataEngineering, web3, blockChainData, softwareData, hireDevelopersData, iotdata } from './DropdownContent'
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
                        Generative AI <i className="bi bi-caret-right-fill caretRight"></i>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Artificial' ? 'active' : ''}`}
                        data-type="Artificial"
                        onMouseOver={() => handleMouseOver('Artificial')}
                    >
                        Artificial Intelligence & ML <i className="bi bi-caret-right-fill caretRight"></i>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Engineering' ? 'active' : ''}`}
                        data-type="Engineering"
                        onMouseOver={() => handleMouseOver('Engineering')}
                    >
                        Data Engineering <i className="bi bi-caret-right-fill caretRight"></i>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Web3' ? 'active' : ''}`}
                        data-type="Web3"
                        onMouseOver={() => handleMouseOver('Web3')}
                    > 
                        Web3 <i className="bi bi-caret-right-fill caretRight"></i>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'Blockchain' ? 'active' : ''}`}
                        data-type="Blockchain"
                        onMouseOver={() => handleMouseOver('Blockchain')}
                    >
                        Blockchain <i className="bi bi-caret-right-fill caretRight"></i>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'SoftwareDevelopment' ? 'active' : ''}`}
                        data-type="SoftwareDevelopment"
                        onMouseOver={() => handleMouseOver('SoftwareDevelopment')}
                    >
                        Software Development <i className="bi bi-caret-right-fill caretRight"></i>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'HireDevelopers' ? 'active' : ''}`}
                        data-type="HireDevelopers"
                        onMouseOver={() => handleMouseOver('HireDevelopers')}
                    >
                        Hire Developers <i className="bi bi-caret-right-fill caretRight"></i>
                    </div>
                    <div
                        className={`tablinks ${activeTab === 'IoT' ? 'active' : ''}`}
                        data-type="IoT"
                        onMouseOver={() => handleMouseOver('IoT')}
                    >
                        Internet of Things (IoT) <i className="bi bi-caret-right-fill caretRight"></i>
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
                    <div className="row">
                        {artificialMl.Artificial.map((item, index) => (
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

                <div id="Engineering" className={`tabcontent ${activeTab === 'Engineering' ? 'active' : ''}`}>
                    <div className="row">
                        {dataEngineering.Engineering.map((item, index) => (
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

                <div id="Web3" className={`tabcontent ${activeTab === 'Web3' ? 'active' : ''}`}>
                    <div className="row">
                        {web3.Web3.map((item, index) => (
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
                <div id="Blockchain" className={`tabcontent ${activeTab === 'Blockchain' ? 'active' : ''}`}>
                    <div className="row">
                        {blockChainData.BlockChain.map((item, index) => (
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

                <div id="SoftwareDevelopment" className={`tabcontent ${activeTab === 'SoftwareDevelopment' ? 'active' : ''}`}>
                    <div className="row">
                        {softwareData.Software.map((item, index) => (
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
                <div id="HireDevelopers" className={`tabcontent ${activeTab === 'HireDevelopers' ? 'active' : ''}`}>
                    <div className="row">
                        {hireDevelopersData.HireDeveloper.map((item, index) => (
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
                <div id="IoT" className={`tabcontent ${activeTab === 'IoT' ? 'active' : ''}`}>
                <div className="row">
                        {iotdata.Iot.map((item, index) => (
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
                <Accordion />
            </div>

        </>
    );
};

export default ServiceDropdown;
