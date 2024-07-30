import React from 'react';
import MatPlo from '../../assets/images/icon/ai13.svg';
import Tensor from '../../assets/images/icon/ai14.png';
import Nepu from '../../assets/images/icon/ai15.png';
import MlFlow from '../../assets/images/icon/ai16.svg';
import Kur from '../../assets/images/icon/ai17.svg';
import Micro from '../../assets/images/icon/ai18.svg';
import CoreMl from '../../assets/images/icon/ai19.svg';
import Python from '../../assets/images/icon/ai20.svg';
import Java from '../../assets/images/icon/ai21.svg';
import Cplus from '../../assets/images/icon/ai22.svg';
import Julia from '../../assets/images/icon/ai23.svg';
import Ts from '../../assets/images/icon/ai24.svg';
import AJ from '../../assets/images/icon/ai25.svg';
import Fe from '../../assets/images/icon/ai26.svg';
import Ns from '../../assets/images/icon/ai27.svg';
import Nj from '../../assets/images/icon/ai28.svg';
import Rec from '../../assets/images/icon/ai30.svg';
import Py1 from '../../assets/images/icon/ai31.svg';
import Py2 from '../../assets/images/icon/ai32.svg';
import Py3 from '../../assets/images/icon/ai33.svg';

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

const DevelopmentTechnologyStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our AI Development Technology Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="Visualization tools"
                    images={[
                        [{ src: MatPlo, alt: "Matplotlib" }, { src: Tensor, alt: "TensorFlow" }],
                        [{ src: Nepu, alt: "Neptune" }, { src: MlFlow, alt: "MLflow" }]
                    ]}
                />
                <ToolCard
                    title="Modules/Toolkits"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: Micro, alt: "Microscope" }, { src: CoreMl, alt: "CoreML" }]
                    ]}
                />
                <ToolCard
                    title="Programming Language"
                    images={[
                        [{ src: Python, alt: "Python" }, { src: Java, alt: "Java" }],
                        [{ src: Cplus, alt: "C++" }, { src: Julia, alt: "Julia" }]
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
                    title="Python Frameworks"
                    images={[
                        [{ src: Py1, alt: "Framework 1" }, { src: Py2, alt: "Framework 2" }, { src: Py3, alt: "Framework 3" }]
                    ]}
                />
                <div className="col-lg-12 col-md-12 mt-sm-4 mt-4">
                    <div className="stackCard stackCard2">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 frameWorkCol">
                                <h2>Libraries</h2>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className='secondtab'>
                                    <img decoding="async" className="wp-image-101810 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031532/Group-5.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101811 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031533/Group-3.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101812 alignnone size-full entered lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031533/Group-2.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101813 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031608/Group-10.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101814 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031609/Group-9.svg" alt="" width="73" height="60" />
                                    <img decoding="async" className="wp-image-101815 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031610/Group-8.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137695 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224235/Mask-Group-25.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137696 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224236/Mask-Group-46.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137697 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224311/Mask-Group-22.png" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137694 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07223959/Image-7.png" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137698 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224418/Mask-Group-43.svg" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137699 alignnone size-full entered lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224424/Mask-Group-21.png" alt="" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137700 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224430/Mask-Group-41.png" alt="" width="60" height="60" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-sm-4 mt-4">
                    <div className="stackCard stackCard2">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 frameWorkCol">
                                <h2>DL Frameworks</h2>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className='secondtab'>
                                    <img decoding="async" className="wp-image-101801 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031016/Group-1-1.svg" alt="DL Framework 1" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101802 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031016/Mask-Group-1-1.svg" alt="DL Framework 2" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101803 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031017/Mask-Group-4.svg" alt="DL Framework 3" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101806 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031019/Group-4.svg" alt="DL Framework 4" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101805 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031019/Mask-Group-2.svg" alt="DL Framework 5" width="60" height="60" />
                                    <img decoding="async" className="wp-image-101804 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031018/Mask-Group-3.svg" alt="DL Framework 6" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137692 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07223920/Mask-Group-23.svg" alt="DL Framework 7" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137693 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07223922/Mask-Group-19-1.svg" alt="DL Framework 8" width="60" height="60" />
                                    <img decoding="async" className="wp-image-137694 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07223959/Image-7.png" alt="DL Framework 9" width="60" height="60" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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

export default DevelopmentTechnologyStack;
