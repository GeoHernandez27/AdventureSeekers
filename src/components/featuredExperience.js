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
                <h2>Desert Towers</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Rock Climbing</h3>    
                    <h4>Moab and Castle Valley</h4>
                 </div>
                 {/* <button className='discoverButton' component={ NavLink } to={'/testOne'}>Discover</button> */}
                 <NavLink className='discoverButton' to={'/rockClimb'}>Discover</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>The Narrows</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Hiking</h3>    
                    <h4>Zion's National Park</h4>
                 </div>
                 <NavLink className='discoverButton' to={'/hike'}>Discover</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>The Whole Enchilada</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Mountain Biking</h3>    
                    <h4>La Sal, CO to Moab, UT</h4>
                 </div>
                 <NavLink className='discoverButton' to={'/mountainBike'}>Discover</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Bridal Veil Falls</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Ice Climbing</h3>    
                    <h4>Provo Canyon</h4>
                 </div>
                 <NavLink className='discoverButton' to={'/mountaineering'}>Discover</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Paddle Lake Powell</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Stand Up Paddleboard</h3>    
                    <h4>Lake Powell</h4>
                 </div>
                 <NavLink className='discoverButton' to={'/paddle'}>Discover</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Green River</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Rafting</h3>    
                    <h4>Desolation Canyon</h4>
                 </div>
                 <NavLink className='discoverButton' to={'/river'}>Discover</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 7</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Road Bike</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <NavLink className='discoverButton' to={'/roadBike'}>Discover</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2>Experience 8</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/cardTest.jpg")}/>
                <div className='card-content__description'>
                    <h3>Skiing</h3>    
                    <h4>Location,XX</h4>
                 </div>
                 <NavLink className='discoverButton' to={'/ski'}>Discover</NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
