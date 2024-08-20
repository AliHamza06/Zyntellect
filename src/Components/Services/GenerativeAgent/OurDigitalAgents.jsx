import React from 'react'
import Machine from '../../../assets/images/icon/deliver1.svg';
import DataAnalysis from '../../../assets/images/icon/deliver2.svg';
import DomainSpecific from '../../../assets/images/icon/deliver3.svg';
import AISolutions from '../../../assets/images/icon/deliver4.svg';
import DomainSpecific2 from '../../../assets/images/icon/deliver5.svg';
import AISolutions2 from '../../../assets/images/icon/deliver6.svg';
import Machine2 from '../../../assets/images/icon/deliver7.svg';
import DataAnalysis2 from '../../../assets/images/icon/deliver8.svg';
import DomainSpecific3 from '../../../assets/images/icon/deliver9.svg';
import AISolutions3 from '../../../assets/images/icon/making1.svg';
import DomainSpecific4 from '../../../assets/images/icon/making2.svg';
import AISolutions4 from '../../../assets/images/icon/making3.svg';
import AISolutions5 from '../../../assets/images/icon/making4.svg';
import DomainSpecific6 from '../../../assets/images/icon/making5.svg';
import AISolutions7 from '../../../assets/images/icon/making6.svg';
const ourDigitals = [
    {
        title: "Deliver Automated Customer Support",
        description: "Leverage our AI agents to deliver automated customer support. Our systems are capable of handling inquiries, troubleshooting, and providing personalized assistance 24/7. Integrated with NLP capabilities, these conversable agents ensure efficient and responsive customer service interactions, enhancing user satisfaction and loyalty.",
        img: Machine,
    },
    {
        title: "Offer Personalized Recommendations",
        description: "We build robust AI agents that can offer personalized recommendations based on a user’s preferences and behavior. By analyzing user interactions, preferences, feedback, and historical data, these adaptive learning agents suggest relevant content, products, or services to users, driving engagement and conversion rates.",
        img: DataAnalysis,
    },
    {
        title: "Business Analysis and Decision-making",
        description: "We build AI agents that can analyze vast datasets, revealing trends, forecasting market dynamics, and offering crucial insights to stakeholders. These agents help businesses orchestrate intricate analyses, streamline reporting, and enhance strategic decision-making.",
        img: DomainSpecific,
    },
    {
        title: "Segmentation and Targeting",
        description: "We create multi-agent systems specializing in segmentation and targeting to optimize marketing strategies and campaign effectiveness. By clustering users based on demographics, behavior, and preferences, these agents identify target segments and tailor marketing messages accordingly.",
        img: AISolutions,
    },
    {
        title: "Code Generation and Verification",
        description: "We develop digital AI agents proficient in code generation and automation to streamline software development processes. Leveraging LLMs and code generation techniques, these agents assist developers in writing code snippets, verifying code for accuracy, debugging and optimizing algorithms, ultimately enhancing productivity and code quality.",
        img: DomainSpecific2,
    },
    {
        title: "Audits and Reviews",
        description: "Our AI agents leverage NLU and sentiment analysis to enhance quality control and compliance by evaluating documents and reports and identifying errors, inconsistencies, and compliance issues within them. Equipped with adaptive learning, they help organizations improve review processes, minimize risks, and ensure regulatory compliance across industries.",
        img: AISolutions2,
    },
    {
        title: "Content Creation",
        description: "Our AI agents can generate a wide range of content, including written articles, stories, scripts, marketing copy, as well as images, graphics, visual designs, audio content like podcasts and music, and even videos. They can also optimize existing content for better performance, such as improving search engine visibility, user engagement, and conversion rates.",
        img: Machine2,
    },
    {
        title: "Data Visualization and Storytelling",
        description: "We build AI agents that transform complex data sets into clear and compelling visuals. Our agents transform extensive data sets into compelling visuals, including charts, graphs, and infographics, making insights easily understandable. With our AI agents, you can turn raw data into actionable information, enhancing your decision-making process.",
        img: DataAnalysis2,
    }
    ,
    {
        title: "Research and Analysis",
        description: "AI agents can greatly augment human research efforts through their ability to process and analyze massive amounts of data. Key capabilities include data analysis and pattern recognition across structured and unstructured data sources; identifying, extracting, and combining relevant information from various data sources to generate new insights or knowledge; and generating and testing hypotheses based on identified patterns.",
        img: DomainSpecific3,
    }
];

const autonomous = [
    {
        title: "Autonomous Decision-making",
        description: "Equipped with self-prompting capabilities, our AI agents can initiate actions and make decisions autonomously. Powered by advanced algorithms and machine learning models, our agents are capable of analyzing complex data sets, extracting insights, and taking proactive measures to achieve desired outcomes.",
        img: AISolutions3,
    },
    {
        title: "Skills Library Integration",
        description: "With an extensive skills library, the AI agents we develop can perform a wide variety of tasks with precision and efficiency. These skills developed using Python codes allow our AI agents to be smarter, highly knowledgeable and capable, enabling them to access information outside of their training knowledge to address tasks.",
        img: DomainSpecific4,
    },
    {
        title: "Multimodal Interaction",
        description: "Utilizing AutoGen’s Multimodal Conversable Agent and LLaVA Agent, we equip our agents with the ability to process multi-sensory data, enabling them to process various input types, including text, speech, and images. This enhances user experience and allows agents to adapt effectively to diverse communication channels and user preferences.",
        img: AISolutions4,
    },
    {
        title: "Defined Multi-agent Workflow",
        description: "AI agent development tools streamline the process of specifying the agent’s purpose, defining its properties, and orchestrating complex workflows, facilitating efficient collaboration and seamless interaction between multiple agents. Our AI agents with different workflow architectures, including two-agent, hierarchical, non-hierarchical, and sequential, effectively address a multitude of use cases.",
        img: AISolutions5,
    },
    {
        title: "Customizable Conversation Patterns",
        description: "Leveraging advanced tools and techniques, our developers build AI agents that offer a range of conversation patterns tailored to your specific needs. Our agents seamlessly communicate and collaborate with each other, harnessing the power of LLMs, human inputs, and tools to autonomously perform tasks or solicit human feedback, thereby enhancing operational efficiency.",
        img: DomainSpecific6,
    },
    {
        title: "Enhanced LLM Inference",
        description: "We maximize the utility of LLMs like GPT-4, Gemini and Mistral AI by offering enhanced inference capabilities, including caching, error handling, multi-config inference, and templating, ensuring optimal performance and overcoming model weaknesses.",
        img: AISolutions7,
    }
];
export default function OurDigitalAgents() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>What Can Our Digital AI Agents Do?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourDigitals.map((ourDigital, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard ourDigitalCard">
                                <img src={ourDigital.img} alt={ourDigital.title} />
                                <h4>{ourDigital.title}</h4>
                                <p>{ourDigital.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>What Sets Our AI Agents Apart?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {autonomous.map((autonomou, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-12 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard ourDigitalCard">
                                <img src={autonomou.img} alt={autonomou.title} />
                                <h4>{autonomou.title}</h4>
                                <p>{autonomou.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
