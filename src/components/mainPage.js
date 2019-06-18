import React, { Component } from "react";

import Experiences from "./featuredExperience";
import LocalTips from "./localTips";
import FeaturedMedia from "./featuredMedia";
import LandingPage from "./landingPage";

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page__container">
        <LandingPage />
        <Experiences />
        <LocalTips />
        <FeaturedMedia />
      </div>
    );
  }
}
