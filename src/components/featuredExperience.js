import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="featured-experiences__wrapper">
          <h1 className="featured-experiences-header">Featured Experiences</h1>
          <section className="horizontal-scroll">
            <div className="experienceCard">
              <div className="card-content">
                <h2 className="card-title">
                  Desert <br /> Towers
                </h2>
                <img
                  src={require("../../static/assets/images/featuredExperience/card/rockCard.jpg")}
                />
                <NavLink className="discoverButton" to={"/rockClimb"}>
                  EXPLORE
                </NavLink>
              </div>
            </div>
            <div className="experienceCard">
              <div className="card-content">
                <h2 className="card-title">
                  The <br /> Narrows
                </h2>
                <img
                  src={require("../../static/assets/images/featuredExperience/card/hikingCard.jpg")}
                />
                <NavLink className="discoverButton" to={"/hike"}>
                  EXPLORE
                </NavLink>
              </div>
            </div>
            <div className="experienceCard">
              <div className="card-content">
                <h2 className="card-title">
                  The<br /> Whole <br /> Enchilada
                </h2>
                <img
                  src={require("../../static/assets/images/featuredExperience/card/mountainBCard.jpg")}
                />
                <NavLink className="discoverButton" to={"/mountainBike"}>
                  EXPLORE
                </NavLink>
              </div>
            </div>
            <div className="experienceCard">
              <div className="card-content">
                <h2 className="card-title">
                  Bridal<br /> Veil<br /> Falls
                </h2>
                <img
                  src={require("../../static/assets/images/featuredExperience/card/mountaineeringCard.jpg")}
                />
                <NavLink className="discoverButton" to={"/mountaineering"}>
                  EXPLORE
                </NavLink>
              </div>
            </div>
            <div className="experienceCard">
              <div className="card-content">
                <h2 className="card-title">
                  Paddle <br />Lake <br />Powell
                </h2>
                <img
                  src={require("../../static/assets/images/featuredExperience/card/paddleCard.jpg")}
                />
                <NavLink className="discoverButton" to={"/paddle"}>
                  EXPLORE
                </NavLink>
              </div>
            </div>
            <div className="experienceCard">
              <div className="card-content">
                <h2 className="card-title">
                  Green <br />River
                </h2>
                <img
                  src={require("../../static/assets/images/featuredExperience/card/riverCard.jpg")}
                />

                <NavLink className="discoverButton" to={"/river"}>
                  EXPLORE
                </NavLink>
              </div>
            </div>
            <div className="experienceCard">
              <div className="card-content">
                <h2 className="card-title">
                  Mirror<br /> Lake <br /> Highway{" "}
                </h2>
                <img
                  src={require("../../static/assets/images/featuredExperience/card/roadBCard.jpg")}
                />

                <NavLink className="discoverButton" to={"/roadBike"}>
                  EXPLORE
                </NavLink>
              </div>
            </div>
            <div className="experienceCard">
              <div className="card-content">
                <h2 className="card-title">
                  Ski <br /> Mt <br />Superior
                </h2>
                <img
                  src={require("../../static/assets/images/featuredExperience/card/skiCard.jpg")}
                />

                <NavLink className="discoverButton" to={"/ski"}>
                  EXPLORE
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
