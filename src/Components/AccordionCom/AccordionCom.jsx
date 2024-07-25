import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { serviceData } from '../../Components/Dropdown/DropdownContent';

function AccordionCom() {
  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey="0" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Generative AI</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Artificial Intelligence & ML</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Artificial Intelligence & ML</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Data Engineering</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Data Engineering</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Web3</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Web3</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Blockchain</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Blockchain</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Software Development</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Software Development</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Hire Developers</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Hire Developers</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Internet of Things (IoT)</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Internet of Things (IoT)</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCom;
