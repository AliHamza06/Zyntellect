import React from 'react'
import Machine from '../../../assets/images/icon/initial1.svg';
import DataAnalysis from '../../../assets/images/icon/initial2.svg';
import DomainSpecific from '../../../assets/images/icon/initial3.svg';
import AISolutions from '../../../assets/images/icon/initial4.svg';
import AIIntegration from '../../../assets/images/icon/initial5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/initial6.svg';
import IncreasedAutomation from '../../../assets/images/icon/learning1.svg';
import IncreasedProductivity from '../../../assets/images/icon/learning2.svg';
import EnhancedCreativity from '../../../assets/images/icon/learning3.svg';
import CostOptimization from '../../../assets/images/icon/learning4.svg';
import IncreasedAutomation5 from '../../../assets/images/icon/learning5.svg';
import IncreasedProductivity6 from '../../../assets/images/icon/learning6.svg';
import EnhancedCreativity7 from '../../../assets/images/icon/learning7.svg';
import CostOptimization8 from '../../../assets/images/icon/learning8.svg';
import ProcessOur from '../../../assets/images/ai-copilot.svg'
// import ProcessOur2 from '../../assets/images/Developers-Follow.svg'

import { Link } from 'react-router-dom';

const insights = [
    {
        title: "Step 1: Initial Consultation and Goal Alignment",
        description: "Our journey together begins with a comprehensive understanding of your business objectives and requirements. We delve into the intricacies of your vision, ensuring a robust foundation for the project that aligns perfectly with your strategic goals. This initial deep dive sets the stage for tailored AI copilot development that resonates with your unique business landscape.",
        img: Machine,
    },
    {
        title: "Step 2: Research and Custom Solution Design",
        description: "Following our initial consultation, our team embarks on an extensive research and analysis phase. This process is dedicated to identifying the most effective solution specifically tailored to your unique needs. Leveraging our deep industry insights and technological expertise, we ensure that the concept and design of the AI copilot is perfectly aligned with your business objectives, setting the groundwork for transformative outcomes.",
        img: DataAnalysis,
    },
    {
        title: "Step 3: Prototyping",
        description: "Moving forward, we transition into the creation of detailed prototypes and design mock-ups, offering a tangible visualization of your AI copilot’s functionality. This crucial step ensures that every aspect of the solution aligns with your vision, facilitating a collaborative review process. Through these interactive prototypes, we refine and adjust the design, ensuring that the final product will seamlessly integrate into your operations and exceed your expectations.",
        img: DomainSpecific,
    },
    {
        title: "Step 4: Development and Testing",
        description: "With the prototype and design blueprint as our guide, our skilled developers set to work, meticulously crafting and bringing your AI copilot to life. Throughout this development phase, we place a strong emphasis on rigorous testing of each component, ensuring that your AI copilot not only meets but surpasses standards of performance and reliability. This meticulous approach guarantees a robust, efficient, and dependable solution, ready to revolutionize your business operations.",
        img: AISolutions,
    },
    {
        title: "Step 5: Seamless Integration",
        description: "In the final step of our process, we focus on the seamless integration of the AI copilot into your existing systems and workflows. Our team ensures a smooth transition, carefully planning and executing the deployment to minimize disruption to your operations. Through meticulous integration efforts, we guarantee that the AI copilot becomes a cohesive part of your business ecosystem, enhancing productivity and efficiency from the outset.",
        img: AIIntegration,
    },
    {
        title: "Step 6: Ongoing Support and Maintenance",
        description: "Our dedication to your success extends far beyond the initial deployment. We are committed to providing continuous support and maintenance for your AI copilot, ensuring its smooth and efficient operation at all times. Our team remains at your service to address any issues, update functionalities, and adapt the system to meet evolving business needs, ensuring your AI copilot remains a vital asset in achieving your long-term objectives.",
        img: UpgradeMaintenance,
    },
];
const developmentServices = [
    {
        title: "Machine Learning & Deep Learning",
        description: "Our foundation is built on advanced machine learning and deep learning capabilities, enabling us to craft AI models that learn and evolve, driving precision and intelligence in every interaction.",
        img: IncreasedAutomation,
    },
    {
        title: "Natural Language Processing",
        description: "With our deep expertise in Natural Language Processing (NLP), we empower AI copilots to understand and generate human language, facilitating seamless communication and comprehension.",
        img: IncreasedProductivity,
    },
    {
        title: "Data Science & Analytics",
        description: "Leveraging the latest in data science and analytics, we unlock actionable insights from vast datasets, boosting the decision-making prowess of our AI copilots for unmatched versatility and accuracy.",
        img: EnhancedCreativity,
    },
    {
        title: "Cloud & Edge Computing",
        description: "Our expertise extends to both cloud and edge computing, providing a comprehensive foundation for building AI copilots are highly efficient, reliable, and capable of operating in diverse and challenging environments.",
        img: CostOptimization,
    },
    {
        title: "APIs & System Integration",
        description: "We specialize in creating robust APIs and employing advanced integration technologies, ensuring our AI copilots integrate flawlessly with your existing workflows for a seamless experience.",
        img: IncreasedAutomation5,
    },
    {
        title: "Advanced Development Frameworks",
        description: "Utilizing prominent AI and machine learning frameworks, we accelerate the development of sophisticated AI models, streamlining the path from concept to deployment.",
        img: IncreasedProductivity6,
    },
    {
        title: "Reinforcement Learning",
        description: "Our AI copilots learn from every interaction, thanks to reinforcement learning which enables our AI copilots to learn optimal decision-making strategies through trial and error, guided by the feedback received from the environment.",
        img: EnhancedCreativity7,
    },
    {
        title: "Multi-modal Interaction",
        description: "Our AI copilots support multiple modes of interaction, such as text, speech, and gestures, accommodating diverse user preferences and accessibility needs. Hence, users can choose their preferred mode of communication with the AI assistant based on their convenience or accessibility needs.",
        img: CostOptimization8,
    },
];
export default function OurCopilotProcess() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our AI Copilot Development Process</h2>
                    <img src={ProcessOur} className='w-100 d-sm-block d-none' alt="" />
                    {/* <img src={ProcessOur2} className='w-100 d-sm-none d-block' alt="" /> */}
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {insights.map((insight, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard processCard">
                                <img src={insight.img} alt={insight.title} />
                                <h4>{insight.title}</h4>

                                <p>{insight.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Domains of Expertise</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {developmentServices.map((developmentService, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <Link to='#'>
                                    <img src={developmentService.img} alt={developmentService.title} />
                                </Link>
                                <Link to='#'>
                                    <h4>{developmentService.title}</h4>
                                </Link>
                                <p>{developmentService.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
