import React, { Component } from "react";

export default class experienceSki extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../../static/assets/images/featuredExperience/ski/heroBanner/skiHero.jpg")}
            />
            <h1 className="header-background__title">Ski Mt Superior</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
                What Goes<span className="highlight">Up...</span>
              </h2>
              <p>
                Mount Superior is one of the most iconic skiing mountains in the
                western United States. This mountain serves as the backdrop for
                many famous ski photographs, as well as for skiers and boarders
                in the world-famous Alta Ski Resort and Snowbird Resort.
                Backcountry skiing Mount Superior is a serious feat, requiring
                more than 3,000 feet of climbing, some of which is exposed and
                rocky. There are two main ski descents off of the summit of
                Superior: Cardiac Bowl and the South Face. The South Face is
                incredibly steep, and it is often compared to an Alaskan
                heli-ski line. Cardiac Bowl is more mellow and opens up into a
                very large open bowl that is perfect for powder skiing.-{" "}
                <i>Calvin Perfall, Outdoor Project</i>
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/ski/gridImages/skiSmall1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../../static/assets/images/featuredExperience/ski/gridImages/skiSmall2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/ski/gridImages/skiTall.jpg")}
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
                    src={require("../../../static/assets/images/locals/skiGuide1.png")}
                  />
                </div>
                <div className=" guide-content">
                  <p>
                    "Big mountain views. Superb skiing. Significant vertical. A
                    Wasatch classic."
                  </p>
                </div>
              </div>
              <div className="guides guide-two">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/skiGuide2.png")}
                  />
                </div>
                <div className="guide-content">
                  <p>
                    "In backcountry skiing, starting before dawn is essential.
                    Not only is it safer but experiencing sunrise amongst snow
                    covered peaks is other-worldly."
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
                    src={require("../../../static/assets/images/featuredExperience/ski/localSpots/cliff.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>The Snowbird Cliff Spa</h4>
                    <p>
                      The Cliff Spa has a rooftop pool and hot tub with sensual
                      surroundings, radiant heated decks and gas-fed fire pits
                      with increased seating capacity. With incredible views and
                      a eucalyptus infused environment, the solarium is the
                      perfect place to relax.
                    </p>
                  </div>
                </div>
                <div className="local-interests__section local-interest__two">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/ski/localSpots/beer.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Bohemian Brewery</h4>
                    <p>
                      Old-world fare paired with carefully crafted European
                      style lagers brewed on-site and served in the
                      cottage-style restaurant filled with laughter and good
                      times.More than half the tables at Bohemian are communal
                      with large benches, so that on a busy night, customers
                      can't help but get to know their neighbor.
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
