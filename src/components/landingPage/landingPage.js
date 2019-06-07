import React, { Component } from "react";
// import HamburgerMenu from "../header/menu";




export default class LandingPage extends Component {
  render() {


    return (
      <div className="landing__container">
        <img className="main-logo" src="http://via.placeholder.com/150x150" />

        
        <div className="header-wrapper">

          <h1 className="header-text">Test Landing Page Text</h1>
          <span id='down'> &#8595;</span>
  
          {/* TO DO
        fix video bug 
        add anchor tags for hamburger menu items
        */}


        </div>


      </div>
    );
  }
}
