import React from 'react';
import MatPlo from '../../../../assets/images/icon/ai13.svg';
import Tensor from '../../../../assets/images/icon/ai14.png';
import Nepu from '../../../../assets/images/icon/neo.svg';
import ansiblesvg from '../../../../assets/images/icon/ansiblesvg.svg';
import Kur from '../../../../assets/images/icon/te18.png';
import Micro from '../../../../assets/images/icon/googlecloudsvg.svg';
import CoreMl from '../../../../assets/images/icon/stack3.png';
import Python from '../../../../assets/images/icon/stack18.png';
import Java from '../../../../assets/images/icon/stack17.png';
import Cplus from '../../../../assets/images/icon/tf-slim.svg';
import Julia from '../../../../assets/images/icon/tenser.svg';
import Ts from '../../../../assets/images/icon/ai29.svg';
import AJ from '../../../../assets/images/icon/JavaScript.svg';
import Fe from '../../../../assets/images/icon/riconsvg.svg';
import Ns from '../../../../assets/images/icon/ai27.svg';
import Nj from '../../../../assets/images/icon/stack5.svg';
import Rec from '../../../../assets/images/icon/stack4.svg';
import Py1 from '../../../../assets/images/icon/ai31.svg';
import Py2 from '../../../../assets/images/icon/ai32.svg';
import Py3 from '../../../../assets/images/icon/ai33.svg';
import Ns2 from '../../../../assets/images/icon/AWS.png';
import Nj2 from '../../../../assets/images/icon/Google-Cloud.png';
import Rec2 from '../../../../assets/images/icon/Azure.png';
import Py4 from '../../../../assets/images/icon/te1.svg';
import Py5 from '../../../../assets/images/icon/te2.svg';
import nvdia from '../../../../assets/images/icon/te3.svg';
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

const AcTPoweredStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our AI Development Technology Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="AI Frameworks"
                    images={[
                        [{ src: Py4, alt: "Matplotlib" }, { src: Py5, alt: "Py5Flow" }, { src: nvdia, alt: "nvdia" }],
                        
                    ]}
                />
                <ToolCard
                    title="Cloud Platforms"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: Micro, alt: "Microscope" }, { src: CoreMl, alt: "CoreML" }]
                    ]}
                />
                <ToolCard
                    title="Integration and Deployment Tools"
                    images={[
                        [{ src: Python, alt: "Python" }, { src: Java, alt: "Java" }, { src: ansiblesvg, alt: "MlFlow" }],
                        
                    ]}
                />
                
                <ToolCard
                    title="Programming Languages"
                    images={[
                        [{ src: Ts, alt: "TypeScript" }, { src: AJ, alt: "AngularJS" }, { src: Fe, alt: "Frontend" }],
                    ]}
                />
                <ToolCard
                    title="Databases"
                    images={[
                        [{ src: Nj, alt: "Node.js" },{ src: Rec, alt: "React" }]
                    ]}
                />
                <StackSection
                    title="Algorithms"
                    items={["Supervised/Unsupervised Learning", "Clustering", "Metric Learning", "Ensemble Learning", "Online Learning"]}
                />
                <StackSection
                    title="Neural Networks"
                    items={["CNN", "RNN", "Representation Learning", "Manifold Learning", "Variational Autoencoders", "Bayesian Network", "Autoregressive Networks", "Long Short-term Memory (LSTM)"]}
                />
            </div>
        </div>
    );
}

export default AcTPoweredStack;
