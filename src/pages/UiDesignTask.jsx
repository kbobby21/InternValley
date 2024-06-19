import React, { useState } from 'react';
import '../styles/InternshipPage.css';
import Layout from '../components/Layout/Layout';

function UiDesignTask() {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };

  return (
    <div className="container">
      <PageSection
        title="UI/UX DESIGN TASK"
        instruction="Click Here to See INSTRUCTIONS"
        showInstruction={showInstruction}
        toggleInstruction={toggleInstruction}
        tasks={[
  {
    title: "TASK 1 - Designing a Mobile App Login Screen (Week - 1)",
    level: "Beginner",
    description: "Create a visually appealing and user-friendly login screen for a mobile app. Design a layout that includes input fields for username/email and password, along with buttons for logging in and accessing the forgot password feature. Ensure the design is responsive and adaptable to different screen sizes. Use appropriate typography, colors, and icons to enhance usability.",
    link: "#"
  },
  {
    title: "TASK 2 - Wireframing a Website Landing Page (Week - 2)",
    level: "Intermediate",
    description: "Develop a wireframe for the landing page of a new website. Outline the structure of the landing page, including header, hero section, features/services, testimonials, and footer. Determine the placement and hierarchy of key elements, such as navigation menus, call-to-action buttons, and social media links. Focus on usability and intuitive navigation by incorporating clear visual cues and user flows.",
    link: "#"
  },
  {
    title: "TASK 3 - Creating a UI Kit for a Design System (Week - 3)",
    level: "Advanced",
    description: "Develop a comprehensive UI kit to establish consistency and streamline the design process across multiple projects. Design reusable components such as buttons, input fields, cards, navigation bars, and icons. Define typography styles, establish a color palette, and organize components and styles into a well-structured library for easy access and management.",
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
      <h2 className='task-domain-title' task-domain-title>{title}</h2>
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

export default UiDesignTask;
