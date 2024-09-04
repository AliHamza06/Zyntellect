import React from 'react'
import Machine from '../../../../assets/images/icon/streamlined1.svg';
import DataAnalysis from '../../../../assets/images/icon/streamlined2.svg';
import DomainSpecific from '../../../../assets/images/icon/streamlined3.svg';
import AISolutions from '../../../../assets/images/icon/streamlined4.svg';
import AIIntegration from '../../../../assets/images/icon/streamlined5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/streamlined6.svg';
import CreativeDesign from '../../../../assets/images/icon/streamlined7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/streamlined8.svg';
import AIIntegration2 from '../../../../assets/images/icon/streamlined9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/streamlined10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/streamlined11.svg';
import Machine2 from '../../../../assets/images/icon/streamlined12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/streamlined13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/streamlined14.svg';
import AISolutions2 from '../../../../assets/images/icon/streamlined15.svg';
import AIIntegration3 from '../../../../assets/images/icon/streamlined16.svg';
import UpgradeMaintenance3 from '../../../../assets/images/icon/custom17.svg';
import CreativeDesign3 from '../../../../assets/images/icon/custom18.svg';
import AIIntegration4 from '../../../../assets/images/icon/custom19.svg';
import UpgradeMaintenance4 from '../../../../assets/images/icon/custom20.svg';
import CreativeDesign4 from '../../../../assets/images/icon/custom21.svg';
import AIIntegration5 from '../../../../assets/images/icon/custom22.svg';
import UpgradeMaintenance5 from '../../../../assets/images/icon/custom23.svg';
import CreativeDesign5 from '../../../../assets/images/icon/custom24.svg';
import IntegratProcess from '../../../../assets/images/how-to-build-a-generative-ai-application.svg';
import { Link } from 'react-router-dom';

const unlockStrategic = [
    {
        title: "Dialog Management System Development",
        description: "Our Action Transformer experts utilize NLP and dialogue management frameworks like RASA or Microsoft Bot Framework to build end-to-end conversational agents, like virtual assistants designed specifically for taking actions on computers as per high-level user prompts.",
        img: Machine,
    },
    {
        title: "Action Transformer-based Custom Solutions",
        description: "Our AI experts understand your business objectives and requirements to build intelligent action transformer-powered custom solutions using deep learning frameworks like PyTorch or TensorFlow and other necessary tools and libraries.",
        img: DataAnalysis,
    },
    {
        title: "Enterprise Integration",
        description: "Our AI experts understand your business objectives and requirements to build intelligent action transformer-powered custom solutions using deep learning frameworks like PyTorch or TensorFlow and other necessary tools and libraries.",
        img: DomainSpecific,
    },
    {
        title: "Ongoing Maintenance and Support",
        description: "From monitoring performance metrics to retraining the model as needed and updating it to reflect changes in the client’s data or requirements, we offer comprehensive model monitoring and maintenance services to ensure your solution continues to perform optimally.",
        img: AISolutions,
    },

];
const supports = [
    {
        title: "Machine Learning",
        description: "Our developers have deep expertise in developing, training, testing and deploying AcT models using ML concepts and techniques like supervised and unsupervised learning.",
        img: AIIntegration,
    },
    {
        title: "Natural Language Processing",
        description: "Our developers can preprocess, tokenize, and encode natural language data, utilizing popular NLP libraries, including SpaCy, NLTK, and Stanford CoreNLP.",
        img: UpgradeMaintenance,
    },
    {
        title: "Intent Recognition",
        description: "We use intent recognition frameworks, including RASA and Dialogflow, to help the Dialog Management System identify user intent and determine the appropriate response.",
        img: CreativeDesign,
    },
    {
        title: "Data Engineering",
        description: "We are proficient in data engineering tools like ETL processes, data pipelines, and databases required to prepare and manage data for training and evaluating a model.",
        img: WorkflowAutomation,
    },
    {
        title: "Deep Learning",
        description: "Our developers excel in deep learning techniques, including neural networks, optimization algorithms, and backpropagation to develop robust Action Transformer-based solutions.",
        img: AIIntegration2,
    },
    {
        title: "Self Attentional Architecture",
        description: "Our AI engineers define the neural network’s architecture to implement self-attention layers using methods like dot-product attention, additive attention and multi-head attention and train them on a large dataset.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Human Action Recognition",
        description: "We equip our AcT models with computer vision capabilities like Human Action Recognition (HAR), allowing the model to learn spatiotemporal patterns and classify human actions from video sequences.",
        img: CreativeDesign2,
    },
    {
        title: "Deep Neural Network",
        description: "We craft advanced custom AI solutions using deep neural networks with recurrent layers that excel in processing sequential data by retaining an internal state.",
        img: Machine2,
    },

];
const approachs = [

    {
        title: "Domain Expertise",
        description: "With extensive experience in developing AI solutions using the right tech stack for various industries, including finance, healthcare, and logistics, our developers are experts in AI solutions development.",
        img: DataAnalysis2,
    },
    {
        title: "Use of Advanced Technologies",
        description: "Our developers are proficient in cutting-edge AI frameworks like TensorFlow, integration and deployment tools like Docker, multiple programming languages, AI algorithms and neural networks like CNN.",
        img: DomainSpecific2,
    },
    {
        title: "End-to-end Solution Development",
        description: "Hire Action Transformer developers from Zyntellect for end-to-end AcTsolution development services. From ideation to deployment, we work with you every step of the way to ensure your solution meets your unique business needs.",
        img: AISolutions2,
    },
    {
        title: "Proven Track Record",
        description: "With a proven track record of delivering successful AI solutions to clients across various industries, our developers have the potential to deliver high-quality solutions that drive real business value.",
        img: AIIntegration3,
    },

];
export default function TransformerServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Action Transformer Development Services</h2>
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
                    <h2 className='mb-3'>Our Action Transformer Development Expertise</h2>
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
                    <h2 className='mb-3'>Why Hire Action Transformer Developers From Zyntellect?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {approachs.map((approach, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
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
