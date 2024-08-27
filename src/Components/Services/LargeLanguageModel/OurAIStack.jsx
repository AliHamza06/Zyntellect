import React from 'react';
import MatPlo from '../../../assets/images/icon/googlecloudsvg.svg';
import Tensor from '../../../assets/images/icon/stack2.png';
import Nepu from '../../../assets/images/icon/stack3.png';
import MlFlow from '../../../assets/images/icon/stack4.svg';
import Kur from '../../../assets/images/icon/stack5.svg';
import Micro from '../../../assets/images/icon/ansiblesvg.svg';
import Python from '../../../assets/images/icon/ai20.svg';
import JavaScript from '../../../assets/images/icon/JavaScript.svg';
import Cplus from '../../../assets/images/icon/riconsvg.svg';
import Fe from '../../../assets/images/icon/stack14.svg';
import Ns from '../../../assets/images/icon/stack15.svg';
import Nj from '../../../assets/images/icon/stack16.svg';
import Rec from '../../../assets/images/icon/stack17.png';
import Py1 from '../../../assets/images/icon/stack18.png';

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

const OurAIStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                Our Large Language Model Development Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
            <ToolCard
                    title="AI Frameworks"
                    images={[
                        [{ src: Ns, alt: "Framework 2" }, { src: Nj, alt: "Framework 3" },{ src: Fe, alt: "Fe" }],
                    ]}
                />
                <ToolCard
                    title="Cloud Platforms"
                    images={[
                        [{ src: Tensor, alt: "TensorFlow" }, { src: MatPlo, alt: "Matplotlib" }, { src: Nepu, alt: "Neptune" },],
                        
                    ]}
                />
                <ToolCard
                    title="Integration and Deployment Tools"
                    images={[
                        [{ src: Py1, alt: "Py1" }, { src: Rec, alt: "Rec" },{ src: Micro, alt: "Micro" }]
                        
                    ]}
                />
                <ToolCard
                    title="Programming Languages"
                    images={[
                        [{ src: Python, alt: "Framework 2" }, { src: JavaScript, alt: "Framework 3" },{ src: Cplus, alt: "Cplus" }]
                    ]}
                />
                <ToolCard
                    title="Databases"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: MlFlow, alt: "MlFlow" }],
                    ]}
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

export default OurAIStack;
