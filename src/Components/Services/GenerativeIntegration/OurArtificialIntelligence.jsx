import React from 'react'
import chatbot from '../../../assets/images/chatbot.png'
import Machinery from '../../../assets/images/machinery-Troubleshooting.png'
import Scrut from '../../../assets/images/Scrut-portfolio.png'
import Geospatial from '../../../assets/images/Geospatial.png'
import GenAIBased from '../../../assets/images/GenAI-based.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
export default function OurArtificialIntelligence() {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our Artificial Intelligence Portfolio
                </h2>
            </div>
            <div className="row mt-xxl-5 flex-lg-row flex-column-reverse">
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-4">
                    <div className="fortuneContent">
                        <h6>LLM-based Chatbot</h6>
                        <h5>AI Chatbot for Dealer Support</h5>
                        <p>
                            LeewayHertz developed an AI-powered chatbot to streamline URC’s dealer support operations. This chatbot tackles dealer inquiries on smart home automation devices, offering quick and accurate answers. It goes beyond text-based responses with voice interaction for a dynamic experience. The chatbot ensures prompt and accurate responses, providing personalized dealer support through the seamless integration of historical data, CRM information, and other data sources. This solution resulted in faster response times, improved user experience, and streamlined communication for URC.
                        </p>
                        <Link to="#">
                            <Button variant="contained" className='learnMoreBtn2 mt-xl-5 mt-lg-4 mt-sm-4 mt-3'>Learn More</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-5">
                    <img src={chatbot} alt="" className='w-100' />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-4">
                    <img src={Machinery} alt="" className='w-100' />
                </div>
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-4">
                    <div className="fortuneContent">
                        <h6>AI-powered App</h6>
                        <h5>LLM-powered Application for Safer Machinery Troubleshooting</h5>
                        <p>
                            LeewayHertz collaborated with a top-tier Fortune 500 manufacturing company to develop an innovative LLM-powered machinery troubleshooting application. This innovative solution streamlines machinery maintenance, elevates safety protocol adherence and mitigates operational risks of the firm. By seamlessly integrating static machinery data and dynamic safety policies, the application provides quick access to relevant information for troubleshooting issues while also enhancing safety with clear and detailed instructions on equipment handling.
                        </p>
                        <Link to="#">
                            <Button variant="contained" className='learnMoreBtn2 mt-xl-5 mt-lg-4 mt-sm-4 mt-3'>Learn More</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-4">
                    <div className="fortuneContent">
                        <h6>Generative AI Application</h6>
                        <h5>LLM-powered App for Compliance and Security Access</h5>
                        <p>
                            LeewayHertz has partnered with Scrut to engineer an LLM-powered app designed to streamline access to compliance benchmarks, frameworks, and audit-relevant data for Scrut’s clientele. Drawing on Scrut’s proprietary data, our team utilized advanced embedding and prompt engineering techniques to seamlessly incorporate an LLM, yielding rapid query responses and upgraded user experiences. This initiative has equipped Scrut’s clients with a robust tool, fostering informed decision-making and providing clear insight into industry benchmarks as well as Scrut’s risk monitoring and mitigation strategies and services.
                        </p>
                        <Link to="#">
                            <Button variant="contained" className='learnMoreBtn2 mt-xl-5 mt-lg-4 mt-sm-4 mt-3'>Learn More</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-5">
                    <img src={Scrut} alt="" className='w-100' />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-5">
                    <img src={Geospatial} alt="" className='w-100' />
                </div>
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-4">
                    <div className="fortuneContent">
                        <h6>Data Analysis</h6>
                        <h5>Geospatial Data Analysisg</h5>
                        <p>
                            A US-based geospatial intelligence and analytics firm sought LeewayHertz’s expertise to tackle a complex dataset with limited identifiers, aiming to derive valuable insights, identify patterns, spot unusual movements, and ensure data security. Our solution involved deploying a sophisticated data analysis pipeline, encompassing timestamp conversion, geocoding for contextual enrichment, clustering for pattern recognition, correlation analysis, and anomaly detection. Beyond unveiling intricate location-based patterns, our approach prioritized robust data security, resulting in the delivery of actionable intelligence that precisely met our client’s objectives.
                        </p>
                        <Link to="#">
                            <Button variant="contained" className='learnMoreBtn2 mt-xl-5 mt-lg-4 mt-sm-4 mt-3'>Learn More</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row flex-lg-row flex-column-reverse">
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-4">
                    <div className="fortuneContent">
                        <h6>Generative AI Solution</h6>
                        <h5>GenAI-based Clinical Decision Support System</h5>
                        <p>
                            A GenAI-based clinical decision support system tailored for an esteemed healthcare organization that analyzes diverse patient data using advanced algorithms and NLP to provide healthcare professionals with swift and accurate disease diagnoses. The platform’s user-friendly interface optimizes the diagnostic workflow, offering evidence-driven insights and comprehensive reports that include discussions, testing guidance, therapy recommendations, specialist referrals, and patient education. This solution ultimately elevates patient care through the seamless integration of generative AI, fostering efficiency, precision, and innovation in healthcare delivery.
                        </p>
                        <Link to="#">
                            <Button variant="contained" className='learnMoreBtn2 mt-xl-5 mt-lg-4 mt-sm-4 mt-3'>Learn More</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-sm-5 mt-5">
                    <img src={GenAIBased} alt="" className='w-100' />
                </div>
            </div>
        </div>
    )
}
