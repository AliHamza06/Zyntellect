import React from 'react'
import Machine from '../../../assets/images/icon/const9.svg';
import DataAnalysis from '../../../assets/images/icon/const10.svg';
import DomainSpecific from '../../../assets/images/icon/const11.svg';
import AISolutions from '../../../assets/images/icon/const12.svg';
import AIIntegration from '../../../assets/images/icon/const13.svg';
import UpgradeMaintenance from '../../../assets/images/icon/const14.svg';
import CreativeDesign from '../../../assets/images/icon/const15.svg';
import WorkflowAutomation from '../../../assets/images/icon/const16.svg';
import AIIntegration2 from '../../../assets/images/icon/const17.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/const18.svg';
import CreativeDesign2 from '../../../assets/images/icon/banking11.svg';
import WorkflowAutomation2 from '../../../assets/images/icon/banking12.svg';
import { Link } from 'react-router-dom';

const ourGeneratives = [
    {
        title: "Extensive Experience",
        description: "Our team consists of seasoned professionals with extensive expertise in developing AI agents tailored for various domains, including marketing processes. Additionally, our deep understanding of this technology enables us to provide comprehensive consulting services, ensuring you can effectively incorporate AI agents into your workflows and maximize their benefits.",
        img: Machine,
    },
    {
        title: "Tailored Solutions",
        description: "We understand that every business is unique, which is why we offer customized AI marketing agent development services tailored to meet each client’s specific needs and goals. Whether you are looking to enhance customer engagement, optimize content creation, or streamline marketing processes, we have the expertise to deliver solutions that align with your objectives.",
        img: DataAnalysis,
    },
    {
        title: "Comprehensive Support",
        description: "We offer ongoing support to ensure your AI agent remains optimized, secure, and continually improving through monitoring, retraining, and ongoing feature enhancements. With comprehensive support and guidance throughout the project lifecycle, including optimization and troubleshooting, we maximize the value of your AI marketing agents, delivering lasting benefits to your business.",
        img: DomainSpecific,
    },
    {
        title: "Technical Expertise",
        description: "Benefit from our deep technical expertise in AI agent development, with proficiency in frameworks like AutoGen Studio, LangChain, MetaGPT, and Crew AI. Our developers select the most suitable tools and libraries based on your project’s objectives and complexity, streamlining the development process with pre-built functionalities and components tailored to your needs.",
        img: AISolutions,
    }
];
const supports = [
    {
        title: "Content Marketing",
        description: "Our AI agents streamline your marketing processes with automated content generation and marketing strategy optimization. We build content marketing solutions that deliver tailored content recommendations, generate content calendars, and provide idea generation, optimization tips, and performance analysis, empowering you to refine and enhance your marketing strategy effortlessly.",
        img: AIIntegration,
    },
    {
        title: "Social Media Marketing",
        description: "Elevate your social media presence with AI agents tailored for social media post generation and posting, designed to streamline content scheduling and optimization effortlessly. These agents ensure your posts are strategically timed, visually appealing, and engaging, empowering you to maximize your brand’s impact across social media platforms.",
        img: UpgradeMaintenance,
    },
    {
        title: "Ad Performance Analysis",
        description: "Maximize the effectiveness of your online advertising campaigns with AI ad performance analysis agents, offering in-depth insights and actionable recommendations for optimizing your ad strategies. Seamlessly analyze campaign data, receive valuable recommendations, and visualize performance metrics to ensure optimal utilization of your advertising budget.",
        img: CreativeDesign,
    },
    {
        title: "SEO and Content Strategy Planning",
        description: "Enhance your digital presence with SEO and content strategy planning agents, leveraging advanced algorithms to optimize your content for search engines. From keyword optimization to competitive analysis, these intelligent agents empower you to create compelling content strategies that resonate with your target audience, effortlessly boosting your brand’s online visibility.",
        img: WorkflowAutomation,
    },
    {
        title: "Market Research and Survey Analysis",
        description: "Maximize your market intelligence with our AI market research and survey analysis agents that decipher consumer behavior and feedback with unmatched precision. From sorting and categorizing data to trend spotting and sentiment analysis, these virtual analysts empower businesses to make informed decisions and stay ahead in their industry.",
        img: AIIntegration2,
    },
    {
        title: "Automated PR and Outreach",
        description: "We build custom AI agents adept at scouting opportunities, curating custom content, managing contact lists, tracking campaign analytics, and engaging in follow-ups seamlessly. Our AI agents reflect your brand’s voice and target specific audiences, ensuring personalized outreach that maximizes your chances of success in the competitive market.",
        img: UpgradeMaintenance2,
    }
];
export default function MarketingAgent() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Why Choose Zyntellect for AI Marketing Agent Development?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {ourGeneratives.map((ourGenerative, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <Link to="#" style={{ textDecoration: 'none' }}>
                                <div className="extractCard ourGenerativeCard CaterCard">
                                    <img src={ourGenerative.img} alt={ourGenerative.title} />
                                    <h4>{ourGenerative.title}</h4>
                                    <p>{ourGenerative.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>How Do Our AI Agents Improve Your Marketing Processes?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <Link to="#" style={{ textDecoration: 'none' }}>
                                <div className="extractCard ourGenerativeCard CaterCard">
                                    <img src={support.img} alt={support.title} />
                                    <h4>{support.title}</h4>
                                    <p>{support.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
