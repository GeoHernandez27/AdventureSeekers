import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="featured-experiences__wrapper">
          <h1 className="featured-experiences-header">Featured Experiences</h1>
          {/* TO DO */}
          {/* Build out featured experiences full section*/}

          <section className="horizontal-scroll">
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 1</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Test Activity</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 {/* <button className='discoverButton' component={ NavLink } to={'/testOne'}>Discover</button> */}
                 <NavLink className='discoverButton' to={'/testOne'}>Discover</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 2</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Test Activity</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <button className='discoverButton'>Discover</button>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 3</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Test Activity</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <button className='discoverButton'>Discover</button>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 4</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Test Activity</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <button className='discoverButton'>Discover</button>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 5</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Test Activity</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <button className='discoverButton'>Discover</button>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 6</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Test Activity</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <button className='discoverButton'>Discover</button>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 7</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Test Activity</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <button className='discoverButton'>Discover</button>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 8</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Test Activity</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <button className='discoverButton'>Discover</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
