import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Hero.css";
// import HeroImage from "../../assets/banner6.gif";

function HeroSection() {
  useEffect(() => {
    const typed = new Typed("#auto-type", {
      strings: [
        "We are InternValley !",
        "Discover endless opportunities at InternValley!",
        "Embark on a transformative journey to unlock your tech prowess with us!",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    // Clean up function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span id="auto-type"></span>
        </h1>
        <p>Kickstart your Journey with InternValley !</p>

        <a href="/service" className="btn-link">
          <button className="btn-main">Get Started</button>
        </a>
      </div>
      <div className="hero-image">
        <img
          src={
            "https://ucarecdn.com/8c0cb74f-d758-4a63-adaf-bc011a7b2755/-/preview/1000x1000/"
          }
          alt="Hero"
        />
      </div>
    </section>
  );
}

export default HeroSection;
