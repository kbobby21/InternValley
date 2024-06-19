import React, { useState } from 'react';
import '../styles/InternshipPage.css';
import Layout from '../components/Layout/Layout';

function PythonTask() {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };

  return (
    <div className="container">
      <PageSection
        title="PYTHON DEVELOPMENT TASK"
        instruction="Click Here to See INSTRUCTIONS"
        showInstruction={showInstruction}
        toggleInstruction={toggleInstruction}
        tasks={[
  {
    title: "TASK 1 - To-Do List Application",
    level: "Intermediate",
    description: "Create a To-Do List application using Python. Allow users to manage and organize their tasks efficiently. Users should be able to create, update, and track their to-do lists through a command-line or GUI-based interface.",
    link: "https://drive.google.com/file/d/1RiS5lP5IfwhR4cqDllvq3V1rVHH-7P4v/view?usp=sharing"
  },
  {
    title: "TASK 2 - Calculator Design",
    level: "Beginner",
    description: "Design a simple calculator with basic arithmetic operations. Prompt the user to input two numbers and an operation choice. Perform the calculation and display the result.",
    link: "https://drive.google.com/file/d/16m_dT4h94-yV4qiV9UZ6svzA_DEvNs3S/view?usp=sharing"
  },
  {
    title: "TASK 3 - Password Generator Application",
    level: "Intermediate",
    description: "Develop a password generator application using Python. Allow users to specify the length and complexity of the password. Generate a strong and random password based on the user's input and display it on the screen.",
    link: "https://drive.google.com/file/d/1pTw8jSxmVsA2sBEYecru4EZ51EMXLDpq/view?usp=sharing"
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
      <a className='task-demo-link' href={link} target="_blank" rel="noopener noreferrer">FOR DEMO CLICK HERE</a>
    </div>
  );
}

export default PythonTask;
