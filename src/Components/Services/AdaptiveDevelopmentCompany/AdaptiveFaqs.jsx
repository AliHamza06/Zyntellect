import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
export default function AdaptiveFaqs() {
    return (
        <div className='marginSet'>
            <div className='formSection'>
                <div className="mainHeroSection mt-0">
                    <h2 className='mb-3'>FAQs</h2>
                </div>
                <div className='mt-sm-5 mt-4'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className='accordionItem2'>
                            <Accordion.Header className='accordionHeading'>What is adaptive AI development?</Accordion.Header>
                            <Accordion.Body className='accordionBdycontent'>
                               <p>
                               Adaptive AI development refers to the process of building AI systems that can automatically adjust and improve their performance based on feedback from the environment or user interactions.
                               </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='accordionItem2'>
                            <Accordion.Header className='accordionHeading'>How is adaptive AI different from traditional AI?</Accordion.Header>
                            <Accordion.Body className='accordionBdycontent'>
                               <p>
                               Traditional AI systems are static and operate based on a fixed set of rules or algorithms. <Link to="#">Adaptive AI</Link> systems, on the other hand, can dynamically adjust their behavior and learn from experience.
                               </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='accordionItem2'>
                            <Accordion.Header className='accordionHeading'>What are some examples of adaptive AI?</Accordion.Header>
                            <Accordion.Body className='accordionBdycontent'>
                                <p>
                                Examples of <Link to="#">adaptive AI</Link> include recommender systems that learn from user behavior to make better recommendations, chatbots that improve their responses based on user feedback, and autonomous vehicles that adjust their driving behavior based on real-time sensor data.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='accordionItem2'>
                            <Accordion.Header className='accordionHeading'>What are the benefits of adaptive AI?</Accordion.Header>
                            <Accordion.Body className='accordionBdycontent'>
                               <p>
                               Adaptive AI can improve system performance, enhance user experience, and reduce the need for manual intervention or programming.
                               </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='accordionItem2'>
                            <Accordion.Header className='accordionHeading'>Do you also sign NDA?</Accordion.Header>
                            <Accordion.Body className='accordionBdycontent'>
                                <p>
                                Yes, we can sign an NDA and ensure that your information is kept confidential.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='accordionItem2'>
                            <Accordion.Header className='accordionHeading'>What are some challenges of developing adaptive AI?</Accordion.Header>
                            <Accordion.Body className='accordionBdycontent'>
                                <p>
                                Challenges of developing adaptive AI include managing complex data sets, addressing issues of bias and fairness, and ensuring the safety and reliability of the system.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className='accordionItem2'>
                            <Accordion.Header className='accordionHeading'>What is the future of adaptive AI?</Accordion.Header>
                            <Accordion.Body className='accordionBdycontent'>
                                <p>
                                The future of <Link to="#">adaptive AI</Link> is likely to see continued growth and innovation, with applications in fields such as healthcare, finance, and education, as well as the development of more sophisticated algorithms and techniques for building adaptive systems.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" className='accordionItem2'>
                            <Accordion.Header className='accordionHeading'>What are some challenges of developing adaptive AI?</Accordion.Header>
                            <Accordion.Body className='accordionBdycontent'>
                                <p>
                                Challenges of developing adaptive AI include managing complex data sets, addressing issues of bias and fairness, and ensuring the safety and reliability of the system.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}
