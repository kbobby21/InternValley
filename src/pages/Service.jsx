import React, { useEffect, useState } from "react";
import "../styles/Service.css";
import WebDevelopmentImage from "../assets/WD.png";
import DataScienceImage from "../assets/DS.png";
import PythonDevelopmentImage from "../assets/PD.png";
import JavaDevelopmentImage from "../assets/JD.png";
import AppDevelopmentImage from "../assets/AD.png";
import GraphicDesigningImage from "../assets/GD.png";
import MachineLearningImage from "../assets/ML.png";
import CPPImage from "../assets/CPP.png";
import Layout from "../components/Layout/Layout";

const Service = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setAnimated(true);
  }, []);
  const coursesOffered = [
    {
      id: 1,
      imageUrl: WebDevelopmentImage,
      title: "Web Development",
      position: "Web Developer",
      duration: "1 Month",
      location: "Remote",
      applyLink: "https://forms.gle/gynw5xkJcXLb5eUb6",
    },
    {
      id: 2,
      imageUrl: DataScienceImage,
      title: "Data Science",
      position: "Data Scientist",
      duration: "1 Month",
      location: "Remote",
      applyLink: "https://forms.gle/gynw5xkJcXLb5eUb6",
    },
    {
      id: 3,
      imageUrl: PythonDevelopmentImage,
      title: "Python Development",
      position: "Python Developer",
      duration: "1 Month",
      location: "Remote",
      applyLink: "https://forms.gle/gynw5xkJcXLb5eUb6",
    },
    {
      id: 4,
      imageUrl: JavaDevelopmentImage,
      title: "Java Development",
      position: "Java Developer",
      duration: "1 Month",
      location: "Remote",
      applyLink: "https://forms.gle/gynw5xkJcXLb5eUb6",
    },
    {
      id: 5,
      imageUrl: AppDevelopmentImage,
      title: "App Development",
      position: "Android Developer",
      duration: "1 Month",
      location: "Remote",
      applyLink: "https://forms.gle/gynw5xkJcXLb5eUb6",
    },
    {
      id: 6,
      imageUrl: GraphicDesigningImage,
      title: "UI/UX Design",
      position: "Graphic Designer",
      duration: "1 Month",
      location: "Remote",
      applyLink: "https://forms.gle/gynw5xkJcXLb5eUb6",
    },
    {
      id: 7,
      imageUrl: CPPImage,
      title: "C++ Development",
      position: "C++ Developer",
      duration: "1 Month",
      location: "Remote",
      applyLink: "https://forms.gle/gynw5xkJcXLb5eUb6",
    },
    {
      id: 8,
      imageUrl: MachineLearningImage,
      title: "Machine Learning",
      position: "ML Developer",
      duration: "1 Months",
      location: "Remote",
      applyLink: "https://forms.gle/gynw5xkJcXLb5eUb6",
    },
  ];

  return (
    <Layout>
      <div
        className={`courses-offered-container ${animated ? "animate" : ""}`}
        id="courses-offered"
      >
        <div className="course-header">
          <h2>Courses Offered</h2>
          <p>
            {" "}
            Discover a World of Possibilities: Join our Virtual Programs for
            Boundless Learning!
          </p>
        </div>

        <div className="courses-offered">
          {coursesOffered.map((course) => (
            <div key={course.id} className="course">
              <div className="course-img">
                <img src={course.imageUrl} alt={course.title} />
                <h3>{course.title}</h3>
              </div>
              <p>
                <strong>Position:</strong> {course.position}
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Location:</strong> {course.location}
              </p>
              <a
                href={course.applyLink}
                className="apply-now-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Service;
