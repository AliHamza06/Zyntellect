import React from 'react'
import Machine from '../../../../assets/images/icon/creating1.svg';
import DataAnalysis from '../../../../assets/images/icon/creating2.svg';
import DomainSpecific from '../../../../assets/images/icon/creating3.svg';
import AISolutions from '../../../../assets/images/icon/creating4.svg';
import AIIntegration from '../../../../assets/images/icon/creating5.svg';
import UpgradeMaintenance from '../../../../assets/images/icon/creating6.svg';
import CreativeDesign from '../../../../assets/images/icon/creating7.svg';
import WorkflowAutomation from '../../../../assets/images/icon/creating8.svg';
import AIIntegration2 from '../../../../assets/images/icon/creating9.svg';
import UpgradeMaintenance2 from '../../../../assets/images/icon/creating10.svg';
import CreativeDesign2 from '../../../../assets/images/icon/creating11.svg';
import Machine2 from '../../../../assets/images/icon/creating12.svg';
import DataAnalysis2 from '../../../../assets/images/icon/creating13.svg';
import DomainSpecific2 from '../../../../assets/images/icon/creating14.svg';

const unlockStrategic = [
    {
        title: "Creating No-code Custom Models",
        description: "Our dedicated Platform-as-a-Service (PaaS) offerings eliminate the need for advanced coding abilities or data science know-how. By offering pre-trained models, customizable app templates, and drag-and-drop features, the platforms simplify the complexity typically associated with creating custom AI models through fine-tuning.",
        img: Machine,
    },
    {
        title: "Building Applications",
        description: "Our PaaS solutions enable you to leverage your proprietary data to develop intelligent AI applications, including sophisticated chatbots. These applications are designed to provide accurate and context-aware responses, delivering increased efficiency and value for your business and resulting in a more streamlined and successful operational framework.",
        img: DataAnalysis,
    },
    {
        title: "Private Deployment",
        description: "Our AIaaS platforms offer private deployment services, allowing you to host and use your applications in a secure and controlled environment rather than making them publicly available. With private deployment, your applications remain accessible only to authorized users within your organization, ensuring the confidentiality and security of your data.",
        img: DomainSpecific,
    },
    {
        title: "Integrating Apps Into Workflows",
        description: "You can efficiently incorporate the AI apps you build on our platforms into your current tech infrastructure and workflows. This ensures minimal disruption while maximizing the efficiency and productivity of your business processes, making it a flexible and cost-effective approach to harnessing the full potential of AI within your organization.",
        img: AISolutions,
    },
    
];
const supports = [
    {
        title: "Reduced Technical Barriers",
        description: "Using our AIaaS platforms can remove many technical barriers associated with AI development. You don’t need to have an in-house team of AI experts as the platforms take care of all technical aspects. This streamlines implementation, reduces costs, and allows organizations to focus on their core objectives, making AI adoption more accessible and efficient.",
        img: AIIntegration,
    },
    {
        title: "Save Hardware Costs",
        description: "Our AIaaS solutions serve as an advanced and ready infrastructure for building AI applications, sparing organizations from the need to invest in their own high-performance hardware. Additionally, they allow customization, empowering organizations to build task-specific solutions using their data for enhanced performance and accuracy.",
        img: UpgradeMaintenance,
    },
    {
        title: "Absolute Transparency",
        description: "Our AIaaS solutions offer transparency through pay-per-usage pricing models, ensuring cost transparency and aligning pricing with actual usage. This enables you to maintain control over your budget and resources, making them a highly valuable tool for your business while ensuring you receive maximum value for your investment.",
        img: CreativeDesign,
    },
    {
        title: "Build Ready-to-use Apps",
        description: "With our AIaaS platforms, you can create applications that are instantly usable, eliminating the need for users’ formal training. The platforms streamline AI app development with a variety of pre-trained models to choose from, effortless knowledge base creation and integration, and an intuitive drag-and-drop interface for easy navigation.",
        img: WorkflowAutomation,
    },
    {
        title: "Enterprise-wide Integration",
        description: "The applications developed using our AIaaS platforms seamlessly integrate into your existing systems, ensuring a seamless incorporation into your business processes. This integration is achieved without disrupting ongoing workflows, guaranteeing a smooth transition and enabling you to harness the benefits of AI without any operational disruptions.",
        img: AIIntegration2,
    },
    {
        title: "Long-term Value",
        description: "With no-code apps built using our PaaS offerings, you experience enhanced operational efficiency, reduced error rates, and increased productivity- all without the need for additional investments in technical or human resources. As a result, you not only benefit from immediate improvements but also lay the foundation for long-term value.",
        img: UpgradeMaintenance2,
    },
    

];
const approachs = [
    {
        title: "Proven Expertise",
        description: "As an established AIaaS provider, we boast a rich portfolio of successful AI and machine learning implementations, underlining our commitment to superior quality and customer satisfaction. Once you entrust us with your AI requirements, we empower you to focus on your core business functions, while handling your AI journey with our proven expertise.",
        img: CreativeDesign2,
    },
    {
        title: "Strong Security and Regulatory Compliance",
        description: "We prioritize data security and guarantee unwavering compliance with regulations. We adopt robust measures to safeguard your data, ensuring its safe and responsible handling. Furthermore, our profound understanding of regulatory standards ensures adherence, providing you with secure, compliant AI applications.",
        img: Machine2,
    },
    {
        title: "Continuous Support and Maintenance",
        description: "We offer comprehensive maintenance and support services for AI solutions built on our AIaaS platforms, making sure they remain relevant and valuable assets for your organization. Our team of experts resolve any issues swiftly, and ensure your solutions remain up-to-date with the latest advancements and adapt to your evolving business needs.",
        img: DataAnalysis2,
    },
    {
        title: "Use of Ethical AI",
        description: "By choosing Zyntellect for AIaaS, you are not only investing in advanced AI capabilities but also in the responsible and ethical use of AI technology. We are dedicated to upholding ethical AI principles, fostering trust, and ensuring that AI serves as a force for good in your business and the broader community.",
        img: DomainSpecific2,
    },

];
export default function BenefitsComplexity() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Experience the Benefits of AI Without the Complexity</h2>
                    <p className='text-center'>
                    With Zyntellect’s AIaaS/PaaS offerings, businesses can leverage the benefits of AI without the need for a dedicated team of designers and developers. They offer a user-friendly, no-code infrastructure that eliminates the requirement for coding or technical skills throughout the development process, ensuring businesses can harness AI’s power without facing technological challenges.
                    </p>
                    <h2 className='mt-5'>Our AIaaS/PaaS Offerings Equip You With These Key Capabilities</h2>
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
                    <h2 className='mb-3'>Why Use Our AI-as-a-Service Offerings for Your Business?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {supports.map((support, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
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
                    <h2 className='mb-3'>Why Choose Zyntellect?</h2>
                </div>
            </div>
            <div className="matginSet">
                <div className="row mt-lg-4 mt-sm-4 mt-1">
                    {approachs.map((approach, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
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
