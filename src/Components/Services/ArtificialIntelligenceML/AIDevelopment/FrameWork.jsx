import React from 'react';
import MatPlo from '../../../../assets/images/icon/ai13.svg';
import Tensor from '../../../../assets/images/icon/ai14.png';
import Nepu from '../../../../assets/images/icon/te17.png';
import MlFlow from '../../../../assets/images/icon/riconsvg.svg';
import Kur from '../../../../assets/images/icon/ai17.svg';
import Micro from '../../../../assets/images/icon/ai18.svg';
import CoreMl from '../../../../assets/images/icon/ai19.svg';
import Python from '../../../../assets/images/icon/ai20.svg';
import Java from '../../../../assets/images/icon/ai21.svg';
import Cplus from '../../../../assets/images/icon/ai22.svg';
import Julia from '../../../../assets/images/icon/ai23.svg';
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

const FrameWork = () => {
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
                    title="Visualization tools"
                    images={[
                        [{ src: MatPlo, alt: "Matplotlib" }, { src: Nepu, alt: "Neptune" }, { src: Tensor, alt: "TensorFlow" }],
                    ]}
                />
                <ToolCard
                    title="Programming Language"
                    images={[
                        [{ src: Python, alt: "Python" }, { src: MlFlow, alt: "MlFlow" }, { src: Java, alt: "Java" }],
                        [{ src: Cplus, alt: "C++" }, { src: Julia, alt: "Julia" }]
                    ]}
                />
                <ToolCard
                    title="Cloud providers"
                    images={[
                        [{ src: Ns2, alt: "Framework 2" }, { src: Nj2, alt: "Framework 3" }, { src: Rec2, alt: "Rec" }]
                    ]}
                />
                <ToolCard
                    title="Python Frameworks"
                    images={[
                        [{ src: Py1, alt: "Framework 1" }, { src: Py2, alt: "Framework 2" }, { src: Py3, alt: "Framework 3" }]
                    ]}
                />
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
                    title="Big data"
                    images={[
                        [{ src: databrick, alt: "databrick" }]
                    ]}
                />
                <div className="col-lg-12 col-md-12 mt-sm-4 mt-4">
                    <div className="stackCard stackCard2">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 frameWorkCol">
                                <h2>Libraries</h2>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="secondtab">
                                    <img decoding="async" className="wp-image-101810 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031532/Group-5.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101811 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031533/Group-3.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101812 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031533/Group-2.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101813 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031608/Group-10.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101814 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031609/Group-9.svg" alt="" width="73" height="60" />
                                    <img decoding="async" className="wp-image-101815 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031610/Group-8.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137610 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07051209/Mask-Group-3.png" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137611 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07051425/Mask-Group-4.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137612 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07051457/Mask-Group-5.png" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137613 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07051523/Mask-Group-6.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137620 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07052026/Mask-Group-18.png" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137621 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07052054/Mask-Group-20.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137622 alignnone size-full lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07052056/Mask-Group-19.svg" alt="" width="60" height="60" />
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

export default FrameWork;
