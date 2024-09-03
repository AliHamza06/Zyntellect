import React from 'react'
import Machine from '../../../../assets/images/icon/custom1.svg';
import DataAnalysis from '../../../../assets/images/icon/custom2.svg';
import DomainSpecific from '../../../../assets/images/icon/custom3.svg';
import AISolutions from '../../../../assets/images/icon/custom4.svg';
import AIIntegration from '../../../../assets/images/icon/custom5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/custom6.svg';
import CreativeDesign from '../../../../assets/images/icon/custom7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/custom8.svg';
import AIIntegration2 from '../../../../assets/images/icon/custom9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/custom10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/custom11.svg';
import Machine2 from '../../../../assets/images/icon/custom12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/custom13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/custom14.svg';
import AISolutions2 from '../../../../assets/images/icon/custom15.svg';
import AIIntegration3 from '../../../../assets/images/icon/custom16.svg';
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
        title: "Diverse AI Technologies",
        description: "Our AI engineers have deep expertise in various AI domains, including machine learning, computer vision and natural language processing. This expertise equips them to develop a wide range of AI solutions to meet diverse business needs across various industries.",
        img: Machine,
    },
    {
        title: "Programming Languages & Frameworks",
        description: "Proficient in popular programming languages like Python and R, and frameworks such as TensorFlow, PyTorch, and Scikit-Learn, our engineers build high-performing AI solutions that empower businesses to harness the full potential of artificial intelligence.",
        img: DataAnalysis,
    },
    {
        title: "Data Engineering",
        description: "Our AI engineers are highly skilled in data engineering, where they efficiently handle data preparation, transformation, and management. This critical skillset plays a fundamental role in various AI applications, including the training of machine learning models, conducting comprehensive data analytics, and making accurate predictions.",
        img: DomainSpecific,
    },
    {
        title: "LLM Fine-tuning",
        description: "Our AI experts have proficiency working with popular AI models such as GPT and Llama 2. Their deep understanding of AI models’ architecture and capabilities enables them to choose the most suitable one for your specific requirements, and then fine-tune it to meet the unique requirements of your business.",
        img: AISolutions,
    },
    {
        title: "Machine Learning Techniques",
        description: "Our skilled AI engineers hold expertise in a diverse array of machine learning techniques. With proficiency in supervised & unsupervised learning, deep learning, reinforcement learning and more, they build comprehensive solutions tailored to clients’ business-specific needs.",
        img: AIIntegration,
    },
    {
        title: "Prompt Engineering",
        description: "Our AI engineers have expertise in crafting highly effective and contextually relevant prompts to guide interactions with chatbots, virtual assistants etc. This precision in prompt design ensures smoother and more valuable user experiences, making it a pivotal component for superior conversational AI solutions.",
        img: UpgradeMaintenance,
    },

];
const supports = [
    {
        title: "Highly Skilled",
        description: "Our highly skilled AI engineers bring extensive industry experience and expertise to our team. They have honed their craft through years of hands-on experience in the industry, ensuring that your AI solutions are crafted by the best in the field.",
        img: CreativeDesign,
    },
    {
        title: "Diverse Expertise",
        description: "Our AI engineers possess diverse expertise, allowing us to tackle a wide range of AI-based projects. Whether it’s natural language processing, computer vision, predictive analytics, or any other AI domain, our team has the knowledge and skills to address your specific needs.",
        img: WorkflowAutomation,
    },
    {
        title: "Timely Delivery",
        description: "With a highly skilled and dedicated team of AI engineers, we guarantee that your AI solutions will be deployed on schedule, meeting your business objectives. Our reliable, on-time product delivery empowers your organization by ensuring your AI solutions are in your hands when you need them.",
        img: AIIntegration2,
    },
    {
        title: "Quality Assurance",
        description: "Our commitment to quality is unwavering, as we tirelessly strive to exceed industry standards. With a rigorous approach that encompasses comprehensive testing and quality assurance, our goal is to deliver AI solutions that are not just functional but also exceptional in performance and reliability.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Proven Track Record",
        description: "Our portfolio speaks for itself. We have successfully built AI solutions for diverse businesses across various industries. Our track record showcases our consistency in delivering exceptional results and our commitment to innovation, quality, and client satisfaction.",
        img: CreativeDesign2,
    },
    {
        title: "End-to-end Support",
        description: "We provide comprehensive AI assistance, from conceptualization to deployment and beyond. Our proficient team of AI engineers manages the entire AI development process, eliminating the need for you to engage multiple service providers for AI implementation, minimizing hassles.",
        img: Machine2,
    },

];
const approachs = [

    {
        title: "Retail & E-commerce",
        description: "Elevate your retail and e-commerce ventures with our AI solutions designed to optimize inventory management, deliver tailored product recommendations, automate customer support, analyze market trends, provide valuable insights into customer behavior and preferences, and beyond.",
        img: DataAnalysis2,
    },
    {
        title: "Automotive",
        description: "By leveraging our AI solutions, you can anticipate and prevent vehicle issues, deliver exceptional customer experiences, optimize inventory, make data-driven decisions, maintain high-quality standards for products, and target your marketing efforts more effectively.",
        img: DomainSpecific2,
    },
    {
        title: "Education",
        description: "Elevate your educational and e-learning initiatives by hiring our AI developers. Our experts specialize in creating diverse solutions, including intelligent tutoring systems, personalized learning platforms, data-driven curriculum design and automated administrative tools.",
        img: AISolutions2,
    },
    {
        title: "Banking & Finance Services",
        description: "Take your financial services to new heights by collaborating with our expert AI engineers. Their expertise in developing AI solutions spans across a wide spectrum, including fraud detection systems, risk assessment tools, intelligent trading platforms, and customer service applications.",
        img: AIIntegration3,
    },
    {
        title: "Media & Entertainment",
        description: "Enhance your media/entertainment business with our custom AI solutions that can boost your business with robust solutions designed to offer content recommendations, streamline digital content creation, create immersive experiences for your audience and more.",
        img: UpgradeMaintenance3,
    },
    {
        title: "Travel & Tourism",
        description: "Collaborate with our AI engineers to build advanced systems for your travel and tourism business. Our experts excel in creating diverse solutions, including itinerary optimization apps, recommendation systems and efficient booking systems.",
        img: CreativeDesign3,
    },
    {
        title: "Healthcare",
        description: "Our advanced AI healthcare solutions can help enhance the quality of the healthcare services you provide by innovating medical diagnostics, improving patient care, enhancing electronic health records, creating telemedicine applications and more.",
        img: AIIntegration4,
    },
    {
        title: "Legal",
        description: "With advanced AI-powered tools, we enable automated document analysis, intelligent contract management, precise legal research capabilities and more. This translates to improved efficiency, reduced costs, and the ability to deliver faster, more accurate legal services to your clients.",
        img: UpgradeMaintenance4,
    },
    {
        title: "Manufacturing",
        description: "Empower your manufacturing processes with our custom AI solutions tailored to optimize production efficiency, improve quality control, predict equipment maintenance needs, enhance supply chain management, and enable predictive analytics for better decision-making.",
        img: CreativeDesign4,
    },
    {
        title: "Real Estate",
        description: "Transform your real estate business with our AI solutions designed to streamline property search, optimize pricing strategies, automate lead generation, enhance customer experiences, and provide personalized recommendations based on client preferences and market trends.",
        img: AIIntegration5,
    },
    {
        title: "Insurance",
        description: "Simplify and streamline your insurance operations with our custom AI solutions, such as claims processing automation solutions, fraud detection systems, risk assessment tools, personalized policy recommendation systems, customer service chatbots, and predictive analytics tools for underwriting and pricing.",
        img: UpgradeMaintenance5,
    },
    {
        title: "Logistics",
        description: "Optimize your logistics and supply chain operations with our AI solutions, designed to improve route planning, enhance fleet management, predict demand, optimize warehouse operations, automate inventory management, provide real-time tracking, and streamline overall logistics processes.",
        img: CreativeDesign5,
    },

];
export default function OurAIEngineers() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Expertise of Our AI Engineers</h2>
                    <p className='text-center'>
                        When you choose Zyntellect, you join forces with a team of highly skilled AI engineers with a wealth of knowledge and expertise in various areas, including
                    </p>
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
                    <h2 className='mb-3'>Why Hire Our AI Engineers?</h2>
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
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Custom AI Solutions Cater to Diverse Industries</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {approachs.map((approach, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
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
