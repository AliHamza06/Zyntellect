import React from 'react';
import MatPlo from '../../../../assets/images/icon/stack18.png';
import Tensor from '../../../../assets/images/icon/stack17.png';
import Nepu from '../../../../assets/images/icon/te17.png';
import MlFlow from '../../../../assets/images/icon/stack5.svg';
import Kur from '../../../../assets/images/icon/stack9.png';
import Micro from '../../../../assets/images/icon/stack8.svg';
import CoreMl from '../../../../assets/images/icon/NoSQL.svg';
import Python from '../../../../assets/images/icon/stack4.svg';
import Java from '../../../../assets/images/icon/stack6.svg';
import Cplus from '../../../../assets/images/icon/stack7.svg';
import SpaCy from '../../../../assets/images/icon/SpaCy.svg';
import Ts from '../../../../assets/images/icon/NLTK-icon.svg';
import AJ from '../../../../assets/images/icon/stack14.svg';
import Fe from '../../../../assets/images/icon/stack19.svg';
import Ns from '../../../../assets/images/icon/ai16.svg';
import Nj from '../../../../assets/images/icon/stack20.png';
import Rec from '../../../../assets/images/icon/stack21.png';
import Py1 from '../../../../assets/images/icon/stack22.png';
import Py2 from '../../../../assets/images/icon/PowerBI-icon.svg';
import Py3 from '../../../../assets/images/icon/stack10.svg';
import Ns2 from '../../../../assets/images/icon/AWS.png';
import Nj2 from '../../../../assets/images/icon/Google-Cloud.png';
import Rec2 from '../../../../assets/images/icon/Azure.png';
import Py4 from '../../../../assets/images/icon/te1.svg';
import Py5 from '../../../../assets/images/icon/pytorchsvg.svg';
import nvdia from '../../../../assets/images/icon/Scikit-Learn_icon.svg';
import chainer from '../../../../assets/images/icon/chainer.svg';
import mxnet from '../../../../assets/images/icon/mxnet.svg';
import stack15 from '../../../../assets/images/icon/stack15.svg';
import databrick from '../../../../assets/images/icon/databrick.svg';
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

const StackSection = ({ title, items }) => (
    <div className="col-lg-12 col-md-12 mt-sm-4 mt-4">
        <div className="stackCard stackCard2">
            <div className="row">
                <div className="col-lg-4 col-md-12 frameWorkCol">
                    <h2>{title}</h2>
                </div>

                <div className="col-lg-8 col-md-12">
                    <div className="secondtab">
                        {items.map((item, index) => (
                            <div key={index} className="modalcontent">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const AITechStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    The Technology Stack We Use
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="Infrastructure"
                    images={[
                        [{ src: Ns2, alt: "Framework 2" }, { src: Nj2, alt: "Framework 3" }, { src: Rec2, alt: "Rec" }]
                    ]}
                />
                <ToolCard
                    title="Data Storage"
                    images={[
                        [{ src: Python, alt: "Python" }, { src: MlFlow, alt: "MlFlow" }, { src: Java, alt: "Java" }],
                        [{ src: Cplus, alt: "C++" }]
                    ]}
                />
                <ToolCard
                    title="Data Processing"
                    images={[
                        [{ src: Micro, alt: "Microscope" }, { src: Kur, alt: "Keras" }]
                    ]}
                />
                <ToolCard
                    title="Machine Learning Frameworks"
                    images={[
                        [{ src: Py4, alt: "Matplotlib" }, { src: Py5, alt: "Py5Flow" }, { src: nvdia, alt: "nvdia" }]
                    ]}
                />
                <ToolCard
                    title="Natural Language Processing"
                    images={[
                        [{ src: SpaCy, alt: "Matplotlib" }, { src: Ts, alt: "TensorFlow" }],
                    ]}
                />
                <ToolCard
                    title="Deep Learning"
                    images={[
                        [{ src: AJ, alt: "Matplotlib" }, { src: Py4, alt: "nvdia" }, { src: Py5, alt: "Py5Flow" },]
                    ]}
                />
                <ToolCard
                    title="AI Model Deployment"
                    images={[
                        [{ src: MatPlo, alt: "Matplotlib" }, { src: Tensor, alt: "TensorFlow" }],
                    ]}
                />
                <ToolCard
                    title="AI Model Management"
                    images={[
                        [{ src: Fe, alt: "Matplotlib" }, { src: Ns, alt: "TensorFlow" }],
                    ]}
                />

                <ToolCard
                    title="Data Visualization"
                    images={[
                        [{ src: Nj, alt: "Framework 3" }, { src: Rec, alt: "Framework 4" }, { src: Py1, alt: "Framework 5" }], [{ src: Py2, alt: "Framework 5" }]
                    ]}
                />
            </div>
        </div>
    );
}

export default AITechStack;
