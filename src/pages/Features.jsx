// Features.jsx

import React from 'react';
import '../styles/Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h1>Our Features</h1>
      <p>These are just some of the our features. By providing these features, We can make a valuable resource for students looking for internships.</p>
      <div className="feature">
        <h3><i class="fas fa-bell"></i>&nbsp; &nbsp;Email Notifications</h3>
        <p>The email notifications about important events, such as upcoming deadlines, new assignments, and changes to your schedule.</p>
      </div>
      <div className="feature">
        <h3><i class='fa fa-clone'></i>&nbsp; &nbsp;Simple Interface</h3>
        <p>The simplicity of the interface makes it easy to use and navigate. The information is presented in a clear and concise way.</p>
      </div>
      <div className="feature">
        <h3><i class='fas fa-users'></i>&nbsp; &nbsp;Large Community</h3>
        <p>We believe in networking to connect with other interns who are interested in the same things.</p>
      </div>
      <div className="feature">
        <h3><i class='fas fa-calendar-check'></i> &nbsp; &nbsp;Deadline Reminders</h3>
        <p>The reminders are sent to you in advance in our telegram channel and your email, so you have plenty of time to get your tasks done.</p>
      </div>
    </div>
  );
};

export default Features;
