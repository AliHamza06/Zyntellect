import React from 'react';
import MatPlo from '../../../assets/images/icon/te18.png';
import Tensor from '../../../assets/images/icon/googlecloudsvg.svg';
import Nepu from '../../../assets/images/icon/stack3.png';
import MlFlow from '../../../assets/images/icon/ai16.svg';
import Kur from '../../../assets/images/icon/ai17.svg';
import Micro from '../../../assets/images/icon/ai18.svg';
import CoreMl from '../../../assets/images/icon/ai19.svg';
import Python from '../../../assets/images/icon/te2.svg';
import Java from '../../../assets/images/icon/cafe.svg';
import Cplus from '../../../assets/images/icon/nvdia.svg';
import Julia from '../../../assets/images/icon/chainer.svg';
import Ts from '../../../assets/images/icon/Theano.png';
import AJ from '../../../assets/images/icon/te3.svg';
import Fe from '../../../assets/images/icon/open.svg';
import Ns from '../../../assets/images/icon/stack15.svg';
import Nj from '../../../assets/images/icon/sonnet.svg';
import Rec from '../../../assets/images/icon/tf-slim.svg';
import tenser from '../../../assets/images/icon/tenser.svg';
import Py2 from '../../../assets/images/icon/neo.svg';
import Py3 from '../../../assets/images/icon/ai33.svg';

const ToolCard = ({ title, images }) => (
    <div className="col-lg-6 col-md-6 mt-sm-4 mt-4">
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

const StableAIStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our AI Development Technology Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="Cloud Computing Platforms"
                    images={[
                        [{ src: MatPlo, alt: "Matplotlib" }, { src: Tensor, alt: "TensorFlow"}, { src: Nepu, alt: "Neptune" }],
                    ]}
                />
                <ToolCard
                    title="Modules/Toolkits"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: Micro, alt: "Microscope" }, { src: CoreMl, alt: "CoreML" }]
                    ]}
                />
                <ToolCard
                    title="DL Frameworks"
                    images={[
                        [{ src: Python, alt: "Python" }, { src: Java, alt: "Java" }, { src: Cplus, alt: "C++" }],
                        [{ src: Julia, alt: "Julia" }, { src: Ts, alt: "TypeScript" }, { src: AJ, alt: "AngularJS" }]
                    ]}
                />
                <ToolCard
                    title="Libraries"
                    images={[
                        [{ src: Fe, alt: "Frontend" },{ src: Ns, alt: "Next.js" } , { src: Nj, alt: "Next.js" }],
                        [{ src: Rec, alt: "Frontend" }, { src: tenser, alt: "tenser" }, { src: Py2, alt: "tenser" }]
                    ]}
                />
                <StackSection
                    title="Image Classification Models"
                    items={["VGG-16", "ResNet50", "Inceptionv3", "EfficientNet"]}
                />
                <StackSection
                    title="Generative AI Models"
                    items={["Generative Adversarial Networks", "Transformer models (GPT3, GPT 3.5 Turbo,LaMDA, Wu-Dao)"]}
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

export default StableAIStack;
