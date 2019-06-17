import React, { Component } from "react";

export default class FeaturedMedia extends Component {
  render() {
    return (
      <div className="featured-media__container">
        <h1 className="media-header">Featured In...</h1>
        <div className="featured-media__wrapper">
          <div className="featured-media__main">
            <h2 className='main-media__title'>Outside Magazine</h2>
            <img
              className="media-main_image"
              src={require("../../static/assets/images/featuredMedia/outsideMag.jpg")}
            />
            {/* <h3>Article Title</h3> */}
            {/* https://www.outsideonline.com/2382426/moab-utah-travel-guide-hotels-trails-biking */}
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
              <button className="visitButton-large">VISIT SITE</button>
            </div>
          </div>
          <div className="featured-media__small">
            <h2 className='small-media__title'>Lonely Planet</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/lonelyP.jpg")}
            />
            {/* <h3>Article Title</h3> */}

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
              <button className="visitButton">VISIT SITE</button>
              {/* https://www.lonelyplanet.com/usa/southwest/utah/travel-tips-and-articles/gearheads-guide-to-canyoneering-in-utah/40625c8c-8a11-5710-a052-1479d276960c */}
            </div>
          </div>
          <div className="featured-media__small">
            <h2 className='small-media__title'>Ski Magazine</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/skiMag.jpg")}
            />
            {/* <h3>Article Title</h3> */}
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
              <button className="visitButton">VISIT SITE</button>
              {/* https://www.skimag.com/ski-resort-life/why-you-should-ski-solitude-mountain-resort */}
            </div>
          </div>
          <div className="featured-media__small">
            <h2 className='small-media__title'>Bike Magazine</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/bikeMag.jpg")}
            />
            {/* <h3>Article Title</h3> */}
            <div className="overlay">
              <div className="content-text-small">
                <h3 className="content-text__small-header">Slow Roll</h3>
                <p className="content-text__small-summary">
                  Southwest Utah's rise to riding fame
                </p>
              </div>
              <button className="visitButton">VISIT SITE</button>
              {/* https://www.bikemag.com/features/originals/slow-roll/ */}
            </div>
          </div>
          <div className="featured-media__small">
            <h2 className='small-media__title'>Climbing Magazine</h2>
            <img
              className="media-small_image"
              src={require("../../static/assets/images/featuredMedia/climbMag.jpg")}
            />
            {/* <h3>Article Title</h3> */}
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
              <button className="visitButton">VISIT SITE</button>
              {/* https://www.climbing.com/places/it-starts-at-impossible-american-fork-canyon-and-the-birth-of-americas-steep-revolution/ */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
