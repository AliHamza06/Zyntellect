import React from 'react';
import MatPlo from '../../../assets/images/icon/te1.svg';
import Tensor from '../../../assets/images/icon/te2.svg';
import Nepu from '../../../assets/images/icon/te3.svg';
import MlFlow from '../../../assets/images/icon/te4.png';
import Kur from '../../../assets/images/icon/te5.png';
import Micro from '../../../assets/images/icon/te6.png';
import CoreMl from '../../../assets/images/icon/te7.png';
import Python from '../../../assets/images/icon/te8.png';
import Java from '../../../assets/images/icon/te9.png';
import Cplus from '../../../assets/images/icon/te10.png';
import Julia from '../../../assets/images/icon/te11.png';
import Ts from '../../../assets/images/icon/te12.png';
import AJ from '../../../assets/images/icon/te13.png';
import Fe from '../../../assets/images/icon/te14.png';
import Ns from '../../../assets/images/icon/te15.png';
import Nj from '../../../assets/images/icon/te16.png';
import Rec from '../../../assets/images/icon/te17.png';
import Py1 from '../../../assets/images/icon/te18.png';
import Py2 from '../../../assets/images/icon/te19.png';
import Py3 from '../../../assets/images/icon/te20.png';
import Py4 from '../../../assets/images/icon/te21.png';
import Py5 from '../../../assets/images/icon/te22.png';
import Py6 from '../../../assets/images/icon/te23.png';
import Py7 from '../../../assets/images/icon/te24.png';
import Py8 from '../../../assets/images/icon/te25.png';
import Py9 from '../../../assets/images/icon/te26.png';
import Py10 from '../../../assets/images/icon/te27.png';
import Py11 from '../../../assets/images/icon/te28.png';

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
const ToolCard2 = ({ title, images }) => (
    <div className="col-lg-3 col-md-4 mt-sm-4 mt-4">
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


const IntegrationTechnologyStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                Our Generative AI Integration Technology Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="AI Frameworks"
                    images={[
                        [{ src: MatPlo, alt: "Matplotlib" }, { src: Tensor, alt: "TensorFlow" }],
                        [{ src: Nepu, alt: "Neptune" }, { src: MlFlow, alt: "MLflow" }]
                    ]}
                />
                <ToolCard
                    title="Generative AI Models"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: Micro, alt: "Microscope" }, { src: CoreMl, alt: "CoreML" }],[{ src: Python, alt: "Python" }, { src: Java, alt: "Java" }, { src: Cplus, alt: "C++" }],
                        
                    ]}
                />
                <ToolCard
                    title="Data Processing & Management"
                    images={[
                        [{ src: Julia, alt: "Julia" },{ src: Ts, alt: "TypeScript" }, { src: AJ, alt: "AngularJS" }],[{ src: Fe, alt: "Frontend" }],
                    ]}
                />
                <ToolCard
                    title="Data Visualization"
                    images={[
                        [{ src: Ns, alt: "Node.js" }, { src: Nj, alt: "Python" }, { src: Rec, alt: "React" }]
                    ]}
                />
                <ToolCard
                    title="Cloud Services"
                    images={[
                        [{ src: Py1, alt: "Framework 1" }, { src: Py2, alt: "Framework 2" }, { src: Py3, alt: "Framework 3" }]
                    ]}
                />
                <ToolCard
                    title="APIs for AI model integration"
                    images={[
                        [{ src: Py4, alt: "Framework 1" }]
                    ]}
                />
                <ToolCard2
                    title="Containerization & Deployment"
                    images={[
                        [{ src: Py5, alt: "Framework 1" },{ src: Py6, alt: "Framework 1" }]
                    ]}
                />
                <ToolCard2
                    title="Version Control"
                    images={[
                        [{ src: Py7, alt: "Framework 1" }]
                    ]}
                />
                <ToolCard2
                    title="Testing & Integration"
                    images={[
                        [{ src: Py8, alt: "Framework 1" }, { src: Py9, alt: "Framework 1" }]
                    ]}
                />
                <ToolCard2
                    title="Project Management"
                    images={[
                        [{ src: Py10, alt: "Framework 1" }, { src: Py11, alt: "Framework 1" }]
                    ]}
                />
            </div>
        </div>
    );
}

export default IntegrationTechnologyStack;
