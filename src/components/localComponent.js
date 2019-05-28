import React, { Component } from "react";

export default class LocalComponent extends Component {
  render() {
    return (
      <div>
        <div className="user-wrapper">
          <div className="user-image">User Image 1</div>
          <div className="user-text__wrapper">
            <div className="user-text__content">User Content goes here</div>
          </div>
        </div>
        <div className="user-wrapper">
          <div className="user-image">User Image 2</div>
          <div className="user-text__wrapper">
            <div className="user-text__content">User Content goes here</div>
          </div>
        </div>
        <div className="user-wrapper">
          <div className="user-image">User Image 3</div>
          <div className="user-text__wrapper">
            <div className="user-text__content">User Content goes here</div>
          </div>
        </div>
      </div>
      
    );
  }
}
