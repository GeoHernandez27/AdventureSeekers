import React, { Component } from "react";

export default class experienceRiver extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../../static/assets/images/featuredExperience/river/heroBanner/riverHero.jpg")}
            />
            <h1 className="header-background__title">Green River</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
                <span className="highlight">Sunburns</span> and sore muscles
              </h2>
              <p>
                "The desert rivers of the Southwest are at their nicest in the
                fall. Unlike the spring, flows are mellow, and between the
                summer and winter the brutal Utah temperature gradient evens
                out. The days stop being scorchingly hot, and the nights aren’t
                freezing. Desolation and Grey canyons, which sit back-to-back on
                the Green River and contain 86 miles of Class II-III whitewater,
                are perfect for beginner kayakers or rafters who want a little
                more than a float trip. The Bureau of Land Management
                administers permits through a lottery and keeps group sizes
                small, so the river is nearly unpopulated. John Wesley Powell
                and his crew named the first canyon Desolation because they ran
                it after nearly dying in Lodore Canyon, directly upstream. Aside
                from the whitewater, Deso and Grey have endless opportunities
                for side hikes and canyon exploration, as well as a lot of good,
                unvandalized petroglyphs."-{" "}
                <i>Heather Hansman, Outside Magazine</i>
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/river/gridImages/riverSmall1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../../static/assets/images/featuredExperience/river/gridImages/riverSmall2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/river/gridImages/riverTall.jpg")}
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
                    src={require("../../../static/assets/images/locals/riverGuide1.png")}
                  />
                </div>
                <div className=" guide-content">
                  <p>
                    "If you're thinking of a Grand Canyon trip but can't make
                    that for some reason, consider this float instead. The
                    canyons are incredible, the hiking is great, the views
                    spectacular, and the crowds non-existent."
                  </p>
                </div>
              </div>
              <div className="guides guide-two">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/riverGuide2.png")}
                  />
                </div>
                <div className="guide-content">
                  <p>
                    "Late fall is still the best time to go, in my opinion: The nights are frosty and there may be patches of snow in the shade, but the days are
                    warm and (most of the time) you can get by wearing just a
                    T-shirt and long pants."
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
                    src={require("../../../static/assets/images/featuredExperience/river/localSpots/gems.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>The hidden gems</h4>
                    <p>
                      Keep your eyes peeled for the canyon’s abundant wildlife,
                      including wild horses, desert bighorn sheep, mule deer,
                      elk, mountain lions and black bear. Take advantage of the
                      many hiking opportunities to view native american rock
                      art, skiffs abandoned by early river-explorers, abandoned
                      ranches, including one where Butch Cassidy’s Wild Bunch
                      often swapped horses with owner, Jim McPherson, and even a
                      prohibition-era whiskey outpost.
                    </p>
                  </div>
                </div>
                <div className="local-interests__section local-interest__two">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/river/localSpots/flaming.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Flaming Gorge</h4>
                    <p>
                      Deep channels carved into rugged landscapes contain
                      stained-glass waters that capture the play of light,
                      shadow and color of the rising sun. Varying water
                      temperatures through the seasons create unique scenarios
                      for anglers after trophy lake trout and a number of other
                      fish species. "
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
