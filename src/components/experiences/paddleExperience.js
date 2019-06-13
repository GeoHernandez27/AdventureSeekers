import React, { Component } from "react";

export default class experiencePaddle extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../../static/assets/images/featuredExperience/paddle/heroBanner/paddleHero.jpg")}
            />
            <h1 className="header-background__title">Paddle Lake Powell</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
                <span className="highlight">SUP,</span> Guys?
              </h2>
              <p>
                "Although the sport of stand-up paddleboarding has been enjoyed
                for decades, in recent years it's becoming a much more popular
                sport in terms of becoming mainstream. There's no doubt about it
                that this sport is becoming popular because of its
                versatility–it can be both relaxing or challenging, and
                apparently it can done in any season, including winter. After
                put-in at Bullfrog Marina, the waters of Lake Powell are perfect
                for a paddleboard excursion. Even though the lake is beautiful
                itself, the area around it offers endless hiking adventures
                through incredibly scenic slot canyons for both hiking and
                paddling through. From the marina, head south and there’s
                Iceberg Canyon and the Escalante Arm, with plenty of small side
                canyons including 50 Mile Canyon and Clear Creek Canyon. South
                of the main lake is Rainbow Bridge Canyon, where you can paddle
                and then day hike to the the famous Rainbow Bridge Arch. Camping
                with SUPs is incredibly easy, just find a flat slab of sandstone
                and call it home!" -<i>Audra Manzer, Teton Gravity Research</i>
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/paddle/gridImages/paddleSmall1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../../static/assets/images/featuredExperience/paddle/gridImages/paddleSmall2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/paddle/gridImages/paddleTall.jpg")}
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
                    src={require("../../../static/assets/images/locals/paddleGuide1.png")}
                  />
                </div>
                <div className=" guide-content">
                  <p>
                    "Lake Powell: a man-made water marvel that draws 2 million
                    visitors every year. Located just minutes from lake
                    activities at Lake Powell's Bullfrog Marina is Defiance
                    House Lodge, which offers beautiful views from the rooms and
                    the restaurant on the marina. Order a Triple Chocolate Pecan
                    Brownie Sundae while sitting on the deck of the Anasazi
                    Restaurant and watch the sunset over the lake. "
                  </p>
                </div>
              </div>
              <div className="guides guide-two">
                <div className="guide-image">
                  <img
                    src={require("../../../static/assets/images/locals/paddleGuide2.png")}
                  />
                </div>
                <div className="guide-content">
                  <p>
                    "Lake Powell is a paddler’s dream. With the majestic canyon
                    walls and incredible slot canyons, it is unlike anywhere
                    else on earth. From short tours for beginners to longer
                    adventures Lake Powell will take you to some of the world’s
                    most amazing places to SUP (Stand-up Paddle) or kayak."
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
                    src={require("../../../static/assets/images/featuredExperience/paddle/localSpots/antelope.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Antelope Canyon</h4>
                    <p>
                      "The most photographed slot canyon in Northern Arizona,
                      Upper Antelope Canyon, has been capturing the attention of
                      visitors’ and photographers’ cameras since tours were
                      first permitted. The reason will become immediately clear:
                      The shafts of light beaming in through the canyon are
                      simply stunning. You’ll most likely take a zillion photos,
                      and you’ll remember trying to decide which you think is
                      best.
                    </p>
                  </div>
                </div>
                <div className="local-interests__section local-interest__two">
                  <img
                    src={require("../../../static/assets/images/featuredExperience/paddle/localSpots/rainbowBridge.jpg")}
                  />
                  <div className="local-interests__content">
                    <h4>Rainbow Bridge</h4>
                    <p>
                      Rainbow Bridge National Monument is the tallest natural
                      bridge in the world. It is roughly the sixth longest.
                      Carved from red Navajo sandstone, the bridge is 290 feet
                      tall and 270 feet across — higher than the United States
                      Capitol Building — and nearly as long as a football or
                      soccer field. There is no question as to
                      the erosive power of water. Yet water sometimes carves
                      with whimsy and precision. In this way, Rainbow Bridge is
                      more than a symbol of life in the desert — it is the
                      desert come alive.
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
