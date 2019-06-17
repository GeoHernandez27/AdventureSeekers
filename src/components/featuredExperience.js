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
                <h2 className='card-title'>Desert <br></br> Towers</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/rockCard.jpg")}/>
                {/* <div className='card-content__description'>
                    <h3>Rock Climbing</h3>    
                    <h4>Moab and Castle Valley</h4>
                 </div> */}
                 {/* <button className='discoverButton' component={ NavLink } to={'/testOne'}>Discover</button> */}
                 <NavLink className='discoverButton' to={'/rockClimb'}>EXPLORE</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2 className='card-title'>The <br></br> Narrows</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/hikingCard.jpg")}/>
                {/* <div className='card-content__description'>
                    <h3>Hiking</h3>    
                    <h4>Zion's National Park</h4>
                 </div> */}
                 <NavLink className='discoverButton' to={'/hike'}>EXPLORE</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2 className='card-title'>The<br></br> Whole <br></br> Enchilada</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/mountainBCard.jpg")}/>
                {/* <div className='card-content__description'>
                    <h3>Mountain Biking</h3>    
                    <h4>La Sal, CO to Moab, UT</h4>
                </div> */}
                 <NavLink className='discoverButton' to={'/mountainBike'}>EXPLORE</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2 className='card-title'>Bridal<br></br> Veil<br></br> Falls</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/mountaineeringCard.jpg")}/>
                {/* <div className='card-content__description'>
                    <h3>Ice Climbing</h3>    
                    <h4>Provo Canyon</h4>
                 </div> */}
                 <NavLink className='discoverButton' to={'/mountaineering'}>EXPLORE</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2 className='card-title'>Paddle <br></br>Lake <br></br>Powell</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/paddleCard.jpg")}/>
                {/* <div className='card-content__description'>
                    <h3>Stand Up Paddleboard</h3>    
                    <h4>Lake Powell</h4>
                 </div> */}
                 <NavLink className='discoverButton' to={'/paddle'}>EXPLORE</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2 className='card-title'>Green <br></br>River</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/riverCard.jpg")}/>
                {/* <div className='card-content__description'>
                    <h3>Rafting</h3>    
                    <h4>Desolation Canyon</h4>
                 </div> */}
                 <NavLink className='discoverButton' to={'/river'}>EXPLORE</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2 className='card-title'>Mirror<br></br> Lake <br></br> Highway </h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/roadBCard.jpg")}/>
                {/* <div className='card-content__description'>
                    <h3>Road Bike</h3>    
                    <h4>Kamas-Park City</h4>
                 </div> */}
                 <NavLink className='discoverButton' to={'/roadBike'}>EXPLORE</NavLink>
              </div>
            </div>
            <div className="card">
              
              <div className="card-content">
                <h2 className='card-title'>Ski <br></br> Mt <br></br>Superior</h2>
                <img
                src={require("../../static/assets/images/featuredExperience/card/skiCard.jpg")}/>
                {/* <div className='card-content__description'>
                    <h3>Backcountry Skiing</h3>    
                    <h4>Little CottonWood Canyon</h4>
                 </div> */}
                 <NavLink className='discoverButton' to={'/ski'}>EXPLORE</NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
