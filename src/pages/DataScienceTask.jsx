import React, { useState } from 'react';
import '../styles/InternshipPage.css';
import Layout from '../components/Layout/Layout';

function DataScienceTask() {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };

  return (
    <div className="container">
      <PageSection
        title="DATA SCIENCE TASK"
        instruction="Click Here to See INSTRUCTIONS"
        showInstruction={showInstruction}
        toggleInstruction={toggleInstruction}
        tasks={[
          {
            title: "TASK 1 - TITANIC SURVIVAL PREDICTION(Week-1)",
            level: "Beginner",
            description: "* Use the Titanic dataset to build a model that predicts whether a passenger on the Titanic survived or not. This is a classic beginner project with readily available data.",
            subdescription:"* The dataset typically used for this project contains information about individual passengers, such as their age, gender, ticket class, fare, cabin, and whether or not they survived.",
            link: "https://www.kaggle.com/datasets/brendan45774/test-file"
          },
          {
            title: "TASK 2 - IRIS FLOWER CLASSIFICATION(Week-2)",
            level: "Intermediate",
            description: "* The Iris flower dataset consists of three species: setosa, versicolor,and virginica. These species can be distinguished based on their measurements. Now, imagine that you have the measurements of Iris flowers categorized by their respective species. Your objective is to train a machine learning model that can learn from these measurements and accurately classify the Iris flowers into their respective species.",
            subdescription: "* Use the Iris dataset to develop a model that can classify iris flowers into different species based on their sepal and petal measurements. This dataset is widely used for introductory classification tasks.",
            link: "https://raw.githubusercontent.com/amankharwal/Website-data/master/IRIS.csv"
          },
          {
            title: "TASK 3 - CREDIT CARD FRAUD DETECTION(Week-3)",
            level: "Advanced",
            description: "* Build a machine learning model to identify fraudulent credit card transactions.",
            subdescription:"* Preprocess and normalize the transaction data, handle class imbalance issues, and split the dataset into training and testing sets.",
            subdescription1:"* Train a classification algorithm, such as logistic regression or random forests, to classify transactions as fraudulent or genuine.",
            subdescription2:"* Evaluate the model's performance using metrics like precision, recall, and F1-score, and consider techniques like oversampling or undersampling for improving results.",
            link: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud"
          }
        ]}
      />
    </div>
  );
}

const PageSection = ({ title, instruction, showInstruction, toggleInstruction, tasks }) => {
  return (
    <Layout>
    <div className="page-section">
      <h2 className='task-domain-title'>{title}</h2>
      <hr></hr>
      <div className="instruction-toggle" onClick={toggleInstruction}>
        <span>{instruction}</span>
      </div>
      {showInstruction && (
        <div className="instruction-menu">
          <p>1. Update your LinkedIn profiles</p>
          <p>2. Maintain a separate GitHub repository name <b>CAMPUSVALLEY</b> for all the tasks and share the link of the GitHub repo in the task submission form (it will be given later through email).</p>
          <p>3. A video need to be created to showcase your work,  demo of your effort</p>
          <p>4. The video can be hosted on LinkedIn for proof of your work and build credibility among your peers . You can tag <b>CampusValley</b> in such posts.</p>
          <p>5. Please add <b>#campusvalley</b> in each of your task video pos tings on LinkedIn</p>
          <p>6. You can refer to online resources such as Google Search and read tutorials. Watch videos (For Help).</p>
        </div>
      )}
      {tasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </div>
    </Layout>
  );
}

const Task = ({ title, level, description, subdescription,subdescription1, link }) => {
  return (
    <div className="task">
      <h3 className='task-question-title'>{title}</h3>
      <p><strong>{level}</strong></p>
      <p className='task-question-description'>{description}</p>
      <p className='task-question-subdescription'>{subdescription}</p>
      <p className='task-question-subdescription'>{subdescription1}</p>
      <a className='task-demo-link' href={link} target="_blank" rel="noopener noreferrer">DOWNLOAD DATASET</a>
    </div>
  );
}

export default DataScienceTask;
