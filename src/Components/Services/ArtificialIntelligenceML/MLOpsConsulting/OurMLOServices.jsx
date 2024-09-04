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
        title: "ML Pipeline Development",
        description: "We specialize in developing automated ML pipelines designed to take input data and code and process it, enabling you to train machine learning models seamlessly. Our ML pipeline development services ensure that your data is processed accurately and your models are trained to the highest standards.",
        img: Machine,
    },
    {
        title: "Model Deployment and Implementation",
        description: "We have extensive experience in deploying machine-learning models on cloud-native infrastructure that are optimized for ML workloads, such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), ensuring their high availability, scalability and reliability.",
        img: DataAnalysis,
    },
    {
        title: "Continuous Delivery for Machine Learning",
        description: "Our CI/CD service enables your data science team to quickly test new ideas and iterate on models by automating pipeline components’ building, testing and deployment to the target environment. By streamlining the development process of your machine learning pipeline, we help you accelerate time-to-market and achieve business growth.",
        img: DomainSpecific,
    },
    {
        title: "Model Monitoring",
        description: "Our observability solutions, such as distributed tracing, log analysis and anomaly detection are designed to provide real-time insights into the performance of your AI systems, enabling you to optimize and fine-tune your models for better accuracy and efficiency.",
        img: AISolutions,
    },
    {
        title: "Data Engineering and Management Services",
        description: "We offer expert guidance on robust data handling practices to ensure dataset integrity and usability for ML models. Our services include advising on data acquisition strategies, implementing efficient data cleaning techniques, and establishing reliable data processing workflows. Our goal is to prepare optimized, high-quality datasets that enhance ML effectiveness and reduce errors.",
        img: AIIntegration,
    },
    {
        title: "Model Governance and Compliance",
        description: "We enhance the security and integrity of your ML applications through our robust governance strategies, meticulously prioritizing data confidentiality, ethics, and strict regulatory compliance. Our comprehensive approach includes detailed oversight mechanisms designed to ensure model fairness, effectively detect biases, and rigorously evaluate performance.",
        img: UpgradeMaintenance,
    },

];
const supports = [

    {
        title: "Fastrack Your Workflow",
        description: "We streamline your infrastructure, workflows, and data preparation with automation and optimization to maintain productivity and efficiency throughout the ML lifecycle, enabling your team to stay productive.",
        img: CreativeDesign,
    },
    {
        title: "End-to-end Development",
        description: "By employing cutting-edge tools and technologies, including advanced algorithms and automation capabilities, our end-to-end development in MLOps service eliminates the need for extensive in-house expertise.",
        img: WorkflowAutomation,
    },
    {
        title: "Flexible MLOps Toolkit",
        description: "We leverage a platform that combines the best of both worlds, combining the power and flexibility of open-source tools with the convenience and reliability of commercial frameworks, along with our own hand-picked selection of favorite notebooks and libraries, providing you a seamless and integrated user experience.",
        img: AIIntegration2,
    },
    {
        title: "Lower TCO for ML Projects",
        description: "We understand that flexibility is key to building successful machine learning solutions. That’s why we offer a vendor-agnostic approach that allows you to run your operations in the cloud, on-premises or in a hybrid environment without ever feeling locked in.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Efficient Collaboration",
        description: "By automating routine tasks and facilitating the smooth and efficient flow of experiments, we ensure you can make the most of your valuable time. We neatly store and organize your data sets and create high-performing models for you to achieve desired outcomes.",
        img: CreativeDesign2,
    },
    {
        title: "Security and Compliance",
        description: "Our air-tight encryption protocols guarantee that your data is safeguarded not just while in use but also in motion and at rest in the cloud. With our rigorous security measures, you can rest assured that your data is in good hands.",
        img: Machine2,
    },

];

export default function OurMLOServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our MLOps Consulting Services</h2>
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
                    <h2 className='mb-3'>Why Hire Zyntellect for MLOps Consulting?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard  h-100">
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
