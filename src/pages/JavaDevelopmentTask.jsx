import React, { useState } from 'react';
import '../styles/InternshipPage.css';
import Layout from '../components/Layout/Layout';

function JavaDevelopmentTask() {
  const [showInstruction, setShowInstruction] = useState(false);

  const toggleInstruction = () => {
    setShowInstruction(!showInstruction);
  };

  return (
    <div className="container">
      <PageSection
        title="JAVA DEVELOPMENT TASK"
        instruction="Click Here to See INSTRUCTIONS"
        showInstruction={showInstruction}
        toggleInstruction={toggleInstruction}
        tasks={[
          {
            title: "TASK 1 - NUMBER GAME (WEEK 1)",
            level: "Beginner",
            description: "1.Generate a random number within a specified range, such as 1 to 100.",
            subdescription:"2. Prompt the user to enter their guess for the generated number.",
            subdescription1:"3. Compare the user's guess with the generated number and provide feedback on whether the guess is correct, too high, or too low.",
            subdescription2:"4. Repeat steps 2 and 3 until the user guesses the correct number.",
            subdescription3:"You can incorporate additional details as follows:",
            subdescription4:"5. Limit the number of attempts the user has to guess the number.",
            subdescription5:"6. Add the option for multiple rounds, allowing the user to play again.",
            subdescription6:"7. Display the user's score, which can be based on the number of attempts taken or rounds won.",
            link: "https://example.com/landing-page-demo"
          },
          {
            title: "TASK 2 - WORD COUNTER (WEEK - 2)",
            level: "Intermediate",
            description: "1. Prompt the user to enter a text or provide a file to count the words.",
            subdescription: "2. Read the input text or file and store it in a string.",
            subdescription1:"3. Split the string into an array of words using space or punctuation as delimiters.",
            subdescription2:"4. Initialize a counter variable to keep track of the number of words.",
            subdescription3:"5. Iterate through the array of words and increment the counter for each word encountered.",
            subdescription4:"6. Display the total count of words to the user.",
            subdescription5:"You can further enhance the project by adding features such as:",
            subdescription6:"7. Ignoring common words or stop words.",
            subdescription7:"8. Providing statistics like the number of unique words or the frequency of each word.",
            subdescription8:"9. Implementing input validation to handle empty inputs or file errors.",
            subdescription9:"10. Adding a graphical user interface (GUI) for a more user-friendly experience.",
            link: "https://example.com/portfolio-demo"
          },
          {
            title: "TASK 3 - STUDENT MANAGEMENT SYSTEM (WEEK 3)",
            level: "Advance",
            description: "1.Create a Student class to represent individual students. Include attributes such as name, roll number, grade, and any other relevant details.",
             subdescription:"2.Implement a StudentManagementSystem class to manage the collection of students. Include methods to add a student, remove a student, search for a student, and display all students. ",
             subdescription1: "3 . Design the user interface for the Student Management System. This can be a console-based interface or a graphical user interface (GUI) using libraries like Swing or JavaFX.",
             subdescription2:"4. Implement methods to read and write student data to a storage medium, such as a file or a database.",
             subdescription3:"5. Allow users to interact with the Student Management System by providing options such as adding a new student, editing an existing student's information, searching for a student, displaying all students, and exiting the application.",
             subdescription4:"6. Implement input validation to ensure that required fields are not left empty and that the student data is in the correct format",
             link: "https://example.com/calculator-demo"
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

const Task = ({ title, level, description, subdescription,subdescription1,subdescription2,subdescription3,subdescription4,subdescription5,subdescription6, subdescription7,subdescription8,subdescription9,link }) => {
  return (
    <div className="task">
      <h3 className='task-question-title'>{title}</h3>
      <p><strong>{level}</strong></p>
      <p className='task-question-description'>{description}</p>
      <p className='task-question-subdescription'>{subdescription}</p>
      <p className='task-question-subdescription'>{subdescription1}</p>
      <p className='task-question-subdescription'>{subdescription2}</p>
      <p className='task-question-subdescription'>{subdescription3}</p>
      <p className='task-question-subdescription'>{subdescription4}</p>
      <p className='task-question-subdescription'>{subdescription5}</p>
      <p className='task-question-subdescription'>{subdescription6}</p>
      <p className='task-question-subdescription'>{subdescription7}</p>
      <p className='task-question-subdescription'>{subdescription8}</p>
      <p className='task-question-subdescription'>{subdescription9}</p>
      {/* <a className='task-demo-link' href={link} target="_blank" rel="noopener noreferrer">FOR DEMO CLICK HERE</a> */}
    </div>
  );
}

export default JavaDevelopmentTask;
