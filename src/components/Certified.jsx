import React from "react";
import "../styles/Certificate.css";
import WebDevelopmentImage from "../assets/MSME.png";
import DataScienceImage from "../assets/MII.png";
// import PythonDevelopmentImage from "../assets/PD.png";
// import JavaDevelopmentImage from "../assets/JD.png";
// import AppDevelopmentImage from "../assets/AD.png";
// import GraphicDesigningImage from "../assets/GD.png";

const Certified = () => {
  const certificate = [
    {
      id: 1,
      imageUrl: WebDevelopmentImage,
    },
    {
      id: 2,
      imageUrl: DataScienceImage,
    },
    // {
    //   id: 3,
    //   imageUrl: PythonDevelopmentImage,
    // },
    // {
    //   id: 4,
    //   imageUrl: JavaDevelopmentImage,
    // },
    // {
    //   id: 5,
    //   imageUrl: AppDevelopmentImage,
    // },
    // {
    //   id: 6,
    //   imageUrl: GraphicDesigningImage,
    // },
  ];

  return (
    <div className="certificate-container" id="certificate">
    <h2>Certified and Registered In</h2>
      <div className="certificate-offered">
        {certificate.map((course) => (
          <div key={course.id} className="certificate-content">
            <div className="course-img">
              <img src={course.imageUrl} alt={`Course ${course.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certified;
