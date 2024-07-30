import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { industriesData } from '../../Components/Dropdown/DropdownContent';

function IndustriesAccordion() {
  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey="0" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Finance</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Insurance</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Insurance</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Manufacturing</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Manufacturing</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Logistics</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Logistics</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Hospitality</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Hospitality</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Retail</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Retail</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Retail</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Retail</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Consumer Electronics</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Consumer Electronics</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Startup</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          <p>Startup</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default IndustriesAccordion;
