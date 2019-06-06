import React, { Component } from "react";

export default class LocalComponent extends Component {
  render() {
    return (
      <div className='local-user-container'>
        <div className="user-wrapper">
          <div className="user-image">
          <img
                src={require("../../static/assets/images/locals/local1.png")}/> 
          
          </div>
          <div className="user-text__wrapper">
            <div className="user-text__content">
              <h4>John Smith</h4>
              <p>
              "Ssimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " 
              </p>
            </div>
          </div>
        </div>
        <div className="user-wrapper">
          <div className="user-image">
          <img
                src={require("../../static/assets/images/locals/local1.png")}/> 
          
          </div>
          <div className="user-text__wrapper">
            <div className="user-text__content"><h4>John Smith</h4>
              <p>
              "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  "
              </p></div>
          </div>
        </div>
        <div className="user-wrapper">
          <div className="user-image">
          <img
                src={require("../../static/assets/images/locals/local1.png")}/> 
          
          </div>
          <div className="user-text__wrapper">
            <div className="user-text__content"><h4>John Smith</h4>
              <p>
              "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
              </p></div>
          </div>
        </div>
        <div className="user-wrapper">
          <div className="user-image">
          <img
                src={require("../../static/assets/images/locals/local1.png")}/> 
          
          </div>
          <div className="user-text__wrapper">
            <div className="user-text__content"><h4>John Smith</h4>
              <p>
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, "
              </p></div>
          </div>
        </div>
      </div>
      
    );
  }
}
