import React from 'react'
import Machine from '../../../assets/images/icon/served1.svg';
import DataAnalysis from '../../../assets/images/icon/served2.svg';
import DomainSpecific from '../../../assets/images/icon/served3.svg';
import AISolutions from '../../../assets/images/icon/served4.svg';
import AIIntegration from '../../../assets/images/icon/served5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/served6.svg';
import CreativeDesign from '../../../assets/images/icon/served7.svg';
import WorkflowAutomation from '../../../assets/images/icon/served8.svg';
import AIIntegration2 from '../../../assets/images/icon/served9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/build10.svg';
import CreativeDesign2 from '../../../assets/images/icon/build11.svg';
import Machine2 from '../../../assets/images/icon/build12.svg';
import DataAnalysis2 from '../../../assets/images/icon/adaptive13.svg';
import DomainSpecific2 from '../../../assets/images/icon/adaptive14.svg';
import AISolutions2 from '../../../assets/images/icon/adaptive15.svg';
import AIIntegration3 from '../../../assets/images/icon/adaptive16.svg';
import UpgradeMaintenance3 from '../../../assets/images/icon/adaptive17.svg';
import CreativeDesign3 from '../../../assets/images/icon/adaptive18.svg';
import IntegratProcess from '../../../assets/images/how-to-build-a-generative-ai-application.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Consulting & Strategy Building",
        description: "Our consulting process starts with a thorough understanding of your organization’s goals, pain points, and competitive context. We then recommend the most suitable GPT model-powered solution for your specific needs. Finally, we craft a detailed implementation strategy to ensure the solution seamlessly aligns with your objectives, ensuring your organization’s success in the rapidly evolving tech landscape.",
        img: Machine,
    },
    {
        title: "Data Engineering",
        description: "With meticulous data engineering, we ensure that your organization’s valuable data becomes a powerful asset, enabling the development of highly effective and tailored GPT-powered solutions. Our skilled ChatGPT developers meticulously prepare your proprietary data, ensuring it adheres to the necessary standards essential for fine-tuning the GPT model, ultimately optimizing its performance to the highest degree.",
        img: DataAnalysis,
    },
    {
        title: "GPT Model Fine-tuning",
        description: "Leverage the full potential of GPT models, including GPT-3.5 Turbo and GPT-4, with our custom GPT model development service. We carefully select a GPT model tailored to your needs, fine-tune it with your proprietary data for domain-specific performance, and build a customized solution on top of it. This enables the solution to deliver accurate and meaningful responses to queries within your specific context.",
        img: DomainSpecific,
    },
    {
        title: "GPT Model-powered Solution Development",
        description: "Experience innovation, efficiency, and a competitive advantage with our expertly developed GPT model-powered solutions. Whether you want chatbots for personalized customer interactions, intelligent content generators, or context-aware recommendation systems, our GPT model-powered applications are meticulously crafted to amplify your organization’s capabilities within the dynamic AI landscape.",
        img: AISolutions,
    },
    {
        title: "Integration Into Workflows",
        description: "We ensure that the GPT model-powered solutions we develop seamlessly align with your existing processes. We analyze your workflows, identify integration points, and develop a tailored integration strategy that minimizes disruptions while maximizing the benefits of our solutions. This ensures that your organization can transition into a more efficient, AI-enhanced operational environment smoothly.",
        img: AIIntegration,
    },
    {
        title: "Upgrades and Maintenance",
        description: "Keep your GPT model-powered application up-to-date and performance-optimized with our upgrade and maintenance services. We constantly keep track of emerging trends, security updates, and enhancements in AI technology, ensuring your application remains competitive and secure in a rapidly evolving tech landscape. Trust us with your application’s post-deployment needs to ensure it runs at peak efficiency.",
        img: UpgradeMaintenance,
    },
    {
        title: "Large Language Models",
        description: "Our top-tier developers and engineers have profound expertise working with Large Language Models (LLMs). Our technical acumen spans various large language models, including GPT-4, LLaMA and PaLM 2, enabling us to fine-tune them for specialized tasks, ensuring optimal performance in natural language understanding and generation.",
        img: CreativeDesign,
    },
    {
        title: "Natural Language Processing (NLP)",
        description: "With deep knowledge of NLP, we craft versatile GPT model-powered applications for text-related tasks. These solutions perform diverse actions, from generating coherent text and analyzing sentiments in various contexts to condensing lengthy content into succinct summaries and facilitating seamless communication across languages.",
        img: WorkflowAutomation,
    },
    {
        title: "Machine Learning",
        description: "With proficiency in diverse machine learning techniques such as supervised, unsupervised, and reinforcement learning, we create robust AI solutions across a broad spectrum of applications. Our machine learning expertise equips us to provide customized and highly efficient OpenAI model-powered apps tailored to address unique business challenges.",
        img: AIIntegration2,
    },
];

export default function ServedChatGPT() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Industries Served by ChatGPT Developers</h2>
                    <p className='text-center'>
                    Our extensive portfolio encompasses a wide range of industries, with some of the most prominent ones listed below.
                    </p>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard servedCard">
                                <img src={ourGenerative.img} alt={ourGenerative.title} />
                                <h4>{ourGenerative.title}</h4>
                                <p>{ourGenerative.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
