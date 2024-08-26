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
import Py2 from '../../../assets/images/icon/dalle1.svg';
import Py3 from '../../../assets/images/icon/dalle2.svg';
import Py4 from '../../../assets/images/icon/dalle3.svg';
import Py5 from '../../../assets/images/icon/dalle4.svg';
import Py6 from '../../../assets/images/icon/dalle5.svg';
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


const PoweredAIStack = () => {
    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                Our OpenAI Model-powered Solution Development Stack
                </h2>
            </div>
            <div className="row mt-md-5 mt-0">
                <ToolCard
                    title="OpenAI Models"
                    images={[
                        [{ src: Py2, alt: "Framework 2" }, { src: Py3, alt: "Framework 3" }, { src: Py4, alt: "Fe" }],[{ src: Py5, alt: "Fe" }, { src: Py6, alt: "Fe" }]
                    ]}
                />
                <ToolCard
                    title="AI Frameworks"
                    images={[
                        [{ src: Ns, alt: "Framework 2" }, { src: Nj, alt: "Framework 3" }, { src: Fe, alt: "Fe" }],
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
                        [{ src: Py1, alt: "Py1" }, { src: Rec, alt: "Rec" }, { src: Micro, alt: "Micro" }]

                    ]}
                />
                <ToolCard
                    title="Programming Languages"
                    images={[
                        [{ src: Python, alt: "Framework 2" }, { src: JavaScript, alt: "Framework 3" }, { src: Cplus, alt: "Cplus" }]
                    ]}
                />
                <ToolCard
                    title="Databases"
                    images={[
                        [{ src: Kur, alt: "Keras" }, { src: MlFlow, alt: "MlFlow" }],
                    ]}
                />
            </div>
        </div>
    );
}

export default PoweredAIStack;
