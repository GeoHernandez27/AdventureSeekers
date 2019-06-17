import React, { Component } from "react";

export default class FeaturedMedia extends Component {
  render() {
    return (
      <div className="featured-media__container">
        <h1 className="media-header">Featured In...</h1>
        <div className="featured-media__wrapper">
          <div className="featured-media__main">
            <h2 className="main-media__title">Outside Magazine</h2>
            <img
              className="media-main_image"
              src={require("../../static/assets/images/featuredMedia/outsideMag.jpg")}
            />

            <div className="overlay">
              <div className="content-text-main">
                <h3 className="content-text__main-header">
                  The Ultimate Moab, Utah Travel Guide
                </h3>
                <p className="content-text__main-summary">
                  Moab has come into its own as one of America’s great
                  multisport destinations. Here’s how to make the most out of a
                  visit, from pedaling its world-class singletrack to hiking its
                  famed national parks to rafting the Colorado River.
                </p>
              </div>
              <a
                className="visitButton-large"
                target="_blank"
                href="https://www.outsideonline.com/2382426/moab-utah-travel-guide-hotels-trails-biking"
              >
                VISIT SITE
              </a>
            </div>
          </div>
          <div className="featured-media__small">
            <h2 className="small-media__title">Lonely Planet</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/lonelyP.jpg")}
            />

            <div className="overlay">
              <div className="content-text-small">
                <h3 className="content-text__small-header">
                  Gearheads' guide to canyoneering in Utah
                </h3>
                <p className="content-text__small-summary">
                  Utah is perhaps the singular best spot on the planet for
                  canyoneering.
                </p>
              </div>
              <a
                className="visitButton"
                target="_blank"
                href="https://www.lonelyplanet.com/usa/southwest/utah/travel-tips-and-articles/gearheads-guide-to-canyoneering-in-utah/40625c8c-8a11-5710-a052-1479d276960c"
              >
                VISIT SITE
              </a>
            </div>
          </div>
          <div className="featured-media__small">
            <h2 className="small-media__title">Ski Magazine</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/skiMag.jpg")}
            />

            <div className="overlay">
              <div className="content-text-small">
                <h3 className="content-text__small-header">
                  Why You Should Ski Solitude Mountain Resort
                </h3>
                <p className="content-text__small-summary">
                  What happens when Deer Valley chic meets Solitude soul? Find
                  out this season.
                </p>
              </div>
              <a
                className="visitButton"
                target="_blank"
                href="https://www.skimag.com/ski-resort-life/why-you-should-ski-solitude-mountain-resort"
              >
                VISIT SITE
              </a>
            </div>
          </div>
          <div className="featured-media__small">
            <h2 className="small-media__title">Bike Magazine</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/bikeMag.jpg")}
            />

            <div className="overlay">
              <div className="content-text-small">
                <h3 className="content-text__small-header">Slow Roll</h3>
                <p className="content-text__small-summary">
                  Southwest Utah's rise to riding fame
                </p>
              </div>
              <a
                className="visitButton"
                target="_blank"
                href="https://www.bikemag.com/features/originals/slow-roll/"
              >
                VISIT SITE
              </a>
            </div>
          </div>
          <div className="featured-media__small">
            <h2 className="small-media__title">Climbing Magazine</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/climbMag.jpg")}
            />

            <div className="overlay">
              <div className="content-text-small">
                <h3 className="content-text__small-header">
                  It Starts at Impossible
                </h3>
                <p className="content-text__small-summary">
                  American Fork Canyon and the Birth of America’s Steep
                  Revolution
                </p>
              </div>
              <a
                className="visitButton"
                target="_blank"
                href="https://www.climbing.com/places/it-starts-at-impossible-american-fork-canyon-and-the-birth-of-americas-steep-revolution/"
              >
                VISIT SITE
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
