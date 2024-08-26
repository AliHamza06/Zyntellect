import React from 'react'
import Machine from '../../../assets/images/icon/powered1.svg';
import DataAnalysis from '../../../assets/images/icon/powered2.svg';
import DomainSpecific from '../../../assets/images/icon/powered3.svg';
import AISolutions from '../../../assets/images/icon/powered4.svg';
import AIIntegration from '../../../assets/images/icon/powered5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/powered6.svg';
import CreativeDesign from '../../../assets/images/icon/powered7.svg';
import WorkflowAutomation from '../../../assets/images/icon/powered8.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Custom Stable Diffusion Model-powered Solution Development",
        description: "We specialize in customizing Stable Diffusion models and creating solutions to meet your unique needs, utilizing the latest frameworks and technologies. Our team of experts collaborate with you throughout the entire development process to ensure a smooth and seamless experience.",
        img: Machine,
    },
    {
        title: "Model Integration and Deployment",
        description: "We thoroughly evaluate and understand your requirements to ensure secure and effective integration and deployment of the model. Our Stable Diffusion model integration and deployment service covers the entire process, from model selection and configuration to Integration, testing and deployment.",
        img: DataAnalysis,
    },
    {
        title: "Consulting and Strategy Building",
        description: "Our AI experts can guide you in finding Stable Diffusion model use cases in your domain and help build or integrate them into your system. We assess your needs, identify problems that can be resolved using Stable Diffusion models and provide continuous improvement suggestions following the launch of the solution.",
        img: DomainSpecific,
    },
    {
        title: "Support and Maintenance",
        description: "Through ongoing technical support, upgrade and maintenance services offered by our AI engineers, your stable diffusion model-powered solution can remain up-to-date and maintain an optimal performance for the long term.",
        img: AISolutions,
    },

];
const supports = [
    {
        title: "Machine Learning",
        description: "With expertise in several AI development services, our developers can seamlessly effectuate machine learning concepts like predictive modeling or NLP and deep learning to develop stable diffusion model-powered solutions that convert the assembled text data into visual data.",
        img: AIIntegration,
    },
    {
        title: "Fine tuning",
        description: "To adapt Stable Diffusion models to a specific task, they can be fine-tuned on a smaller dataset. This is also known as transfer learning, which can minimize the computation and data required to train a high-quality model for a particular use case.",
        img: UpgradeMaintenance,
    },
    {
        title: "Deep Learning",
        description: "We thoroughly understand how deep-learning models utilize multi-layered artificial neural networks to model complex patterns in data. We also implement Stable Diffusion deep learning architecture designed for NLP tasks to develop highly performant solutions.",
        img: CreativeDesign,
    },
    {
        title: "Transfer Learning",
        description: "We specialize in transfer learning, an AI technology that allows the reuse of pre-trained models on similar tasks to improve performance and reduce training time. We understand how to utilize pre-trained models to solve specific problems, leading to efficient and effective solutions.",
        img: WorkflowAutomation,
    },
];

export default function DiffusionSolution() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Stable Diffusion Model-powered Solution Development Services</h2>
                    <p className='text-center'>
                        As a leading provider of Stable Diffusion model-powered development services, our team of experienced AI developers have a deep understanding of the different platforms and frameworks used for Stable Diffusion-based applications. Utilizing the newest Stable Diffusion models, we are equipped to assist you in the development of custom, finely-tuned AI models tailored to your specific business needs.
                    </p>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
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
                    <h2 className='mb-3'>Our AI Expertise for Stable Diffusion Model-powered Solution Development</h2>
                    <p className='text-center'>
                    Our proficiency in diverse AI technologies like the undermentioned enables us to create robust stable diffusion model-powered solutions.
                    </p>
                </div>
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
        </>
    )
}
