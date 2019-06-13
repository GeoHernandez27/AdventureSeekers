import React, { Component } from "react";

export default class experienceRoadBike extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../../static/assets/images/featuredExperience/roadBike/heroBanner/roadHero.jpg")}
            />
            <h1 className="header-background__title">Mirror Lake Highway</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
                Life <span className="highlight">Elevated</span>
              </h2>
              <p>
                "Starting at nearly 6,500 feet in Kamas, Utah, will tell you
                something about this ride. You've officially entered the cycling
                land of Utah: Life Elevated. A 30-mile climb along the Upper
                Provo River to about 10,700 feet at Bald Mountain Pass is ahead,
                meaning Mirror Lake Highway is a ride for serious climbers. With
                countless campgrounds and trailheads to high mountain lakes
                dotting this byway, cyclists may choose to set up camp along the
                way, and enjoy segments to test their lungs and legs at
                elevation. The road from the Wyoming state line to the summit is
                no less scenic, and keeps riders at a higher elevation. Watch
                for wildlife ranging from groundhogs to the majestic moose."-{" "}
                <i>Visit Utah</i>
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/roadBike/gridImages/roadSmall1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../../static/assets/images/featuredExperience/roadBike/gridImages/roadSmall2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/roadBike/gridImages/roadTall.jpg")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="guide-section-wrapper">
            <h2>
              What our locals <span className="highlight">think</span>
            </h2>
            <div className="guide-section-grid">
              <div className="guides guide-one">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/roadBGuide1.png")}
                  />
                </div>
                <div className=" guide-content">
                  <p>
                    "The Mirror Lake Hwy, out of Kamas, UT, is one of the most
                    scenic roads in Utah. It is a paved route that takes one
                    past beautiful high mountain lakes and stunning vistas. The
                    high point of the route, between two 11,500' peaks is over
                    10,600', has a popular turnout with views of the Unita
                    mountain range."
                  </p>
                </div>
              </div>
              <div className="guides guide-two">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/roadBGuide2.png")}
                  />
                </div>
                <div className="guide-content">
                  <p>
                    "Along the highway there are lots of places to pull off and
                    experience amazing view of the Uintah Mountain Range. The
                    Provo River falls are nice, and there are several small and
                    medium sized mountain lakes along the highway. Many hiking
                    trails start off the highway as well, and there is a network
                    of dirt roads if you want to get off the pavement."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="local-interests__wrapper">
            <h3>
              <span className="highlight">While you're there,</span> make sure
              to check out...
            </h3>
            <div className="local-interests-container">
              <div className="local-interests__cards">
                <div className="local-interests__section local-interest__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/roadBike/localSpots/parkCity.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Park City</h4>
                    <p>
                      As Utah's best-known ski town, Park City boasts a
                      small-community feel and is the perfect base for big-time
                      adventure. Whether you visit in summer or winter, the
                      historic mining town offers attractions for everyone, from
                      top-notch dining options to even bobsledding. That means
                      you don't have to be a skier or boarder to vacation in
                      Park City
                    </p>
                  </div>
                </div>
                <div className="local-interests__section local-interest__two">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/roadBike/localSpots/burgerFries.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Local eats</h4>
                    <p>
                      There is a secret restaurant located in Kamas called
                      Hi-Mountain Drug. They serve awesome hamburgers, hand-cut
                      fries, and old-fashioned milkshakes. It is definitely
                      worth a stop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
