import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/CourseOffer.css";
import WebDevelopmentImage from "../assets/WD.png";
import DataScienceImage from "../assets/DS.png";
import PythonDevelopmentImage from "../assets/PD.png";
import JavaDevelopmentImage from "../assets/JD.png";
import AppDevelopmentImage from "../assets/AD.png";
import GraphicDesigningImage from "../assets/GD.png";
import MachineLearningImage from "../assets/ML.png";
import CPPImage from "../assets/CPP.png";

const CoursesOffered = () => {
  const coursesOffered = [
    {
      id: 1,
      imageUrl: WebDevelopmentImage,
      title: "Web Development",
      para: "Are you ready to embark on an greatful journey into the realm of web development? Join our Web Development program and unlock the power to build the future of the internet.",
    },
    {
      id: 2,
      imageUrl: DataScienceImage,
      title: "Data Science",
      para: "Unleash the power of data. Dive into the world of Data Science and uncover hidden insights. Join our program and become a data-driven problem solver and innovator.",
    },
    {
      id: 3,
      imageUrl: PythonDevelopmentImage,
      title: "Python Development",
      para: "Unleash the power of Python. Dive into the world of coding and innovation with our Python Development program. Transform ideas into reality with the possibilities.",
    },
    {
      id: 4,
      imageUrl: JavaDevelopmentImage,
      title: "Java Development",
      para: "Unlock the potential of Java. Join our Java Development program and embark on a transformative journey to create robust, scalable, and cutting-edge software solutions. Elevate your coding skills today.",
    },
    {
      id: 5,
      imageUrl: AppDevelopmentImage,
      title: "App Development",
      para: "Shape the future with Android. Build innovative mobile experiences and reach millions of users. Join our Android App Development program and unleash your creativity in the world of mobile technology.",
    },
    {
      id: 6,
      imageUrl: GraphicDesigningImage,
      title: "UI/UX Design",
      para: "Unleash your creativity. Dive into the world of UI/UX and bring visual masterpieces to life. Join our program and become a visual storyteller and design innovator.",
    },
    {
      id: 7,
      imageUrl: CPPImage,
      title: "C++ Development",
      para: "Embark on a journey of C++ mastery with our internship program, where innovation meets code. Join us to unlock the power of C++ and craft software solutions that shape the future.",
    },
    {
      id: 8,
      imageUrl: MachineLearningImage,
      title: "Machine Learning",
      para: "Dive into the realm of machine learning with our internship program, where theory meets practice in crafting intelligent algorithms. Join us to explore the endless possibilities of AI and shape the future of technology.",
    },
  ];

  return (
    <div className="courses-offered-container1" id="courses-offered">
      <h2>Courses Offered</h2>
      <p>Discover a World of Possibilities: Join our Virtual Programs for Boundless Learning!</p>
      <div className="courses-offered">
        {coursesOffered.map((course) => (
          <Link key={course.id} to={`/service`} className="course-link"> {/* Wrap each card with Link */}
            <div className="course">
              <div className="course-img">
                <img src={course.imageUrl} alt={course.title} />
                <h3>{course.title}</h3>
              </div>
              <p>{course.para}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesOffered;
