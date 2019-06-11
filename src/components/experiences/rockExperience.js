import React, { Component } from "react";

export default class experienceRockClimb extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../../static/assets/images/featuredExperience/rockClimb/heroBanner/rockHero.jpg")}
            />
            <h1 className="header-background__title">Desert Towers</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
               An <span className="highlight">adventurer's</span> paradise
              </h2>
              <p>
                "Moab, sandwiched between Arches and Canyonlands National Parks
                in Utah’s red-rock desert, is a town with two personalities. Its
                crimson cliffs, alpine peaks, and slickrock valleys are both a
                massive outdoor romper room for thrill seekers and a landscape
                that begs quiet contemplation and introspection. The four-pitch,
                Grade III Kor-Ingells route on Castle Valley’s Castleton Tower,
                sandbagged at 5.9+, is a right of passage for intermediate
                climbers who want a long, challenging route. The summit is a
                football-field-size aerie, and at 300 feet straight down, the
                rappel off the top is one of the most exhilarating you’ll
                encounter in the region. The American Alpine Institute has named
                it one of the 50 classic climbs in North America, so you’ll earn
                some bragging rights, too." - <i>Nick Heil, Outside Magazine</i>
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/rockClimb/gridImages/rockSmall1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../../static/assets/images/featuredExperience/rockClimb/gridImages/rockSmall2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/rockClimb/gridImages/rockTall.jpg")}
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
                    src={require("../../../static/assets/images/locals/rockGuide1.png")}
                  />
                </div>
                <div className=" guide-content">
                  <p>
                    Castleton Tower is truly a sight to see and you can see why
                    it is a meca for rock climbers from around the world. It is
                    a 45 minute drive from Moab but worth the drive to see this
                    massive rock formation. The walls uprising from the Colorado
                    River were also quite a sight to see. Imagine that
                    adventurous thrill seekers will have a awesome time in this
                    place. Worth seeing.
                  </p>
                </div>
              </div>
              <div className="guides guide-two">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/rockGuide2.png")}
                  />
                </div>
                <div className="guide-content">
                  <p>
                    Amazing views everywhere you look with the most famous
                    desert tower in the world looming off to the east! Just to
                    the north of the famous Castleton Tower is the Rectory and
                    the Priest which also have amazing climbs.
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
                    src={require("../../../static/assets/images/featuredExperience/rockClimb/localSpots/river.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Colorado River</h4>
                    <p>
                      While most of Moab’s adventures take place on dirt and red
                      rock, don’t overlook the water. Some of the finest river
                      trips in the country start in town. The reigning classic
                      is the four-day Colorado River trip through Cataract
                      Canyon. You’ll wind 96 miles through Canyonlands National
                      Park, navigating Class II–IV rapids, before returning to
                      Moab by scenic charter flight.
                    </p>
                  </div>
                </div>
                <div className="local-interests__section local-interest__two">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/rockClimb/localSpots/burger.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Downtown Eats</h4>
                    <p>
                      Complaining about the food in Moab has historically been a
                      sport unto itself. That’s not to say there haven’t been
                      some beloved classics. Milt’s Stop and Eat dates back to
                      1954 and still serves some of the best grass-fed,
                      all-natural burgers and shakes in the region, if not the
                      country. But the rest of the culinary scene has slowly
                      been catching up. It’s now possible to enjoy high-quality
                      sushi at Sabaku, banh mi and pho at 98 Center, and
                      wood-fired pizza at Antica Forma.
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
