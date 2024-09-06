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
import Py2 from '../../../../assets/images/icon/stack20.png';
import Py3 from '../../../../assets/images/icon/PowerBI-icon.svg';
import Ns2 from '../../../../assets/images/icon/AWS.png';
import Nj2 from '../../../../assets/images/icon/Google-Cloud.png';
import Rec2 from '../../../../assets/images/icon/Azure.png';
import Py4 from '../../../../assets/images/icon/Jupyter-Notebooks.svg';
import Py5 from '../../../../assets/images/icon/Anaconda.svg';
import nvdia from '../../../../assets/images/icon/Google-Colab.svg';
import Py6 from '../../../../assets/images/icon/pytorchsvg.svg';
import Py7 from '../../../../assets/images/icon/cafe.svg';
import Py8 from '../../../../assets/images/icon/nvdia.svg';
import Py9 from '../../../../assets/images/icon/chainer.svg';
import Py10 from '../../../../assets/images/icon/Theano.png';
import Py11 from '../../../../assets/images/icon/stack14.svg';
import Py12 from '../../../../assets/images/icon/Scikit-Learn-icon.svg';
import Py13 from '../../../../assets/images/icon/stack10.svg';
import Py14 from '../../../../assets/images/icon/mxnet.svg';

const ToolCard = ({ title, images, fullWidth }) => (
    <div className={fullWidth ? "col-12 mt-sm-4 mt-4" : "col-lg-4 col-md-6 mt-sm-4 mt-4"}>
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

const EnterpriseTechStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our Enterprise AI Development Technology Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="Programming Language"
                    images={[
                        [{ src: Python, alt: "Python" }, { src: MlFlow, alt: "MlFlow" }, { src: Java, alt: "Java" }],
                    ]}
                />
                <ToolCard
                    title="AI Development Tools"
                    images={[
                        [{ src: Py4, alt: "Jupyter Notebooks" }, { src: Py5, alt: "Anaconda" }, { src: nvdia, alt: "Google Colab" }]
                    ]}
                />
                <ToolCard
                    title="Data Warehousing and Management"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: Micro, alt: "Microservices" }, { src: CoreMl, alt: "CoreML" }]
                    ]}
                />
                <ToolCard
                    title="Integration and Deployment Tools"
                    images={[
                        [{ src: MatPlo, alt: "Matplotlib" }, { src: Tensor, alt: "TensorFlow" }],
                    ]}
                />
                <ToolCard
                    title="Cloud Computing Platforms"
                    images={[
                        [{ src: Ns2, alt: "AWS" }, { src: Nj2, alt: "Google Cloud" }, { src: Rec2, alt: "Azure" }]
                    ]}
                />
                <ToolCard
                    title="Data Visualisation and Reporting Tools"
                    images={[
                        [{ src: Py2, alt: "Power BI" }, { src: Py3, alt: "Tableau" }]
                    ]}
                />
                {/* Full width card */}
                <ToolCard className=
                "learn"
                    title="Machine Learning Platform"
                    images={[
                        [{ src: Py6, alt: "Power BI" }, { src: Py7, alt: "Tableau" }, { src: Py8, alt: "Tableau" }, { src: Py9, alt: "Power BI" }, { src: Py10, alt: "Tableau" }, { src: Py11, alt: "Tableau" }, { src: Py12, alt: "Power BI" }, { src: Py13, alt: "Tableau" }, { src: Py14, alt: "Tableau" }]
                    ]}
                    fullWidth
                />
                <StackSection
                    title="Algorithms"
                    items={["Supervised/Unsupervised Learning", "Clustering (density-based, Hierarchical, partitioning)", "Metric Learning", "Fewshot Learning"]}
                />
            </div>
        </div>
    );
}

export default EnterpriseTechStack;
