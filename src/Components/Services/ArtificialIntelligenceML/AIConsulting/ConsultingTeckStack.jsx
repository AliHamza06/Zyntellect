import React from 'react';
import MatPlo from '../../../../assets/images/icon/ai13.svg';
import Tensor from '../../../../assets/images/icon/ai14.png';
import Nepu from '../../../../assets/images/icon/neo.svg';
import MlFlow from '../../../../assets/images/icon/te1.svg';
import Kur from '../../../../assets/images/icon/ai17.svg';
import Micro from '../../../../assets/images/icon/ai18.svg';
import CoreMl from '../../../../assets/images/icon/ai19.svg';
import Python from '../../../../assets/images/icon/open.svg';
import Java from '../../../../assets/images/icon/sonnet.svg';
import Cplus from '../../../../assets/images/icon/tf-slim.svg';
import Julia from '../../../../assets/images/icon/tenser.svg';
import Ts from '../../../../assets/images/icon/ai24.svg';
import AJ from '../../../../assets/images/icon/ai25.svg';
import Fe from '../../../../assets/images/icon/ai26.svg';
import Ns from '../../../../assets/images/icon/ai27.svg';
import Nj from '../../../../assets/images/icon/ai28.svg';
import Rec from '../../../../assets/images/icon/ai30.svg';
import Py1 from '../../../../assets/images/icon/ai31.svg';
import Py2 from '../../../../assets/images/icon/ai32.svg';
import Py3 from '../../../../assets/images/icon/ai33.svg';
import Ns2 from '../../../../assets/images/icon/AWS.png';
import Nj2 from '../../../../assets/images/icon/Google-Cloud.png';
import Rec2 from '../../../../assets/images/icon/Azure.png';
import Py4 from '../../../../assets/images/icon/stack11.svg';
import Py5 from '../../../../assets/images/icon/cafe.svg';
import nvdia from '../../../../assets/images/icon/nvdia.svg';
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

const ConsultingTeckStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our AI Development Technology Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="DL Frameworks"
                    images={[
                        [{ src: Py4, alt: "Matplotlib" }, { src: Py5, alt: "Py5Flow" }, { src: nvdia, alt: "nvdia" }],
                        [{ src: chainer, alt: "chainer" }, { src: mxnet, alt: "mxnet" }, { src: stack15, alt: "stack15" }]
                    ]}
                />
                <ToolCard
                    title="Modules/Toolkits"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: Micro, alt: "Microscope" }, { src: CoreMl, alt: "CoreML" }]
                    ]}
                />
                <ToolCard
                    title="Libraries"
                    images={[
                        [{ src: Python, alt: "Python" }, { src: MlFlow, alt: "MlFlow" }, { src: Java, alt: "Java" }],
                        [{ src: Cplus, alt: "C++" }, { src: Julia, alt: "Julia" }, { src: Nepu, alt: "Nepu" }]
                    ]}
                />
                {/* <ToolCard
                    title="Cloud providers"
                    images={[
                        [{ src: Ns2, alt: "Framework 2" }, { src: Nj2, alt: "Framework 3" }, { src: Rec2, alt: "Rec" }]
                    ]}
                /> */}
                
                <ToolCard
                    title="Frontend"
                    images={[
                        [{ src: Ts, alt: "TypeScript" }, { src: AJ, alt: "AngularJS" }, { src: Fe, alt: "Frontend" }],
                        [{ src: Ns, alt: "Next.js" }]
                    ]}
                />
                <ToolCard
                    title="Backend"
                    images={[
                        [{ src: Nj, alt: "Node.js" }, { src: Python, alt: "Python" }, { src: Rec, alt: "React" }]
                    ]}
                />
                <ToolCard
                    title="Python Frameworks"
                    images={[
                        [{ src: Py1, alt: "Framework 1" }, { src: Py2, alt: "Framework 2" }, { src: Py3, alt: "Framework 3" }]
                    ]}
                />
                <div className="col-lg-12 col-md-12 mt-sm-4 mt-4">
                    <div className="stackCard stackCard2">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 frameWorkCol">
                                <h2>Cloud providers</h2>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className='secondtab'>
                                    <img decoding="async" className="wp-image-97397 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/02/20034149/awssvg.svg" alt="AWS" width="54" height="54" />
                                    <img decoding="async" className="wp-image-108357 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/06/26004042/Azure.png" alt="Azure" width="60" height="60" />
                                    <img decoding="async" className="wp-image-120833 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/11/07051831/GCP.svg" alt="GCP" width="49" height="49" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <StackSection
                    title="Image Classification Models"
                    items={["VGG-16", "ResNet50", "Inceptionv3", "EfficientNet"]}
                />
                <StackSection
                    title="Embedding Models"
                    items={["OpenAI", "bge-large", "bge-base", "e5-large", "textembedding-gecko(Vertex AI)"]}
                />
                <StackSection
                    title="Algorithms"
                    items={["Supervised/Unsupervised Learning", "Clustering", "Metric Learning", "Fewshot Learning"]}
                />
                <StackSection
                    title="Neural Networks"
                    items={["CNN", "RNN", "Representation Learning", "Manifold Learning", "Variational Autoencoders", "Bayesian Network", "Autoregressive Networks"]}
                />
            </div>
        </div>
    );
}

export default ConsultingTeckStack;
