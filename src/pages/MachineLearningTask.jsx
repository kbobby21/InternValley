import React, { useState } from 'react';
import '../styles/InternshipPage.css';
import Layout from '../components/Layout/Layout';

function MachineLearningTask() {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };

  return (
    
    <div className="container">
      <PageSection
        title="MACHINE LEARNING TASK"
        instruction="Click Here to See INSTRUCTIONS"
        showInstruction={showInstruction}
        toggleInstruction={toggleInstruction}
        tasks={[
          {
            title: "TASK 1 - MOVIE GENRE CLASSIFICATION",
            level: "WEEK - 1",
            description: "Create a machine learning model that can predict the genre of a movie based on its plot summary or other textual information. You can use techniques like TF-IDF or word embeddings with classifiers such as Naive Bayes, Logistic Regression, or Support Vector Machines.",
            link: "https://www.kaggle.com/code/imgowthamg/movie-genre-classification"
          },
          {
            title: "TASK 2 - CREDIT CARD FRAUD DETECTION",
            level: "WEEK - 2",
            description: "Create a machine learning model that can predict the genre of a movie based on its plot summary or other textual information. You can use techniques like TF-IDF or word embeddings with classifiers such as Naive Bayes, Logistic Regression, or Support Vector Machines.",
            // subdescription: "This task involves designing and developing a personal portfolio website. You can include sections such as About Me, Skills, Projects, Resume, Contact, and Footer.",
            link: "https://www.kaggle.com/datasets/kartik2112/fraud-detection"
          },
          {
            title: "TASK 3 - BANK CUSTOMER CHURN PREDICTION",
            level: "WEEK - 3",
            description: "Develop a model to predict customer churn for a subscriptionbased service or business. Use historical customer data, including features like usage behavior and customer demographics, and try algorithms like Logistic Regression, Random Forests, or Gradient Boosting to predict churn.",
            // subdescription:"Question 3: using react",
            link: "https://www.kaggle.com/datasets/shantanudhakadd/bank-customer-churn-prediction"
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

const Task = ({ title, level, description, subdescription, link }) => {
  return (
    
    <div className="task">
      <h3 className='task-question-title'>{title}</h3>
      <p><strong>{level}</strong></p>
      <p className='task-question-description'>{description}</p>
      <p className='task-question-subdescription'>{subdescription}</p>
      <a className='task-demo-link' href={link} target="_blank" rel="noopener noreferrer">CLICK FOR DATASET</a>
    </div>
    
  );
}

export default MachineLearningTask;
