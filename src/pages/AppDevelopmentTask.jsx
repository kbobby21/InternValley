import React, { useState } from 'react';
import '../styles/InternshipPage.css';
import Layout from '../components/Layout/Layout';

function AppDevelopmentTask() {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };

  return (
    <div className="container">
      <PageSection
        title="APP DEVELOPMENT TASK"
        instruction="Click Here to See INSTRUCTIONS"
        showInstruction={showInstruction}
        toggleInstruction={toggleInstruction}
        tasks={[
  {
    title: "TASK 1 - Flashlight App (WEEK 1)",
    level: "Beginner",
    description: "Develop a flashlight app that turns on the device's flashlight when the app is launched and turns it off when the app is closed.",
    subdescription: "1. Create a screen with a toggle button to control the flashlight.",
    link: "#"
  },
  {
    title: "TASK 2 - Calculator App (WEEK 2)",
    level: "Intermediate",
    description: "Develop a calculator app that performs basic arithmetic operations like addition, subtraction, multiplication, and division.",
    subdescription: "1. Design a layout with number and operator buttons and a display area.",
    link: "#"
  },
  {
    title: "TASK 3 - Currency Converter App (WEEK 3)",
    level: "Advanced",
    description: "Develop a currency converter app that converts between different currencies using real-time exchange rates.",
    subdescription: "1. Create a user-friendly interface with input fields for amount, source currency, and target currency.",
    link: "#"
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
      {/* <a className='task-demo-link' href={link} target="_blank" rel="noopener noreferrer">FOR DEMO CLICK HERE</a> */}
    </div>
  );
}

export default AppDevelopmentTask;
