import React from 'react';

// Import your images
import ApacheAir from '../../../../assets/images/icon/Apache-airflow-icon.svg';
import ApacheSpark from '../../../../assets/images/icon/Apache-spark-icon.svg';
import SageMaker from '../../../../assets/images/icon/Amazon-sagemaker-icon.svg';
import KubeFlow from '../../../../assets/images/icon/Kubernetes-Icon-1.svg';
import AutoKeras from '../../../../assets/images/icon/Autokeras-icon.svg';

import PyTorch from '../../../../assets/images/icon/PyTorch-Icon-2.svg';
import ScikitLearn from '../../../../assets/images/icon/Scikit-Learn-icon.svg';
import NumPy from '../../../../assets/images/icon/NumPy-icon.svg';
import Pandas from '../../../../assets/images/icon/Pandas-icon.svg';
import GCPStorage from '../../../../assets/images/icon/Google-cloud-Storage-icon.svg';
import AmazonS3 from '../../../../assets/images/icon/Amazon-S3-icon.svg';
import Hadoop from '../../../../assets/images/icon/Hadoop-icon.svg';
import GitHub from '../../../../assets/images/icon/GitHub-Icon-1.svg';
import Bitbucket from '../../../../assets/images/icon/Bitbucket-icon.svg';
import Git from '../../../../assets/images/icon/GIt-icon.svg';

import TensorFlow from '../../../../assets/images/icon/TensorFlow-Icon-1.svg';
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

const MLOpsTechStack = () => {
  return (
    <div className='marginSet'>
      <div className="mainHeading">
        <h2 style={{ color: '#00245B' }}>
          Our MLOps Tech Stack
        </h2>
      </div>

      <div className="row mt-md-5 mt-0">
        {/* Software */}
        <ToolCard
          title="Software"
          images={[
            [{ src: ApacheAir, alt: "Apache Airflow" }, { src: ApacheSpark, alt: "Apache Spark" }],
          ]}
          descriptions={["Apache Airflow", "Apache Spark"]}
        />

        {/* Platforms */}
        <ToolCard
          title="Platforms"
          images={[
            [{ src: SageMaker, alt: "Amazon SageMaker" }, { src: KubeFlow, alt: "KubeFlow" }],
          ]}
          descriptions={["Amazon SageMaker", "KubeFlow"]}
        />

        {/* Library */}
        <ToolCard
          title="Library"
          images={[
            [{ src: AutoKeras, alt: "AutoKeras" }],
          ]}
          descriptions={["AutoKeras"]}
        />

        {/* Data Preprocessing */}
        <ToolCard
          title="Data Preprocessing"
          images={[
            [
              { src: PyTorch, alt: "PyTorch" },
              { src: ScikitLearn, alt: "Scikit-Learn" },
              { src: NumPy, alt: "NumPy" },
              { src: Pandas, alt: "Pandas" }
            ]
          ]}
          descriptions={["PyTorch", "Scikit-Learn", "NumPy", "Pandas"]}
        />

        {/* Data Storage */}
        <ToolCard
          title="Data Storage"
          images={[
            [
              { src: GCPStorage, alt: "Google Cloud Storage" },
              { src: AmazonS3, alt: "Amazon S3" },
              { src: Hadoop, alt: "Hadoop" }
            ]
          ]}
          descriptions={["Google Cloud Storage", "Amazon S3", "Hadoop"]}
        />

        {/* Version Control */}
        <ToolCard
          title="Version Control"
          images={[
            [
              { src: GitHub, alt: "GitHub" },
              { src: Bitbucket, alt: "Bitbucket" },
              { src: Git, alt: "Git" }
            ]
          ]}
          descriptions={["GitHub", "Bitbucket", "Git"]}
        />

        {/* Model Training */}
        <ToolCard
          title="Model Training"
          images={[
            [
              { src: PyTorch, alt: "PyTorch" },
              { src: TensorFlow, alt: "TensorFlow" },
              { src: ScikitLearn, alt: "Scikit-Learn" }
            ]
          ]}
          descriptions={["PyTorch", "TensorFlow", "Scikit-Learn"]}
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

export default MLOpsTechStack;
