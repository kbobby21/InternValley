import React, { useState } from 'react';
import '../styles/InternshipPage.css';
import Layout from '../components/Layout/Layout';

function CppTask() {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };

  return (
    <div className="container">
      <PageSection
        title="C++ DEVELOPMENT TASK"
        instruction="Click Here to See INSTRUCTIONS"
        showInstruction={showInstruction}
        toggleInstruction={toggleInstruction}
        tasks={[
          {
            title: "TASK 1 - NUMBER GUESSING GAME(Week-1)",
            level: "Beginner",
            description: "Create a program that generates a random number and asks the user to guess it. Provide feedback on whether the guess is too high or too low until the user guesses the correct number.",
            link: "https://drive.google.com/file/d/1HU0yy_MC-OZJ0RyqJmTr57S5B8dqvPhB/view?usp=sharing"
          },
          {
            title: "TASK 2 - WORD COUNT(Week-2)",
            level: "Intermediate",
            description: "Develop a program that counts the number of words in a given text file. Prompt the user to enter the file name and display the total word count.",
            // subdescription: "This task involves designing and developing a personal portfolio website. You can include sections such as About Me, Skills, Projects, Resume, Contact, and Footer.",
            link: "https://drive.google.com/file/d/1nWhNPmLBBBARU96zaxXC5ZSyYOYAgBPp/view?usp=sharing"
          },
          {
            title: "TASK 3 - STUDENT GRADING SYSTEM(Week-3) ",
            level: "Advanced",
            description: "Create a program that manages student grades. Allow the user to input student names and their corresponding grades. Calculate the average grade and display it along with the highest and lowest grades",
            // subdescription:"Question 3: using react",
            link: "https://drive.google.com/file/d/1yLWVqDGVIo2ubPCyt6rUZaf__6dSkWY1/view?usp=sharing"
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

export default CppTask;
