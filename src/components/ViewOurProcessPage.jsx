import React from 'react';
import '../styles/ViewOurProcessPage.css';
import someoneConnectImage from '../assets/someone_connect_image.jpg';
import startInternshipImage from '../assets/start_internship_image.jpg';
import certificatesGoodiesImage from '../assets/certificates_goodies_image.jpg';

const ProcessStep = ({ stepNumber, title, description, image }) => {
  return (
    <div className="process-step">
      <div className="step-number">{stepNumber}</div>
      <div className="step-content">
        <img src={image} alt={`Step ${stepNumber}`} className="step-image" />
        <div className='process-title'>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const ViewOurProcessPage = () => {
  return (
    <div className="view-our-process">
      <h1>View Our Process</h1>
      <div className="process-container">
        <ProcessStep
          stepNumber={1}
          title="Connects With Us"
          description="Connect With us via our Website 'CampusValley'. Our team will contact you within few hours."
          image={someoneConnectImage}
        />
        <div className="line"></div>
        <ProcessStep
          stepNumber={2}
          title="Start Internship"
          description="Now , The Journey Begins  !. You will be given various exciting tasks to work upon resulting in growth of your skills.  "
          image={startInternshipImage}
        />
        <div className="line"></div>
        <ProcessStep
          stepNumber={3}
          title="Certificates and Goodies"
          description="After completing all the tasks , our team will review it. After successfull reviewing , we will be providing you Certificates and Goodies."
          image={certificatesGoodiesImage}
        />
      </div>
    </div>
  );
};

export default ViewOurProcessPage;
