import React from 'react'
import Scientists from '../../assets/images/image 35.svg'
import ExtractInsights from './ExtractInsights'
import ExpertiseIn from './ExpertiseIn'
import IntelligencePortfolio from './IntelligencePortfolio'
export default function ServicesContent() {
  return (
    <>
      <div className="mainHeroSection">
        <h2>Services</h2>
        <h2>Hire Data Scientists</h2>
        <p>
          Hire Zyntellect expert data scientists to efficiently source, manage, and analyze large amounts of unstructured data. Our data scientists have extensive experience analyzing, visualizing and preprocessing complex data sets using manual techniques and automated tools like Pandas and NumPy to ensure they are ready for seamless training of your AI models.
        </p>
      </div>
      <div className="marginSet">
        <div className="mainHeading">
          <h2 style={{ color: '#00245B' }}>Services Offered by Our Data Scientists</h2>
        </div>
        <div className="serviceOffered">
          <div className="row flex-lg-row flex-column-reverse">
            <div className="col-xl-8 col-lg-7 mt-lg-0 mt-4">
              <div className='preprocesingCard'>
                <div className='circleDiv'></div>
                <h2>Data Gathering and Preprocessing</h2>
                <p>
                  Our data scientists collect structured and unstructured data using web scraping and API integration and prepare them using techniques like feature engineering and data normalization to ensure the data is ready for model training.
                </p>
              </div>
              <div className='preprocesingCard'>
                <div className='circleDiv'></div>
                <h2>Data Annotation</h2>
                <p>
                  By labeling and categorizing data using manual techniques and automated tools like Hugging Face’s datasets library, our data scientists enable machine learning algorithms to recognize patterns and make accurate predictions.
                </p>
              </div>
              <div className='preprocesingCard'>
                <div className='circleDiv'></div>
                <h2>Algorithm Selection and Hyperparameter Tuning</h2>
                <p>
                  Our data scientists leverage techniques like EDA, experimentation, and hypothesis testing to select the ideal ML algorithm for your project. They also use methods like Grid search and Bayesian optimization for hyperparameter tuning to ensure there are no inefficiencies in the model being developed.
                </p>
              </div>
              <div className='preprocesingCard'>
                <div className='circleDiv'></div>
                <h2>Model Training and Validation</h2>
                <p>
                  We use numerous ML techniques like supervised and unsupervised learning and reinforcement learning to train the model and validate it for accuracy using techniques like cross-validation, confusion matrix and ROC curve.
                </p>
              </div>
              <div className='preprocesingCard'>
                <div className='circleDiv'></div>
                <h2>Model Evaluation</h2>
                <p>
                  Once deployed, our data scientists use evaluation metrics like precision, accuracy, recall and F1 score to resolve any anomalies in the model and analyze its performance to identify underperforming segments and address any issues in them.
                </p>
              </div>
              <div className='preprocesingCard' style={{ borderColor: '#FFF' }}>
                <div className='circleDiv'></div>
                <h2>Consultancy</h2>
                <p>
                  Our data scientists can assess your business shortcomings, analyze your data to uncover valuable insights and develop a comprehensive strategy to help you harness the full potential of your data and make well-informed, data-driven decisions for business growth.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="row d-flex justify-content-end">
                <div className="col-xl-10 col-12">
                  <img src={Scientists} alt="" className='scientistsImg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marginSet">
        <ExtractInsights />
      </div>
      <div className="marginSet">
        <ExpertiseIn />
      </div>
      
    </>
  )
}
