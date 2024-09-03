import React from 'react'
import Machine from '../../../../assets/images/icon/AIConsulting1.svg';
import DataAnalysis from '../../../../assets/images/icon/AIConsulting2.svg';
import DomainSpecific from '../../../../assets/images/icon/AIConsulting3.svg';
import AISolutions from '../../../../assets/images/icon/AIConsulting4.svg';
import AIIntegration from '../../../../assets/images/icon/AIConsulting5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/AIConsulting6.svg';
import CreativeDesign from '../../../../assets/images/icon/AIConsulting7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/AIConsulting8.svg';
import AIIntegration2 from '../../../../assets/images/icon/AIConsulting9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/AIConsulting10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/AIConsulting11.svg';
import Machine2 from '../../../../assets/images/icon/AIConsulting12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/AIConsulting13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/AIConsulting14.svg';
import AISolutions2 from '../../../../assets/images/icon/AIConsulting15.svg';
import AIIntegration3 from '../../../../assets/images/icon/AIConsulting16.svg';
import UpgradeMaintenance3 from '../../../../assets/images/icon/AIConsulting17.svg';
import CreativeDesign3 from '../../../../assets/images/icon/adaptive18.svg';
import IntegratProcess from '../../../../assets/images/how-to-build-a-generative-ai-application.svg';
import { Link } from 'react-router-dom';

const unlockStrategic = [
    {
        title: "AI Strategy Development",
        description: "We begin with an initial consultation to thoroughly understand your business needs, challenges, and strategic goals. During this phase, we engage with key stakeholders to gather insights and considerations crucial for tailoring our AI strategy to your unique requirements. Following this, we develop a detailed implementation roadmap that outlines the specific steps and timelines for integrating AI into your operations.",
        img: Machine,
    },
    {
        title: "AI Opportunity Mapping",
        description: "We identify and assesses potential AI use cases within your organization. We evaluate current operations and analyze data to pinpoint areas where AI can drive efficiency, innovation, and growth. By identifying high-impact opportunities, we provide a strategic roadmap for effective AI implementation. This comprehensive assessment helps you prioritize AI initiatives that offer the greatest return on investment and align with your long-term goals.",
        img: DataAnalysis,
    },
    {
        title: "Domain-specific Model Development",
        description: "We thoroughly assess your specific domain, gaining insights into the intricacies and nuances that define your industry landscape. Leveraging this deep understanding, we select and fine-tune a foundation model like GPT, Llama, PaLM, Claude, Gemini, Mixtral or Mistral and integrate it with your proprietary data. Through rigorous testing and validation, we ensure that the model aligns perfectly with your business requirements.",
        img: DomainSpecific,
    },
    {
        title: "Generative AI Solutions Development",
        description: "We offer a comprehensive end-to-end generative AI solution development service, covering everything from UX/UI design to model integration, ensuring a seamless and effective process tailored to your needs. Whether you want a chatbot/virtual assistant, content generation tool, or AI agent, our expertise in GenAI solutions development ensures we can bring your vision to life.",
        img: AISolutions,
    },
    {
        title: "Data Engineering",
        description: "Our data engineering services encompass the entire data lifecycle, from sourcing and cleansing to structuring and enrichment. With a focus on data mining, analysis, annotation, and labeling, we lay the foundation for robust AI models. Leveraging advanced techniques and tools, we ensure that your data is optimized for machine learning, enabling accurate and reliable model training.",
        img: AIIntegration,
    },
    {
        title: "AI Integration",
        description: "Our comprehensive service extends beyond AI solution development; we seamlessly integrate the solutions we build into your existing systems. Our expert team ensures a smooth transition, guaranteeing that AI seamlessly becomes an integral part of your operations, empowering your organization to effectively harness AI’s transformative capabilities.",
        img: UpgradeMaintenance,
    },
    
];
const supports = [
    {
        title: "Deep Experience and Expertise",
        description: "With a commitment to excellence, Zyntellect is your trusted partner for AI development and consulting. Our extensive expertise and experience sets us apart, enabling us to offer a full spectrum of AI development and consulting services that cater to various industries.",
        img: CreativeDesign,
    },
    {
        title: "Extensive Technical Skills",
        description: "We have deep knowledge of ML, programming languages like Python, AI frameworks like TensorFlow, data engineering tools like Hadoop and other vital AI technologies. Our proficiency in foundation models, such as GPT, Llama, PaLM, Claude, Gemini, Mixtral or Mistral, enables us to create robust GenAI solutions.",
        img: WorkflowAutomation,
    },
    {
        title: "End-to-end Development",
        description: "We align our AI solutions with your business goals by following a structured plan encompassing everything from use case identification and risk management to prototype creation, solution development and maintenance, ensuring the solutions align with your strategic objectives.",
        img: AIIntegration2,
    },
    {
        title: "Responsible AI Development",
        description: "We are committed to creating transparent and ethical AI solutions. We prioritize fairness, accountability, and privacy in AI systems, ensuring they comply with all regulatory compliance standards and benefit society at large.",
        img: UpgradeMaintenance2,
    },
    
];
const approachs = [
    {
        title: "Assessment Phase",
        description: "Understanding your organization’s current state and needs to lay the foundation for a successful AI strategy.",
        img: CreativeDesign2,
    },
    {
        title: "Strategy Development",
        description: "Crafting a clear AI strategy for your use case, covering aspects like cost, time frame, security and privacy.",
        img: Machine2,
    },
    {
        title: "Data Collection and Preparation",
        description: "High-quality, relevant data is critical for AI success. Thus, we collect your data and prepare it for model training.",
        img: DataAnalysis2,
    },
    {
        title: "Custom Model Development",
        description: "We create a domain-specific AI model by fine-tuning it with your proprietary data to ensure it meets your business-specific needs.",
        img: DomainSpecific2,
    },
    {
        title: "Model Integration/Solution Development",
        description: "Using the fine-tuned model, we then build a solution like a chatbot or recommendation system to enhance your workflows.",
        img: AISolutions2,
    },
    {
        title: "Integration Into Workflows",
        description: "We streamline the process of AI adoption for you by seamlessly incorporating the solution into your current infrastructure.",
        img: AIIntegration3,
    },
    {
        title: "Monitoring and Maintenance",
        description: "Continuous oversight and maintenance ensure that the AI solution remains effective over time and adapts to changes.",
        img: UpgradeMaintenance3,
    },
    
];
export default function AIConsultingServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our AI Consulting Services</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {unlockStrategic.map((unlockStrate, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
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
                    <h2 className='mb-3'>Why Choose Zyntellect for AI Consulting Services?</h2>
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
                    <h2 className='mb-3'>Our Approach to AI Consulting</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {approachs.map((approach, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard gatheringCard approachCard" style={{ height : "100%", minHeight : "auto" }}>
                                <img src={approach.img} alt={approach.title} />
                                <div>
                                    <h4>{approach.title}</h4>
                                    <p>{approach.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
