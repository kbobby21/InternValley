// PageWithBoxes.jsx

import React from 'react';
import '../styles/PageWithBoxes.css';

const PageWithBoxes = () => {
  return (
    <div className="boxes-container">
      <div className="box">
      <h2><i class="fa fa-coffee"></i></h2>
        <h3>Simplified Internships</h3>
        <p>Explore virtual internships in Web Dev, App Dev, Full Stack, ML, and Data Science; focused learning</p>
      </div>
      <div className="box">
      <h2><i class='fas fa-users'></i></h2>
        <h3>Build your Network</h3>
        <p>We believe in networking to connect with other interns who are interested in the same things.</p>
      </div>
      <div className="box">
      <h2><i class="fa fa-certificate"></i></h2>
        <h3>Building Student Trust</h3>
        <p>We ensures your success and building a trusted platform for valuable learning experiences.</p>
      </div>
      <div className="box">
      <h2><i class="fa fa-rocket"></i></h2>
        <h3>Structured Learning</h3>
        <p>Enjoy growth-oriented internship at Bharat Intern, tailored for maximum skill development.</p>
      </div>
    </div>
  );
};

export default PageWithBoxes;
