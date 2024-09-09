import React from 'react'
import Machine from '../../../../assets/images/icon/Intent1.svg';
import DataAnalysis from '../../../../assets/images/icon/Intent2.svg';
import DomainSpecific from '../../../../assets/images/icon/Intent3.svg';
import AISolutions from '../../../../assets/images/icon/Intent4.svg';
import AIIntegration from '../../../../assets/images/icon/Intent5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/Intent6.svg';
import CreativeDesign from '../../../../assets/images/icon/Intent7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/Intent8.svg';
import AIIntegration2 from '../../../../assets/images/icon/Intent9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/Intent10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/Intent11.svg';
import Machine2 from '../../../../assets/images/icon/Intent12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/Intent13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/Intent14.svg';
import AISolutions2 from '../../../../assets/images/icon/Intent15.svg';
import AIIntegration3 from '../../../../assets/images/icon/Intent16.svg';
import CreativeDesign3 from '../../../../assets/images/icon/Intent17.svg';
import Machine3 from '../../../../assets/images/icon/Intent18.svg';
import DataAnalysis3 from '../../../../assets/images/icon/Intent19.svg';
import DomainSpecific3 from '../../../../assets/images/icon/Intent20.svg';
import AISolutions3 from '../../../../assets/images/icon/Intent21.svg';
import AIIntegration4 from '../../../../assets/images/icon/Intent22.svg';
import IntegratProcess from '../../../../assets/images/AI-Chatbot-Workflow.png';
import { Link } from 'react-router-dom';

const unlockStrategic = [
    {
        title: "Intent-based Responses",
        description: "By leveraging advanced Natural Language Processing (NLP), our chatbots can accurately understand the context in multiple languages, identify question intents, and provide suggestions to confirm or clarify those intents.",
        img: Machine,
    },
    {
        title: "Omnichannel Integration",
        description: "Our versatile chatbots easily integrate with various communication channels, such as mobile apps, websites and social media platforms, meeting your users on their preferred platforms to answer queries and offer support.",
        img: DataAnalysis,
    },
    {
        title: "Multilingual Support",
        description: "With multilingual capabilities, our chatbots enable you to expand into new markets and engage with customers worldwide, facilitating effective communication across different languages and broadening your reach.",
        img: DomainSpecific,
    },
    {
        title: "Data Security",
        description: "Our AI chatbots ensure data privacy with secure storage and controlled access, making them perfect for financial transactions, retail, and e-commerce, while also offering robust analytics for insights-driven decision-making.",
        img: AISolutions,
    },

];
const supports = [
    {
        title: "Websites",
        description: "Integrate our chatbot into your website to improve customer service and sales opportunities. The chatbot will serve as a proactive and automated means of engaging with your website visitors, providing assistance, answering questions, and potentially converting these visitors into clients or customers.",
        img: AIIntegration,
    },
    {
        title: "Social Media Channels",
        description: "Integrate our chatbot with your social media accounts and facilitate communication and engagement with your audience on social media. The chatbot provides an accessible and efficient means for people to engage with your brand through messaging and automated responses on social media platforms.",
        img: UpgradeMaintenance,
    },
    {
        title: "E-commerce Portals",
        description: "If you run an e-commerce business, adding a chatbot to your website can enhance customers’ shopping experience. The chatbot will assist your customers in finding products and finding answers to queries, ultimately making the online shopping process smoother and more enjoyable for them.",
        img: CreativeDesign,
    },
    {
        title: "Android Applications",
        description: "Our team of skilled developers and AI experts work collaboratively to develop and integrate chatbot solutions seamlessly into your Android applications. Whether you are looking to enhance user engagement, streamline customer support, or automate tasks, our Android chatbots are designed to meet your unique needs.",
        img: WorkflowAutomation,
    },
    {
        title: "iOS Applications",
        description: "We leverage cutting-edge Intent and innovative design to craft AI chatbots that offer flawless and captivating user experiences across all iOS applications. Our chatbot is your key to enabling effective communication, addressing inquiries, and providing round-the-clock assistance to users.",
        img: AIIntegration2,
    },
    {
        title: "HR, ERP, CRM and CM Systems",
        description: "Transform your HR, ERP, CRM and CM and other systems through our chatbot implementation service. Our solutions are designed to enhance user experiences and streamline processes across your organization, providing a unified and efficient platform for customer interactions, business operations, and content management.",
        img: UpgradeMaintenance2,
    },

];
const approachs = [
    {
        title: "Real Estate",
        description: "Our expertly crafted smart chatbot solutions automate question-answering, provide real-time suggestions, and offer convenient shipping details, enhancing customers’ overall shopping experience.",
        img: CreativeDesign2,
        linkTo: "#",
    },
    {
        title: "E-commerce",
        description: "Whether it’s customer service chatbots, e-commerce assistants, virtual health advisors, or any other type of chatbot, we have an extensive experience and proven track record of delivering tailored and effective solutions that cater to various industry needs.",
        img: Machine2,
        linkTo: "#",
    },
    {
        title: "Banking/Finance",
        description: "Our custom chatbots streamline tasks like complaint handling and financial transactions, apart from providing real-time account balance information, delivering enhanced and personalized customer experiences.",
        img: DataAnalysis2,
        linkTo: "#",
    },
    {
        title: "Insurance",
        description: "Our custom chatbots for the insurance sector streamline tasks like policy inquiries, claims processing, and policy updates, delivering enhanced and personalized customer experiences while saving time and resources for insurance providers.",
        img: DomainSpecific2,
        linkTo: "#",
    },
    {
        title: "Healthcare",
        description: "Our team creates chatbots that facilitate seamless interactions between healthcare providers and patients, facilitating convenient and faster communication, enhancing overall patient acquisition efforts.",
        img: AISolutions2,
        linkTo: "#",
    },
    {
        title: "Retail",
        description: "Our retail chatbots facilitate effortless customer engagement, providing round-the-clock assistance and superior service. They effectively inform customers about exciting deals and other vital info, elevating your business prospects.",
        img: AIIntegration3,
        linkTo: "#",
    },

    {
        title: "Logistics",
        description: "Our chatbot solutions for logistics seamlessly integrate into logistics systems, offering customers on-the-go access to real-time information. With our bots, you can ensure round-the-clock availability of up-to-date supply chain details for dealers and customers alike.",
        img: CreativeDesign3,
        linkTo: "#",
    },
    {
        title: "Legal Chatbots",
        description: "Our chatbots seamlessly integrate into legal workflows. These AI-powered tools offer instant legal guidance, streamlining access to legal information and simplifying interactions with clients, saving time and resources for legal professionals.",
        img: Machine3,
        linkTo: "#",
    },
    {
        title: "Travel and Hospitality",
        description: "By integrating our conversational bots into your portals or workflows, you can facilitate timely services, seamless customer bookings, and streamlined payment handling, thereby enhancing the entire customer journey.",
        img: DataAnalysis3,
        linkTo: "#",
    },
    {
        title: "Manufacturing",
        description: "Our manufacturing chatbots are designed to streamline various processes within the manufacturing industry, including inventory management, order tracking, and supply chain coordination. By assisting with these tasks, our chatbots help manufacturers improve efficiency and reduce operational costs.",
        img: DomainSpecific3,
        linkTo: "#",
    },
    {
        title: "Media & Entertainment",
        description: "Our AI chatbot solutions for media and entertainment provide seamless interactions between content providers and consumers. Whether it’s delivering personalized content recommendations, providing real-time updates on events, or facilitating ticket bookings, our chatbots enhance the overall entertainment experience for the audience.",
        img: AISolutions3,
        linkTo: "#",
    },
    {
        title: "Automotive",
        description: "Our chatbot solutions for the automotive industry provide personalized assistance for vehicle inquiries, service scheduling, and real-time updates on maintenance and repair status. By integrating our AI chatbots into your platforms, we enhance customer engagement, streamline internal inquiries, and elevate the overall experience for your team as well as customers.",
        img: AIIntegration4,
        linkTo: "#",
    },

];
export default function ChatbotsCapabilities() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Capabilities Exhibited by Our Chatbots</h2>
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
                    <h2 className='mb-3'>AI Chatbot Workflow</h2>
                </div>
                <div className='text-center'>
                    <img src={IntegratProcess} alt="" className='w-75' />
                </div>
            </div>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Integrate Our Chatbots into Different Platforms</h2>
                    <p className='text-center'>
                        Our versatile chatbots are designed to seamlessly integrate into a wide array of platforms, providing you with a powerful tool to enhance user experiences and streamline interactions.
                    </p>
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
                    <h2 className='mb-3'>Business Verticals We Serve</h2>
                    <p className='text-center'>
                        At LeewayHertz, we are driven by the goal of delivering AI-powered chatbot solutions that are highly relevant and effective for each client’s specific industry, business context and goals.
                    </p>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {approachs.map((approach, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                            <Link to={approach.linkTo} style={{ textDecoration : "none" }}>
                                <div className="extractCard ourGenerativeCard  h-100">
                                    <img src={approach.img} alt={approach.title} />
                                    <h4>{approach.title}</h4>
                                    <p>{approach.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
