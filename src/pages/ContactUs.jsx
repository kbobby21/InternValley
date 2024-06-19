import React from "react";
import "../styles/ContactUs.css";
import Layout from "../components/Layout/Layout";

function ContactUs() {
  return (
    <Layout>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p className="contact-us-p">
          InternValley is a project-based learning organization dedicated to
          shaping a strong tech future for all developers. We believe that
          practical knowledge is key to success in the tech industry, and our
          aim is to help individuals develop the personal and professional
          skills they need to excel in their careers. Our programs are designed
          for students who are interested in starting a career in a technical
          field but lack basic knowledge. InternValley, we support students in
          acquiring new skills by providing opportunities for hands-on learning
          through live projects and real-world examples.
        </p>
        <div className="contact-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdpAHq50-4b0Tgc1EKVHUa76PxzG33Y-zY-viUOjmPHINwkTg/viewform?usp=sf_link"
            title="Feedback Form"
            className="form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
