import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import MainPage from "./mainPage";
import errorPage from "./error";
import HamburgerMenu from "./header/menu";

import experienceRockClimb from "./experiences/rockExperience";
import experienceHike from "./experiences/hikeExperience";
import experienceMountainBike from "./experiences/mountainBikeExperience";
import experienceMountaineering from "./experiences/mountaineeringExperience";
import experiencePaddle from "./experiences/paddleExperience";
import experienceRiver from "./experiences/riverExperience";
import experienceRoadBike from "./experiences/roadBikeExperience";
import experienceSki from "./experiences/skiExperience";
import ScrollToTop from "./scrollToTop";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HamburgerMenu className="hamburger-menu__wrapper" />
          <ScrollToTop>
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/rockClimb" component={experienceRockClimb} />
              <Route path="/hike" component={experienceHike} />
              <Route path="/mountainBike" component={experienceMountainBike} />
              <Route
                path="/mountaineering"
                component={experienceMountaineering}
              />
              <Route path="/paddle" component={experiencePaddle} />
              <Route path="/river" component={experienceRiver} />
              <Route path="/roadBike" component={experienceRoadBike} />
              <Route path="/ski" component={experienceSki} />

              <Route component={errorPage} exact />
            </Switch>
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}
