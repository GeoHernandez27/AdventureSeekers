import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import MainPage from "./mainPage";
import errorPage from "./error";
import experienceTestOne from "./experienceTest";
import HamburgerMenu from "./header/menu";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

        <HamburgerMenu className='hamburger-menu__wrapper'/>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/testOne" component={experienceTestOne} />

            <Route component={errorPage} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
