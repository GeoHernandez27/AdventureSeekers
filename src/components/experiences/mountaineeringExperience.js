import React, { Component } from "react";

export default class experienceMountaineering extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../../static/assets/images/featuredExperience/ice/heroBanner/iceHero.jpg")}
            />
            <h1 className="header-background__title">Bridal Veil Falls</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
                <span className="highlight">Screaming</span> Barfees
              </h2>
              <p>
                "Winter in Utah usually conjures images of fresh powder,
                bluebird ski days and hordes of ice fishermen, all enjoying the
                state’s myriad activities. But when the snow flies and the lakes
                freeze, a small group of Utahns are anxiously awaiting another,
                more inconspicuous wintertime activity — ice climbing.Despite
                the short season, Utah actually has some of the nation’s best
                ice-climbing opportunities. Bridal Veil Falls, the popular
                waterfall in Provo Canyon, offers spectacular ice climbing.
                There’s also another route, dubbed Stairway to Heaven, located
                near Bridal Veil Falls, that receives plenty of ice-climbing
                attention." -<i>Spencer Durrant, Standard Examiner Magazine</i>
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/ice/gridImages/iceSmall1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../../static/assets/images/featuredExperience/ice/gridImages/iceSmall2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/ice/gridImages/iceTall.jpg")}
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
                    src={require("../../../static/assets/images/locals/iceG1.png")}
                  />
                </div>
                <div className=" guide-content">
                  <p>
                    "The Utah version of this climb is considerably more serious
                    than its counterpart by the same name in Colorado. Comprised
                    of five good pitches of fat curtain ice followed by two
                    pitches of mixed climbing of increasing technical
                    difficulty, this climb can provide a challenge for almost
                    all ability levels, depending on how high you decide to go.
                    "
                  </p>
                </div>
              </div>
              <div className="guides guide-two">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/iceG2.png")}
                  />
                </div>
                <div className="guide-content">
                  <p>
                    "While this famous climb has multiple pitches, the first one
                    is easy to set up a top rope at and there are a few bolts on
                    this ledge to set multiple routes. Because of its
                    accessibility and reliability, be prepared to sit and watch
                    other climbers for awhile, which is a great way to learn
                    technique from others."
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
                    src={require("../../../static/assets/images/featuredExperience/ice/localSpots/snowshoe.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Snowshoeing at the Sundance</h4>
                    <p>
                      It is a cozier snowshoeing experience than you'll usually
                      find on the nearby Forest Service trails. The trails are
                      winding and narrow, weaving with the Nordic skiing trails
                      (please don't snowshoe on or otherwise mess up the Nordic
                      grooming). The routes are clearly marked with numbers to
                      match the trail map (I got sidetracked gawking at Timp and
                      took a wrong turn anyway), and you can mix and match them
                      in accordance with your time and fitness level.
                    </p>
                  </div>
                </div>
                <div className="local-interests__section local-interest__two">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/ice/localSpots/virtualReality.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Virtual Experience Arcade</h4>
                    <p>
                      If you haven’t tried out virtual reality yet, you are
                      missing out. The saying “perception is reality” takes on a
                      whole new level of meaning. It’s tough to say what the
                      best games are because they are constantly adding new ones
                      to there already big catalog. The people that work there
                      are super helpful in getting you setup, especially if it’s
                      your first time. You can play things like virtual dodge
                      ball to a James Bond like game where waves of robots are
                      trying to kill you and you have an arsenal of weapons to
                      stop them.
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
