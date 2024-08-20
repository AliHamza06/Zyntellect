import React from 'react';
import MatPlo from '../../../assets/images/icon/ai20.svg';
import Tensor from '../../../assets/images/icon/JavaScript.svg';
import Nepu from '../../../assets/images/icon/TensorFlow-Icon-1.svg';
import MlFlow from '../../../assets/images/icon/pytorchsvg.svg';
import Kur from '../../../assets/images/icon/Hugging-Faces-Transformers.svg';
import Micro from '../../../assets/images/icon/Scikit-Learn_icon.svg';
import CoreMl from '../../../assets/images/icon/NLTK.svg';
import Python from '../../../assets/images/icon/SpaCy.svg';
import Java from '../../../assets/images/icon/Node.js.svg';
import Cplus from '../../../assets/images/icon/ReactAngular.svg';
import Julia from '../../../assets/images/icon/Docker.svg';
import Ts from '../../../assets/images/icon/MongoDB.svg';
import AJ from '../../../assets/images/icon/PostgreSQL.svg';
import Fe from '../../../assets/images/icon/Elasticsearch.svg';
import Ns from '../../../assets/images/icon/AWS.png';
import Nj from '../../../assets/images/icon/Google-Cloud.png';
import Rec from '../../../assets/images/icon/Azure.png';
import Py1 from '../../../assets/images/icon/Amazon-API-Gateway.svg';
import Py2 from '../../../assets/images/icon/Lambda-AWS.svg';
import Py3 from '../../../assets/images/icon/OAuth.svg';
import Py4 from '../../../assets/images/icon/JWT.svg';
import Py5 from '../../../assets/images/icon/Lets-Encrypt.svg';
import Py6 from '../../../assets/images/icon/GitHub-Actions.svg';
import Py7 from '../../../assets/images/icon/Jenkins.png';
import Py8 from '../../../assets/images/icon/Terraform.svg';

const ToolCard = ({ title, images }) => (
    <div className="col-lg-4 col-md-6 mt-sm-4 mt-4">
        <div className="stackCard">
            <h2>{title}</h2>
            {images.map((group, index) => (
                <div key={index} className='toolImgDiv'>
                    {group.map((image, i) => (
                        <img key={i} src={image.src} alt={image.alt} />
                    ))}
                </div>
            ))}
        </div>
    </div>
);


const StackAICopilot = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our Technology Stack for AI Copilot Development
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="Programming Languages"
                    images={[
                        [{ src: MatPlo, alt: "Programming Languages" }, { src: Tensor, alt: "Programming Languages" }],

                    ]}
                />
                <ToolCard
                    title="Machine Learning and AI Libraries"
                    images={[
                        [{ src: Nepu, alt: "Programming Languagesc" }, { src: MlFlow, alt: "Machine Learning" }, { src: Kur, alt: "Machine Learning" }],
                        [{ src: Micro, alt: "Machine Learning" }]
                    ]}
                />
                <ToolCard
                    title="Natural Language Processing (NLP)"
                    images={[
                        [{ src: CoreMl, alt: "Machine Learning" }, { src: Python, alt: "Python" },]
                    ]}
                />
                <ToolCard
                    title="Development Frameworks and Tools"
                    images={[
                        [{ src: Java, alt: "Java" }, { src: Cplus, alt: "Cplus" }, { src: Julia, alt: "Julia" }]

                    ]}
                />
                <ToolCard
                    title="Data Storage and Management"
                    images={[
                        [{ src: Ts, alt: "Ts" }, { src: AJ, alt: "AJ" }, { src: Fe, alt: "Fe" }]
                    ]}
                />
                <ToolCard
                    title="Cloud Platforms and Services"
                    images={[
                        [{ src: Ns, alt: "Framework 2" }, { src: Nj, alt: "Framework 3" }, { src: Rec, alt: "Rec" }], [{ src: Py1, alt: "Py1" }, { src: Py2, alt: "Py2" }]
                    ]}
                />
                <ToolCard
                    title="Security and Compliance"
                    images={[
                        [{ src: Py3, alt: "Rec" }, { src: Py4, alt: "Py4" }, { src: Py5, alt: "Py5" }]

                    ]}
                />
                <ToolCard
                    title="DevOps Tools"
                    images={[
                        [{ src: Py6, alt: "Py6" }, { src: Py7, alt: "Py7" }, { src: Py8, alt: "Py8" }]
                    ]}
                />
            </div>
        </div>
    );
}

export default StackAICopilot;
