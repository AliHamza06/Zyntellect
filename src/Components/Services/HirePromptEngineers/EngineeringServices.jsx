import React from 'react'
import Machine from '../../../assets/images/icon/critical1.svg';
import DataAnalysis from '../../../assets/images/icon/critical2.svg';
import DomainSpecific from '../../../assets/images/icon/critical3.svg';
import AISolutions from '../../../assets/images/icon/critical4.svg';
import AIIntegration from '../../../assets/images/icon/critical5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/critical6.svg';
import CreativeDesign from '../../../assets/images/icon/critical7.svg';
import WorkflowAutomation from '../../../assets/images/icon/critical8.svg';
import AIIntegration2 from '../../../assets/images/icon/critical9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/banking10.svg';
import CreativeDesign2 from '../../../assets/images/icon/banking11.svg';
import IntegratProcess from '../../../assets/images/Process-Flow-That-Our-Prompt-Engineers-Follow.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Strategy and Consulting",
        description: "We offer strategy and consulting services to help our clients make informed decisions about their AI initiatives. With our expertise in the latest AI technologies and our unwavering commitment to innovation, we help our clients succeed in the ever-evolving world of AI.",
        img: Machine,
    },
    {
        title: "Analysis Service",
        description: "Our team of experienced prompt engineers works closely with clients to identify the tasks and activities their generative AI models need to perform. We evaluate all aspects of the project, including the data sources, the intended audience, and the desired outcomes. Conducting a thorough task analysis ensures that the resulting model prompts are tailored to the client’s specific needs and optimized to deliver the desired results.",
        img: DataAnalysis,
    },
    {
        title: "Design and Testing",
        description: "Design and testing are critical to the prompt engineering process. Our experienced team excels in creating tailored prompt designs using advanced NLP and NLG techniques. We rigorously test the model’s performance to ensure it meets the desired outcomes. Our design and testing services ensure that clients receive high-quality prompt engineering services that are optimized for their specific needs.",
        img: DomainSpecific,
    },
    {
        title: "Integration and Optimization",
        description: "Our prompt engineering team is highly experienced in integrating and optimizing generative AI models. We work closely with clients to create tailored solutions that meet their unique requirements and ensure seamless performance. Our expertise in integrating generative AI models with a range of systems and software, along with our optimization services, helps clients maximize the value of their generative AI models and deliver outstanding results.",
        img: AISolutions,
    }
];
const supports = [
    {
        title: "Requirement Gathering",
        description: "We begin by understanding the client’s requirements, objectives, and expectations for their generative AI model. We gather all relevant information to ensure that the prompt engineering is tailored to the client’s specific needs.",
        img: AIIntegration,
    },
    {
        title: "Strategy and Consulting",
        description: "We provide clients with expert advice on the latest AI technologies and innovative solutions and help them make informed decisions about their AI initiatives. We help clients formulate an effective strategy for implementing their generative AI models.",
        img: UpgradeMaintenance,
    },
    {
        title: "Design and Testing",
        description: "Our team designs custom prompts for a range of models, including OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion. We then test the prompts to ensure that they are generating the desired outputs.",
        img: CreativeDesign,
    },
    {
        title: "Integration and Optimization",
        description: "We integrate the generative AI models into the client’s existing systems, ensuring seamless performance. We also optimize the models to ensure that they are operating efficiently and effectively.",
        img: WorkflowAutomation,
    },
    {
        title: "Delivery and Deployment",
        description: "Once the prompt engineering process is complete, we deliver the final product to the client and provide support for deployment. We ensure that clients are fully trained in using the generative AI models and can effectively leverage their new capabilities.",
        img: AIIntegration2,
    }
];
export default function EngineeringServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Unlock the Power of Generative AI Models with Our Prompt Engineering Services</h2>
                    <p className='text-center'>
                        Elevate your users’ AI experience with our advanced prompt engineering solutions. Our team of skilled prompt engineers has a proven track record in tailoring prompts for various AI models, including OpenAI, Imagen, Midjourney, DALL-E, and Stable Diffusion, and has in-depth knowledge of AI technologies like NLP and NLG. Deliver a seamless and efficient AI experience to your users with our prompt engineers.
                    </p>
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
                    <h2 className='mb-3'>Process Flow That Our Prompt Engineers Follow to Develop Solutions</h2>
                </div>
                <img src={IntegratProcess} className='w-100' alt="" />
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard gatheringCard">
                                <img src={support.img} alt={support.title} />
                                <div>
                                    <h4>{support.title}</h4>
                                    <p>{support.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
