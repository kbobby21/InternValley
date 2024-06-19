import React, { Component } from "react";
import HeroSection from "./Hero/Hero";
import CoursesOffered from "./CourseOffer";
import Testimonial from "./Reviews";
import Certified from "./Certified";
import ViewOurProcessPage from "./ViewOurProcessPage";
import Layout from "./Layout/Layout";
import CommunityPage from "../pages/CommunityPage";
import Features from "../pages/Features";
import PageWithBoxes from "../pages/PageWithBoxes";
// import Spiner from "./Spinner";

class MainHome extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HeroSection />
          <PageWithBoxes/>
          <CoursesOffered />
          <Features/>
          <ViewOurProcessPage />
          <CommunityPage/>
          <Certified />
          <Testimonial />
          {/* <Spiner/> */}
        </Layout>
      </div>
    );
  }
}

export default MainHome;
