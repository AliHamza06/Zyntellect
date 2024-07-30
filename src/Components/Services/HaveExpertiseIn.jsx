import React from 'react';
import Gpt4 from '../../assets/images/icon/ai1.svg';
import Lalm from '../../assets/images/icon/ai2.svg';
import Palm from '../../assets/images/icon/ai3.svg';
import Claude from '../../assets/images/icon/ai4.svg';
import Dall from '../../assets/images/icon/ai5.svg';
import Whisper from '../../assets/images/icon/ai6.svg';
import Stable from '../../assets/images/icon/ai7.svg';
import Phi from '../../assets/images/icon/ai8.svg';
import Gemini from '../../assets/images/icon/ai9.svg';
import Vicuna from '../../assets/images/icon/ai10.svg';
import Mistral from '../../assets/images/icon/ai11.svg';
import Bloom from '../../assets/images/icon/ai12.svg';

export default function HaveExpertiseIn() {
    const images = [Gpt4, Lalm, Palm, Claude, Dall, Whisper, Stable, Phi, Gemini, Vicuna, Mistral, Bloom];

    return (
        <div className='marginSet'>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    AI Models We Have Expertise In
                </h2>
            </div>
            <div className='row'>
                {images.map((image, index) => (
                    <div key={index} className="col-lg-2 col-md-2 col-sm-3 col-4 mt-sm-5 mt-4" id='brow'>
                        <img src={image} alt={`AI Model ${index + 1}`}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
