import React from 'react';
import MatPlo from '../../../../assets/images/icon/stack18.png';
import Tensor from '../../../../assets/images/icon/stack17.png';
import Nepu from '../../../../assets/images/icon/te17.png';
import MlFlow from '../../../../assets/images/icon/riconsvg.svg';
import Kur from '../../../../assets/images/icon/stack9.png';
import Micro from '../../../../assets/images/icon/stack8.svg';
import CoreMl from '../../../../assets/images/icon/NoSQL.svg';
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
import Py3 from '../../../../assets/images/icon/stack10.svg';
import Ns2 from '../../../../assets/images/icon/AWS.png';
import Nj2 from '../../../../assets/images/icon/Google-Cloud.png';
import Rec2 from '../../../../assets/images/icon/Azure.png';
import Py4 from '../../../../assets/images/icon/Jupyter-Notebooks.svg';
import Py5 from '../../../../assets/images/icon/Anaconda.svg';
import nvdia from '../../../../assets/images/icon/Google-Colab.svg';
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
                        [{ src: Cplus, alt: "C++" }, { src: Julia, alt: "Julia" }]
                    ]}
                />
                 <ToolCard
                    title="Data Processing"
                    images={[
                        [ { src: Micro, alt: "Microscope" }, { src: Kur, alt: "Keras" }]
                    ]}
                />
                <ToolCard
                    title="DL Frameworks"
                    images={[
                        [{ src: Py4, alt: "Matplotlib" }, { src: Py5, alt: "Py5Flow" }, { src: nvdia, alt: "nvdia" }]
                    ]}
                />
               
                <ToolCard
                    title="AI Model Deployment"
                    images={[
                        [{ src: MatPlo, alt: "Matplotlib" }, { src: Tensor, alt: "TensorFlow" }],
                    ]}
                />

                
                <ToolCard
                    title="Libraries"
                    images={[
                        [{ src: Py3, alt: "Framework 3" }]
                    ]}
                />
                <div className="col-lg-12 col-md-12 mt-sm-4 mt-4">
                    <div className="stackCard stackCard2">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 frameWorkCol">
                                <h2>DL Framework</h2>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div class="secondtab">
                                    <img decoding="async" class="wp-image-101801 alignnone size-full entered lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031016/Group-1-1.svg" alt="" width="60" height="60" />
                                    <img decoding="async" class="wp-image-101804 alignnone size-full entered lazyloaded" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031018/Mask-Group-3.svg" alt="" width="60" height="60" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-sm-4 mt-4">
                    <div className="stackCard stackCard2">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 frameWorkCol">
                                <h2>Visualization tools</h2>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div class="secondtab">
                                    <img decoding="async" class="wp-image-101360 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/13225456/Tableau-icon.svg" alt="Tableau Icon" width="60" height="60" />
                                    <img decoding="async" class="wp-image-101359 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/13225455/Power-BI-icon.svg" alt="Power BI Icon" width="60" height="60" />
                                    <img decoding="async" class="wp-image-137626 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07052422/Mask-Group-22.svg" alt="Mask Group 22 Icon" width="60" height="60" />
                                    <img decoding="async" class="wp-image-137701 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224747/Mask-Group-16-1.png" alt="Mask Group 16-1 Icon" width="60" height="60" />
                                    <img decoding="async" class="wp-image-137702 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224757/Mask-Group-27.png" alt="Mask Group 27 Icon" width="60" height="60" />
                                    <img decoding="async" class="wp-image-137703 alignnone size-full" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/07224814/Mask-Group-26.svg" alt="Mask Group 26 Icon" width="60" height="60" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-sm-4 mt-4">
                    <div className="stackCard stackCard2">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 frameWorkCol">
                                <h2>Machine Learning Platform</h2>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div class="secondtab">
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031016/Group-1-1.svg" alt="Icon 1" />
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031016/Mask-Group-1-1.svg" alt="Icon 2" />
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031017/Mask-Group-4.svg" alt="Icon 3" />
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031019/Group-4.svg" alt="Icon 4" />
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031019/Mask-Group-2.svg" alt="Icon 5" />
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/05/12001657/Keras-2.svg" alt="Icon 6" />
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/18214644/Scikit-Learn_icon.svg" alt="Icon 7" />
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/13222826/TensorFlow-icon.svg" alt="Icon 8" />
                                    <img decoding="async" class="icon-image" src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/02/08010749/MXNet.png" alt="MXNet" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <StackSection
                    title="Algorithms"
                    items={["Supervised/Unsupervised Learning", "Clustering (density-based, Hierarchical, partitioning)", "Metric Learning", "Fewshot Learning"]}
                />
            </div>
        </div>
    );
}

export default AITechStack;
