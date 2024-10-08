import React from 'react'
import Machine from '../../../../assets/images/icon/AIML1.svg';
import DataAnalysis from '../../../../assets/images/icon/AIML2.svg';
import DomainSpecific from '../../../../assets/images/icon/AIML3.svg';
import AISolutions from '../../../../assets/images/icon/AIML4.svg';
import AIIntegration from '../../../../assets/images/icon/AIML5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/AIML6.svg';
import CreativeDesign from '../../../../assets/images/icon/AIML7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/AIML8.svg';
import AIIntegration2 from '../../../../assets/images/icon/AIML9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/AIML10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/AIML11.svg';
import Machine2 from '../../../../assets/images/icon/AIML12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/AIML13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/adaptive14.svg';
import AISolutions2 from '../../../../assets/images/icon/adaptive15.svg';
import AIIntegration3 from '../../../../assets/images/icon/adaptive16.svg';
import UpgradeMaintenance3 from '../../../../assets/images/icon/adaptive17.svg';
import CreativeDesign3 from '../../../../assets/images/icon/adaptive18.svg';
import IntegratProcess from '../../../../assets/images/how-to-build-a-generative-ai-application.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "AI/ML Strategy Consulting",
        description: "Trust the expertise and deep tech background of the best minds at Zyntellect to steer you through the complexities of AI implementation through effective development approaches, strategic advice and ongoing R&D efforts. We are committed to maximizing the value of AI/ML for your business, ensuring sustainable growth in this transformative landscape.",
        img: Machine,
    },
    {
        title: "PoC and MVP Development",
        description: "Our team of experts meticulously crafts Proof of Concepts to validate the feasibility of your AI app’s concept, showcasing its potential through scaled-down versions. Moving forward, we design Minimum Viable Products that deliver essential functionalities, enabling real user validation, iterative enhancements and swift market entry.",
        img: DataAnalysis,
    },
    {
        title: "Custom AI App Development",
        description: "We collaborate with you to create AI-powered web and mobile apps that precisely align with your unique business needs. From the user interface to the algorithm, we meticulously engineer every aspect of your solution to guarantee optimal performance. Committed to both security and ethical AI, our AI development approach prioritizes responsible innovation.",
        img: DomainSpecific,
    },
    {
        title: "AI Integration",
        description: "We seamlessly integrate AI apps into your existing workflows, empowering your business with AI capabilities that align with your established processes. Our team works closely with you to seamlessly embed AI applications into your operational framework, ensuring a smooth transition and minimal downtime, resulting in remarkable gains in efficiency, productivity, and innovation.",
        img: AISolutions,
    },
    {
        title: "AI Agent/Copilot Development",
        description: "We develop intelligent AI agents and copilots using premier tools like AutoGen Studio, Copilot Studio, Vertex AI, and crewAI. Leveraging the capabilities of LLMs like GPT-4o and Gemini and an extensive skills library, our AI agents and copilots can perform diverse and complex tasks. Whether you need to automate workflows, analyze data, generate code, or enhance customer support, our team crafts AI agent solutions tailored to your specific business needs.",
        img: AIIntegration,
    },
    {
        title: "Enterprise AI Development",
        description: "Our enterprise AI development service transforms businesses by creating tailored AI solutions that streamline processes, enhance decision-making and drive innovation. Our services include consulting, custom AI solution development and deployment, as well as implementing advanced data analytics to meet your unique needs. Our scalable AI systems integrate seamlessly into your existing infrastructure to boost efficiency and provide a competitive edge.",
        img: UpgradeMaintenance,
    },
    {
        title: "Fine-tuning LLMs",
        description: "We specialize in fine-tuning Large Language Models (LLMs) to meet your requirements, whether you need to improve performance in specific domains, adapt to unique datasets, or enhance content generation capabilities. With a focus on precision and efficiency, we work closely with you to understand your objectives and tailor our fine-tuning process accordingly.",
        img: CreativeDesign,
    },
    {
        title: "Generative AI Development",
        description: "Leverage our custom generative AI development service to tap into AI’s full potential. We utilize the transformative capabilities of proprietary and open-source LLMs such as GPT, Llama, PaLM, Gemini, Mistral, and Claude to build robust GenAI solutions. Our expertise includes creating advanced content generation tools, intelligent virtual assistants, and personalized customer engagement systems.",
        img: WorkflowAutomation,
    },
    {
        title: "Data Engineering",
        description: "Our data engineering services encompass the entire data lifecycle, from sourcing and cleansing to structuring and enrichment. With a focus on data mining, analysis, annotation, and labeling, we lay the foundation for robust AI models. Leveraging advanced techniques and tools, we ensure that your data is optimized for machine learning, enabling accurate and reliable model training.",
        img: AIIntegration2,
    },
];
const supports = [
    {
        title: "Extensive Experience in AI",
        description: "With a wealth of experience in AI development, Zyntellect is your trusted technology partner. Our track record showcases a diverse array of successfully built AI products underpinned by a profound knowledge of AI technologies. From recommendation systems to chatbots, our expertise spans a wide spectrum.",
        img: UpgradeMaintenance2,
    },
    {
        title: "End-to-end AI Development",
        description: "We have the proficiency to meticulously transform raw, often complex and diverse, data into a refined and structured format ready for machine learning. We possess the knowledge and skills necessary to clean, label and preprocess data effectively, navigating challenges like missing values, outliers, and data quality issues without hassles.",
        img: CreativeDesign2,
    },
    {
        title: "We Prioritize Speed",
        description: "Our experienced developers and data scientists work tirelessly to accelerate the development cycle from initial concept to system integration. With our streamlined processes, agile methodologies, and advanced technology stack, we ensure that your AI projects are delivered on time while upholding impeccable standards of quality.",
        img: Machine2,
    },
    {
        title: "Expert AI Professionals",
        description: "Zyntellect boasts a team of skilled professionals with expertise in advanced AI technologies such as machine learning, natural language processing, and computer vision. With a proven track record of successful implementations, our experts build tailored products across diverse domains.",
        img: DataAnalysis2,
    }
];
export default function LeverageDevelopment() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Leverage Our AI Development Services to Create Next-generation Enterprise Solutions</h2>
                    <p className='text-center'>
                    Enhance your business performance with our data-driven AI solutions crafted leveraging advanced AI technologies like deep learning, machine learning, computer vision and natural language processing.
                    </p>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <div className="extractCard ourGenerativeCard CaterCard h-100">
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
                    <h2 className='mb-3'>Why Choose Zyntellect?</h2>
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
