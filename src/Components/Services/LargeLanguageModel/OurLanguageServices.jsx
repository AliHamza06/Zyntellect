import React from 'react'
import Machine from '../../../assets/images/icon/language1.svg';
import DataAnalysis from '../../../assets/images/icon/language2.svg';
import DomainSpecific from '../../../assets/images/icon/language3.svg';
import AISolutions from '../../../assets/images/icon/language4.svg';
import AIIntegration from '../../../assets/images/icon/language5.svg';
import UpgradeMaintenance from '../../../assets/images/icon/language6.svg';
import CreativeDesign from '../../../assets/images/icon/language7.svg';
import WorkflowAutomation from '../../../assets/images/icon/language8.svg';
import AIIntegration2 from '../../../assets/images/icon/language9.svg';
import UpgradeMaintenance2 from '../../../assets/images/icon/language10.svg';
import CreativeDesign2 from '../../../assets/images/icon/language11.svg';
import Machine2 from '../../../assets/images/icon/language12.svg';
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
        title: "Consulting and Strategy Building",
        description: "Our LLM development approach begins with a comprehensive understanding of your unique needs, industry requirements, and specific use cases. Leveraging our deep expertise in NLP and ML, we collaborate closely with you to define a tailored strategy for developing a private LLM that aligns seamlessly with your business objectives.",
        img: Machine,
    },
    {
        title: "Large Language Model (LLM) Development",
        description: "We build LLMs from scratch to ensure enterprises gain a competitive edge through improved insights and optimized workflows. We start with an initial consultation, followed by precise data preparation. The model is then trained with your data, ensuring seamless alignment with your specific business needs.",
        img: DataAnalysis,
    },
    {
        title: "LLM Fine-tuning",
        description: "We fine-tune large language models like GPT, Llama, or PaLM, tailoring them for diverse business-specific use cases across industries like manufacturing, legal and finance. Our fine-tuned LLMs deliver unparalleled performance, delivering precise and contextually relevant outputs for enhanced decision-making.",
        img: DomainSpecific,
    },
    {
        title: "LLM-powered Solution Development",
        description: "We build robust AI solutions that leverage the power of Large Language Models like GPT to transform the way you operate, communicate, and innovate. Our range of solutions spans chatbots, virtual assistants, sentiment analysis tools, and speech recognition systems tailored to clients’ business use cases.",
        img: AISolutions,
    },
    {
        title: "LLM Model Integration",
        description: "Our developers excel in seamlessly integrating large language models into diverse enterprise systems, from customer service platforms to content management systems. Acknowledging the risks associated with downtime, we prioritize a well-planned integration process, causing no disruptions to your operations.",
        img: AIIntegration,
    },
    {
        title: "Support and Maintenance",
        description: "We offer support and maintenance services to ensure your LLMs and LLM-based solutions smoothly function over time. From continuously monitoring model functionality, adapting models to evolving data/use cases, implementing bug fixes, and ensuring timely software updates— We take care of everything.",
        img: UpgradeMaintenance,
    },
];
const supports = [
    {
        title: "Natural Language Processing (NLP)",
        description: "Leveraging NLP tools and frameworks like NLTK, spaCy, and TensorFlow, our developers develop tailor-made NLP models with advanced NLU and NLG capabilities. These models effectively analyze, interpret, and generate human language to meet diverse application needs.",
        img: CreativeDesign,
    },
    {
        title: "Machine Learning",
        description: "Leveraging our expertise in ML development kits like scikit-learn, Keras, and PyTorch, we adeptly build ML-powered solutions. These solutions integrated with ML models trained through advanced techniques, including supervised, unsupervised, and reinforcement learning, ensure efficient and effective outcomes.",
        img: WorkflowAutomation,
    },
    {
        title: "Transfer Learning",
        description: "We create custom LLMs for businesses, utilizing advanced transfer learning techniques. The approach begins with fine-tuning a pre-trained LLM, like GPT, Llama, PaLM, LaMDA, and BLOOM, to develop a custom model tailored to your domain-specific language-related tasks.",
        img: AIIntegration2,
    },
    {
        title: "In-context Learning",
        description: "We employ developer tools like PyText, FastText, and Flair to train and regularly update language models with fresh data, ensuring continuous adaptation to new contexts, domains, and users. This ongoing refinement enhances the models’ performance over time.",
        img: UpgradeMaintenance2,
    },
    {
        title: "Few-shot Learning",
        description: "We use diverse tools and techniques, including Meta-Transfer Learning, Meta-Learning Toolkit, and Reptile, to quickly adapt LLM models to new tasks with minimal data. This approach enables models to generalize effectively from a few examples, proving invaluable in real-world applications with limited or costly labeled data.",
        img: CreativeDesign2,
    },
    {
        title: "Sentiment Analysis",
        description: "We leverage tools like VADER and NLTK to preprocess and analyze text data, preparing it for LLM training. Subsequently, we apply machine learning techniques such as Naive Bayes to construct robust AI systems tailored for sentiment analysis grounded in the trained LLM.",
        img: Machine2,
    }
];
export default function OurLanguageServices() {
    return (
        <>
            <div className="marginSet">
                <div className="mainHeroSection mt-0 pt-lg-4 pt-0">
                    <h2 className='mb-3'>Our Large Language Model Development Services</h2>
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
                    <h2 className='mb-3'>Unlock Strategic Growth for Your Business With Our AI Know-how</h2>
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
