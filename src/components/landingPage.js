import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing__container">
        <div className="header-wrapper">
          <h1 className="header-text">
            Stop wishing, <br />start doing.
          </h1>
          <span id="down"> &#8595;</span>
        </div>
      </div>
    );
  }
}
