import React from 'react';
import MatPlo from '../../../assets/images/icon/stack1.png';
import Tensor from '../../../assets/images/icon/stack2.png';
import Nepu from '../../../assets/images/icon/stack3.png';
import MlFlow from '../../../assets/images/icon/stack4.svg';
import Kur from '../../../assets/images/icon/stack5.svg';
import Micro from '../../../assets/images/icon/stack6.svg';
import CoreMl from '../../../assets/images/icon/stack7.svg';
import Python from '../../../assets/images/icon/stack8.svg';
import Java from '../../../assets/images/icon/stack9.png';
import Cplus from '../../../assets/images/icon/stack10.svg';
import Julia from '../../../assets/images/icon/stack11.svg';
import Ts from '../../../assets/images/icon/stack12.svg';
import AJ from '../../../assets/images/icon/stack13.svg';
import Fe from '../../../assets/images/icon/stack14.svg';
import Ns from '../../../assets/images/icon/stack15.svg';
import Nj from '../../../assets/images/icon/stack16.svg';
import Rec from '../../../assets/images/icon/stack17.png';
import Py1 from '../../../assets/images/icon/stack18.png';
import Py2 from '../../../assets/images/icon/stack19.svg';
import Py3 from '../../../assets/images/icon/stack20.png';
import Py4 from '../../../assets/images/icon/stack21.png';
import Py5 from '../../../assets/images/icon/stack22.png';

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


const EngineeringTechStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Our AI Tech Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="Infrastructure"
                    images={[
                        [{ src: MatPlo, alt: "Matplotlib" }, { src: Tensor, alt: "TensorFlow" },{ src: Nepu, alt: "Neptune" },],
                        
                    ]}
                />
                <ToolCard
                    title="Data Storage"
                    images={[
                        [{ src: MlFlow, alt: "MlFlow" },{ src: Kur, alt: "Keras" }, { src: Micro, alt: "Microscope" }], 
                        [{ src: CoreMl, alt: "CoreML" }]
                    ]}
                />
                <ToolCard
                    title="Data Processing"
                    images={[
                        [{ src: Python, alt: "Python" }, { src: Java, alt: "Java" }]
                    ]}
                />
                <ToolCard
                    title="Machine Learning Frameworks"
                    images={[
                        [{ src: Cplus, alt: "Cplus" }, { src: Julia, alt: "Julia" }, { src: Ts, alt: "Ts" }]
                        
                    ]}
                />
                <ToolCard
                    title="Natural Language Processing"
                    images={[
                        [{ src: AJ, alt: "AJ" }]
                    ]}
                />
                <ToolCard
                    title="Deep Learning"
                    images={[
                        [{ src: Fe, alt: "Fe" }, { src: Ns, alt: "Framework 2" }, { src: Nj, alt: "Framework 3" }]
                    ]}
                />
                <ToolCard
                    title="AI Model Deployment"
                    images={[
                        [{ src: Rec, alt: "Rec" }, { src: Py1, alt: "Py1" }]
                        
                    ]}
                />
                <ToolCard
                    title="AI Model Management"
                    images={[
                        [{ src: Py2, alt: "Py2" }]
                    ]}
                />
                <ToolCard
                    title="Data Visualization"
                    images={[
                        [{ src: Py3, alt: "Framework 1" }, { src: Py4, alt: "Framework 2" }, { src: Py5, alt: "Framework 3" }]
                    ]}
                />
            </div>
        </div>
    );
}

export default EngineeringTechStack;
