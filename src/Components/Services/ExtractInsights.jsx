import React from 'react';
import Machine from '../../assets/images/icon/icon8.svg';

const insights = [
    {
        title: "Machine Learning Algorithms",
        description: "Our data scientists use multiple ML algorithms, like decision trees, linear regression, logistic regression, random forests, support vector machines, and KNN for classification, regression, clustering and dimensionality reduction to build AI models.",
        img: Machine,
    },
    {
        title: "Deep Learning",
        description: "We utilize numerous deep learning algorithms and techniques like neural networks, CNNs, RNNs and autoencoders to derive valuable insights from datasets and build accurate AI models for diverse use cases.",
        img: Machine,
    },
    {
        title: "Supervised Learning",
        description: "Our data scientists select and curate labeled data for training AI models. They choose the appropriate model architecture, define the loss function and optimization algorithm and tune the model’s hyperparameters for optimal performance.",
        img: Machine,
    },
    {
        title: "Unsupervised Learning",
        description: "Our data scientists discover patterns and relationships in unlabeled data by choosing appropriate algorithms. They also carefully assess and interpret the unsupervised learning algorithms to draw meaningful conclusions.",
        img: Machine,
    },
    {
        title: "Transfer Learning",
        description: "We select a pre-trained model that has been trained for a task similar to the one at hand. Our data scientists design and curate the dataset for fine-tuning the model and tuning the model’s hyperparameters for optimal performance.",
        img: Machine,
    },
    {
        title: "Reinforcement Learning",
        description: "We utilize developer resources and advanced tools like Markov Decision Processes to employ reinforcement learning techniques, which help us train agents to perform tasks to maximize rewards based on environmental feedback.",
        img: Machine,
    },
];

export default function ExtractInsights() {
    return (
        <>
            <div className="mainHeading">
                <h2 style={{ color: '#00245B' }}>
                    Methods Used by Our Data Scientists to <br className='d-lg-block d-none' /> Extract Insights From Data
                </h2>
            </div>
            <div className="row mt-sm-3 mt-1">
                {insights.map((insight, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 mt-sm-5 mt-4" key={index}>
                        <div className="extractCard">
                            <img src={insight.img} alt={insight.title} />
                            <h4>{insight.title}</h4>
                            <p>{insight.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    );
}
