import React, { useState } from 'react';
import '../styles/InternshipPage.css';
import Layout from '../components/Layout/Layout';

function WebDevelopmentTask() {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };

  return (
    <div className="container">
      <PageSection
        title="WEB DEVELOPMENT TASK"
        instruction="Click Here to See INSTRUCTIONS"
        showInstruction={showInstruction}
        toggleInstruction={toggleInstruction}
        tasks={[
          {
            title: "TASK 1 - LANDING PAGE",
            level: "WEEK - 1",
            description: "Creating a landing page is a great beginner project for web development. All you need is some basic knowledge of HTML and CSS. This project helps you learn how to organize content into columns, sections, headers, and footers. You'll also learn about arranging items and making everything look nice with colors, spacing, and boxes. The key is to be creative and pay attention to details like alignment and padding. Just remember to keep an eye on your CSS so things don't overlap. Basically, building a landing page is a fun way to practice your HTML and CSS skills while making something cool and easy to use.",
            link: "https://drive.google.com/file/d/1ibXWxT0eMowAwaBn-VI_Z8vfdQWvP-W_/view?usp=sharing"
          },
          {
            title: "TASK 2 - PORTFOLIO",
            level: "WEEK - 2",
            description: "Creating a personal portfolio using CSS and HTML is a popular beginner web development project.",
            subdescription: "This task involves designing and developing a personal portfolio website. You can include sections such as About Me, Skills, Projects, Resume, Contact, and Footer.",
            link: "https://drive.google.com/file/d/11814EKpogiEBBmRlpDduBc_3TEyR0fcc/view?usp=sharing"
          },
          {
            title: "TASK 3 - CALCULATOR",
            level: "WEEK - 3",
            description: "To create a basic calculator using CSS, HTML, and JavaScript, you'll need to implement an interactive interface with buttons for addition, subtraction, multiplication, and division operations. The calculator should have a display screen to show user input and results. Utilize CSS grid system for button alignments. Use event listeners, if-else statements, operators, and loops to handle user input and perform calculations. This project requires some skill but can be done with basic knowledge of these technologies..",
            // subdescription:"Question 3: using react",
            link: "https://drive.google.com/file/d/1R1zhF6yeT5LGr2IFemGTQblJAJNwG5OB/view?usp=sharing"
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
      <h2 className='task-domain-title' >{title}</h2>
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
      <p className='task-level'><strong>{level}</strong></p>
      <p className='task-question-description'>{description}</p>
      <p className='task-question-subdescription'>{subdescription}</p>
      <a className='task-demo-link' href={link} target="_blank" rel="noopener noreferrer">FOR DEMO CLICK HERE</a>
    </div>
  );
}

export default WebDevelopmentTask;
