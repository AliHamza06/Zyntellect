import React from 'react'
import Machine from '../../../assets/images/icon/processing1.svg';
import DataAnalysis from '../../../assets/images/icon/processing2.svg';
import DomainSpecific from '../../../assets/images/icon/processing3.svg';
import AISolutions from '../../../assets/images/icon/processing4.svg';
import Machine2 from '../../../assets/images/icon/leeway1.svg';
import DataAnalysis3 from '../../../assets/images/icon/leeway2.svg';
import DomainSpecific4 from '../../../assets/images/icon/leeway3.svg';
import AISolution5 from '../../../assets/images/icon/leeway4.svg';
import Machine6 from '../../../assets/images/icon/approach1.svg';
import DataAnalysis7 from '../../../assets/images/icon/approach2.svg';
import DomainSpecific8 from '../../../assets/images/icon/approach3.svg';
import AISolution9 from '../../../assets/images/icon/approach4.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const consultings = [
    {
        title: "Deep Learning and Natural Language Processing",
        description: "With our deep knowledge and expertise in deep learning and Natural Language Processing (NLP), we possess the necessary foundation to develop innovative generative AI solutions that excel in various domains and deliver exceptional results for your organization.",
        img: Machine,
    },
    {
        title: "Computer Vision and Image Synthesis",
        description: "With an in-depth understanding of computer vision algorithms, deep learning architectures, and image processing techniques, we develop robust AI systems that excel in tasks such as object detection, image recognition, semantic segmentation, and more.",
        img: DataAnalysis,
    },
    {
        title: "Reinforcement Learning and Simulation",
        description: "With an in-depth understanding of reinforcement learning algorithms and simulation techniques, we develop intelligent systems that can learn and make optimal decisions through continuous interactions with their environments.",
        img: DomainSpecific,
    },
    {
        title: "Data Engineering",
        description: "Our in-depth data engineering expertise entails handling extensive and complex datasets, forming the training foundation for large generative AI models. We also leverage generative techniques to produce high-quality synthetic data for model training in data-scarce environments.",
        img: AISolutions,
    },
];
const Zyntellects = [
    {
        title: "Expertise in Generative AI",
        description: "Experience the next level of AI innovation with our tailored solutions. We excel in developing custom generative AI solutions like OpenAI’s ChatGPT, Google’s Bard, Stability AI’s Stable Diffusion, and Midjourney, enabling businesses to harness the latest advancements in generative AI technology.",
        img: Machine2,
    },
    {
        title: "Customized Solutions",
        description: "We understand that each organization has unique requirements. We pride ourselves on delivering customized generative AI solutions that align with your business goals and address your specific challenges. By tailoring our services to your needs, we maximize the effectiveness and impact of generative AI in your organization.",
        img: DataAnalysis3,
    },
    {
        title: "End-to-end Support",
        description: "Our generative AI consulting services cover the entire spectrum, from strategy and development to implementation and support. We provide comprehensive support throughout the project lifecycle, ensuring a seamless experience and maximizing the value you derive from generative AI.",
        img: DomainSpecific4,
    },
    {
        title: "Responsible AI Practices",
        description: "We are dedicated to developing ethical, transparent, and regulatory-compliant generative AI solutions. We prioritize the security, trustworthiness, and privacy of our users, recognizing that responsible AI practices are crucial for building trust and ensuring long-term success.",
        img: AISolution5,
    }
];
const approachs = [
    {
        title: "Data Analysis and Generative Model Selection",
        description: "We begin by scrutinizing your existing data, software systems, and technological infrastructure. This analysis enables us to identify opportunities for deploying generative AI models like GANs, VAEs, or RNNs in your operations. Understanding your unique business context, we pinpoint the most suitable generative AI technologies to enhance your operational efficiency.",
        img: Machine6,
    },
    {
        title: "Experimental Development - Pilot Project",
        description: "We develop a small-scale system or a Minimum Viable Product (MVP) to demonstrate the potential of generative AI in your business setting. This could involve testing generative models for content creation, anomaly detection, or product recommendation tasks. By experimenting, we identify areas for improving the generative AI system tailored to your needs.",
        img: DataAnalysis7,
    },
    {
        title: "Full-scale Generative AI Deployment",
        description: "Once the pilot project garners approval from all stakeholders, our expert team launches the full-scale generative AI system. With meticulous attention to detail, we ensure a seamless and successful deployment, allowing you to leverage the transformative capabilities of generative AI to enhance productivity and achieve your business objectives.",
        img: DomainSpecific8,
    },
    {
        title: "Monitoring and Performance Enhancement",
        description: "Once the generative AI system is deployed, we establish monitoring mechanisms to track its performance and ensure its ongoing efficiency. Our team closely monitors the system’s output, analyzing key metrics and making necessary adjustments to optimize its performance. We proactively identify any issues and take prompt action to enhance the system’s capabilities.",
        img: AISolution9,
    }
];
export default function ConsultingAIExpertise() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Generative AI Expertise</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {consultings.map((consulting, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={consulting.img} alt={consulting.title} />
                                <h4>{consulting.title}</h4>
                                <p>{consulting.description}</p>
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
                    {Zyntellects.map((Zyntellect, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
                                <img src={Zyntellect.img} alt={Zyntellect.title} />
                                <h4>{Zyntellect.title}</h4>
                                <p>{Zyntellect.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Approach to Generative AI Consulting</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {approachs.map((approach, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard">
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
