import React, { Component } from "react";

export default class experienceMountainBike extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../../static/assets/images/featuredExperience/heroBanner/heroBannerTest.jpg")}
            />
            <h1 className="header-background__title">The Whole Enchilada</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
                <span className="highlight">Enchiladas</span> Anyone?
              </h2>
              <p>
                "A shuttle of the Whole Enchilada will see you descend 7,000
                feet from the high-alpine forests atop La Sal Mountain to the
                emerald Colorado River in 27 miles. However, it’s easy to dodge
                the crowds without sacrificing any fun. You can’t go wrong with
                the Amasa Back/Captain Ahab, Sovereign, or Navajo Rocks trail
                systems, but to capitalize on bang for buck, link up the seven
                trails that make up the Magnificent 7 route. The 26-plus-mile
                ride showcases just about everything that makes riding in Moab
                so special, including ledge drops, slickrock, fast and flowing
                dirt, and endless scenic vistas."&#9632; -{" "}
                <i>Nick Heil, Outside Magazine</i>
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/gridImages/small1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../../static/assets/images/featuredExperience/gridImages/small2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/gridImages/verticalTest.jpg")}
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
                    src={require("../../../static/assets/images/locals/local1.png")}
                  />
                </div>
                <div className=" guide-content">
                  <p>
                    "There are really no words to describe this trail. The most
                    fun I think I've had on a mountain bike in a long time. A
                    little harsh on a hard tail with a 100mm fork but completely
                    rideable even at speed...just my arms are about to fall off
                    now."
                  </p>
                </div>
              </div>
              <div className="guides guide-two">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/local1.png")}
                  />
                </div>
                <div className="guide-content">
                  <p>
                    "We have ridden this trail a few times, lots of great info
                    below but cannot stress WATER enough. Make sure you have a
                    full camelback and a water bottle. In the summer months, you
                    want to start SUPER early so you're done before temps get
                    over 100. Definitely recommend renting pads if you're going
                    to try the tough features/drops, and simply because by the
                    end of the ride you can get tired and make rookie moves. "
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
                    src={require("../../../static/assets/images/featuredExperience/localSpots/restaurant1.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>White Rim Trail</h4>
                    <p>
                      For an endurance challenge, head to White Rim Trail, which
                      circumnavigates the Island in the Sky mesa, a broad
                      plateau above the Green and Colorado Rivers. Ride the
                      100-mile route, clockwise, in a day if you’re feeling
                      tough and fit. Or break it up into a two- or three-day
                      bikepacking adventure. Stellar views, sweet slickrock
                      campsites, and remote backcountry await. Just be smart
                      when planning water, food, mechanicals, and shelter.
                      You’ll need a camping or day-use permit from Canyonlands
                      National Park.
                    </p>
                  </div>
                </div>
                <div className="local-interests__section local-interest__two">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/localSpots/restaurant1.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Moab Giants</h4>
                    <p>
                      Take a day off from bikes and hikes, and immerse yourself
                      in the region’s natural history, starting at Moab Giants,
                      a museum dedicated to the area’s prehistoric heritage.
                      While it may seem like a tourist trap from the road, the
                      attraction actually has some serious science and great
                      displays, including life-size dinos. Then see the real
                      thing—or at least real dinosaur footprints—for yourself at
                      Mill Canyon Dinosaur Trails, an interpretive loop run by
                      the Bureau of Land Management 16 miles outside town along
                      Highway 191.
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
