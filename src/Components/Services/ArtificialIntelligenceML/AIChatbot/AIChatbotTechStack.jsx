import React from 'react';

// Import your images
import ApacheAir from '../../../../assets/images/icon/TensorFlow-Icon-1.svg';
import ApacheSpark from '../../../../assets/images/icon/PyTorch-Icon-2.svg';
import SageMaker from '../../../../assets/images/icon/SpaCy.svg';
import KubeFlow from '../../../../assets/images/icon/Scikit-Learn-icon.svg';
import AutoKeras from '../../../../assets/images/icon/Keras-logo.svg';

import PyTorch from '../../../../assets/images/icon/Microsoft-Cognitive-Toolkit.png';
import ScikitLearn from '../../../../assets/images/icon/ai29.svg';
import NumPy from '../../../../assets/images/icon/ai28.svg';
import Pandas from '../../../../assets/images/icon/Ruby.svg';
import Flask from '../../../../assets/images/icon/ai32.svg';
import Django from '../../../../assets/images/icon/Django.svg';
import Express from '../../../../assets/images/icon/Express.svg';
import GCPStorage from '../../../../assets/images/icon/te18.png';
import AmazonS3 from '../../../../assets/images/icon/googlecloudsvg.svg';
import Hadoop from '../../../../assets/images/icon/te20.png';
import MangoDB from '../../../../assets/images/icon/MangoDB.png';
import PostgreSQL from '../../../../assets/images/icon/stack5.svg';
import MySQL from '../../../../assets/images/icon/stack4.svg';

import RESTful from '../../../../assets/images/icon/RESTful-APIs.svg';
import WebSockets from '../../../../assets/images/icon/WebSockets.svg';
import OAuth from '../../../../assets/images/icon/OAuth.svg';
import Kubernetes from '../../../../assets/images/icon/Kubernetes-icon.svg';
import Docker from '../../../../assets/images/icon/Docker-Icon-1.svg';
import Prometheus from '../../../../assets/images/icon/Prometheus-icon.svg';
import Grafana from '../../../../assets/images/icon/Grafana-Icon-1.svg';
import Kibana from '../../../../assets/images/icon/Kibana-Icon-1.svg';
import GitLabCI from '../../../../assets/images/icon/GitLab-CI-icon.svg';
import CircleCI from '../../../../assets/images/icon/CircleCI-Icon-1.svg';
import Jenkins from '../../../../assets/images/icon/Jenkins-icon.svg';
import Jira from '../../../../assets/images/icon/Jira-Icon-1.svg';
import MicrosoftTeams from '../../../../assets/images/icon/Microsoft-teams-icon.svg';
import Slack from '../../../../assets/images/icon/Slack-icon.svg';
import PowerBI from '../../../../assets/images/icon/Power-BI-icon.svg';
import Tableau from '../../../../assets/images/icon/Tableau-icon.svg';
import Matplotlib from '../../../../assets/images/icon/Matplotlib-icon.svg';

// You can now use these images in the ToolCard component below

const ToolCard = ({ title, images, descriptions }) => (
  <div className="col-lg-4 col-md-6 mt-sm-4 mt-4">
    <div className="stackCard">
      <h2>{title}</h2>
      {images.map((group, index) => (
        <div key={index} className='toolImgDiv'>
          {group.map((image, i) => (
            <div key={i} className="toolGroup">
              <img src={image.src} alt={image.alt} />
              <p>{descriptions[i]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const AIChatbotTechStack = () => {
  return (
    <div className='marginSet'>
      <div className="mainHeading">
        <h2 style={{ color: '#00245B' }}>
        Technology Stack We Use
        </h2>
      </div>

      <div className="row mt-md-5 mt-0">
        {/* Software */}
        <ToolCard
          title="Natural Language Processing (NLP)"
          images={[
            [{ src: ApacheAir, alt: "TensorFlow" }, { src: ApacheSpark, alt: "PyTorch" },{ src: SageMaker, alt: "SpaCy" }],
          ]}
          descriptions={["TensorFlow", "PyTorch", "SpaCy"]}
        />

        {/* Platforms */}
        <ToolCard
          title="Machine Learning Framework"
          images={[
            [ { src: KubeFlow, alt: "Scikit-learn" }, { src: AutoKeras, alt: "AutoKeras" }, { src: PyTorch, alt: "PyTorch" }],
          ]}
          descriptions={[ "Scikit-learn", "Keras", "Microsoft Cognitive Toolkit"]}
        />

        {/* Library */}
        <ToolCard
          title="Backend Development"
          images={[
            [{ src: ScikitLearn, alt: "Python" }, { src: NumPy, alt: "Node.js" }, { src: Pandas, alt: "Ruby" }],
          ]}
          descriptions={["Python", "Node.js", "Ruby"]}
        />

        <ToolCard
          title="Web Framework"
          images={[
            [
              
              { src: Flask, alt: "Flask" },
              { src: Django, alt: "Django" },
              { src: Express, alt: "Express.js" },
              
            ]
          ]}
          descriptions={["Flask", "Django", "Express.js", "Pandas"]}
        />

        {/* Cloud Services */}
        <ToolCard
          title="Cloud Services"
          images={[
            [
              { src: GCPStorage, alt: "AWS" },
              { src: AmazonS3, alt: "GCP" },
              { src: Hadoop, alt: "Microsoft Azure" }
            ]
          ]}
          descriptions={["AWS", "GCP", "Microsoft Azure"]}
        />

        {/* Version Control */}
        <ToolCard
          title="Database"
          images={[
            [
              { src: MangoDB, alt: "MangoDB" },
              { src: PostgreSQL, alt: "PostgreSQL" },
              { src: MySQL, alt: "MySQL" }
            ]
          ]}
          descriptions={["MangoDB", "PostgreSQL", "MySQL"]}
        />

        {/* APIs and Integrations */}
        <ToolCard
          title="APIs and Integrations"
          images={[
            [
              { src: RESTful, alt: "RESTful APIs" },
              { src: WebSockets, alt: "WebSockets" },
              { src: OAuth, alt: "OAuth" }
            ]
          ]}
          descriptions={["RESTful APIs", "WebSockets", "OAuth"]}
        />

        {/* Model Development */}
        <ToolCard
          title="Model Development"
          images={[
            [
              { src: Kubernetes, alt: "Kubernetes" },
              { src: Docker, alt: "Docker" },
              { src: SageMaker, alt: "AWS SageMaker" }
            ]
          ]}
          descriptions={["Kubernetes", "Docker", "AWS SageMaker"]}
        />

        {/* Model Monitoring */}
        <ToolCard
          title="Model Monitoring"
          images={[
            [
              { src: Prometheus, alt: "Prometheus" },
              { src: Grafana, alt: "Grafana" },
              { src: Kibana, alt: "Kibana" }
            ]
          ]}
          descriptions={["Prometheus", "Grafana", "Kibana"]}
        />

        {/* CI/CD */}
        <ToolCard
          title="CI/CD"
          images={[
            [
              { src: GitLabCI, alt: "GitLab CI" },
              { src: CircleCI, alt: "CircleCI" },
              { src: Jenkins, alt: "Jenkins" }
            ]
          ]}
          descriptions={["GitLab CI", "CircleCI", "Jenkins"]}
        />

        {/* Collaboration */}
        <ToolCard
          title="Collaboration"
          images={[
            [
              { src: Jira, alt: "Jira" },
              { src: MicrosoftTeams, alt: "Microsoft Teams" },
              { src: Slack, alt: "Slack" }
            ]
          ]}
          descriptions={["Jira", "Microsoft Teams", "Slack"]}
        />

        {/* Visualization */}
        <ToolCard
          title="Visualization"
          images={[
            [
              { src: PowerBI, alt: "Power BI" },
              { src: Tableau, alt: "Tableau" },
              { src: Matplotlib, alt: "Matplotlib" }
            ]
          ]}
          descriptions={["Power BI", "Tableau", "Matplotlib"]}
        />
      </div>
    </div>
  );
};

export default AIChatbotTechStack;
