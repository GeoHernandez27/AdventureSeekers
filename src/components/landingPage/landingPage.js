import React, { Component } from "react";
import HamburgerMenu from "../header/menu";




export default class LandingPage extends Component {
  render() {


    return (
      <div className="landing__container">
        <img className="main-logo" src="http://via.placeholder.com/150x150" />

        <HamburgerMenu className='hamburger-menu__wrapper'/>
        <div className="header-wrapper">

          <h1 className="header-text">Test Landing Page Text</h1>
          <span id='down'> &#8595;</span>
          {/* <div className="fullscreen-video-wrap"> */}
          {/* TO DO
        fix video bug */}
          {/* <video src='Cow.MP4' autoPlay={true} loop={true} muted></video> */}

          {/* <img src="http://via.placeholder.com/900x500" /> */}
          {/* </div> */}

        </div>


      </div>
    );
  }
}
