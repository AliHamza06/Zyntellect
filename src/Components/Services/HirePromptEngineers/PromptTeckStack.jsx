import React from 'react';
import MatPlo from '../../../assets/images/icon/stack1.png';
import Tensor from '../../../assets/images/icon/stack2.png';
import Nepu from '../../../assets/images/icon/stack3.png';
import MlFlow from '../../../assets/images/icon/stack4.svg';
import Kur from '../../../assets/images/icon/stack5.svg';
import Micro from '../../../assets/images/icon/stack6.svg';
import CoreMl from '../../../assets/images/icon/stack7.svg';
import Python from '../../../assets/images/icon/MongoDB.svg';
import Java from '../../../assets/images/icon/Cassandra-icon.svg';
import Cplus from '../../../assets/images/icon/Apache-spark-icon.svg';
import Julia from '../../../assets/images/icon/Apache-Storm.svg';
import Ts from '../../../assets/images/icon/Apache-Flink.svg';
import AJ from '../../../assets/images/icon/ai33.svg';
import Fe from '../../../assets/images/icon/stack14.svg';
import Ns from '../../../assets/images/icon/stack15.svg';
import Nj from '../../../assets/images/icon/stack16.svg';
import Rec from '../../../assets/images/icon/stack17.png';
import Py1 from '../../../assets/images/icon/stack18.png';
import Py2 from '../../../assets/images/icon/Scikit-Learn_icon.svg';
import Py3 from '../../../assets/images/icon/XGBoost.svg';
import Py4 from '../../../assets/images/icon/Caffe2.png';
import Py5 from '../../../assets/images/icon/Theano.png';
import Py6 from '../../../assets/images/icon/FastAPI.svg';
import Py7 from '../../../assets/images/icon/ai32.svg';
import Py8 from '../../../assets/images/icon/GraphQL-APIs.svg';
import Py9 from '../../../assets/images/icon/REST-APIs.svg';
import Py10 from '../../../assets/images/icon/ReactAngular.svg';
import Py11 from '../../../assets/images/icon/angular.png';
import Py12 from '../../../assets/images/icon/Vue_js.png';
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


const PromptTeckStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our AI Tech Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="Data Storage"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: MlFlow, alt: "MlFlow" }, { src: Python, alt: "Python" }], 
                        [{ src: Java, alt: "Java" }, { src: CoreMl, alt: "CoreML" }, { src: Micro, alt: "Microscope" }]
                    ]}
                />
                <ToolCard
                    title="Data Processing"
                    images={[
                        [{ src: Cplus, alt: "Cplus" },{ src: Julia, alt: "Julia" }, { src: Ts, alt: "Ts" }]
                    ]}
                />
                <ToolCard
                    title="Machine Learning"
                    images={[
                        [{ src: Ns, alt: "Framework 2" }, { src: Nj, alt: "Framework 3" }], [{ src: Py2, alt: "Framework 4" }, { src: Py3, alt: "Framework 5" }]
                    ]}
                />
                <ToolCard
                    title="Deep Learning"
                    images={[
                        [{ src: Ns, alt: "Framework 2" }, { src: Nj, alt: "Framework 3" },{ src: Fe, alt: "Fe" }], [{ src: Py4, alt: "Py4" }, { src: Py5, alt: "Py5" }]
                    ]}
                />
                <ToolCard
                    title="Model Development"
                    images={[
                        [{ src: Ns, alt: "Framework 2" }, { src: Py6, alt: "Py6" }], [{ src: AJ, alt: "AJ" }, { src: Py7, alt: "Py7" }]
                    ]}
                />
                <ToolCard
                    title="API Development"
                    images={[
                        [{ src: Py8, alt: "Framework 2" }, { src: Py9, alt: "Framework 3" }]
                    ]}
                />
                <ToolCard
                    title="Frontend"
                    images={[
                        [{ src: Py10, alt: "Py10" }, { src: Py11, alt: "Py11" }, { src: Py12, alt: "Py12" }],
                        [{ src: Py7, alt: "Py7" }, { src: AJ, alt: "AJ" }]
                    ]}
                />
                <ToolCard
                    title="Infrastructure"
                    images={[
                        [{ src: Tensor, alt: "TensorFlow" }, { src: MatPlo, alt: "Matplotlib" }, { src: Nepu, alt: "Neptune" },],
                        
                    ]}
                />
                <ToolCard
                    title="Containerization"
                    images={[
                        [{ src: Py1, alt: "Py1" }, { src: Rec, alt: "Rec" },]
                        
                    ]}
                />
            </div>
        </div>
    );
}

export default PromptTeckStack;
