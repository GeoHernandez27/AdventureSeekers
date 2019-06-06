import React, { Component } from "react";

export default class FeaturedMedia extends Component {
  render() {
    return (
      <div className="featured-media__container">
        <h1 className="media-header">Featured In...</h1>
        <div className="featured-media__wrapper">
          <div className="featured-media__main">
              <h2>Magazine title</h2>
            <img
              className="media-main_image"
              src={require("../../static/assets/images/featuredMedia/mainTest.jpg")}
            />
            <h3>Article Title</h3>
            <div className='overlay'>
                <p className='content-text-main'>Content Summary goes here</p>
                <button className='visitButton-large'>Visit Site</button>
            </div>
          </div>
          <div className="featured-media__small">
          <h2>Magazine title</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/small1.jpg")}
            />
            <h3>Article Title</h3>
            <div className='overlay'>
                <p className='content-text-small'>Content Summary goes here</p>
                <button className='visitButton'>Visit Site</button>
            </div>
          </div>
          <div className="featured-media__small">
          <h2>Magazine title</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/small2.jpg")}
            />
            <h3>Article Title</h3>
            <div className='overlay'>
                <p className='content-text-small'>Content Summary goes here</p>
                <button className='visitButton'>Visit Site</button>
            </div>
          </div>
          <div className="featured-media__small">
          <h2>Magazine title</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/small3.jpg")}
            />
            <h3>Article Title</h3>
            <div className='overlay'>
                <p className='content-text-small'>Content Summary goes here</p>
                <button className='visitButton'>Visit Site</button>
            </div>
          </div>
          <div className="featured-media__small">
          <h2>Magazine title</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/small4.jpg")}
            />
            <h3>Article Title</h3>
            <div className='overlay'>
                <p className='content-text-small'>Content Summary goes here</p>
                <button className='visitButton'>Visit Site</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
