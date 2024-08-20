import React from 'react'
import Machine from '../../assets/images/icon/our17.svg';
import DataAnalysis from '../../assets/images/icon/our18.svg';
import DomainSpecific from '../../assets/images/icon/our19.svg';
import AISolutions from '../../assets/images/icon/our20.svg';
import AIIntegration from '../../assets/images/icon/our21.svg';
import UpgradeMaintenance from '../../assets/images/icon/our22.svg';
import IncreasedAutomation from '../../assets/images/icon/our23.svg';
import IncreasedProductivity from '../../assets/images/icon/our24.svg';
import EnhancedCreativity from '../../assets/images/icon/our25.svg';
import CostOptimization from '../../assets/images/icon/our26.svg';
import Entertainment from '../../assets/images/icon/our27.svg';
import Legal from '../../assets/images/icon/our28.svg';
import GenerativeModels from '../../assets/images/icon/our29.svg';
import NaturalLanguage from '../../assets/images/icon/our30.svg';
import MachineLearning from '../../assets/images/icon/our31.svg';
import DeepLearning from '../../assets/images/icon/our32.svg';
import CollectionAnnotation from '../../assets/images/icon/our33.svg';
import ModelFinetuning from '../../assets/images/icon/our34.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const insights = [
    {
        title: "Banking and Finance",
        description: "In the banking and finance sector, our generative AI solutions provide advanced data analytics, fraud detection, and personalized customer experiences. This helps financial institutions optimize their operations, manage risk effectively, and offer tailored financial products and services.",
        img: Machine,
    },
    {
        title: "Retail",
        description: "For the retail industry, our GenAI solutions enhance customer engagement, inventory management, and demand forecasting. This leads to improved customer satisfaction, reduced costs, and increased profitability by leveraging data-driven insights.",
        img: DataAnalysis,
    },
    {
        title: "Healthcare",
        description: "In healthcare, our solutions aid in medical diagnosis, treatment recommendations, and patient management. By harnessing AI, healthcare providers can enhance patient care, streamline administrative processes, and drive medical advancements.",
        img: DomainSpecific,
    },
    {
        title: "Supply Chain and Logistics",
        description: "Our AI solutions optimize supply chain and logistics operations by improving route planning, inventory management, and demand forecasting. This results in reduced operational costs, increased efficiency, and better customer service.",
        img: AISolutions,
    },
    {
        title: "Insurance",
        description: "In the insurance sector, our solutions support underwriting, claims processing, and risk assessment. This enables insurance companies to offer more accurate pricing, faster claims processing, and improved customer experiences.",
        img: AIIntegration,
    },
    {
        title: "Travel",
        description: "For the travel industry, our AI solutions enhance customer support, recommendation engines, and pricing strategies. This leads to better customer experiences, increased bookings, and improved revenue for travel companies across the board.",
        img: UpgradeMaintenance,
    },
    {
        title: "Automotive",
        description: "Our generative AI solutions can transform your automotive business through enhanced vehicle design, process automation, advanced research and development, and superior quality control. These innovations drive operational efficiency, reduce downtime, and boost customer satisfaction and safety.",
        img: IncreasedAutomation,
    },
    {
        title: "Hospitality",
        description: "Our GenAI solutions for hospitality businesses can aid in personalizing guest experiences, streamlining operations, and refining marketing strategies. This enables businesses to maximize resource efficiency and ensure guest loyalty, boosting overall satisfaction and profitability.",
        img: IncreasedProductivity,
    },
    {
        title: "Real Estate",
        description: "Our generative AI solutions transform property valuation, market analysis, and client interactions, empowering real estate professionals to make informed decisions, enhance recommendations, and streamline transactions, thus boosting client satisfaction and operational efficiency.",
        img: EnhancedCreativity,
    },
    {
        title: "Manufacturing",
        description: "In the manufacturing sector, our generative AI solutions streamline production processes, enhance quality control, and accelerate product development. Integrating GenAI boosts efficiency and drives innovation, giving companies a competitive edge.",
        img: CostOptimization,
    },
    {
        title: "Media and Entertainment",
        description: "In the media and entertainment industry, our GenAI solutions enhance content creation, optimize distribution and personalize customer experiences, enabling media companies to engage audiences more effectively and drive continuous innovation.",
        img: Entertainment,
    },
    {
        title: "Legal",
        description: "In the legal sector, our GenAI solutions support diverse tasks like case analysis, case prediction, and legal research. This enables law firms to streamline their workflows, improve case strategies, and boost the efficiency of services, benefiting both practitioners and clients.",
        img: Legal,
    },
];
const developmentServices = [
    {
        title: "Generative Models",
        description: "We have deep expertise in developing domain-specific models by fine-tuning foundation models, such as GPT-4 (Generative Pre-trained Transformer). This includes understanding the architecture, training processes, and applications of such models.",
        img: GenerativeModels,
    },
    {
        title: "Natural Language Processing (NLP)",
        description: "By leveraging our knowledge of NLP, we craft robust applications that handle tasks like text generation, sentiment analysis, text summarization, and translation.",
        img: NaturalLanguage,
    },
    {
        title: "Machine Learning",
        description: "Our proficiency in diverse machine learning techniques, including supervised, unsupervised, and reinforcement learning, enables us to adapt and apply our AI solutions to a wide range of applications and address diverse business needs effectively.",
        img: MachineLearning,
    },
    {
        title: "Deep Learning",
        description: "Our expertise in deep learning enables us to work with complex neural networks, implementing state-of-the-art algorithms, and tailoring customized solutions that help clients unlock the full potential of AI.",
        img: DeepLearning,
    },
    {
        title: "Data Collection and Annotation",
        description: "Gathering and preprocessing large datasets is often a critical part of training generative models. We specialize in data collection and annotation to ensure high-quality training data.",
        img: CollectionAnnotation,
    },
    {
        title: "Model Fine-tuning",
        description: "We fine-tune pre-trained models, including GPT-4, for specific applications and domains. This expertise empowers us to construct highly adaptable solutions based on these models, catering to clients’ specific needs.v",
        img: ModelFinetuning,
    },
];
export default function ArrayOfIndustries() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Generative AI Solutions Cater to a Wide Array of Industries</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {insights.map((insight, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <Link to='#'>
                                    <img src={insight.img} alt={insight.title} />
                                </Link>
                                <Link to='#'>
                                    <h4>{insight.title}</h4>
                                </Link>

                                <p>{insight.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Areas of Expertise</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {developmentServices.map((developmentService, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
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
            {/* <div className="marginSet">
                <div className="driveInnovation">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 d-lg-block d-none"></div>
                        <div className="col-xl-4 col-lg-4 col-md-7">
                            <div className='driveInnovationDesc'>
                                <p>Drive innovation in your business with LeewayHertz's expert generative AI development services.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-5">
                            <div className="driveInnovationButton">
                                <Button variant='contained' className='getStartedBtn'>Get Started Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
