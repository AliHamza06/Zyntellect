import React from 'react'
import Machine from '../../../../assets/images/icon/AIMl1.svg';
import DataAnalysis from '../../../../assets/images/icon/AIMl2.svg';
import DomainSpecific from '../../../../assets/images/icon/AIMl3.svg';
import AISolutions from '../../../../assets/images/icon/AIMl4.svg';
import AIIntegration from '../../../../assets/images/icon/AIMl5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/AIMl6.svg';
import CreativeDesign from '../../../../assets/images/icon/AIMl7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/AIMl8.svg';
import AIIntegration2 from '../../../../assets/images/icon/AIMl9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/AIMl10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/AIMl11.svg';
import Machine2 from '../../../../assets/images/icon/AIMl12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/AIMl13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/AIMl14.svg';
import AISolutions2 from '../../../../assets/images/icon/AIMl15.svg';
import UpgradeMaintenance3 from '../../../../assets/images/icon/AIMl16.svg';
import CreativeDesign3 from '../../../../assets/images/icon/AIMl17.svg';
import AIIntegration4 from '../../../../assets/images/icon/AIMl18.svg';
import UpgradeMaintenance4 from '../../../../assets/images/icon/AIMl19.svg';
import CreativeDesign4 from '../../../../assets/images/icon/AIMl20.svg';
import AIIntegration5 from '../../../../assets/images/icon/AIMl21.svg';
import UpgradeMaintenance5 from '../../../../assets/images/icon/custom23.svg';
import CreativeDesign5 from '../../../../assets/images/icon/custom24.svg';
import IntegratProcess from '../../../../assets/images/how-to-build-a-generative-ai-application.svg';
import { Link } from 'react-router-dom';

const unlockStrategic = [
    {
        title: "Strategic AI Consulting",
        description: "Navigate the complexities of AI integration with our expert consultation. We don’t just develop AI solutions; we strategize their alignment with your enterprise goals, ensuring sustainable growth. Our approach emphasizes responsible AI practices and data governance, ensuring your AI implementations are ethical and compliant with relevant regulations.",
        img: Machine,
    },
    {
        title: "PoC and MVP Development",
        description: "Our team of experts meticulously crafts Proof of Concepts to validate the feasibility of your AI solution’s concept, showcasing its potential through scaled-down versions. Moving forward, we design Minimum Viable Products that deliver essential functionalities, enabling real user validation, iterative enhancements and swift market entry.",
        img: DataAnalysis,
    },
    {
        title: "Enterprise-grade AI Solutions Development",
        description: "Our experienced team collaborates closely with your enterprise to craft customized AI solutions, offering end-to-end development from ideation to deployment. We prioritize scalability, performance, and robust security, ensuring your AI systems meet your current needs and adapt well to future challenges.",
        img: DomainSpecific,
    },
    {
        title: "Custom AI Solutions Development",
        description: "We handle the entire custom AI model development process for our clients. This encompasses meticulous data preparation, rigorous model training, multi-level testing, and seamless deployment of the model. With deep expertise in fine-tuning AI models for specific tasks and domains, we ensure the models precisely match your business needs.",
        img: AISolutions,
    },
    {
        title: "Custom Model Development",
        description: "We handle the entire custom AI model development process for our clients. This encompasses meticulous data preparation, rigorous model training, multi-level testing, and seamless deployment of the model. With deep expertise in fine-tuning AI models for specific tasks and domains, we ensure the models precisely match your business needs.",
        img: AIIntegration,
    },
    {
        title: "Seamless AI Integration",
        description: "Elevate your organization’s potential with our tailored AI integration services that enable you to incorporate advanced AI capabilities into your existing systems with ease. Our expert team ensures a smooth transition during deployment, minimizing disruptions and maximizing efficiency.",
        img: UpgradeMaintenance,
    },
    {
        title: "Generative AI Development",
        description: "Leverage our custom generative AI development service to tap into AI’s full potential. Take advantage of the transformative capabilities of foundational AI models such as GPT, Llama, PaLM, Claude, Mistral, Mixtral and Gemini. Our GenAI solutions built on these models facilitate workflow automation, resulting in heightened levels of productivity and operational excellence.",
        img: CreativeDesign,
    },
    {
        title: "AI Integration and Deployment",
        description: "We go beyond crafting robust AI solutions by seamlessly integrating and deploying them into your existing infrastructure, empowering your business with AI capabilities that align with your established processes. With AI embedded into your operational framework, you witness remarkable gains in efficiency, productivity, and innovation.",
        img: WorkflowAutomation,
    },
    {
        title: "Data Analysis",
        description: "Harness the true potential of your data with our data analysis services. Leverage our expertise to delve deep into your datasets, uncovering actionable insights that drive decision-making and growth, transforming raw data into strategic assets for your enterprise.",
        img: AIIntegration2,
    },

];
const supports = [
    
    {
        title: "Conversational AI Solutions",
        description: "Ensure heightened customer interactions around the clock through our advanced conversational AI solutions. With advanced capabilities, our enterprise AI chatbots understand user behavior, preferences, and inquiries, creating natural and engaging conversations. This fosters brand loyalty while providing you with invaluable insights into customer trends.",
        img: UpgradeMaintenance2,
    },
    {
        title: "AI Image & Speech Recognition Solutions",
        description: "We specialize in developing robust speech recognition solutions, ranging from voice-activated virtual assistants to accurate speech-to-text transcription tools. Our expertise also extends to image recognition, encompassing capabilities like object detection, classification, image segmentation, and facial recognition for comprehensive visual analysis and enhanced insights.",
        img: CreativeDesign2,
    },
    {
        title: "Predictive Analysis Solutions",
        description: "With a deep commitment to enhancing operational efficiency, we craft advanced AI solutions that leverage data analytics and predictive modeling to foresee maintenance needs before they arise. Our predictive analysis tools empower businesses to make informed decisions, ensuring timely equipment upkeep, minimizing downtimes, and optimizing resource allocation.",
        img: Machine2,
    },
    {
        title: "Fraud Detection & Prevention Solutions",
        description: "Our fraud detection and prevention solutions are meticulously designed to safeguard your business from potential threats. These tools leverage advanced artificial intelligence algorithms to swiftly identify irregularities, anomalies, and suspicious activities within your operations, ensuring your business is shielded from fraudulent activities and financial losses.",
        img: DataAnalysis2,
    },
    {
        title: "Customer Service Automation Solutions",
        description: "Boost your customer service operations through our enterprise AI-powered automation solutions, optimizing response times, reducing errors, and boosting customer satisfaction. Our custom solutions help streamline tasks like email responses, appointment scheduling, managing support tickets, tracking orders, facilitating self-service options, and gathering feedback through surveys.",
        img: DomainSpecific2,
    },
    {
        title: "Recommendation Systems",
        description: "Elevate your business strategy with our robust recommendation systems that empower you to connect with your audience on a whole new level. From e-commerce to content platforms, our systems learn from user behaviors, preferences, and trends, enabling you to enhance user engagement, boost conversions, and deliver exceptional user experiences.",
        img: AISolutions2,
    },

];
const approachs = [
    
    {
        title: "Extensive Experience",
        description: "Benefit from our AI developers’ extensive experience in diverse AI technologies, coupled with a track record of successful collaborations across various industries.",
        img: UpgradeMaintenance3,
    },
    {
        title: "Full-cycle Development",
        description: "Leverage the skills of our vetted AI developers and data scientists for the end-to-end development of custom solutions designed to propel your organization toward success.",
        img: CreativeDesign3,
    },
    {
        title: "Tech Expertise",
        description: "Our profound knowledge of the latest AI technologies, such as neural networks, NLP, and computer vision enable us to build robust solutions matching your needs.",
        img: AIIntegration4,
    },
    {
        title: "Efficient Project Management",
        description: "Experience precise project execution through our agile approach, ensuring projects are delivered on time and within budget, enhancing success and efficiency.",
        img: UpgradeMaintenance4,
    },
    {
        title: "Quality Assurance",
        description: "Our commitment to quality is uncompromising, with meticulous testing and validation ensuring the highest standards of performance and reliability in each project.",
        img: CreativeDesign4,
    },
    {
        title: "Secure and Ethical Solutions",
        description: "We ensure your projects are safeguarded with the utmost standards of security, privacy, and ethical conduct, guaranteeing the protection of data and trustworthy project outcomes.",
        img: AIIntegration5,
    },

];
export default function EnterpriseAIServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Enterprise AI Development Services We Offer</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {unlockStrategic.map((unlockStrate, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard  h-100">
                                <img src={unlockStrate.img} alt={unlockStrate.title} />
                                <h4>{unlockStrate.title}</h4>
                                <p>{unlockStrate.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Enterprise AI Solutions We Develop</h2>
                    <p className='text-center'>Empower your enterprise with our comprehensive suite of AI-driven solutions.</p>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard  h-100">
                                <img src={support.img} alt={support.title} />
                                <h4>{support.title}</h4>
                                <p>{support.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Why Choose Zyntellect?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {approachs.map((approach, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard h-100">
                                <img src={approach.img} alt={approach.title} />
                                <h4>{approach.title}</h4>
                                <p>{approach.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
