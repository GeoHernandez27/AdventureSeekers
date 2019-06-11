import React, { Component } from "react";

export default class experienceHike extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../../static/assets/images/featuredExperience/hike/heroBanner/hikeHero.jpg")}
            />
            <h1 className="header-background__title">The Narrows</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
                <span className="highlight">Lace Up</span> Your Boots
              </h2>
              <p>
                "The world-famous Zion Narrows is the narrowest section of Zion
                Canyon where you’ll be walking right in the Virgin River between
                two cliffs that reach heights of 2,000 feet. There are dozens of
                beautiful swimming holes, and at the narrowest point, the canyon
                is just a few feet wide. I highly recommend doing this as an
                overnight backpacking trip, where you can stay in one of the 12
                isolated campsites. The Narrows is prone to flash floods, so
                make sure you do your homework and check the weather forecast. "
                - <i>Kristen Bor, Barefoot Theory</i>
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/hike/gridImages/hikeSmall1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../../static/assets/images/featuredExperience/hike/gridImages/hikeSmall2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/hike/gridImages/hikeTall.jpg")}
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
                    src={require("../../../static/assets/images/locals/hikeGuide1.png")}
                  />
                </div>
                <div className=" guide-content">
                  <p>
                    "Zion is an awesome place even if you just visit and enjoy
                    the beauty, with a leisurely ride on the shuttle bus,
                    stopping off at the visitor centers and Lodge. You can take
                    easy leisurely strolls or even rent bicycles. But to really
                    appreciate the awesomeness, make sure to put on some hiking
                    shoes and explore."
                  </p>
                </div>
              </div>
              <div className="guides guide-two">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/hikeGuide2.png")}
                  />
                </div>
                <div className="guide-content">
                  <p>
                    "The Narrows is a unique hike. Much of the hike through the
                    canyon is through the stream which means you have to monitor
                    the weather and the water flow of the stream. There are
                    places which rent special hiking shoes and sticks to tackle
                    the stream. I highly recommend using both"
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
                    src={require("../../../static/assets/images/featuredExperience/hike/localSpots/angels.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Angel's Landing</h4>
                    <p>
                      This is the most famous trail in Zion National Park, and
                      it isn’t for the faint of heart. Hiking this section is a
                      thrilling and dizzying experience that requires slow,
                      deliberate steps while making use of the chains and guard
                      rails that have been installed by the Park Service. After
                      scrambling up 500 vertical feet, you reach the summit
                      where you are rewarded with spectacular 360 degree views
                      of the Canyon.
                    </p>
                  </div>
                </div>
                <div className="local-interests__section local-interest__two">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/hike/localSpots/observation.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Obvservation Point</h4>
                    <p>
                      While longer with greater elevation gain, you may find
                      that Observation Point is a less strenuous hike then
                      Angel’s Landing. It is also way less crowded and was my
                      favorite day hike we did in the Canyon. Luckily the trail
                      is wide and solid rock, so as long as you watch your
                      footing, there is nothing to worry about. rom here, you
                      tower above Angel’s Landing and have wide open views of
                      the Valley floor and both the East and West Canyon rims.
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
