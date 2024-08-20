import React from 'react'
import Machine from '../../../assets/images/icon/adaptive1.svg';
import DataAnalysis from '../../../assets/images/icon/adaptive2.svg';
import DomainSpecific from '../../../assets/images/icon/adaptive3.svg';
import AISolutions from '../../../assets/images/icon/adaptive4.svg';
import AIIntegration from '../../../assets/images/icon/adaptive5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/adaptive6.svg';
import CreativeDesign from '../../../assets/images/icon/adaptive7.svg';
import WorkflowAutomation from '../../../assets/images/icon/adaptive8.svg';
import AIIntegration2 from '../../../assets/images/icon/adaptive9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/adaptive10.svg';
import CreativeDesign2 from '../../../assets/images/icon/adaptive11.svg';
import Machine2 from '../../../assets/images/icon/adaptive12.svg';
import DataAnalysis2 from '../../../assets/images/icon/adaptive13.svg';
import DomainSpecific2 from '../../../assets/images/icon/adaptive14.svg';
import AISolutions2 from '../../../assets/images/icon/adaptive15.svg';
import AIIntegration3 from '../../../assets/images/icon/adaptive16.svg';
import UpgradeMaintenance3 from '../../../assets/images/icon/adaptive17.svg';
import CreativeDesign3 from '../../../assets/images/icon/adaptive18.svg';
import IntegratProcess from '../../../assets/images/Adaptive-AI-Development-Process-2.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Consulting and Strategy Development",
        description: "We assess your business goals and requirements to identify the potential of AI in your business and build a roadmap for AI implementation that outlines the strategies to solve your most challenging business problems with AI.",
        img: Machine,
    },
    {
        title: "Custom Adaptive AI Model-based Solutions Development",
        description: "We build custom adaptive AI solutions that use advanced machine learning techniques like transfer and online learning for continual learning of the AI model used. Whether a predictive analytics solution or an AI-powered chatbot, we create solutions that deliver real-time feedback to users.",
        img: DataAnalysis,
    },
    {
        title: "Maintenance and Upgrade",
        description: "Leverage our ongoing support and maintenance services to fix any issues or bugs and enhance system performance. Our AI engineers will also upgrade the deployed adaptive AI-based solution with additive features to meet your evolving business requirements.",
        img: DomainSpecific,
    },
    {
        title: "Model Integration and Deployment",
        description: "Enhance your existing applications with real-time data compatibility by integrating adaptive AI models and solutions like virtual assistants and chatbots. This ensures personalized user experiences and highly automated business processes.",
        img: AISolutions,
    },
    {
        title: "Data Engineering",
        description: "From acquiring and modifying to loading the data, our adaptive AI developers efficiently process large amounts of high-quality data utilizing advanced data engineering technologies such as NoSQL, Apache Spark, and Hadoop while maintaining scalability, privacy, and security.",
        img: AIIntegration,
    },
];
const supports = [
    {
        title: "Machine Learning",
        description: "Our developers have extensive knowledge of machine learning techniques, including continual, supervised and unsupervised learning, deep reinforcement learning, and attention mechanisms, enabling seamless integration of adaptive AI models into existing systems.",
        img: UpgradeMaintenance,
    },
    {
        title: "Deep Learning",
        description: "Our developers have expertise in deep learning algorithms and their underlying neural networks like RNNs, CNNs, and long short-term memory (LSTM) networks that help adaptive AI models to learn data and make predictions automatically.",
        img: CreativeDesign,
    },
    {
        title: "Natural Language Processing (NLP)",
        description: "Our team of adaptive AI experts can incorporate Natural Language Processing (NLP) into your application for efficient sentiment analysis, text processing, and named entity recognition. NLP can also be utilized for developing chatbots and virtual assistants.",
        img: WorkflowAutomation,
    },
    {
        title: "Computer Vision",
        description: "With expertise in utilizing top-notch tools, frameworks and libraries like TensorFlow or PyTorch, our team develops robust computer vision algorithms and techniques, including image classification, object detection, segmentation and scene understanding.",
        img: AIIntegration2,
    },
    {
        title: "Cloud Computing",
        description: "Skilled in using cloud computing technologies, like Microsoft Azure, Google Cloud Platform (GCP), and Amazon Web Services (AWS), that provide access to large data sets, our developers can safely deploy and scale your adaptive AI solutions.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Predictive Analytics",
        description: "Our developers have expertise in developing adaptive AI-based solutions that use predictive analytics algorithms and techniques, including random forests, decision trees and gradient boosting, facilitating businesses to make data-driven decisions based on real-time data.",
        img: CreativeDesign2,
    }
];
const Identify = [
    {
        title: "Identify the Problem",
        description: "The first step in developing an adaptive AI solution is to identify the problem you want to solve. This involves understanding the business need or user requirement that the AI will address, as well as any constraints or limitations on the solution.",
        img: Machine2,
    },
    {
        title: "Gather Data",
        description: "Once you’ve identified the problem, you need to gather relevant data to train your AI model. This may involve collecting data from a variety of sources, including internal company data, public datasets, and user-generated content.",
        img: DataAnalysis2,
    },
    {
        title: "Clean and Preprocess Data",
        description: "After you’ve gathered your data, you need to clean and preprocess it to ensure that it’s suitable for training your AI model. This involves removing duplicates, handling missing values, and transforming the data into a format that can be used by your model.",
        img: DomainSpecific2,
    },
    {
        title: "Develop and Train the Model",
        description: "With your data cleaned and preprocessed, you can begin to develop your AI model. This involves selecting an appropriate algorithm or approach, tuning hyperparameters, and training the model on your data.",
        img: AISolutions2,
    },
    {
        title: "Validate and Test the Model",
        description: "Once your model is trained, you need to validate and test it to ensure that it’s performing as expected. This involves evaluating the model’s accuracy, precision, recall, and other performance metrics, and making any necessary adjustments to improve its performance.",
        img: AIIntegration3,
    },
    {
        title: "Deploy the Model",
        description: "Once your model has been validated and tested, you can deploy it in a production environment. This may involve integrating the model with other systems, such as a web or mobile app, and setting up infrastructure to support the model’s ongoing operation.",
        img: UpgradeMaintenance3,
    },
    {
        title: "Monitor and Update the Model",
        description: "After your model has been deployed, you need to monitor its performance to ensure that it’s continuing to perform as expected. This may involve setting up monitoring and alerting systems and periodically updating the model to improve its performance based on new data or user feedback.",
        img: CreativeDesign3,
    },
];
export default function AdaptiveAIServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Adaptive AI Development Services</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard CaterCard">
                                <img src={ourGenerative.img} alt={ourGenerative.title} />
                                <h4>{ourGenerative.title}</h4>
                                <p>{ourGenerative.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Technical Expertise in Adaptive AI Development</h2>
                </div>
                {/* <img src={IntegratProcess} className='w-100' alt="" /> */}
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
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
                    <h2 className='mb-3'>Our Adaptive AI Systems Development Process</h2>
                </div>
                <img src={IntegratProcess} className='w-100' alt="" />
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {Identify.map((Identif, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={Identif.img} alt={Identif.title} />
                                <h4>{Identif.title}</h4>
                                <p>{Identif.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
