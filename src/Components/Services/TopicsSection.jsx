import React, { useState } from 'react';
const categories = [
    {
        title: 'Algorithms',
        items: ['Supervised/Unsupervised Learning', 'Clustering', 'Metric Learning', 'Fewshot Learning', 'Ensemble Learning'],
    },
    {
        title: 'Neural Networks',
        items: ['CNN', 'RNN', 'Representation Learning', 'Manifold Learning', 'Variational Autoencoders', 'FNN'],
    },
];

const TopicsSection = () => {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (item) => {
        setActiveButton(item);
    };

    return (
        <div className="topicSection">
            {categories.map((category, index) => (
                <div className="category" key={index}>
                    <div className="category-title">{category.title}</div>
                    <div className="button-wrapper">
                        {category.items.map((item, idx) => (
                            <button
                                className={`custom-button ${activeButton === item ? 'active' : ''}`}
                                key={idx}
                                onClick={() => handleButtonClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopicsSection;
